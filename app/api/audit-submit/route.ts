import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const TO_EMAIL = "radhesh3897@gmail.com";
const INGEST_URL = "https://rkmngnkgesteohigvsxe.supabase.co/functions/v1/ingest-lead";

// Normalise an India-first phone number to E.164 (+<country><number>).
function normalizePhone(raw: string): string | null {
  const digits = (raw || "").replace(/\D/g, "");
  if (!digits) return null;
  const d = digits.length === 10 ? "91" + digits : digits; // assume India if 10 digits
  return d.length >= 11 ? "+" + d : null;
}

// Push a website lead into the WABA CRM (creates the contact, fires the WhatsApp
// welcome + alert). Best-effort — never blocks the form response or the email.
async function pushToWabaCrm(body: Record<string, unknown>, isHomepageForm: boolean) {
  const phone = normalizePhone((body.phoneNumber as string) || (body.phone as string) || "");
  if (!phone) return; // no WhatsApp number → can't create a WhatsApp contact
  try {
    await fetch(INGEST_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-ingest-secret": process.env.INGEST_SECRET ?? "" },
      body: JSON.stringify({
        phone,
        name: (body.fullName as string) || (body.businessName as string) || (body.name as string) || undefined,
        company: (body.businessName as string) || (body.company as string) || undefined,
        email: (body.email as string) || undefined,
        source: isHomepageForm ? "Website - Homepage" : "Website - Free Audit",
        monthly_ad_spend: (body.monthlyAdSpend as string) || (body.adSpend as string) || undefined,
        vertical: (body.vertical as string) || undefined,
        website: (body.website as string) || undefined,
        main_problem: (body.mainProblem as string) || undefined,
      }),
    });
  } catch (e) {
    console.error("WABA ingest failed", e);
  }
}

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const isHomepageForm = "businessName" in body;

    // Fire the CRM push (awaited but wrapped so it can't break the form).
    await pushToWabaCrm(body, isHomepageForm);

    const subject = isHomepageForm
      ? `New Call Booking — ${body.fullName || body.businessName || "Unknown"}`
      : `New Call Booking — ${body.name || "Unknown"} (${body.company || "Unknown"})`;

    const rows: [string, string][] = isHomepageForm
      ? [
          ["Name", body.fullName],
          ["Business Name", body.businessName],
          ["Email", body.email],
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
          <h1 style="margin:8px 0 0;font-size:22px;font-weight:700;color:#ffffff">New Call Booking</h1>
        </div>
        <div style="border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;overflow:hidden">
          <table style="width:100%;border-collapse:collapse">
            ${tableRows}
          </table>
        </div>
        <p style="margin:16px 0 0;font-size:12px;color:#9ca3af;text-align:center">doneforyou.in call booking</p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "DFY Website <onboarding@resend.dev>",
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
