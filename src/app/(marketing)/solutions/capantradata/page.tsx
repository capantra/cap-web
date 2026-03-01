import Link from "next/link";
import React from "react";
import {
  ArrowRight,
  Database,
  FileText,
  Globe2,
  ShieldCheck,
  Scale,
  UserRoundCheck,
  Clock,
  Lock,
  CheckCircle2,
  Layers,
  Users,
  Building2,
  Search,
  ListChecks,
} from "lucide-react";
import { Section } from "@/components/marketing/Section";
import { ProductHero } from "@/components/marketing/ProductHero";
import { Surface } from "@/components/marketing/Surface";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapantraData",
  description:
    "CapantraData supports governed data handling, auditability, and compliance-ready operations across jurisdictions.",
};

function SoftCard({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-sm backdrop-blur">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black/[0.04]">
          <Icon className="h-5 w-5 text-black/70" />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-black/90">{title}</h3>
        </div>
      </div>
      <div className="mt-3 text-sm leading-relaxed text-black/65">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((t) => (
        <li key={t} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black/35" />
          <span className="text-sm leading-relaxed text-black/65">{t}</span>
        </li>
      ))}
    </ul>
  );
}

function DataConsole() {
  const rows = [
    { label: "Handling", icon: Database, sub: "Governed workflows", chip: "Controls" },
    { label: "Requests", icon: UserRoundCheck, sub: "Operational handling patterns", chip: "Transparency" },
    { label: "Notes", icon: Globe2, sub: "Region-aware documentation", chip: "AU · UK · US" },
  ] as const;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div className="text-xs font-semibold uppercase tracking-wide text-black/70">
          Data console (snapshot)
        </div>
        <span className="inline-flex items-center rounded-full border border-black/15 bg-black/10 px-2.5 py-1 text-[11px] font-semibold text-black/75">
          CapantraData
        </span>
      </div>

      <div className="grid gap-3">
        {rows.map((r) => (
          <div key={r.label} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
                  <r.icon className="h-5 w-5 text-black/80" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-black">{r.label}</div>
                  <div className="mt-1 text-xs text-black/75">{r.sub}</div>
                </div>
              </div>

              <span className="inline-flex items-center rounded-full border border-black/15 bg-black/10 px-2.5 py-1 text-[11px] font-semibold text-black/70">
                {r.chip}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-black">
          <ShieldCheck className="h-4 w-4 text-black/80" />
          Governance-first posture
        </div>
        <p className="mt-2 text-sm text-black/80">
          Data handling patterns designed for transparency and procurement review. Exact obligations depend on region and
          use case.
        </p>
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: React.ReactNode }) {
  return (
    <details className="group rounded-2xl border border-black/10 bg-white/70 p-5 backdrop-blur">
      <summary className="cursor-pointer list-none select-none text-sm font-semibold text-black/80">
        <span className="inline-flex items-center justify-between gap-3">
          {q}
          <span className="text-black/40 transition group-open:rotate-180">⌄</span>
        </span>
      </summary>
      <div className="mt-3 text-sm leading-relaxed text-black/60">{a}</div>
    </details>
  );
}

export default function CapantraDataPage() {
  return (
    <div className="w-full">
      <ProductHero
        variant="aquaWave"
        badges={["Solutions", "CapantraData", "Launches 1 Jul 2026"]}
        title={
          <>
            Governed data handling for engagement operations —
            <br className="hidden sm:block" /> with transparency and control patterns.
          </>
        }
        subtitle={
          <>
            CapantraData supports governance-first data workflows, suppression patterns, and operational request-handling
            structures designed for review-readiness.
          </>
        }
        note={
          <>
            Note: data obligations vary by jurisdiction and use case. Customers remain responsible for lawful basis,
            permissions, and compliance. CapantraData requires an active CapantraOne licence and is scheduled to launch
            on 1 July 2026. See the Trust Center for documentation and region notes.
          </>
        }
        primaryCta={{ label: "Request a briefing", href: "/company/contact" }}
        secondaryCta={{ label: "Trust Center", href: "/trust/overview" }}
        right={<DataConsole />}
      />

      {/* What it is */}
      <Section tone="plain" className="py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-black/45">What it is</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-black/90">
              Data workflows designed to be explainable.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60">
              CapantraData focuses on governed handling patterns: suppression, request workflows, transparency cues, and
              region-aware documentation to support internal review and procurement assessment.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <SoftCard title="Suppression patterns" icon={ListChecks}>
                Handling patterns designed to support suppression workflows (scope-dependent).
              </SoftCard>
              <SoftCard title="Request handling" icon={UserRoundCheck}>
                Operational structures for intake, triage and response (scope-dependent).
              </SoftCard>
            </div>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <Link
                href="/trust/overview"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-black px-6 text-sm font-semibold text-white hover:bg-black/90"
              >
                Review Trust Center <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/solutions/capantraone"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-black/15 bg-white px-6 text-sm font-semibold text-black/75 hover:bg-black/[0.03]"
              >
                View CapantraOne
              </Link>
            </div>
          </div>

          <Surface variant="soft" className="p-6 lg:p-8">
            <div className="text-xs font-semibold uppercase tracking-wide text-black/45">Core principles</div>
            <div className="mt-3 text-sm font-semibold text-black/80">Governance-first by default.</div>
            <p className="mt-2 text-sm leading-relaxed text-black/60">
              Patterns designed to support minimisation, clarity and transparency — without overpromising legal outcomes.
            </p>

            <div className="mt-6 space-y-3">
              {[
                { label: "Minimisation", value: "collect what you need", icon: Scale },
                { label: "Control", value: "permissions + boundaries", icon: Lock },
                { label: "Transparency", value: "review-friendly notes", icon: FileText },
                { label: "Regional notes", value: "AU · UK · US", icon: Globe2 },
              ].map((r) => (
                <div
                  key={r.label}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-black/10 bg-white/70 px-4 py-3"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-black/55">
                    <r.icon className="h-4 w-4 text-black/50" />
                    {r.label}
                  </div>
                  <div className="text-sm font-semibold text-black/75">{r.value}</div>
                </div>
              ))}
            </div>
          </Surface>
        </div>
      </Section>

      {/* Capabilities */}
      <Section tone="tint" className="py-12">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-black/45">Capabilities</div>
            <h2 className="mt-2 text-2xl font-semibold text-black/85">
              Built for controlled data-enabled operations.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60">
              Use CapantraData to support governed handling patterns across engagement workflows.
            </p>
          </div>
          <Link
            href="/company/contact"
            className="inline-flex items-center gap-2 self-start rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-black/70 hover:bg-black/[0.03]"
          >
            Talk to us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <SoftCard title="Suppression support" icon={ListChecks}>
            Workflows and notes designed to support suppression handling (scope-dependent).
          </SoftCard>
          <SoftCard title="Search + traceability cues" icon={Search}>
            Patterns intended to improve how teams locate and triage data records (scope-dependent).
          </SoftCard>
          <SoftCard title="Retention + lifecycle notes" icon={Clock}>
            Governance notes for lifecycle handling and retention posture (region-dependent).
          </SoftCard>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <Surface variant="outline" className="p-6">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-black/[0.04]">
                <CheckCircle2 className="h-5 w-5 text-black/70" />
              </div>
              <div>
                <div className="text-sm font-semibold text-black/85">Designed for review-readiness</div>
                <p className="mt-2 text-sm leading-relaxed text-black/60">
                  Documentation and scope statements intended to make procurement assessment easier.
                </p>
                <BulletList
                  items={[
                    "Trust Center artefacts with versioning.",
                    "Region-aware notes (AU/UK/US).",
                    "Clear scope framing to avoid accidental overreach.",
                  ]}
                />
              </div>
            </div>
          </Surface>

          <Surface variant="outline" className="p-6">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-black/[0.04]">
                <Layers className="h-5 w-5 text-black/70" />
              </div>
              <div>
                <div className="text-sm font-semibold text-black/85">Works alongside Dial and One</div>
                <p className="mt-2 text-sm leading-relaxed text-black/60">
                  Adopt CapantraData independently or as part of a wider operating layer rollout.
                </p>
                <BulletList
                  items={[
                    "Dial for engagement execution surfaces.",
                    "One for workflows, forms and team operations.",
                    "Data for governed handling patterns and suppression notes.",
                  ]}
                />
              </div>
            </div>
          </Surface>
        </div>
      </Section>

      {/* Who it's for */}
      <Section tone="plain" className="py-12">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-black/45">Who it’s for</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-black/90">
              Teams operating across clients, regions, and programs.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60">
              CapantraData is best where data handling needs to be explainable, auditable, and procurement-friendly.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <SoftCard title="Sales agencies" icon={Users}>
                Maintain consistent suppression and handling patterns across multiple clients.
              </SoftCard>
              <SoftCard title="BPO operators" icon={Building2}>
                Standardise request-handling workflows while keeping transparency cues.
              </SoftCard>
            </div>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <Link
                href="/solutions/capantrasales"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-black px-6 text-sm font-semibold text-white hover:bg-black/90"
              >
                Explore Sales solution <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/solutions/capantradial"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-black/15 bg-white px-6 text-sm font-semibold text-black/75 hover:bg-black/[0.03]"
              >
                View CapantraDial
              </Link>
            </div>
          </div>

          <Surface variant="soft" className="p-6 lg:p-8">
            <div className="text-xs font-semibold uppercase tracking-wide text-black/45">Starting point</div>
            <div className="mt-3 text-sm font-semibold text-black/80">Begin with governance artefacts.</div>
            <p className="mt-2 text-sm leading-relaxed text-black/60">
              Start in the Trust Center, then confirm your region + use case and define the smallest handling scope.
            </p>

            <div className="mt-6 space-y-3">
              {[
                { t: "Step 1", d: "Review Trust Center documentation." },
                { t: "Step 2", d: "Confirm region + use case requirements." },
                { t: "Step 3", d: "Map suppression + request workflows." },
                { t: "Step 4", d: "Deploy with controlled access patterns." },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3">
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">{x.t}</div>
                  <div className="mt-1 text-sm font-semibold text-black/75">{x.d}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-2">
              <Link
                href="/trust/overview"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-black px-6 text-sm font-semibold text-white hover:bg-black/90"
              >
                Trust Center
              </Link>
              <Link
                href="/company/contact"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-black/15 bg-white px-6 text-sm font-semibold text-black/75 hover:bg-black/[0.03]"
              >
                Request briefing
              </Link>
            </div>
          </Surface>
        </div>
      </Section>

      {/* Trust band */}
      <Section tone="dark" className="py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur">
                Procurement-ready
              </span>
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur">
                Versioned artefacts
              </span>
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur">
                Region-aware
              </span>
            </div>

            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Clarity, control, and transparency.
            </h2>

            <p className="max-w-3xl text-sm leading-relaxed text-white/80">
              CapantraData is designed to support review-readiness through Trust Center documentation and scope framing.
            </p>
          </div>

          <div className="grid gap-3">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <ShieldCheck className="h-4 w-4 text-white/80" />
                Security posture
              </div>
              <p className="mt-2 text-sm text-white/80">
                Governance notes and role patterns intended to support internal review.
              </p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <FileText className="h-4 w-4 text-white/80" />
                Privacy posture
              </div>
              <p className="mt-2 text-sm text-white/80">
                Minimisation guidance and region-aware notes (AU/UK/US) available in the Trust Center.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              <Link
                href="/trust/overview"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-6 text-sm font-semibold text-black hover:bg-white/90"
              >
                Trust Center <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/company/contact"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 text-sm font-semibold text-white hover:bg-white/10"
              >
                Request pack
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="gradient" className="py-12">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-black/45">FAQ</div>
          <h2 className="mt-2 text-2xl font-semibold text-black/85">Common questions</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60">
            Quick answers for operators and procurement teams.
          </p>
        </div>

        <div className="mt-8 grid gap-3 lg:grid-cols-2">
          <FaqItem
            q="Is CapantraData a data broker?"
            a={
              <>
                No — CapantraData describes governed handling patterns and services used within operational workflows.
                Scope depends on deployment and customer use case.
              </>
            }
          />
          <FaqItem
            q="Do you guarantee compliance?"
            a={
              <>
                No. We provide documentation and design patterns intended to support compliant operations. Compliance
                depends on jurisdiction, use case, and configuration.
              </>
            }
          />
          <FaqItem
            q="Can we adopt Data without Dial/One?"
            a={
              <>
                Yes — it can be adopted independently, or as part of a wider operating layer rollout.
              </>
            }
          />
          <FaqItem
            q="How do we start?"
            a={
              <>
                Start in the Trust Center, confirm your region + use case, then define the smallest handling scope that
                gets you operational.
              </>
            }
          />
        </div>
      </Section>

      {/* Final CTA */}
      <Section tone="plain" className="py-12">
        <Surface variant="outline" className="p-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-sm font-semibold text-black/85">Want a governed data handling plan?</div>
              <p className="mt-1 text-sm leading-relaxed text-black/60">
                Share your region, program type, and operational workflow — we’ll map the simplest path to production.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link
                href="/company/contact"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-black px-6 text-sm font-semibold text-white hover:bg-black/90"
              >
                Contact
              </Link>
              <Link
                href="/solutions/capantraone"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-black/15 bg-white px-6 text-sm font-semibold text-black/75 hover:bg-black/[0.03]"
              >
                View CapantraOne <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </Surface>
      </Section>
    </div>
  );
}
