/** @type {import('next').NextConfig} */
const defaultAssetBaseUrl = "https://pub-3b7783680fbc4c90af8f76ece207e8a3.r2.dev/WebsiteAssets";
const configuredAssetBaseUrl = process.env.NEXT_PUBLIC_CLOUDFLARE_ASSET_BASE_URL || defaultAssetBaseUrl;

let configuredAssetHost = "pub-3b7783680fbc4c90af8f76ece207e8a3.r2.dev";

try {
  configuredAssetHost = new URL(configuredAssetBaseUrl).hostname;
} catch {
  configuredAssetHost = "pub-3b7783680fbc4c90af8f76ece207e8a3.r2.dev";
}

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: configuredAssetHost,
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pub-1e587b8a735340e788c5a49ed8f83204.r2.dev",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
