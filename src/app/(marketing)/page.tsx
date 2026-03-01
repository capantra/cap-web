import type { Metadata } from "next";
import Link from "next/link";
import { HomeHero } from "../../components/marketing/home/HomeHero";
import { TrustSignals } from "../../components/marketing/home/TrustSignals";
import { PlatformCards } from "../../components/marketing/home/PlatformCards";
import { HowItWorks } from "../../components/marketing/home/HowItWorks";
import { UseCases } from "../../components/marketing/home/UseCases";
import { GovernancePillars } from "../../components/marketing/home/GovernancePillars";
import { TrustCenterPreview } from "../../components/marketing/home/TrustCenterPreview";
import { RegionNote } from "../../components/marketing/home/RegionNote";
import { FinalCTA } from "../../components/marketing/home/FinalCTA";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: `${SITE_NAME} - ${SITE_DESCRIPTION}`,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
};

function SectionHeader({
  eyebrow,
  title,
  body,
  invert,
}: {
  eyebrow: string;
  title: string;
  body: string;
  invert?: boolean;
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-14 lg:px-6 lg:pt-18">
      <div className="max-w-3xl">
        <div
          className={
            invert
              ? "text-xs font-semibold uppercase tracking-[0.14em] text-white/60"
              : "text-xs font-semibold uppercase tracking-[0.14em] text-black/45"
          }
        >
          {eyebrow}
        </div>
        <h2
          className={
            invert
              ? "mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
              : "mt-3 text-3xl font-semibold tracking-tight text-black/90 sm:text-4xl"
          }
        >
          {title}
        </h2>
        <p
          className={
            invert
              ? "mt-4 max-w-2xl text-base leading-relaxed text-white/78"
              : "mt-4 max-w-2xl text-base leading-relaxed text-black/62"
          }
        >
          {body}
        </p>
      </div>
    </div>
  );
}

function HomeQuickNav() {
  const links = [
    { label: "Trust", href: "#trust-signals" },
    { label: "Solutions", href: "#platforms" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Use cases", href: "#use-cases" },
    { label: "Governance", href: "#governance" },
    { label: "Region", href: "#region" },
  ];

  return (
    <section className="bg-transparent">
      <div className="mx-auto max-w-7xl px-4 py-4 lg:px-6">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <span className="mr-1 text-xs font-semibold uppercase tracking-wide text-black/45">On this page</span>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex h-8 items-center border-b border-transparent text-xs font-semibold text-black/58 transition hover:border-black/35 hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeQuickNav />

      <main className="relative overflow-hidden bg-[#f4f4f3]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(10,22,56,0.025),transparent_42%)]" />

        <div className="relative">
          <div id="trust-signals" className="scroll-mt-28">
            <TrustSignals />
          </div>
        </div>

        <div className="relative">
          <SectionHeader
            eyebrow="Platform + Solutions"
            title="From product surfaces to operating rhythm"
            body="See how CapantraOne (platform) and add-on solutions fit together, then follow the practical flow from setup to governed operations."
          />

          <div id="platforms" className="scroll-mt-28">
            <PlatformCards />
          </div>

          <div id="how-it-works" className="scroll-mt-28">
            <HowItWorks />
          </div>
        </div>

        <div className="relative">
          <SectionHeader
            eyebrow="Fit & Governance"
            title="Designed for teams that need control and clarity"
            body="Match the platform to your operating model and review how governance-first patterns are applied across regions."
          />

          <div id="use-cases" className="scroll-mt-28">
            <UseCases />
          </div>

          <div id="governance" className="scroll-mt-28">
            <GovernancePillars />
          </div>
        </div>

        <div className="relative">
          <TrustCenterPreview />
        </div>

        <div className="relative">
          <div id="region" className="scroll-mt-28">
            <RegionNote />
          </div>

          <FinalCTA />
        </div>
      </main>
    </>
  );
}
