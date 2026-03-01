import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ShieldCheck, Globe2, Database, LifeBuoy, ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { formatDateDDMMYYYY, getTrustLastUpdatedISO } from "@/lib/trust/versions";
import { TrustHeroShell } from "@/components/trust/TrustHeroShell";

export const metadata: Metadata = {
  title: "Artifacts",
  description:
    "Trust artefacts for Capantra including policy documents, controls summaries, and supporting procurement materials.",
};

type ArtifactStatus = "Available" | "In progress" | "On request" | "Planned";

type Artifact = {
  title: string;
  description: string;
  href: string;
  status: ArtifactStatus;
  lastUpdatedISO?: string | null;
  icon: React.ComponentType<{ className?: string }>;
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-black/[0.02] px-3 py-1 text-xs font-semibold text-black/60">
      {children}
    </span>
  );
}

function statusTone(status: ArtifactStatus) {
  if (status === "Available") return "bg-emerald-500";
  if (status === "In progress") return "bg-amber-500";
  if (status === "On request") return "bg-sky-500";
  return "bg-black/25";
}

function ArtifactCard({ a }: { a: Artifact }) {
  const dot = statusTone(a.status);
  const dateLabel =
    a.lastUpdatedISO && !Number.isNaN(new Date(a.lastUpdatedISO).getTime())
      ? formatDateDDMMYYYY(a.lastUpdatedISO)
      : "To be published";

  return (
    <Link
      href={a.href}
      className={cn(
        "group block rounded-3xl border border-black/10 bg-white p-6 shadow-sm",
        "hover:border-black/15 hover:shadow-md transition"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3 min-w-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black/[0.04]">
            <a.icon className="h-5 w-5 text-black/70" />
          </div>
          <div className="min-w-0">
            <div className="text-lg font-semibold text-black/90">{a.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-black/60">{a.description}</p>
          </div>
        </div>

        <ArrowRight className="h-5 w-5 text-black/30 group-hover:text-black/55" />
      </div>

      <div className="mt-5 grid gap-2 sm:grid-cols-3">
        <div className="rounded-2xl border border-black/10 bg-black/[0.02] px-4 py-3">
          <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">Status</div>
          <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-black/80">
            <span className={cn("h-2.5 w-2.5 rounded-full", dot)} aria-hidden="true" />
            {a.status}
          </div>
        </div>

        <div className="rounded-2xl border border-black/10 bg-black/[0.02] px-4 py-3">
          <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">Last updated</div>
          <div className="mt-1 text-sm font-semibold text-black/80">{dateLabel}</div>
        </div>

        <div className="rounded-2xl border border-black/10 bg-black/[0.02] px-4 py-3">
          <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">Jurisdictions</div>
          <div className="mt-1 text-sm font-semibold text-black/80">AU · UK · US</div>
        </div>
      </div>
    </Link>
  );
}

export default function TrustArtifactsIndexPage() {
  const trustLastUpdatedISO = getTrustLastUpdatedISO();

  const artifacts: Artifact[] = [
    {
      title: "Modern Slavery Statement",
      description:
        "Published statement aligned to procurement expectations and AU Modern Slavery Act reporting concepts, with UK/US notes.",
      href: "/trust/artifacts/modern-slavery",
      status: "Available",
      lastUpdatedISO: trustLastUpdatedISO,
      icon: Globe2,
    },
    {
      title: "Sub-processors register",
      description:
        "Procurement-friendly register of key service providers, purpose, regions, data categories and status.",
      href: "/trust/artifacts/subprocessors",
      status: "Available",
      lastUpdatedISO: trustLastUpdatedISO,
      icon: Database,
    },
    {
      title: "Security pack index",
      description:
        "What we can provide for vendor due diligence: security overview, access controls, logging & incident response summaries.",
      href: "/trust/security",
      status: "Available",
      lastUpdatedISO: trustLastUpdatedISO,
      icon: ShieldCheck,
    },
    {
      title: "Privacy pack index",
      description:
        "Privacy posture summary: data handling, minimisation, retention, DSR support, and cross-border considerations.",
      href: "/trust/privacy",
      status: "Available",
      lastUpdatedISO: trustLastUpdatedISO,
      icon: FileText,
    },
  ];

  return (
    <div className="space-y-6">
      <TrustHeroShell>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>Trust Center</Badge>
              <Badge>Artifacts</Badge>
              <Badge>Procurement portal</Badge>
            </div>

            <Link
              href="/company/contact"
              className={cn(
                "inline-flex items-center gap-2",
                "rounded-full border border-black/10 bg-black/[0.02]",
                "px-4 py-2 text-xs font-semibold text-black/70",
                "hover:bg-black/[0.04] hover:text-black"
              )}
            >
              Request a briefing/demo
            </Link>
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-black/90">Procurement artifacts</h1>

          <p className="max-w-3xl text-sm leading-relaxed text-black/65">
            This section contains procurement-oriented documents and summaries that support vendor due diligence.
            Some artifacts are published; others are provided on request depending on scope and NDA requirements.
          </p>

          <p className="text-xs leading-relaxed text-black/50">
            Note: Materials are informational and non-exhaustive. Availability may vary by product, deployment model,
            and engagement stage.
          </p>
        </div>
      </TrustHeroShell>

      <div className="grid gap-4">
        {artifacts.map((a) => (
          <ArtifactCard key={a.href} a={a} />
        ))}
      </div>

      <section className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black/[0.04]">
            <LifeBuoy className="h-5 w-5 text-black/70" />
          </div>
          <div className="min-w-0">
            <div className="text-lg font-semibold text-black/90">Need a specific questionnaire format?</div>
            <p className="mt-2 text-sm text-black/60">
              Share your vendor template (security schedule, privacy addendum, or due diligence questionnaire) and
              we’ll align where practicable.
            </p>
            <div className="mt-4">
              <Link
                href="/company/contact"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-black px-5 text-sm font-semibold text-white hover:bg-black/90"
              >
                Request a briefing/demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
