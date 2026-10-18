import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import vm from "node:vm";
import ts from "typescript";

// Exercise the real route with isolated email/CRM transports. Tests never send leads.
function loadModule(path, globals = {}) {
  const source = readFileSync(new URL(path, import.meta.url), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  });
  const exports = {};
  vm.runInNewContext(outputText, { exports, URL, TextEncoder, ...globals });
  return exports;
}

const helpers = loadModule("../lib/audit-submission.ts");
const valid = {
  fullName: "Test Person", businessName: "Test Business", email: "test@example.com",
  runningAds: "Yes", monthlyAdSpend: "Below INR 1L", vertical: "Service Business",
  phoneNumber: "+919876543210", sourcePath: "/",
};

function setup({ env = { RESEND_API_KEY: "test-only", INGEST_SECRET: "test-only" }, crmStatus = 200, crmThrows = false, emailError = null } = {}) {
  const emails = [], leads = [], logs = [], timeouts = [];
  const { POST } = loadModule("../app/api/audit-submit/route.ts", {
    process: { env },
    console: { error: (...args) => logs.push(args) },
    AbortSignal: { timeout: (ms) => { timeouts.push(ms); return AbortSignal.timeout(ms); } },
    fetch: async (_url, options) => {
      leads.push(JSON.parse(options.body));
      if (crmThrows) throw new DOMException("Timed out", "TimeoutError");
      return new Response(null, { status: crmStatus });
    },
    require: (name) => {
      if (name === "@/lib/audit-submission") return helpers;
      if (name === "next/server") return { NextResponse: { json: (body, init) => Response.json(body, init) } };
      if (name === "resend") return { Resend: class {
        emails = { send: async (message) => { emails.push(message); return { data: { id: "test-email" }, error: emailError }; } };
      } };
      throw new Error(`Unexpected module: ${name}`);
    },
  });
  const submit = (body) => POST(new Request("http://localhost/api/audit-submit", {
    method: "POST", body: typeof body === "string" ? body : JSON.stringify(body),
  }));
  return { submit, emails, leads, logs, timeouts };
}

test("rejects malformed JSON, wrong shapes, missing fields and invalid values before side effects", async () => {
  const app = setup();
  for (const body of ["{", null, [], {}, { ...valid, fullName: " " }, { ...valid, email: "bad" },
    { ...valid, phoneNumber: {} }, { ...valid, phoneNumber: "abc" }, { ...valid, phoneNumber: "+1234567890123456" },
    { ...valid, runningAds: "invalid" }, { ...valid, sourcePath: "https://example.com" }]) {
    assert.equal((await app.submit(body)).status, 400);
  }
  assert.equal(app.emails.length, 0);
  assert.equal(app.leads.length, 0);
});

test("limits submission and field sizes", async () => {
  const app = setup();
  assert.equal((await app.submit({ ...valid, fullName: "a".repeat(255) })).status, 400);
  assert.equal((await app.submit("x".repeat(20001))).status, 413);
  assert.equal(app.emails.length, 0);
});

test("preserves explicit international phones and normalizes local India numbers", () => {
  assert.equal(helpers.normalizePhone("98765 43210"), "+919876543210");
  assert.equal(helpers.normalizePhone("+65 8123 4567"), "+6581234567");
  assert.equal(helpers.normalizePhone("+973 3600 1234"), "+97336001234");
  assert.equal(helpers.normalizePhone("+123"), null);
});

test("attributes identical forms to their actual pages and escapes notification HTML", async () => {
  const app = setup();
  for (const sourcePath of ["/", "/free-audit"]) {
    const response = await app.submit({ ...valid, sourcePath, fullName: '<a href="https://example.com">Test</a>' });
    assert.equal(response.status, 200);
    assert.equal((await response.json()).success, true);
  }
  assert.equal(app.leads[0].source, "Website - Homepage");
  assert.equal(app.leads[1].source, "Website - Free Audit");
  assert.match(app.emails[1].html, /\/free-audit page/);
  assert.match(app.emails[0].html, /&lt;a href=&quot;/);
  assert.doesNotMatch(app.emails[0].html, /<a href=/);
});

test("legacy audit payload still sends email without requiring a phone", async () => {
  const app = setup();
  const response = await app.submit({ name: "Test", email: "test@example.com", company: "Example",
    website: "https://example.com", adSpend: "10000", mainProblem: "Lead quality" });
  assert.equal(response.status, 200);
  assert.equal(app.leads.length, 0);
  assert.equal(app.emails.length, 1);
});

test("CRM errors are logged while email capture continues", async () => {
  for (const options of [{ crmStatus: 401 }, { crmStatus: 500 }, { crmThrows: true }]) {
    const app = setup(options);
    assert.equal((await app.submit(valid)).status, 200);
    assert.equal(app.emails.length, 1);
    assert.equal(app.logs.length, 1);
    assert.deepEqual(app.timeouts, [5000]);
  }
});

test("missing CRM credentials skip the request but preserve email capture", async () => {
  const app = setup({ env: { RESEND_API_KEY: "test-only" } });
  assert.equal((await app.submit(valid)).status, 200);
  assert.equal(app.leads.length, 0);
  assert.equal(app.emails.length, 1);
  assert.equal(app.logs.length, 1);
});

test("missing email credentials return a controlled error before CRM side effects", async () => {
  const app = setup({ env: {} });
  assert.equal((await app.submit(valid)).status, 503);
  assert.equal(app.leads.length, 0);
  assert.equal(app.emails.length, 0);
});

test("email provider errors do not leak provider details to visitors", async () => {
  const app = setup({ emailError: { message: "Internal provider detail" } });
  const response = await app.submit(valid);
  assert.equal(response.status, 502);
  assert.deepEqual(await response.json(), { success: false });
});
