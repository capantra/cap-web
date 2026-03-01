import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  Scale,
  Layers,
  Clock,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { getTrustLastUpdatedHelper, getTrustLastUpdatedLabel } from "@/lib/trust/versions";
import { TrustHeroShell } from "@/components/trust/TrustHeroShell";

export const metadata: Metadata = {
  title: "Overview",
  description:
    "Capantra Trust Center overview covering security, privacy, compliance, governance, and versioned trust artefacts.",
};

type StatusTone = "enabled" | "planned" | "na";

function toneFromValue(v: string): StatusTone {
  const s = v.trim().toLowerCase();
  if (s === "enabled") return "enabled";
  if (s === "planned") return "planned";
  return "na";
}

function StatusDot({ tone }: { tone: StatusTone }) {
  const klass =
    tone === "enabled"
      ? "bg-emerald-500"
      : tone === "planned"
      ? "bg-amber-500"
      : "bg-black/25";

  return <span className={cn("h-2.5 w-2.5 rounded-full", klass)} aria-hidden="true" />;
}

function Stat({
  label,
  value,
  helper,
  dotValue,
}: {
  label: string;
  value: string;
  helper?: string;
  dotValue?: string;
}) {
  const tone = dotValue ? toneFromValue(dotValue) : null;

  return (
    <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
      <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
        {label}
      </div>

      <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-black/85">
        {tone ? <StatusDot tone={tone} /> : null}
        <span className="leading-snug">{value}</span>
      </div>

      {helper ? (
        <div className="mt-1 text-[11px] font-semibold text-black/45">{helper}</div>
      ) : null}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-black/[0.02] px-4 py-2 text-xs font-semibold text-black/60">
      {children}
    </span>
  );
}

function SectionCard({
  title,
  description,
  href,
  icon: Icon,
  footer,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  footer: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group block rounded-3xl border border-black/10 bg-white p-6 shadow-sm",
        "hover:shadow-md hover:border-black/15 transition"
      )}
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black/[0.04]">
            <Icon className="h-5 w-5 text-black/70" />
          </div>
          <div className="min-w-0">
            <div className="text-lg font-semibold text-black/90">{title}</div>
            <p className="mt-2 text-sm leading-relaxed text-black/60">{description}</p>
          </div>
        </div>

        <span className="text-sm font-semibold text-black/35 group-hover:text-black/55">
          <ArrowRight className="h-5 w-5" />
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between rounded-2xl border border-black/10 bg-black/[0.02] px-4 py-3">
        <div className="text-sm font-semibold text-black/60">{footer}</div>
        <span className="text-sm font-semibold text-black/35 group-hover:text-black/55">→</span>
      </div>
    </Link>
  );
}

export default function TrustOverviewPage() {
  const lastUpdatedLabel = getTrustLastUpdatedLabel(); // already DD-MM-YYYY
  const lastUpdatedHelper = getTrustLastUpdatedHelper() ?? undefined;

  // If you later make this dynamic per-region, keep the stat value stable and procurement-friendly.
  const defaultRegionLabel = "Australia (AU)";
  const documentSetLabel = "Core policies + artefacts";
  const versioningValue = "Enabled"; // semantic dot uses this

  return (
    <div className="space-y-6">
      {/* Header + Stats */}
      <TrustHeroShell>
        {/* Top row: pill + heading/intro */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-2">
            <Pill>Procurement portal</Pill>
            <span className="h-1 w-1 rounded-full bg-black/30" />
            <Pill>AU · UK · US</Pill>
          </div>

          <div className="grid gap-6 xl:grid-cols-12 xl:items-start">
            {/* Left: Heading + copy */}
            <div className="min-w-0 xl:col-span-12">
              <h1 className="text-3xl font-semibold tracking-tight text-black/90">
                Capantra Trust Center
              </h1>
              <p className="mt-3 max-w-4xl text-sm leading-relaxed text-black/65">
                This Trust Center provides a clear, versioned view of our security, privacy, and governance posture.
                It is designed to support customer procurement and internal risk review.
              </p>

              {/* XL-only: stats below heading, single row across page */}
              <div className="mt-5 hidden xl:block">
                <div className="grid grid-cols-4 gap-3">
                  <Stat label="Default region" value={defaultRegionLabel} />
                  <Stat label="Last updated" value={lastUpdatedLabel} helper={lastUpdatedHelper} />
                  <Stat label="Document set" value={documentSetLabel} />
                  <Stat label="Versioning" value={versioningValue} dotValue={versioningValue} />
                </div>
              </div>
            </div>

            {/* <XL: stats in responsive grid (no overflow) */}
            <div className="grid w-full gap-3 sm:grid-cols-2 xl:hidden">
              <Stat label="Default region" value={defaultRegionLabel} />
              <Stat label="Last updated" value={lastUpdatedLabel} helper={lastUpdatedHelper} />
              <Stat label="Document set" value={documentSetLabel} />
              <Stat label="Versioning" value={versioningValue} dotValue={versioningValue} />
            </div>
          </div>
        </div>

        {/* Scope */}
        <div className="mt-6 rounded-2xl border border-black/10 bg-black/[0.02] p-5">
          <div className="text-xs font-semibold uppercase tracking-wide text-black/45">Scope</div>
          <p className="mt-2 text-sm leading-relaxed text-black/60">
            Materials may differ by product (CapantraDial, CapantraOne, CapantraData), deployment model, and jurisdiction.
            For formal procurement packs, please contact us.
          </p>
        </div>
      </TrustHeroShell>

      {/* Main tiles */}
      <div className="grid gap-4 lg:grid-cols-2">
        <SectionCard
          title="Security"
          description="Operational security posture, controls, access management and audit considerations."
          href="/trust/security"
          icon={ShieldCheck}
          footer="Controls, access, logging"
        />
        <SectionCard
          title="Privacy"
          description="How we handle personal information, data minimisation, retention, and privacy governance principles."
          href="/trust/privacy"
          icon={FileText}
          footer="Privacy governance, transparency"
        />
        <SectionCard
          title="Compliance"
          description="High-level compliance approach and jurisdictional notes for AU, UK and US."
          href="/trust/compliance"
          icon={Scale}
          footer="AU/UK/US notes"
        />
        <SectionCard
          title="Governance"
          description="Policies, oversight, and how governance is applied across products and environments."
          href="/trust/governance"
          icon={Layers}
          footer="Policy framework"
        />
      </div>

      {/* Version history CTA */}
      <section className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-sm font-semibold text-black/80">
              <Clock className="h-4 w-4 text-black/60" />
              Version history
            </div>
            <p className="mt-2 text-sm leading-relaxed text-black/60">
              Track changes across Trust Center documents, including what changed and when.
            </p>
          </div>

          <Link
            href="/trust/versions"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-black px-5 text-sm font-semibold text-white hover:bg-black/90"
          >
            View version history <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
