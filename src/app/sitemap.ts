import type { MetadataRoute } from "next";
import { PUBLIC_ROUTES, absoluteUrl } from "@/lib/seo";

const priorityByRoute: Record<string, number> = {
  "/": 1,
  "/solutions": 0.95,
  "/solutions/capantraone": 0.92,
  "/solutions/capantrasales": 0.9,
  "/solutions/capantradial": 0.9,
  "/solutions/capantradata": 0.9,
  "/trust/overview": 0.9,
  "/company/about": 0.8,
  "/company/contact": 0.8,
  "/legal/master-services": 0.82,
  "/legal/service-level": 0.82,
  "/legal/data-processing": 0.82,
};

const weeklyRoutes = new Set([
  "/",
  "/solutions",
  "/solutions/capantraone",
  "/solutions/capantrasales",
  "/solutions/capantradial",
  "/solutions/capantradata",
  "/investors",
  "/company/about",
  "/company/contact",
  "/trust/overview",
  "/trust/versions",
  "/legal/master-services",
  "/legal/service-level",
  "/legal/data-processing",
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