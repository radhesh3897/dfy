const homepageFields = ["fullName", "businessName", "email", "runningAds", "monthlyAdSpend", "vertical", "phoneNumber"];
const cityFields = ["fullName", "businessName", "email", "phoneNumber"];
const legacyFields = ["name", "email", "company", "website", "adSpend", "mainProblem"];
const citySourcePaths = ["/locations/bangalore", "/locations/chennai"];

export function normalizePhone(raw: string): string | null {
  if (!/^[+\d\s().-]+$/.test(raw)) return null;
  let digits = raw.replace(/\D/g, "");
  // Only infer India for local numbers, never for an explicit international number.
  if (!raw.startsWith("+") && digits.length === 10) digits = `91${digits}`;
  return /^[1-9]\d{7,14}$/.test(digits) ? `+${digits}` : null;
}

export function parseAuditSubmission(input: unknown) {
  if (!input || typeof input !== "object" || Array.isArray(input)) return null;
  const raw = input as Record<string, unknown>;
  const isCityForm = typeof raw.sourcePath === "string" && citySourcePaths.includes(raw.sourcePath);
  const isHomepageForm = !isCityForm && "businessName" in raw;
  const required = isCityForm ? cityFields : isHomepageForm ? homepageFields : legacyFields;
  const body: Record<string, string> = {};

  for (const key of [...required, "phone", "sourcePath"]) {
    const value = raw[key];
    if (value === undefined && !required.includes(key)) continue;
    if (typeof value !== "string") return null;
    const text = value.trim();
    if ((!text && required.includes(key)) || text.length > (key === "mainProblem" ? 5000 : 254)) return null;
    body[key] = text;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) return null;
  if (isHomepageForm) {
    if (!["Yes", "No"].includes(body.runningAds)) return null;
    if (!["Below INR 1L", "INR 1L - INR 5L", "INR 5L - INR 15L", "INR 15L+"].includes(body.monthlyAdSpend)) return null;
    if (!["EdTech", "Gym / Fitness", "Clinic / Healthcare", "Travel Agency", "Service Business"].includes(body.vertical)) return null;
  } else if (!isCityForm) {
    try {
      if (!["http:", "https:"].includes(new URL(body.website).protocol)) return null;
    } catch {
      return null;
    }
  }
  const phoneField = isHomepageForm || isCityForm ? "phoneNumber" : "phone";
  if (body[phoneField]) {
    const phone = normalizePhone(body[phoneField]);
    if (!phone) return null;
    body[phoneField] = phone;
  }
  if (body.sourcePath && !["/", "/free-audit", ...citySourcePaths].includes(body.sourcePath)) return null;
  const sourcePath = body.sourcePath || (isHomepageForm ? "/" : "/free-audit");
  return { body, isHomepageForm, isCityForm, sourcePath };
}

export function escapeHtml(value: string) {
  const entities: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  return value.replace(/[&<>"']/g, (character) => entities[character]);
}
