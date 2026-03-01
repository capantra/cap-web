# Capantra Web

Next.js marketing and trust website for Capantra.

## Local development

```bash
pnpm install
pnpm dev
```

## Form delivery + autoresponders

Contact and investor forms now submit server-side through API routes:

- `POST /api/contact`
- `POST /api/investors`

Both routes:

- send internal notification emails to your configured inboxes,
- send autoresponder confirmations to the submitter,
- use your verified sending domain via configured sender addresses,
- require Cloudflare Turnstile verification before processing a submission.

### Required environment variables

Copy `.env.example` and set values in your deployment platform:

```bash
cp .env.example .env.local
```

Key variables:

- `AWS_REGION`
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_SES_CONFIGURATION_SET` (optional)
- `CONTACT_FROM_EMAIL`
- `INVESTOR_FROM_EMAIL`
- `AUTORESPONDER_FROM_EMAIL`
- `CONTACT_TO_EMAIL`
- `INVESTOR_TO_EMAIL`
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
- `TURNSTILE_SECRET_KEY`

## Cloudflare Turnstile setup

1. Create a Turnstile widget for your website domain(s) in Cloudflare.
2. Add site key to `NEXT_PUBLIC_TURNSTILE_SITE_KEY`.
3. Add secret key to `TURNSTILE_SECRET_KEY`.
4. Redeploy so both frontend widget and API verification are active.

## Domain setup (Amazon SES)

1. Verify your sending domain/identities in SES (e.g. `capantra.com`).
2. Add SES DNS records (DKIM/verification) for the domain.
3. Ensure sender emails in env vars are verified in SES.
4. Use an IAM user with SES send permissions and place its access keys in env vars.

## Cloudflare-hosted brand assets

Hero/background images are loaded from Cloudflare-hosted URLs via:

- `NEXT_PUBLIC_CLOUDFLARE_ASSET_BASE_URL`

Default points to your R2 public domain; override per environment if needed.

## Production checks

```bash
pnpm lint
pnpm build
pnpm start
```
