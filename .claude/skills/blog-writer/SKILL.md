# blog-writer

## When to use this skill

Trigger when the user says any of:
- `/blog-writer`
- "write a blog"
- "suggest blog topics"
- "draft a blog post"

## What this skill does

Brainstorms a list of SEO blog topic ideas for DFY, lets the user pick one, then researches and writes a full article as a Next.js `page.tsx` file and updates the blog index. It does **NOT** push to GitHub. The user reviews the draft locally and pushes/publishes manually when ready.

---

## Step 0: Preflight

1. Confirm `data/marketingPages.ts` exists and contains the `resourceCards` array.
2. Confirm the project is a git repo (`git status` should succeed) — used only to confirm we are in the right folder, not to push.

---

## Step 1: Generate topic ideas

Do NOT read from a pre-filled queue. Instead, generate fresh topic ideas:

1. Look at what already exists in `app/resources/blog/` so you do not suggest duplicates.
2. Brainstorm 6–8 SEO topic ideas relevant to DFY (B2B performance marketing agency in India — paid ads, lead quality, CRM tracking, landing pages, Meta Ads, Google Ads).
3. Favour topics with real search intent: comparisons, "how to", benchmarks, "best/what is", and India-specific buyer questions.
4. For each topic, prepare: a title, a suggested slug, and the focus keyword.

Present the topics to the user as a numbered list, like:

```
Here are blog topics I can write for DFY:

1. How to Choose a Meta Ads Agency in India  (keyword: meta ads agency india)
2. What Is a Good CPL for Meta Ads in India  (keyword: cost per lead meta ads india)
3. B2B Lead Generation Strategies That Work in India  (keyword: b2b lead generation india)
...

Which one should I write? (reply with the number, or tell me a different topic)
```

Then **STOP and wait for the user to choose.** Do not write anything until they pick.

---

## Step 2: Write the article (after user picks)

Once the user selects a topic, call the `dfy-article-writer` skill with full context:
- topic title
- slug
- focus keyword
- target persona (infer from the topic if not given)
- article type

The `dfy-article-writer` skill handles research, writing, QC, and returns the complete `page.tsx` content.

---

## Step 3: Create the page file

1. Create directory: `app/resources/blog/<slug>/`
2. Write the returned `page.tsx` content to `app/resources/blog/<slug>/page.tsx`
3. Do not modify any existing files other than what is specified in Steps 3 and 4

---

## Step 4: Update the blog index

Open `data/marketingPages.ts` and find the `resourceCards` array.

Add the new article entry **before the closing `];`** of `resourceCards`:

```ts
{
  title: "<Article title — short, under 60 chars>",
  type: "Article",
  description: "<2-sentence SEO description, under 155 chars>",
  href: "/resources/blog/<slug>",
},
```

Do not remove or reorder existing entries.

---

## Step 5: Report summary — DO NOT push to GitHub

Tell the user:

- Topic written: `<title>`
- File created: `app/resources/blog/<slug>/page.tsx`
- Blog index updated: `data/marketingPages.ts`
- Local preview: run `npm run dev` and open `http://localhost:3000/resources/blog/<slug>` to review it.

Then ask:

```
The draft is ready locally. Review it, and when you are happy, tell me to push it to GitHub
and I will create a branch, commit, and push for a Vercel preview. I will not push anything
until you tell me to.
```

**Do NOT run any `git` commands in this skill.** No `git checkout`, no `git add`, no `git commit`, no `git push`. The user pushes manually, or asks you to push in a separate, explicit instruction.

---

## Hard rules

- Never push to GitHub from this skill — generating files locally only
- One article per invocation
- Always stop and let the user choose the topic before writing
- Never fabricate facts, stats, or quotes — all claims must come from live research
