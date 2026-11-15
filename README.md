# PixGro Digital Solutions — updated website

React + Vite + Tailwind single-page website. Sections: hero, VA support, about, services, process, FAQ, contact and draft legal policies.

## Run locally

1. Install Node.js 20.19+ or 22.12+.
2. Run `npm install`.
3. Run `npm run dev`.
4. Run `npm run build` to generate production files in `dist/`.

## Contact delivery (important)

WhatsApp opens a prefilled message. Email uses EmailJS when configured, otherwise it opens the visitor's default email application and the visitor must send manually.

Copy `.env.example` to `.env.local` and enter your own EmailJS credentials. Configure your EmailJS template to include: `from_name`, `from_email`, `phone`, `business_name`, `country`, `service`, `message`. Test delivery from the deployed domain. Do not put private API keys in `VITE_` variables.

## Before going live

- Verify business claims about team experience and capabilities.
- Review privacy and terms drafts with qualified counsel and update to reflect actual practices and applicable laws.
- Add only real portfolio work, reviews and performance metrics; none are fabricated here.
- Test on mobile, verify WhatsApp and email delivery, and run Lighthouse on the deployed URL.
- Update canonical, Open Graph URLs and sitemap when changing domains.
- This is an improved source project, not a verified 10/10 Lighthouse score or live deployment.
