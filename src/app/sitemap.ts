import type { MetadataRoute } from "next";
import { PUBLIC_ROUTES, absoluteUrl } from "@/lib/seo";

const priorityByRoute: Record<string, number> = {
  "/": 1,
  "/solutions": 0.95,
  "/trust/overview": 0.9,
  "/company/about": 0.8,
  "/company/contact": 0.8,
};

const weeklyRoutes = new Set([
  "/",
  "/solutions",
  "/investors",
  "/trust/overview",
  "/trust/versions",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return PUBLIC_ROUTES.map((route) => ({
    url: absoluteUrl(route),
    lastModified,
    changeFrequency: weeklyRoutes.has(route) ? "weekly" : "monthly",
    priority: priorityByRoute[route] ?? 0.7,
  }));
}