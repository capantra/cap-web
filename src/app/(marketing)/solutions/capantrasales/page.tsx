import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import {
  ArrowRight,
  Users,
  ClipboardList,
  LineChart,
  Wallet,
  UserCheck,
  ShieldCheck,
  Lock,
  CheckCircle2,
  PhoneCall,
  MapPin,
  Building2,
} from "lucide-react";
import { Section } from "@/components/marketing/Section";
import { ProductHero } from "@/components/marketing/ProductHero";
import { Surface } from "@/components/marketing/Surface";
import { SolutionBriefingForm } from "@/components/marketing/solutions/SolutionBriefingForm";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "CapantraSales | Solutions",
  description:
    "CapantraSales helps telefundraising and outbound teams execute compliant campaigns with clear governance controls.",
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
        <h3 className="text-lg font-semibold text-black/90">{title}</h3>
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
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/35" />
          <span className="text-sm text-black/65">{t}</span>
        </li>
      ))}
    </ul>
  );
}

/* ----------------------------- Inline visuals ----------------------------- */

function DiagramFrame({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <Surface variant="outline" className="p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="text-sm font-semibold text-black/85">{title}</div>
          <div className="mt-1 text-sm leading-relaxed text-black/60">{subtitle}</div>
        </div>
        <span className="inline-flex items-center self-start rounded-full border border-black/10 bg-black/[0.03] px-2.5 py-1 text-[11px] font-semibold text-black/55">
          Diagram
        </span>
      </div>

      <div className="mt-5">{children}</div>

      {footer ? (
        <div className="mt-5 rounded-2xl border border-black/10 bg-black/[0.02] p-4 text-xs leading-relaxed text-black/55">
          {footer}
        </div>
      ) : null}
    </Surface>
  );
}

function Node({
  icon: Icon,
  title,
  body,
  tone = "soft",
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
  tone?: "soft" | "plain";
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-4 shadow-sm",
        tone === "soft" ? "border-black/10 bg-white/80" : "border-black/10 bg-white"
      )}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black/[0.04]">
          <Icon className="h-5 w-5 text-black/70" />
        </div>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-black/85">{title}</div>
          <div className="mt-1 text-sm leading-relaxed text-black/60">{body}</div>
        </div>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex items-center justify-center">
      <div className="h-[2px] w-10 rounded-full bg-black/15" />
      <div className="-ml-1 h-2 w-2 rotate-45 border-r-2 border-t-2 border-black/25" />
    </div>
  );
}

/** 1) Agent flow: activity -> capture -> QA -> next action -> outcomes */
function AgentFlowDiagram() {
  const steps = [
    { icon: MapPin, title: "Field / Phone activity", body: "Visits, calls, follow-ups" },
    { icon: ClipboardList, title: "Structured capture", body: "Entries captured consistently" },
    { icon: ShieldCheck, title: "QA + rules", body: "Checks, exceptions, approvals" },
    { icon: Users, title: "Next actions", body: "Tasks + reminders + handover" },
    { icon: CheckCircle2, title: "Outcome logged", body: "Results recorded for reporting" },
  ];

  return (
    <div className="grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr]">
      {steps.map((s, idx) => (
        <React.Fragment key={s.title}>
          <Node icon={s.icon} title={s.title} body={s.body} />
          {idx < steps.length - 1 ? <Arrow /> : null}
        </React.Fragment>
      ))}
    </div>
  );
}

