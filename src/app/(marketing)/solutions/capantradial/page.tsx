import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import {
  ArrowRight,
  PhoneCall,
  Route,
  BarChart3,
  ShieldCheck,
  Lock,
  FileText,
  CheckCircle2,
  Workflow,
  Headphones,
  Timer,
  Users,
  Building2,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { Section } from "@/components/marketing/Section";
import { ProductHero } from "@/components/marketing/ProductHero";
import { Surface } from "@/components/marketing/Surface";

export const metadata: Metadata = {
  title: "CapantraDial",
  description:
    "CapantraDial provides governed outbound engagement infrastructure with controls designed for regulated operations.",
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

function DialConsole() {
  const rows = [
    { label: "Routing", icon: Route, sub: "Inbound + outbound flows", chip: "Controls" },
    { label: "Reporting", icon: BarChart3, sub: "Operational visibility", chip: "Oversight" },
    { label: "Guardrails", icon: Lock, sub: "Role boundaries + policy", chip: "Governance" },
  ] as const;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div className="text-xs font-semibold uppercase tracking-wide text-black/70">
          Dial console (snapshot)
        </div>
        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-black/75">
          CapantraDial
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

              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-black/70">
                {r.chip}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-black">
          <ShieldCheck className="h-4 w-4 text-black/80" />
          Controlled engagement
        </div>
        <p className="mt-2 text-sm text-black/80">
          Operational visibility and governance surfaces designed to support procurement review and internal oversight.
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          <Pill>Inbound + outbound</Pill>
          <Pill>Routing</Pill>
          <Pill>Reporting</Pill>
          <Pill>AU · UK · US</Pill>
        </div>
      </div>
    </div>
  );
}

function SplitFeature({
  kicker,
  title,
  body,
  bullets,
  icon: Icon,
  align = "left",
}: {
  kicker: string;
  title: string;
  body: string;
  bullets: string[];
  icon: React.ComponentType<{ className?: string }>;
  align?: "left" | "right";
}) {
  const content = (
    <div className="space-y-3">
      <div className="text-xs font-semibold uppercase tracking-wide text-black/45">{kicker}</div>
      <h2 className="text-2xl font-semibold tracking-tight text-black/90">{title}</h2>
      <p className="text-sm leading-relaxed text-black/65">{body}</p>
      <BulletList items={bullets} />
    </div>
  );

  const visual = (
    <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black/[0.04]">
          <Icon className="h-5 w-5 text-black/70" />
        </div>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-black/90">Operational view</div>
          <div className="mt-1 text-xs text-black/55">
            Example layout (conceptual) — actual screens depend on deployment and configuration.
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {[
          { k: "Routing", t: "Flows + queues", d: "Consistent handling paths" },
          { k: "Oversight", t: "Reporting", d: "Review-friendly visibility" },
          { k: "Controls", t: "Roles + access", d: "Least privilege patterns" },
          { k: "Program ops", t: "Attempt strategy", d: "Guardrail-friendly design (scope)" },
        ].map((x) => (
          <div key={x.k} className="rounded-2xl border border-black/10 bg-black/[0.02] p-4">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">{x.k}</div>
            <div className="mt-1 text-sm font-semibold text-black/80">{x.t}</div>
            <div className="mt-1 text-xs text-black/60">{x.d}</div>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2 text-sm font-semibold text-black/85">
          <CheckCircle2 className="h-4 w-4 text-black/60" />
          Procurement-friendly posture
        </div>
        <p className="mt-2 text-sm text-black/60">
          Clear scope statements and Trust Center artefacts to support vendor assessment and internal review.
        </p>
      </div>
    </div>
  );

  return (
    <div className="grid items-center gap-8 lg:grid-cols-2">
      {align === "left" ? (
        <>
          {content}
          {visual}
        </>
      ) : (
        <>
          {visual}
          {content}
        </>
      )}
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

export default function CapantraDialPage() {
  return (
    <div className="w-full">
      <ProductHero
        variant="blueWave"
        badges={["Solutions", "CapantraDial", "Beta testing phase"]}
        title={
          <>
            Engagement operations for inbound + outbound —
            <br className="hidden sm:block" /> with routing, reporting and governance.
          </>
        }
        subtitle={
          <>
            CapantraDial provides native calling infrastructure for revenue teams, built for outbound and inbound
            operations. Calling activity connects directly to execution, performance and cost data inside the Capantra
            system.
          </>
        }
        note={
          <>
            Regulatory note: capabilities, obligations and workflows vary by jurisdiction and program type. Customers
            remain responsible for lawful basis, permissions and operational compliance. CapantraDial requires an active
            CapantraOne licence and is currently in beta testing. See the Trust Center for procurement
            artefacts.
          </>
        }
        primaryCta={{ label: "Request a briefing", href: "/company/contact" }}
        secondaryCta={{ label: "Visit Trust Center", href: "/trust/overview" }}
        right={<DialConsole />}
      />

      {/* Dark premium band */}
      <section className="relative overflow-hidden bg-[#050b18]">
        <div className="absolute inset-0">
          <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#2563eb]/25 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.12),transparent_55%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-14 lg:px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Pill>Routing</Pill>
                <Pill>Visibility</Pill>
                <Pill>Controls</Pill>
              </div>

              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Native calling infrastructure for revenue operations.
              </h2>

              <p className="max-w-3xl text-sm leading-relaxed text-white/80">
                Unlike dialers bolted onto CRMs, CapantraDial is embedded within the Capantra operating layer. It gives
                teams visibility into activity, outcomes and operational efficiency in one connected workflow.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                <SoftCard title="Routing + workflows" icon={Route} tone="dark">
                  Structured handling paths to reduce ambiguity and support internal review.
                </SoftCard>
                <SoftCard title="Reporting surfaces" icon={BarChart3} tone="dark">
                  Visibility designed to support QA, coaching and operational rhythm (scope-dependent).
                </SoftCard>
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
              <div className="text-xs font-semibold uppercase tracking-wide text-white/70">
                Example operating surface
              </div>

              <div className="mt-4 space-y-3">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <Headphones className="h-4 w-4 text-white/80" />
                    Inbound handling
                  </div>
                  <p className="mt-2 text-sm text-white/80">
                    Queue-based routing and structured handling patterns (deployment-dependent).
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <PhoneCall className="h-4 w-4 text-white/80" />
                    Outbound workflows
                  </div>
                  <p className="mt-2 text-sm text-white/80">
                    Program execution with oversight and guardrail-friendly design (scope-dependent).
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <Timer className="h-4 w-4 text-white/80" />
                    Operational rhythm
                  </div>
                  <p className="mt-2 text-sm text-white/80">
                    Reporting surfaces intended to support review, coaching and accountability.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                <Link
                  href="/solutions/capantraone"
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 text-sm font-semibold text-white hover:bg-white/15"
                >
                  View CapantraOne
                </Link>
                <Link
                  href="/solutions/capantradata"
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 text-sm font-semibold text-white hover:bg-white/15"
                >
                  View CapantraData
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plain split */}
      <Section tone="plain" className="py-12">
        <SplitFeature
          kicker="Operations"
          title="Inbound + outbound under one governance-aware workflow layer."
          body="Run engagement programs with structured routing, defined roles, and visibility designed to support internal review."
          bullets={[
            "Inbound and outbound execution in a single operating model.",
            "Routing and workflow patterns to reduce operational ambiguity.",
            "Reporting intended for QA, coaching and oversight (scope-dependent).",
            "Role boundaries and access controls aligned to least privilege.",
          ]}
          icon={Workflow}
          align="left"
        />
      </Section>

      {/* Capabilities */}
      <Section tone="tint" className="py-12">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-black/45">Capabilities</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-black/90">
              Control, visibility, and repeatable execution.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60">
              Use CapantraDial to standardise how engagement is routed, executed, and reviewed — especially across
              multi-client operating models.
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
          <SoftCard title="Routing + queues" icon={Route}>
            Queue-based routing patterns with clearer ownership and handling paths (deployment-dependent).
          </SoftCard>
          <SoftCard title="Reporting surfaces" icon={BarChart3}>
            Operational visibility designed to support QA and management rhythm (scope-dependent).
          </SoftCard>
          <SoftCard title="Controls + access" icon={Lock}>
            Role-based boundaries and least-privilege patterns to support governance.
          </SoftCard>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <Surface variant="outline" className="p-6">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-black/[0.04]">
                <CheckCircle2 className="h-5 w-5 text-black/70" />
              </div>
              <div>
                <div className="text-sm font-semibold text-black/85">Designed for repeatable delivery</div>
                <p className="mt-2 text-sm leading-relaxed text-black/60">
                  Standardise operational execution across clients without losing visibility or control.
                </p>
                <BulletList
                  items={[
                    "Consistent operating patterns for teams and supervisors.",
                    "Clearer program structure for handover and training.",
                    "Scope statements suitable for procurement review.",
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
                <div className="text-sm font-semibold text-black/85">Governance-aware posture</div>
                <p className="mt-2 text-sm leading-relaxed text-black/60">
                  Built to support oversight; obligations and compliance requirements vary by jurisdiction and use case.
                </p>
                <BulletList
                  items={[
                    "Trust Center artefacts for security/privacy review.",
                    "Region-aware notes (AU/UK/US).",
                    "Least-privilege access patterns and visibility cues.",
                  ]}
                />
              </div>
            </div>
          </Surface>
        </div>
      </Section>

      {/* Who it's for */}
      <Section tone="plain" className="py-12">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-black/45">Who it’s for</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-black/90">
              Agencies and operators running engagement at scale.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60">
              CapantraDial is designed for multi-client environments where operational clarity and accountability matter.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <SoftCard title="Sales agencies" icon={Users}>
                Run repeatable client programs with reporting and operational visibility.
              </SoftCard>
              <SoftCard title="BPO teams" icon={Building2}>
                Standardise outreach + intake execution while maintaining oversight.
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
                href="/solutions/capantraone"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-black/15 bg-white px-6 text-sm font-semibold text-black/75 hover:bg-black/[0.03]"
              >
                View CapantraOne
              </Link>
            </div>
          </div>

          <Surface variant="soft" className="p-6 lg:p-8">
            <div className="text-xs font-semibold uppercase tracking-wide text-black/45">How to start</div>
            <div className="mt-3 text-sm font-semibold text-black/80">
              Start with governance, then map the operating model.
            </div>
            <p className="mt-2 text-sm leading-relaxed text-black/60">
              Review Trust Center artefacts first, then confirm region + program requirements and choose the smallest
              scope that gets you live.
            </p>

            <div className="mt-6 space-y-3">
              {[
                { t: "Step 1", d: "Review Trust Center documentation." },
                { t: "Step 2", d: "Confirm region + use case constraints." },
                { t: "Step 3", d: "Define routing + reporting scope." },
                { t: "Step 4", d: "Roll out with training + operational rhythm." },
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
                Visit Trust Center
              </Link>
              <Link
                href="/company/contact"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-black/15 bg-white px-6 text-sm font-semibold text-black/75 hover:bg-black/[0.03]"
              >
                Request a briefing
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
              <Pill>Procurement-ready</Pill>
              <Pill>Versioned artefacts</Pill>
              <Pill>Region-aware</Pill>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Designed to be assessed.
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-white/80">
              The Trust Center provides security, privacy and governance documentation written in a procurement-friendly
              format with versioning and scope clarity.
            </p>
          </div>

          <div className="grid gap-3">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <ShieldCheck className="h-4 w-4 text-white/80" />
                Security posture
              </div>
              <p className="mt-2 text-sm text-white/80">
                Access control patterns, logging posture, and governance summaries for review.
              </p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <FileText className="h-4 w-4 text-white/80" />
                Privacy posture
              </div>
              <p className="mt-2 text-sm text-white/80">
                Data handling notes, minimisation guidance, and region-aware summaries (AU/UK/US).
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
            q="Is this a dialer replacement?"
            a={
              <>
                It can be deployed to support outbound + inbound engagement operations depending on scope. The focus is
                standardised execution with visibility and controls.
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
          <FaqItem
            q="Can we start small?"
            a={
              <>
                Yes — start with the smallest scope that gets you operational (e.g., routing + reporting patterns), then
                expand with clearer governance over time.
              </>
            }
          />
          <FaqItem
            q="How does this relate to CapantraOne?"
            a={
              <>
                CapantraOne provides the broader operating layer (workflows, forms, team management). Dial can operate
                independently or as part of a wider platform rollout.
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
              <div className="text-sm font-semibold text-black/85">Ready to map your engagement workflow?</div>
              <p className="mt-1 text-sm leading-relaxed text-black/60">
                Tell us your region, program type, and operating model — we’ll suggest the simplest production path.
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
