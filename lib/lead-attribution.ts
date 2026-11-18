const utmFields = ["utm_source", "utm_medium", "utm_campaign", "utm_id", "utm_content", "utm_term"] as const;
const clickIdFields = ["gclid", "gbraid", "wbraid"] as const;
const storageKey = "dfy.leadAttribution.v1";

export type LeadAttribution = {
  landingPath: string;
  referrerHost?: string;
} & Partial<Record<(typeof utmFields)[number] | (typeof clickIdFields)[number], string>>;

export function parseLeadAttribution(input: unknown): LeadAttribution | null {
  if (!input || typeof input !== "object" || Array.isArray(input)) return null;
  const raw = input as Record<string, unknown>;
  if (
    typeof raw.landingPath !== "string" ||
    !/^\/(?!\/)[^?#\\\s\x00-\x1f]{0,511}$/.test(raw.landingPath)
  ) return null;

  const result: LeadAttribution = { landingPath: raw.landingPath };
  if (
    typeof raw.referrerHost === "string" && raw.referrerHost.length <= 253 &&
    /^(?:[a-z\d-]+\.)+[a-z\d-]+$/i.test(raw.referrerHost)
  ) result.referrerHost = raw.referrerHost.toLowerCase();

  for (const key of utmFields) {
    const value = raw[key];
    if (typeof value !== "string") continue;
    const text = value.trim();
    if (text && text.length <= 254 && !/[\x00-\x1f\x7f]/.test(text)) result[key] = text;
  }

  for (const key of clickIdFields) {
    const value = raw[key];
    if (typeof value === "string" && /^[a-z\d_-]{1,256}$/i.test(value)) result[key] = value;
  }
  return result;
}

function externalReferrer(page: URL, referrer: string) {
  try {
    const url = new URL(referrer);
    if (url.protocol !== "http:" && url.protocol !== "https:") return;
    const normalizedHost = (host: string) => host.toLowerCase().replace(/^www\./, "");
    if (normalizedHost(url.hostname) !== normalizedHost(page.hostname)) return url.hostname;
  } catch {
    // Referrers may be absent, or may be hidden by browser policy.
  }
}

export function attributionForEntry(page: URL, referrer: string, previous: LeadAttribution | null) {
  const observed = parseLeadAttribution({
    landingPath: page.pathname,
    referrerHost: externalReferrer(page, referrer),
    ...Object.fromEntries([...utmFields, ...clickIdFields].map((key) => [key, page.searchParams.get(key)])),
  });
  if (observed && (observed.referrerHost || utmFields.some((key) => observed[key]) ||
    clickIdFields.some((key) => observed[key]))) return observed;
  return previous ?? observed;
}

const searchEngines: [RegExp, string][] = [
  [/^(?:www\.)?google\.(?:com|[a-z]{2}|co\.[a-z]{2}|com\.[a-z]{2})$/, "google"],
  [/(^|\.)bing\.com$/, "bing"],
  [/(^|\.)duckduckgo\.com$/, "duckduckgo"],
  [/(^|\.)search\.yahoo\.com$/, "yahoo"],
];

export function attributionRows(attribution: LeadAttribution | null): [string, string][] {
  if (!attribution) return [["Traffic source", "Unavailable"]];
  const { referrerHost, landingPath } = attribution;
  const searchEngine = referrerHost && searchEngines.find(([pattern]) => pattern.test(referrerHost))?.[1];
  const googleAd = clickIdFields.some((key) => attribution[key]);
  const source = attribution.utm_source || (googleAd ? "google" : searchEngine || referrerHost || "direct / unknown");
  const medium = attribution.utm_medium || (googleAd ? "cpc" : searchEngine ? "organic" : referrerHost ? "referral" : "");

  const rows: [string, string][] = [
    ["Traffic source", medium ? `${source} / ${medium}` : source],
    ["Landing page", landingPath],
  ];
  if (referrerHost) rows.push(["Referrer", referrerHost]);
  for (const key of [...utmFields, ...clickIdFields]) {
    const value = attribution[key];
    if (value) rows.push([key, value]);
  }
  return rows;
}

// Cache within the current document as well, so the form still works if tab storage is blocked.
let current: LeadAttribution | null | undefined;

export function captureLeadAttribution() {
  if (current !== undefined) return current;
  let previous: LeadAttribution | null = null;
  try {
    previous = parseLeadAttribution(JSON.parse(window.sessionStorage.getItem(storageKey) ?? "null"));
  } catch {
    // Ignore unavailable storage and invalid previous data.
  }

  current = attributionForEntry(new URL(window.location.href), document.referrer, previous);
  try {
    if (current) window.sessionStorage.setItem(storageKey, JSON.stringify(current));
  } catch {
    // In-memory attribution remains available in this document.
  }
  return current;
}
