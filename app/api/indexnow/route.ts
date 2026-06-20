import { NextResponse } from "next/server";
import sitemap from "@/app/sitemap";
import { site } from "@/lib/site";

// IndexNow instantly notifies Bing (and therefore Copilot + ChatGPT, which
// lean on Bing's index) plus Yandex when content is published or updated.
// Hit GET /api/indexnow after a deploy to submit every sitemap URL.
const INDEXNOW_KEY = "d75aa440302c2790ae5140c24187d937";

export async function GET() {
  try {
    const urlList = sitemap().map((entry) => entry.url);
    const host = new URL(site.url).host;

    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host,
        key: INDEXNOW_KEY,
        keyLocation: `${site.url}/${INDEXNOW_KEY}.txt`,
        urlList,
      }),
    });

    return NextResponse.json({
      ok: res.ok,
      submitted: urlList.length,
      indexNowStatus: res.status,
    });
  } catch (error) {
    console.error("IndexNow submit error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
