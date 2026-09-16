# CloudEdge — Next.js Redesign

A fresh Next.js (App Router) rebuild of the CloudEdge Tech Services site. Page flow and
visual language (spacious light layout, pill buttons, numbered service list, process
steps, pricing cards, testimonial carousel, newsletter footer) are inspired by the
Crevix Framer template's structure — rebuilt from scratch as original code, not copied
from Crevix's paid template files — filled with CloudEdge's real content.

## Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (scroll reveals, hero entrance)
- lucide-react (icons)
- reportlab (Python, offline) — used once to generate the two PDF guides under
  `public/resources/`; not a runtime dependency
- Resend (HTTP API, no SDK) for owner-notification emails

## Pages
- `/` — home (hero, services, process, pricing, testimonials, careers CTA, FAQ, CTA, contact)
- `/about` — mission, global footprint, values (About-only now, no longer duplicated on home)
- `/schedule` — 30-min call booking with a real calendar + time slots
- `/services/[slug]` — one page per service (7 total)
- `/careers` + `/careers/[slug]` — open positions with a real apply form
- `/case-studies` + `/case-studies/[slug]` — client project write-ups
- `/blog` + `/blog/[slug]` — articles
- `/resources` — downloadable PDF guides
- `/roi-calculator` — interactive IT-downtime cost calculator
- `/status` — system status page (template — see note below)
- `/admin` — password-protected dashboard showing every contact/booking/newsletter/job
  application submission (see "Admin dashboard" below)
- `/search` — live site search across services, blog, case studies, careers, and
  resources (client-side, no backend — instant results as you type)
- `/sitemap.xml`, `/robots.txt`, custom 404

## ⚠ Placeholder / template content — replace before publishing
Several of the newer sections ship with clearly-marked example content so the pages
have real structure and are easy to edit, rather than empty shells:

| File | What's placeholder |
|---|---|
| `src/lib/jobs.ts` | 3 example job listings |
| `src/lib/case-studies.ts` | 2 example client case studies (no real client names) |
| `src/lib/blog.ts` | 3 genuinely-written draft posts (general best practices, not CloudEdge-specific claims) — read these over and add a byline/edit to taste |
| `src/lib/services.ts` → `Pricing.tsx` | Illustrative pricing tiers (informational only, no purchase button) |
| `src/components/Testimonials.tsx` | Placeholder client quotes |
| `src/app/status/page.tsx` | Static "all operational" demo — wire to a real monitoring source (Better Stack, Statuspage, UptimeRobot, or your own uptime checks) before this reflects reality |

## Admin dashboard
`/admin` shows every submission from the contact form, schedule bookings, newsletter
signups, and job applications — all in one place, instead of opening JSON files by
hand. It's gated by a single password:

1. Set `ADMIN_PASSWORD` in `.env.local` to whatever you want.
2. Visit `/admin` — you'll be redirected to `/admin/login` until you log in.
3. The session is a signed cookie (HMAC, no database or session store needed) that
   lasts 7 days; there's a Log Out button on the dashboard.

This is intentionally simple (one shared password, no user accounts) since it's a
single-admin internal tool. If you need multiple admins or an audit trail later,
that's a sign to move to a real auth provider.

## Verified with a real build
Earlier drafts of this project were checked with an offline syntax pass only (the
sandbox had no network access to install packages). This round was verified for
real: `npm install`, `npm run build` (36 routes, clean), and `npm run dev` with
actual HTTP requests — logging into `/admin`, submitting the contact form, and
confirming it shows up on the dashboard. Two real bugs surfaced this way (a wrong
field name in the JobPosting schema, and Node's `crypto` module being incompatible
with the Edge middleware runtime) and are both fixed.

## New interactive tool
`/roi-calculator` — a real, working calculator (not a mockup). Visitors adjust
employee count, hourly cost, current downtime, and IT spend; it computes an estimated
downtime cost and potential savings. It's clearly labeled as an estimate, not a quote.

## Downloadable guides
`/resources` links to two real PDF guides already in `public/resources/`:
- **IT Security Checklist for Small Businesses**
- **Cloud Migration Readiness Checklist**

Both are genuinely useful, general best-practice content (not CloudEdge-specific
claims) — free to use as-is, or regenerate/edit via the `reportlab` script pattern
used to build them.

## Environment variables
Copy `.env.example` to `.env.local` and fill in:
- `SITE_URL` — your production URL, used for Open Graph tags and the sitemap
- `RESEND_API_KEY` — needed for newsletter + job application owner notifications
- `RESEND_FROM` — optional sender address override

## Newsletter & job application notifications
Both the footer newsletter form and the careers apply form email a notification to
**chohanv828@gmail.com** via [Resend](https://resend.com)'s HTTP API (`fetch`, no SDK
install needed). Sign up at resend.com, create an API key, put it in `.env.local`.
Without it, submissions still save locally — you just won't get the email yet.

## Run locally
```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

## Build
```bash
npm run build
npm start
```

## Structure
```
src/
  app/
    layout.tsx                fonts + metadata (incl. Open Graph) + shared Nav/Footer
    page.tsx                    home page sections
    about/page.tsx               about page
    schedule/page.tsx             schedule-a-call page
    services/[slug]/page.tsx       one page per service
    careers/page.tsx                careers listing
    careers/[slug]/page.tsx          job detail + apply form
    case-studies/page.tsx             case studies listing
    case-studies/[slug]/page.tsx       case study detail
    blog/page.tsx                       blog listing
    blog/[slug]/page.tsx                 blog post detail
    resources/page.tsx                    downloadable guides
    roi-calculator/page.tsx                downtime cost calculator
    status/page.tsx                         system status (template)
    not-found.tsx                            custom 404
    sitemap.ts / robots.ts                    SEO
    api/
      contact/route.ts       schedule/route.ts       newsletter/route.ts
      careers/route.ts        (all validate + store submissions; contact/newsletter/
                                careers also email a notification)
    globals.css
  lib/
    submissions.ts   file-based storage helper (see "Before you publish" from earlier)
    services.ts / jobs.ts / case-studies.ts / blog.ts / resources.ts
      — single source of truth for each section's content
  components/
    Nav.tsx / Footer.tsx        route-aware, cover the full sitemap now
    Hero.tsx / AboutHero.tsx
    ServiceIcon.tsx
    StatusStrip.tsx / Services.tsx / Process.tsx / Values.tsx / Pricing.tsx
    Testimonials.tsx / JoinUs.tsx / FAQ.tsx / CTA.tsx
    Contact.tsx / ScheduleForm.tsx / ApplyForm.tsx / RoiCalculator.tsx
public/
  resources/*.pdf   the two real downloadable guides
```

## Before you publish
- **Storage is file-based, not a real database.** `src/lib/submissions.ts` writes
  contact/booking/newsletter/application submissions to local JSON files under
  `/data`. Fine for local dev; on a serverless host (Vercel, etc.) the filesystem is
  read-only outside `/tmp` and gets wiped between invocations, so submissions won't
  persist. Swap for a real database before going live.
- See the placeholder-content table above — jobs, case studies, blog posts, pricing,
  testimonials, and the status page all need your real data before launch.
- Content that IS real and unchanged: services, values, footprint stats, FAQ, office
  info, about page copy — all pulled directly from the original `index.php` /
  `about.php` / `schedule.php`.
