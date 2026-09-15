# Project Spec: Twin Flowers Cleaning — Squarespace → static site

**Status:** in progress

## Who
Wes's client, Twin Flowers Cleaning (Camas and Linnea Cratty, Hamilton, MT) — currently on Squarespace at twinflowerscleaning.squarespace.com. Wes is rebuilding it to demo a Cloudflare-hosted alternative, the same way [WTC Montana Construction](../../website/new-site/wtc-montana-website) was migrated off Squarespace.

## What
A framework-free static HTML/CSS/JS rebuild of the current Squarespace site, content pulled from the live pages: Home, Book, Services, About, Join the Team. Same sage/cream visual style as the corrected service-area map already delivered. Contact/booking forms wired through Web3Forms (reusing the WTC access key, landing in Wes's inbox as a placeholder) with a honeypot field, matching the pattern in `contact.html` of the WTC repo.

## Where
`C:\dev\Twin Flower\new-website` — new git repo, `git init` here. Served locally (`python -m http.server` or similar) so Wes can demo it to the client before anything touches Cloudflare.

## Why
Client wants off Squarespace's cost/lock-in and onto Cloudflare, like Wes's own site. Wes needs a working local demo to show them first — nothing goes live or gets purchased/deployed yet.

## UI/UX
- **Layout:** Mirrors the current Squarespace site's page structure and copy as closely as possible — same nav (Home, Book, Services, About, Join the Team), same section order per page.
- **Key Components:** Shared header/nav + footer across pages; hero on Home; services grid; About page with testimonials + photo section; three Web3Forms contact forms (Home footer, Book page, About page) with a honeypot spam trap; service-area map (already built) linked in from About/footer.
- **User Flow:** Relative links between pages (`index.html`, `book.html`, `services.html`, `about.html`, `join-the-team.html`) so navigation works identically on `localhost` and once pointed at a Cloudflare Pages/Workers custom domain — no absolute/hardcoded-domain internal links.
- **Styling Notes:** Cream background, deep pine-green text, serif display type (Georgia) — consistent with the service-area map's palette. Real photos/images pulled from the live Squarespace site where possible rather than placeholders.

## Notes
- Domain: not registered yet — using `twinflowerscleaning.com` as a placeholder in canonical tags / structured data (schema.org). One-line swap once the client picks a real domain.
- Forms: wired to Wes's own Web3Forms key for now so the demo actually works end-to-end; swap to the client's own Web3Forms account/inbox before anything goes live.
- Deployment to Cloudflare (Git integration, DNS, custom domain) is a separate later step — out of scope for this pass, which is local-only.

## Template Feedback
_None captured this session._
