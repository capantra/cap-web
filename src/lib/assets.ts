const DEFAULT_CLOUDFLARE_ASSET_BASE_URL =
  "https://pub-1e587b8a735340e788c5a49ed8f83204.r2.dev/Brand";

export const CLOUDFLARE_ASSET_BASE_URL = (
  process.env.NEXT_PUBLIC_CLOUDFLARE_ASSET_BASE_URL?.trim() || DEFAULT_CLOUDFLARE_ASSET_BASE_URL
).replace(/\/$/, "");

export function cloudflareAsset(path: string): string {
  return `${CLOUDFLARE_ASSET_BASE_URL}/${path.replace(/^\//, "")}`;
}