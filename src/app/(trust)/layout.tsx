import type { Metadata } from "next";
import { TrustHeader } from "@/components/trust/TrustHeader";
import { TrustSidebar } from "@/components/trust/TrustSidebar";
import { TrustFooter } from "@/components/trust/TrustFooter";
import { SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: `Trust Center | ${SITE_NAME}`,
    template: `%s | Trust Center | ${SITE_NAME}`,
  },
  description:
    "Procurement-ready security, compliance, and governance documentation for Capantra.",
};

export default function TrustLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--brand-bg-light)]">
      <TrustHeader />
      <div className="mx-auto max-w-7xl px-4 py-6 lg:px-6">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <TrustSidebar />
          <main className="min-w-0">{children}</main>
        </div>
      </div>
      <TrustFooter />
    </div>
  );
}
