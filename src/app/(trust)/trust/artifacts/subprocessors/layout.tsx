import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subprocessors",
  description:
    "View Capantra’s subprocessor register with supplier purpose, regions, data categories, and lifecycle status.",
  alternates: {
    canonical: "/trust/artifacts/subprocessors",
  },
};

export default function SubprocessorsLayout({ children }: { children: React.ReactNode }) {
  return children;
}