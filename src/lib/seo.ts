export const SITE_NAME = "Capantra";
export const SITE_DESCRIPTION =
  "Compliance-first engagement platforms for regulated operations across AU, UK, and US markets.";

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const SITE_URL = (rawSiteUrl && /^https?:\/\//.test(rawSiteUrl)
  ? rawSiteUrl
  : "https://capantra.com"
).replace(/\/$/, "");

export function absoluteUrl(path: string = "/"): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}

export const PUBLIC_ROUTES = [
  "/",
  "/company/about",
  "/company/contact",
  "/compliance",
  "/compliance/anti-spam",
  "/compliance/regulatory",
  "/compliance/responsible-use",
  "/compliance/telecommunications",
  "/investors",
  "/legal",
  "/legal/acceptable-use",
  "/legal/data-processing",
  "/legal/privacy",
  "/legal/security",
  "/legal/terms",
  "/solutions",
  "/solutions/capantradata",
  "/solutions/capantradial",
  "/solutions/capantraone",
  "/solutions/capantrasales",
  "/trust/overview",
  "/trust/privacy",
  "/trust/security",
  "/trust/compliance",
  "/trust/governance",
  "/trust/artifacts",
  "/trust/artifacts/modern-slavery",
  "/trust/artifacts/subprocessors",
  "/trust/versions",
] as const;