/** 2) KPI loop: actions -> KPIs -> coaching -> changes -> actions */
function KpiLoopDiagram() {
  const ring = [
    { icon: PhoneCall, title: "Activity", body: "Calls, visits, follow-ups" },
    { icon: LineChart, title: "KPIs", body: "Conversion, show, quality" },
    { icon: Users, title: "Coaching", body: "QA + feedback loop" },
    { icon: ClipboardList, title: "Playbook updates", body: "Scripts + steps refined" },
  ];

  return (
    <div className="grid gap-3 lg:grid-cols-2">
      <Surface variant="soft" className="p-5">
        <div className="text-xs font-semibold uppercase tracking-wide text-black/45">Loop</div>
        <div className="mt-2 text-sm font-semibold text-black/80">Measure → Coach → Improve</div>
        <p className="mt-2 text-sm leading-relaxed text-black/60">
          KPI tracking is most useful when it closes a loop: consistent capture feeds reporting, which drives coaching and
          playbook improvement.
        </p>
        <div className="mt-4 space-y-2">
          {[
            "Activity KPIs: volume + consistency",
            "Quality KPIs: QA scores + rule exceptions",
            "Outcome KPIs: conversion + revenue",
          ].map((x) => (
            <div key={x} className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-black/65">
              <span className="mr-2 text-black/30">•</span>
              {x}
            </div>
          ))}
        </div>
      </Surface>

      <div className="relative rounded-3xl border border-black/10 bg-white p-5 shadow-sm">
        <div className="grid gap-3 sm:grid-cols-2">
          {ring.map((r) => (
            <Node key={r.title} icon={r.icon} title={r.title} body={r.body} />
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-black/10 bg-black/[0.02] p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-black/85">
            <CheckCircle2 className="h-4 w-4 text-black/60" />
            Output
          </div>
          <p className="mt-2 text-sm leading-relaxed text-black/60">
            Improved execution standards, better predictability, and a clearer view of true performance.
          </p>
        </div>
      </div>
    </div>
  );
}

/** 3) Cost -> profit map: costs + outcomes -> margin -> profitability */
function CostProfitDiagram() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
      <div className="space-y-3">
        <Node icon={Wallet} title="Costs" body="Wages, travel, tools, overhead allocation" />
        <Node icon={Users} title="Capacity" body="Hours, coverage, route density (field)" />
        <Node icon={Lock} title="Constraints" body="Territory, compliance rules, QA gates" />
      </div>

      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <div className="h-40 w-[2px] rounded-full bg-black/10" />
      </div>

      <div className="space-y-3">
        <Node icon={ClipboardList} title="Activity capture" body="What happened, where, when, result" />
        <Node icon={PhoneCall} title="Outcomes" body="Appointments, closes, revenue, uplift" />
        <Node icon={ShieldCheck} title="Quality" body="QA results, exceptions, rework rate" />
      </div>

      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <div className="h-40 w-[2px] rounded-full bg-black/10" />
      </div>

      <div className="space-y-3">
        <Node icon={LineChart} title="Margin" body="Revenue minus cost, per agent / team" />
        <Node icon={CheckCircle2} title="Profitability" body="True unit economics, trend + variance" />
        <Node icon={Building2} title="Operator view" body="Decisions: staffing, territories, programs" />
      </div>
    </div>
  );
}

/* -------------------------- Access / packaging --------------------------- */

function PriceCard({
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

function CompareTable() {
  const rows = [
    { k: "Primary user", sales: "Field reps + telesales agents", one: "Ops leaders + teams (workflow owners)" },
    { k: "Core outcome", sales: "Agent performance + unit economics", one: "Repeatable delivery + governance" },
    { k: "Data captured", sales: "Field entries, activity, costs, outcomes", one: "Workflows, forms, ops records" },
    { k: "Reporting focus", sales: "KPI, profitability, cost per outcome", one: "Ops reporting + oversight cadence" },
    { k: "Onboarding", sales: "Agent onboarding built-in", one: "Team/process onboarding patterns" },
  ];

  return (
    <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
      <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-black/10 bg-black/[0.02]">
        <div className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-black/45">Comparison</div>
        <div className="px-5 py-4 text-sm font-semibold text-black/85">CapantraSales</div>
        <div className="px-5 py-4 text-sm font-semibold text-black/85">CapantraOne</div>
      </div>

      {rows.map((r) => (
        <div key={r.k} className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-black/10 last:border-b-0">
          <div className="px-5 py-4 text-sm font-semibold text-black/65">{r.k}</div>
          <div className="px-5 py-4 text-sm text-black/70">{r.sales}</div>
          <div className="px-5 py-4 text-sm text-black/70">{r.one}</div>
        </div>
      ))}
    </div>
  );
}

export default function CapantraSalesPage() {
  return (
    <div className="w-full">
      <ProductHero
        variant="amberWave"
        badges={["Solution", "CapantraSales", "Demo ready"]}
        title={
          <>
            A purpose-built sales solution —
            <br className="hidden sm:block" /> designed for agents, not CRMs.
          </>
        }
        subtitle={
          <>
            CapantraSales is an add-on solution accessed through CapantraOne, supporting field and telesales teams
            with structured daily workflows and clear visibility into activity, performance and outcomes.
          </>
        }
        note={
          <>
            Note: CapantraSales requires an active CapantraOne admin licence. Calls are included. Minimum purchase is 2 agent licences plus one
            CapantraOne admin licence. CapantraSales is currently available for demos. Compliance, payroll and
            regulatory obligations remain the responsibility of the operator.
          </>
        }
        primaryCta={{ label: "Request a briefing/demo", href: "#briefing-form" }}
        secondaryCta={{ label: "Trust Center", href: "/trust/overview" }}
        right={
          <div className="space-y-4">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
              <div className="text-sm font-semibold text-black">Built for sales operators</div>
              <p className="mt-2 text-sm text-black/80">
                Track what actually matters: activity → outcomes → cost → profitability, per agent and per team.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Pill>Field entries</Pill>
                <Pill>Employee insights</Pill>
                <Pill>Contractor insights</Pill>
                <Pill>Agent KPIs</Pill>
                <Pill>Leaderboards</Pill>
                <Pill>Cost & margin</Pill>
                <Pill>Onboarding</Pill>
              </div>
            </div>
          </div>
        }
      />

      {/* What it solves */}
      <Section tone="plain" className="py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-black/90">What it is</h2>
            <p className="mt-3 text-sm leading-relaxed text-black/60">
              CapantraSales is built for speed and clarity, helping operators focus on execution instead of managing
              disconnected tools. It connects sales activity directly to cost and results so teams can optimize based on
              operational reality.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <SoftCard title="Agent-first workflows" icon={UserCheck}>
                Designed around daily agent activity and structured capture — not abstract pipeline stages.
              </SoftCard>
              <SoftCard title="Field + telesales support" icon={MapPin}>
                Capture field entries and telesales outcomes in one consistent operating model.
              </SoftCard>
            </div>
          </div>

          <Surface variant="soft" className="p-6 lg:p-8">
            <div className="text-sm font-semibold text-black/80">Core focus areas</div>
            <BulletList
              items={[
                "Agent activity and outcome tracking",
                "In-depth employee and contractor insights",
                "KPI measurement by role and program",
                "Leaderboards for performance visibility",
                "Cost attribution per agent",
                "Profitability by team or campaign",
              ]}
            />
          </Surface>
        </div>
      </Section>

      {/* Visuals */}
      <Section tone="tint" className="py-12">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-black/45">Diagrams</div>
            <h2 className="mt-2 text-2xl font-semibold text-black/85">Visualise the operating model.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60">
              These diagrams are conceptual — meant to show the rhythm of CapantraSales: capture → measure → improve →
              profitability.
            </p>
          </div>
          <Link
            href="#briefing-form"
            className="inline-flex items-center gap-2 self-start rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-black/70 hover:bg-black/[0.03]"
          >
            Request a briefing/demo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-4">
          <DiagramFrame
            title="Agent flow"
            subtitle="How field and telesales activity becomes structured entries, QA, next actions, and outcomes."
            footer="Outcome: consistent capture + less ambiguity, which makes KPIs and profitability measurable."
          >
            <AgentFlowDiagram />
          </DiagramFrame>

          <DiagramFrame
            title="KPI loop"
            subtitle="KPIs are only useful when they close a loop: measure → coach → improve → repeat."
            footer="Outcome: execution standards improve over time, and operators get predictable performance signals."
          >
            <KpiLoopDiagram />
          </DiagramFrame>

          <DiagramFrame
            title="Cost → profit map"
            subtitle="Profitability requires connecting costs and constraints to outcomes — at agent and team level."
            footer="Outcome: true unit economics (cost per outcome, margin per agent/team) to guide staffing and programs."
          >
            <CostProfitDiagram />
          </DiagramFrame>
        </div>
      </Section>

      {/* Capabilities */}
      <Section tone="plain" className="py-12">
        <div className="grid gap-4 lg:grid-cols-3">
          <SoftCard title="KPI tracking" icon={LineChart}>
            Measure agent performance using activity-linked KPIs rather than vanity pipeline metrics.
          </SoftCard>
          <SoftCard title="Cost & profitability" icon={Wallet}>
            Attribute cost at agent and team level to understand true unit economics.
          </SoftCard>
          <SoftCard title="Structured onboarding" icon={ClipboardList}>
            Formalise onboarding, role expectations, and execution standards.
          </SoftCard>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <Surface variant="outline" className="p-6">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-black/[0.04]">
                <CheckCircle2 className="h-5 w-5 text-black/70" />
              </div>
              <div>
                <div className="text-sm font-semibold text-black/85">Built for operator decisions</div>
                <p className="mt-2 text-sm leading-relaxed text-black/60">
                  CapantraSales is designed to answer: “Which agent models are profitable, and why?”
                </p>
                <BulletList
                  items={[
                    "KPI + quality signals connected to actual outcomes.",
                    "Cost attribution to avoid ‘invisible’ margin leakage.",
                    "Operator view designed for staffing and program decisions.",
                  ]}
                />
              </div>
            </div>
          </Surface>

          <Surface variant="outline" className="p-6">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-black/[0.04]">
                <UserCheck className="h-5 w-5 text-black/70" />
              </div>
              <div>
                <div className="text-sm font-semibold text-black/85">Onboarding that sticks</div>
                <p className="mt-2 text-sm leading-relaxed text-black/60">
                  Structured onboarding reduces variance and makes coaching measurable.
                </p>
                <BulletList
                  items={[
                    "Role expectations and playbook standards.",
                    "Structured capture reduces ‘free text chaos’.",
                    "QA + coaching loop to improve execution.",
                  ]}
                />
              </div>
            </div>
          </Surface>
        </div>
      </Section>

      {/* Access / packaging */}
      <Section tone="gradient" className="py-12">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-black/45">Packaging</div>
          <h2 className="mt-2 text-2xl font-semibold text-black/85">CapantraSales with CapantraOne</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60">
            CapantraSales is an agent-first add-on (field + telesales) with profitability-grade tracking. CapantraOne is the
            required platform layer for workflows and team operations across functions.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <PriceCard
            title="CapantraSales"
            badge="Agent-first"
            accessHint="Requires CapantraOne platform access (commercial terms via briefing/demo)"
            bestFor="Field reps + telesales teams that need KPI + profitability visibility."
            bullets={[
              "Field entries + activity capture",
              "KPI tracking + coaching loop",
              "Cost + margin + profitability views",
              "Minimum 2 agent licences + 1 CapantraOne admin licence",
              "Agent onboarding and standards",
            ]}
            cta={{ label: "Request a briefing/demo", href: "#briefing-form" }}
            featured
          />

          <PriceCard
            title="CapantraOne"
            badge="Operating layer"
            accessHint="Required platform licence (commercial terms via briefing/demo)"
            bestFor="Teams standardising workflows, forms, operations and governance across programs."
            bullets={[
              "Workflow + form standardisation",
              "Team operations + controls",
              "Oversight cadence + reporting surfaces",
              "Composable with Dial/Data/Sales",
            ]}
            cta={{ label: "View CapantraOne", href: "/solutions/capantraone" }}
          />
        </div>

        <div className="mt-6">
          <CompareTable />
        </div>

        <Surface variant="soft" className="mt-6 p-6">
          <div className="text-sm font-semibold text-black/85">Recommended buying path</div>
          <div className="mt-2 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-black/45">Start with CapantraOne (required)</div>
              <ul className="mt-2 space-y-2 text-sm text-black/65">
                <li>
                  <span className="mr-2 text-black/30">•</span>
                  CapantraOne is the required platform licence.
                </li>
                <li>
                  <span className="mr-2 text-black/30">•</span>
                  Set workflows, forms and governance at the platform level first.
                </li>
                <li>
                  <span className="mr-2 text-black/30">•</span>
                  Minimum baseline for Sales is 1 CapantraOne admin licence + 2 agent licences.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-black/45">Add CapantraSales when</div>
              <ul className="mt-2 space-y-2 text-sm text-black/65">
                <li>
                  <span className="mr-2 text-black/30">•</span>
                  Your primary users are agents (field or telesales).
                </li>
                <li>
                  <span className="mr-2 text-black/30">•</span>
                  You care about cost per outcome and profitability.
                </li>
                <li>
                  <span className="mr-2 text-black/30">•</span>
                  You need structured onboarding and performance loops (calls included).
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            <Link
              href="#briefing-form"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-black px-6 text-sm font-semibold text-white hover:bg-black/90"
            >
              Request a briefing/demo
            </Link>
            <Link
              href="/solutions"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-black/15 bg-white px-6 text-sm font-semibold text-black/75 hover:bg-black/[0.03]"
            >
              View all solutions <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </Surface>
      </Section>

      <Section tone="plain" className="py-12">
        <SolutionBriefingForm solution="capantrasales" />
      </Section>

      {/* Trust band */}
      <Section tone="dark" className="py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-white">Built with operational control in mind.</h2>
            <p className="mt-3 text-sm text-white/80">
              CapantraSales includes governance cues and documentation to support oversight and procurement review.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Pill>Role boundaries</Pill>
              <Pill>Audit-friendly</Pill>
              <Pill>Trust Center</Pill>
            </div>
          </div>

          <div className="grid gap-3">
            <Surface variant="soft" className="p-5">
              <ShieldCheck className="h-5 w-5 text-black/70" />
              <p className="mt-2 text-sm text-black/60">
                Governance artefacts and scope statements available via Trust Center.
              </p>
            </Surface>
            <Surface variant="soft" className="p-5">
              <Lock className="h-5 w-5 text-black/70" />
              <p className="mt-2 text-sm text-black/60">
                Designed for least-privilege access and operational oversight.
              </p>
            </Surface>
          </div>
        </div>
      </Section>

    </div>
  );
}
