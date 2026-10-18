# Done For You Website

A premium, conversion-focused Next.js website for Done For You, built with Tailwind CSS and a scalable component structure.

## Run locally

```bash
npm ci
npm run dev
```

## Production

```bash
npm run build
npm run start
```

Set `NEXT_PUBLIC_SITE_URL` in Vercel to the production domain so canonical URLs and sitemap output use the live URL.

## Lead capture configuration

Set these values in `.env.local` for development or in the deployment environment. Never commit secret values.

- `RESEND_API_KEY`: required to deliver lead notification emails. Without it, submissions return HTTP 503.
- `INGEST_SECRET`: server-only secret for the existing WABA CRM ingest endpoint. If absent, CRM delivery is skipped and logged; email delivery still runs.
- `NEXT_PUBLIC_SITE_URL`: public canonical origin, defaulting to `https://www.doneforyou.in`.

The homepage and `/free-audit` use `AuditStartCard`. Both post to `/api/audit-submit`; the source page is included in email and CRM attribution. CRM delivery has a five-second timeout and failures are logged. Email delivery determines the form's success response. The current recipient and Resend sender are configured in the route.

## Checks

```bash
npm run lint
npm test
npm run build
```

The API regression tests mock email and CRM transports and do not send messages or create contacts. Live delivery still needs to be checked with configured service credentials and an approved test contact.
