import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import {
  ArrowRight,
  PhoneCall,
  Database,
  Users,
  ShieldCheck,
  LineChart,
  Lock,
  Workflow,
  FileText,
  ClipboardList,
  Settings2,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { Section } from "@/components/marketing/Section";
import { ProductHero } from "@/components/marketing/ProductHero";
import { Surface } from "@/components/marketing/Surface";
import { SolutionBriefingForm } from "@/components/marketing/solutions/SolutionBriefingForm";

export const metadata: Metadata = {
  title: "CapantraOne",
  description:
    "CapantraOne is the unified operations layer for compliant campaign workflows, control points, and execution visibility.",
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-black px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur">
      {children}
    </span>
  );
}

function SoftCard({
  title,
  icon: Icon,
  children,
  tone = "light",
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  const base =
    tone === "dark"
      ? "border-white/15 bg-white/10 text-white"
      : "border-black/10 bg-white/80 text-black";
  const iconWrap = tone === "dark" ? "bg-white/10" : "bg-black/[0.04]";
  const iconColor = tone === "dark" ? "text-white/80" : "text-black/70";
  const titleColor = tone === "dark" ? "text-white" : "text-black/90";
  const bodyColor = tone === "dark" ? "text-white/80" : "text-black/65";

  return (
    <section className={cn("rounded-3xl border p-6 shadow-sm backdrop-blur", base)}>
      <div className="flex items-start gap-3">
        <div className={cn("flex h-10 w-10 items-center justify-center rounded-2xl", iconWrap)}>
          <Icon className={cn("h-5 w-5", iconColor)} />
        </div>
        <div className="min-w-0">
          <h3 className={cn("text-lg font-semibold", titleColor)}>{title}</h3>
        </div>
      </div>
      <div className={cn("mt-3 text-sm leading-relaxed", bodyColor)}>{children}</div>
    </section>
  );
}

function BulletList({ items, tone = "light" }: { items: string[]; tone?: "light" | "dark" }) {
  const dot = tone === "dark" ? "bg-white/45" : "bg-black/35";
  const text = tone === "dark" ? "text-white/80" : "text-black/65";
  return (
    <ul className="mt-3 space-y-2">
      {items.map((t) => (
        <li key={t} className="flex gap-3">
          <span className={cn("mt-2 h-1.5 w-1.5 shrink-0 rounded-full", dot)} />
          <span className={cn("text-sm leading-relaxed", text)}>{t}</span>
        </li>
      ))}
    </ul>
  );
}

function SuiteConsole() {
  const tiles = [
    { label: "Dial", icon: PhoneCall, sub: "Inbound + outbound ops", chip: "Controls" },
    { label: "Data", icon: Database, sub: "Governed workflows", chip: "Transparency" },
    { label: "Sales", icon: MapPin, sub: "Field + telesales ops", chip: "Profitability" },
  ] as const;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div className="text-xs font-semibold uppercase tracking-wide text-black/80">
          Suite console (snapshot)
        </div>
        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-black/75">
          CapantraOne
        </span>
      </div>

      <div className="grid gap-3">
        {tiles.map((t) => (
          <div key={t.label} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
                  <t.icon className="h-5 w-5 text-black/80" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-black">{t.label}</div>
                  <div className="mt-1 text-xs text-black/75">{t.sub}</div>
                </div>
              </div>

              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-black/70">
                {t.chip}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-black">
          <ShieldCheck className="h-4 w-4 text-black/80" />
          One operating layer
        </div>
        <p className="mt-2 text-sm text-black/80">
          Standardise workflows, forms, team operations and reporting — designed for repeatable delivery.
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          <Pill>Workflows</Pill>
          <Pill>Forms</Pill>
          <Pill>Ops controls</Pill>
          <Pill>Governance</Pill>
        </div>
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

function PackageCard({
  title,
  badge,
  accessHint,
  bestFor,
  bullets,
  cta,
  featured,
}: {
  title: string;
  badge?: string;
  accessHint: string;
  bestFor: string;
  bullets: string[];
  cta: { label: string; href: string };
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border p-6 shadow-sm",
        featured ? "border-black/20 bg-white" : "border-black/10 bg-white/80"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-lg font-semibold text-black/90">{title}</div>
          <div className="mt-1 text-sm text-black/60">{bestFor}</div>
        </div>
        {badge ? (
          <span className="inline-flex items-center rounded-full border border-black/10 bg-black/[0.03] px-2.5 py-1 text-[11px] font-semibold text-black/55">
            {badge}
          </span>
        ) : null}
      </div>

      <div className="mt-4 rounded-2xl border border-black/10 bg-black/[0.02] px-4 py-3">
        <div className="text-xs font-semibold uppercase tracking-wide text-black/45">Access posture</div>
        <div className="mt-1 text-sm font-semibold text-black/80">{accessHint}</div>
      </div>

      <ul className="mt-4 space-y-2">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black/35" />
            <span className="text-sm leading-relaxed text-black/65">{b}</span>
          </li>
        ))}
      </ul>

      <Link
        href={cta.href}
        className={cn(
          "mt-6 inline-flex h-11 w-full items-center justify-center rounded-xl px-6 text-sm font-semibold",
          featured ? "bg-black text-white hover:bg-black/90" : "border border-black/15 bg-white text-black/75 hover:bg-black/[0.03]"
        )}
      >
        {cta.label} <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
}

export default function CapantraOnePage() {
  return (
    <div className="w-full">
      <ProductHero
        variant="neutralWave"
        badges={["Platform", "CapantraOne", "Core operating system"]}
        title={
          <>
            The brain and management console for the Capantra suite —
            <br className="hidden sm:block" /> workflows, teams and visibility in one system.
          </>
        }
        subtitle={
          <>
            CapantraOne is the foundational operating layer for the Capantra system. It centralises identity,
            organisations, permissions, billing, and onboarding so every module runs within one consistent structure.
          </>
        }
        note={
          <>
            Note: customers must hold a CapantraOne licence to access any other Capantra solution. Features depend on
            deployment scope and configuration. Commercial terms are shared during briefing/demo.
          </>
        }
        primaryCta={{ label: "Request a briefing/demo", href: "#briefing-form" }}
        secondaryCta={{ label: "Trust Center", href: "/trust/overview" }}
        right={<SuiteConsole />}
      />

      {/* What it is */}
      <Section tone="tint" className="py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-black/45">What it is</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-black/90">The shared infrastructure for every Capantra module.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60">
              Rather than treating access, billing and organisational logic as afterthoughts, CapantraOne is designed as
              infrastructure. It establishes shared context across products so teams can expand usage and add modules
              without fragmentation or loss of control.
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-black/55">
              Licensing model: CapantraOne is mandatory for suite access and acts as the control plane for Dial, Data,
              and Sales.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <SoftCard title="Workflow consistency" icon={Workflow}>
                Repeatable execution patterns for programs, handover, QA and operations.
              </SoftCard>
              <SoftCard title="Operational visibility" icon={LineChart}>
                Reporting surfaces designed to support management rhythm and accountability (scope-dependent).
              </SoftCard>
            </div>

            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              <Link
                href="/solutions"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-black px-6 text-sm font-semibold text-white hover:bg-black/90"
              >
                View all solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/solutions/capantrasales"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-black/15 bg-white px-6 text-sm font-semibold text-black/75 hover:bg-black/[0.03]"
              >
                View CapantraSales
              </Link>
            </div>
          </div>

          <Surface variant="soft" className="p-6 lg:p-8">
            <div className="text-xs font-semibold uppercase tracking-wide text-black/45">Suite view</div>
            <div className="mt-3 text-sm font-semibold text-black/80">A practical operating model</div>
            <p className="mt-2 text-sm leading-relaxed text-black/60">
              Combine workflows, forms, and team operations with governance cues and reporting surfaces.
            </p>

            <div className="mt-6 space-y-3">
              {[
                { label: "Workflows", value: "repeatable execution", icon: Workflow },
                { label: "Forms", value: "structured capture", icon: ClipboardList },
                { label: "Team ops", value: "roles + onboarding", icon: Users },
                { label: "Controls", value: "permissions + boundaries", icon: Lock },
                { label: "Reporting", value: "oversight surfaces", icon: LineChart },
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
      <Section tone="plain" className="py-12">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-black/45">Capabilities</div>
            <h2 className="mt-2 text-2xl font-semibold text-black/85">Built for repeatable delivery.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60">
              Use CapantraOne to formalise how your team works — and make operations easier to audit, hand over, and scale.
            </p>
          </div>
          <Link
            href="#briefing-form"
            className="inline-flex items-center gap-2 self-start rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-black/70 hover:bg-black/[0.03]"
          >
            Request a briefing/demo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <SoftCard title="Workflows + playbooks" icon={Workflow}>
            Standardise execution steps for consistent outcomes across teams and clients.
          </SoftCard>
          <SoftCard title="Forms + structured capture" icon={ClipboardList}>
            Reduce ambiguity with controlled fields and consistent record structures (scope-dependent).
          </SoftCard>
          <SoftCard title="Team operations" icon={Users}>
            Role patterns and onboarding cues intended to support multi-client operations.
          </SoftCard>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <Surface variant="outline" className="p-6">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-black/[0.04]">
                <Settings2 className="h-5 w-5 text-black/70" />
              </div>
              <div>
                <div className="text-sm font-semibold text-black/85">An operating system, not a “feature set”</div>
                <p className="mt-2 text-sm leading-relaxed text-black/60">
                  The goal is to reduce fragmentation by providing consistent primitives that can be expanded over time.
                </p>
                <BulletList
                  items={[
                    "Repeatable delivery across clients and programs.",
                    "Clearer handover between teams and supervisors.",
                    "Operational visibility designed to support rhythm and accountability.",
                  ]}
                />
              </div>
            </div>
          </Surface>

          <Surface variant="outline" className="p-6">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-black/[0.04]">
                <ShieldCheck className="h-5 w-5 text-black/70" />
              </div>
              <div>
                <div className="text-sm font-semibold text-black/85">Governance-first posture</div>
                <p className="mt-2 text-sm leading-relaxed text-black/60">
                  Trust artefacts and scope statements designed to support procurement review and internal oversight.
                </p>
                <BulletList
                  items={[
                    "Versioned Trust Center documentation.",
                    "Region-aware notes (AU/UK/US).",
                    "Role boundaries + least privilege patterns.",
                  ]}
                />
              </div>
            </div>
          </Surface>
        </div>
      </Section>

      {/* NEW: Packaging guidance */}
      <Section tone="gradient" className="py-12">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-black/45">Packaging</div>
          <h2 className="mt-2 text-2xl font-semibold text-black/85">Platform + add-on packaging</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60">
            CapantraOne is the required platform licence. CapantraSales and CapantraDial are add-on solutions accessed
            through CapantraOne, with CapantraDial including CapantraSales access.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <PackageCard
            title="CapantraOne"
            badge="Operating layer"
            accessHint="Required platform licence (commercial terms via briefing/demo)"
            bestFor="Standardising workflows, forms, and governance across programs."
            bullets={[
              "Workflow + form standardisation",
              "Team operations + controls",
              "Oversight cadence + reporting surfaces",
              "Composable with Dial/Data/Sales",
            ]}
            cta={{ label: "Request a briefing/demo", href: "#briefing-form" }}
            featured
          />

          <PackageCard
            title="CapantraSales"
            badge="Agent-first"
            accessHint="Requires CapantraOne with baseline team access"
            bestFor="Field reps + telesales teams needing KPI + profitability visibility."
            bullets={[
              "Field entries + activity capture",
              "KPI tracking + coaching loop",
              "Cost + margin + profitability views",
              "Calls included",
              "Agent onboarding and standards",
            ]}
            cta={{ label: "View CapantraSales", href: "/solutions/capantrasales" }}
          />
        </div>

        <Surface variant="soft" className="mt-6 p-6">
          <div className="text-sm font-semibold text-black/85">Quick buying rules</div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-black/45">Platform requirement</div>
              <ul className="mt-2 space-y-2 text-sm text-black/65">
                <li>
                  <span className="mr-2 text-black/30">•</span>CapantraOne is mandatory for all add-on access.
                </li>
                <li>
                  <span className="mr-2 text-black/30">•</span>One admin licence is required to activate add-ons.
                </li>
                <li>
                  <span className="mr-2 text-black/30">•</span>Use CapantraOne as the control plane for Dial, Data, and Sales.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-black/45">Add-on access rules</div>
              <ul className="mt-2 space-y-2 text-sm text-black/65">
                <li>
                  <span className="mr-2 text-black/30">•</span>CapantraSales requires baseline team access.
                </li>
                <li>
                  <span className="mr-2 text-black/30">•</span>CapantraDial includes access to CapantraSales.
                </li>
                <li>
                  <span className="mr-2 text-black/30">•</span>Calls are included for Sales and Dial.
                </li>
                <li>
                  <span className="mr-2 text-black/30">•</span>Minimum purchase baseline: 2 agent licences + 1 CapantraOne admin licence.
                </li>
              </ul>
            </div>
          </div>
        </Surface>
      </Section>

      {/* Trust band */}
      <Section tone="dark" className="py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Pill>Procurement-ready</Pill>
              <Pill>Versioned artefacts</Pill>
              <Pill>Region-aware</Pill>
            </div>

            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Governance that scales with you.</h2>

            <p className="max-w-3xl text-sm leading-relaxed text-white/80">
              CapantraOne is built with a Trust Center posture — documentation, scope statements and region notes to make
              assessment easier.
            </p>
          </div>

          <div className="grid gap-3">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <ShieldCheck className="h-4 w-4 text-white/80" />
                Security posture
              </div>
              <p className="mt-2 text-sm text-white/80">
                Role patterns, logging posture and governance summaries designed for review.
              </p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <FileText className="h-4 w-4 text-white/80" />
                Privacy posture
              </div>
              <p className="mt-2 text-sm text-white/80">
                Data handling summaries, minimisation guidance, and region-aware notes (AU/UK/US).
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
                href="#briefing-form"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 text-sm font-semibold text-white hover:bg-white/10"
              >
                Request a briefing/demo
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="plain" className="py-12">
        <SolutionBriefingForm solution="capantraone" />
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
            q="Is CapantraOne a CRM?"
            a={
              <>
                It’s an operating layer focused on workflows, team operations and governance cues. Integrations and data
                sources depend on deployment scope.
              </>
            }
          />
          <FaqItem
            q="How does One relate to CapantraSales?"
            a={
              <>
                CapantraSales is agent-first (field + telesales) with profitability-grade tracking and onboarding. One is
                the broader operating layer for multi-team workflows and governance, and a CapantraOne licence is required
                for CapantraSales access.
              </>
            }
          />
          <FaqItem
            q="Can we start small?"
            a={
              <>
                Yes — start with one workflow and one reporting rhythm. Then expand with the same primitives rather than
                rebuilding per program.
              </>
            }
          />
          <FaqItem
            q="Do you guarantee compliance?"
            a={
              <>
                No. We provide governance artefacts and design patterns intended to support compliant operations.
                Compliance depends on jurisdiction, use case, and configuration.
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
              <div className="text-sm font-semibold text-black/85">Want a practical rollout plan?</div>
              <p className="mt-1 text-sm leading-relaxed text-black/60">
                Share your workflows and operating model — we’ll map the simplest path to production.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link
                href="#briefing-form"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-black px-6 text-sm font-semibold text-white hover:bg-black/90"
              >
                Request a briefing/demo
              </Link>
              <Link
                href="/solutions/capantrasales"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-black/15 bg-white px-6 text-sm font-semibold text-black/75 hover:bg-black/[0.03]"
              >
                View CapantraSales <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </Surface>
      </Section>
    </div>
  );
}
