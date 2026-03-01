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
  "/solutions",
  "/solutions/capantraone",
  "/solutions/capantrasales",
  "/solutions/capantradial",
  "/solutions/capantradata",
  "/company/about",
  "/company/contact",
  "/trust/overview",
  "/trust/security",
  "/trust/privacy",
  "/trust/compliance",
  "/trust/governance",
  "/trust/artifacts",
  "/trust/artifacts/modern-slavery",
  "/trust/artifacts/subprocessors",
  "/trust/versions",
  "/investors",
  "/legal",
  "/legal/master-services",
  "/legal/service-level",
  "/legal/terms",
  "/legal/privacy",
  "/legal/data-processing",
  "/legal/acceptable-use",
  "/legal/security",
  "/compliance",
  "/compliance/regulator",
  "/compliance/anti-spam",
  "/compliance/regulatory",
  "/compliance/responsible-use",
  "/compliance/telecommunications",
] as const;