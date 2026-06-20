import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const TO_EMAIL = "radhesh3897@gmail.com";

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const isHomepageForm = "businessName" in body;

    const subject = isHomepageForm
      ? `New Audit Request — ${body.businessName || "Unknown"}`
      : `New Audit Request — ${body.name || "Unknown"} (${body.company || "Unknown"})`;

    const rows: [string, string][] = isHomepageForm
      ? [
          ["Business Name", body.businessName],
          ["Monthly Ad Spend", body.monthlyAdSpend],
          ["Vertical", body.vertical],
          ["Phone Number", body.phoneNumber],
          ["Source", "Homepage form (/#free-audit-form)"],
        ]
      : [
          ["Name", body.name],
          ["Business Email", body.email],
          ["Company Name", body.company],
          ["Website", body.website],
          ["Monthly Ad Spend", body.adSpend],
          ["Main Problem", body.mainProblem],
          ["Source", "/free-audit page"],
        ];

    const tableRows = rows
      .map(
        ([label, value]) => `
        <tr>
          <td style="padding:10px 14px;background:#f6f5f1;font-weight:600;font-size:14px;color:#111827;border-bottom:1px solid #e5e7eb;white-space:nowrap;vertical-align:top">${label}</td>
          <td style="padding:10px 14px;font-size:14px;color:#374151;border-bottom:1px solid #e5e7eb">${value || "—"}</td>
        </tr>`,
      )
      .join("");

    const html = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#164E50;padding:24px 28px;border-radius:8px 8px 0 0">
          <p style="margin:0;font-size:12px;font-weight:600;letter-spacing:0.08em;color:#88DE7B;text-transform:uppercase">Done For You</p>
          <h1 style="margin:8px 0 0;font-size:22px;font-weight:700;color:#ffffff">New Audit Request</h1>
        </div>
        <div style="border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;overflow:hidden">
          <table style="width:100%;border-collapse:collapse">
            ${tableRows}
          </table>
        </div>
        <p style="margin:16px 0 0;font-size:12px;color:#9ca3af;text-align:center">doneforyou.in audit request</p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "DFY Audit <onboarding@resend.dev>",
      to: TO_EMAIL,
      subject,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 502 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Audit submit error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
