import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import {
  ArrowRight,
  PhoneCall,
  Database,
  Layers,
  ShieldCheck,
  FileText,
  Lock,
  CheckCircle2,
  Users,
  Building2,
  Headphones,
  Workflow,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { Section } from "@/components/marketing/Section";
import { Surface } from "@/components/marketing/Surface";
import { ProductHero } from "@/components/marketing/ProductHero";

export const metadata: Metadata = {
  title: "Solutions | Solutions",
  description:
    "Explore Capantra solutions for regulated engagement operations, governance-first workflows, and procurement-ready delivery.",
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/85 backdrop-blur">
      {children}
    </span>
  );
}

function Stat({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-black/55">
            {label}
          </div>
          <div className="mt-2 text-lg font-semibold text-black">{value}</div>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black/10">
          <Icon className="h-6 w-6 text-black/80" />
        </div>
      </div>
    </div>
  );
}

function ProductCard({
  title,
  body,
  icon: Icon,
  href,
  featured,
  bullets,
  comingSoon,
  statusLabel,
  primaryLabel,
}: {
  title: string;
  body: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  featured?: boolean;
  bullets: string[];
  comingSoon?: boolean;
  statusLabel?: string;
  primaryLabel?: string;
}) {
  return (
    <Surface variant="outline" className="flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black/[0.04]">
          <Icon className="h-6 w-6 text-black/70" />
        </div>

        {statusLabel ? (
          <span className="inline-flex items-center rounded-full border border-black/10 bg-black/[0.03] px-2.5 py-1 text-[11px] font-semibold text-black/60">
            {statusLabel}
          </span>
        ) : comingSoon ? (
          <span className="inline-flex items-center rounded-full border border-black/10 bg-black/[0.03] px-2.5 py-1 text-[11px] font-semibold text-black/60">
            Coming soon
          </span>
        ) : featured ? (
          <span className="inline-flex items-center rounded-full border border-black/10 bg-black/[0.03] px-2.5 py-1 text-[11px] font-semibold text-black/60">
            Flagship
          </span>
        ) : null}
      </div>

      <h3 className="mt-4 text-lg font-semibold text-black/85">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-black/60">{body}</p>

      <ul className="mt-4 space-y-2">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black/35" />
            <span className="text-sm text-black/65">{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-col gap-2 pt-6 sm:flex-row">
        <Link
          href={href}
          className="inline-flex h-11 items-center justify-center rounded-xl bg-black px-5 text-sm font-semibold text-white hover:bg-black/90"
        >
          {primaryLabel ?? (comingSoon ? "View preview" : `View ${title}`)} <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        <Link
          href={comingSoon ? "/investors" : "/trust/overview"}
          className="inline-flex h-11 items-center justify-center rounded-xl border border-black/15 bg-white px-5 text-sm font-semibold text-black/75 hover:bg-black/[0.03]"
        >
          {comingSoon ? "Investor updates" : "Trust posture"}
        </Link>
      </div>
    </Surface>
  );
}

function AudienceCard({
  title,
  body,
  icon: Icon,
  bullets,
}: {
  title: string;
  body: string;
  icon: React.ComponentType<{ className?: string }>;
  bullets: string[];
}) {
  return (
    <Surface variant="outline" className="p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black/[0.04]">
        <Icon className="h-6 w-6 text-black/70" />
      </div>
      <div className="mt-4 text-sm font-semibold text-black/85">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-black/60">{body}</div>
      <ul className="mt-4 space-y-2">
        {bullets.map((b) => (
          <li key={b} className="text-sm text-black/65">
            <span className="mr-2 text-black/30">•</span>
            {b}
          </li>
        ))}
      </ul>
    </Surface>
  );
}

function FaqItem({ q, a }: { q: string; a: React.ReactNode }) {
  return (
    <details className="group rounded-2xl border border-black/10 bg-white/70 p-5 backdrop-blur">
      <summary className="cursor-pointer list-none select-none text-sm font-semibold text-black/80">
        <span className="inline-flex items-center justify-between gap-3">
          {q}
          <span className="text-black/40 transition group-open:rotate-180">
            ⌄
          </span>
        </span>
      </summary>
      <div className="mt-3 text-sm leading-relaxed text-black/60">{a}</div>
    </details>
  );
}

const EVAL_STEPS = [
  "Review Trust Center documentation.",
  "Confirm region + use case requirements.",
  "Choose product surface(s): Dial, One, Data.",
  "Define rollout scope and operating controls.",
];

export default function SolutionsPage() {
  return (
    <div className="w-full">
      <ProductHero
        variant="aquaWave"
        badges={["Solutions", "Platform + add-ons", "AU · UK · US"]}
        title={
          <>
            Solutions for engagement, data and operations —
            <br className="hidden sm:block" /> built for operators.
          </>
        }
        subtitle={
          <>
            Capantra is designed for agencies, BPO teams and telefundraising
            operators who need repeatable delivery, clear controls, and
            procurement-ready documentation.
          </>
        }
        note={
          <>
            Requirements vary by jurisdiction and use case. Review the Trust
            Center for governance notes and artefacts.
            <br className="hidden sm:block" />
            CapantraSales is demo-ready. CapantraDial is in beta testing. CapantraData is set to launch on 1 July
            2026.
          </>
        }
        primaryCta={{ label: "Explore solutions", href: "#platforms" }}
        secondaryCta={{ label: "Trust Center", href: "/trust/overview" }}
        right={
          <div className="space-y-4">
            <Stat label="Approach" value="Procurement-first" icon={ShieldCheck} />
            <Stat label="Design goal" value="Operational clarity" icon={Workflow} />
            <Stat label="Posture" value="Governance by default" icon={Lock} />

            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
              <div className="flex items-center gap-2 text-sm font-semibold text-black">
                <FileText className="h-4 w-4 text-black/80" />
                Start with the Trust Center
              </div>
              <p className="mt-2 text-sm text-black/80">
                Security, privacy and governance artefacts are versioned and
                easier to assess before mapping solution scope.
              </p>

              <div className="mt-5 grid gap-2">
                <Link
                  href="/trust/overview"
                  className={cn(
                    "inline-flex h-11 items-center justify-center rounded-xl bg-black px-5 text-sm font-semibold text-white hover:bg-black/90",
                    "whitespace-nowrap"
                  )}
                >
                  Review Trust Center <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/company/contact"
                  className={cn(
                    "inline-flex h-11 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 text-sm font-semibold text-black hover:bg-white/10",
                    "whitespace-nowrap"
                  )}
                >
                  Request a briefing/demo
                </Link>
              </div>
            </div>
          </div>
        }
      />

      {/* Platforms */}
      <Section tone="plain" className="py-14">
        <div id="platforms" className="scroll-mt-28" />

        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-black/45">
              Solutions
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-black/85">
              Choose an add-on. Keep one operating platform.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60">
              Current focus is CapantraSales (demo ready), CapantraDial (beta testing), and CapantraData (launching 1
              July 2026) — all powered through a shared operating model.
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-black/55">
              CapantraOne is the main operating system and required licence for accessing Dial, Data, and Sales.
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-black/55">
              Commercial terms are provided during a briefing. CapantraOne is required for add-on access, and Sales/Dial
              follow defined packaging rules including call inclusion and baseline team requirements.
            </p>
          </div>

          <Link
            href="/company/contact"
            className="inline-flex items-center gap-2 self-start rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-black/70 hover:bg-black/[0.03]"
          >
            Request a briefing/demo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <Surface variant="soft" className="mt-8 p-6">
          <div className="text-sm font-semibold text-black/85">CapantraOne: the operating system</div>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-black/60">
            CapantraOne is the management console and control plane for the full Capantra suite. Customers must hold a
            CapantraOne licence to access CapantraSales, CapantraData, or CapantraDial.
          </p>
        </Surface>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <ProductCard
            title="CapantraSales"
            icon={Users}
            href="/solutions/capantrasales"
            body="Field sales management platform with in-depth employee and contractor insights, onboarding, leaderboards, and KPI visibility."
            bullets={[
              "Field + telesales operations",
              "Leaderboards, KPI, cost and profitability tracking",
              "Requires CapantraOne platform access",
            ]}
            statusLabel="Demo ready"
            primaryLabel="Book demo"
          />

          <ProductCard
            title="CapantraDial"
            icon={PhoneCall}
            href="/solutions/capantradial"
            body="Engagement infrastructure for inbound and outbound calling with routing, reporting and operational controls."
            bullets={[
              "Inbound + outbound engagement patterns.",
              "Operational visibility and reporting.",
              "Requires CapantraOne and includes CapantraSales access.",
            ]}
            statusLabel="Beta testing phase"
            primaryLabel="View beta overview"
          />

          <ProductCard
            title="CapantraData"
            icon={Database}
            href="/solutions/capantradata"
            body="Governed data handling patterns supporting suppression, requests, and transparency workflows."
            bullets={[
              "Governance-first data handling.",
              "Suppression + request workflows.",
              "Requires CapantraOne licence.",
            ]}
            statusLabel="Launches 1 Jul 2026"
            primaryLabel="View launch plan"
          />
        </div>
      </Section>

      {/* Where it fits */}
      <Section tone="tint" className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-black/55">
              Where Capantra fits
              <span className="h-1 w-1 rounded-full bg-black/25" />
              An operating layer
            </div>

            <h2 className="mt-4 text-2xl font-semibold text-black/85">
              Reduce fragmentation across tools, vendors and workflows.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60">
              Most teams stitch together diallers, spreadsheets, CRMs, scripts
              and ad-hoc processes. Capantra standardises execution so
              operations can scale without losing oversight.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <Surface variant="outline" className="p-6">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-black/[0.04]">
                    <CheckCircle2 className="h-5 w-5 text-black/70" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-black/80">
                      Repeatable delivery
                    </div>
                    <div className="mt-1 text-sm leading-relaxed text-black/60">
                      Standardise campaigns, scripts, workflows and reporting so
                      teams can deliver consistently across clients.
                    </div>
                  </div>
                </div>
              </Surface>

              <Surface variant="outline" className="p-6">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-black/[0.04]">
                    <Lock className="h-5 w-5 text-black/70" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-black/80">
                      Controls + visibility
                    </div>
                    <div className="mt-1 text-sm leading-relaxed text-black/60">
                      Clearer ownership, role patterns and reporting that
                      supports oversight and accountability.
                    </div>
                  </div>
                </div>
              </Surface>
            </div>
          </div>

          <Surface variant="soft" className="p-6 lg:p-8">
            <div className="text-xs font-semibold uppercase tracking-wide text-black/45">
              Stack view
            </div>
            <div className="mt-3 text-sm font-semibold text-black/80">
              One operating layer, three surfaces.
            </div>
            <p className="mt-2 text-sm leading-relaxed text-black/60">
              Dial covers engagement. One unifies workflows + management. Data
              supports governed handling and suppression patterns.
            </p>

            <div className="mt-6 space-y-3">
              {[
                { label: "Engagement", value: "Dial · routing · reporting", icon: PhoneCall },
                { label: "Operations", value: "Workflows · forms · teams", icon: Layers },
                { label: "Governance", value: "Policies · notes · controls", icon: ShieldCheck },
                { label: "Data", value: "Suppression · requests · handling", icon: Database },
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

            <div className="mt-6 rounded-2xl border border-black/10 bg-white p-5">
              <div className="text-sm font-semibold text-black/80">
                Want a tailored mapping?
              </div>
              <p className="mt-2 text-sm leading-relaxed text-black/60">
                Share your region, channels, and operating model — we’ll map the
                simplest path to production.
              </p>
              <Link
                href="/company/contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-black/70 hover:text-black"
              >
                Request a briefing/demo <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Surface>
        </div>
      </Section>

      {/* Who it's for */}
      <Section tone="plain" className="py-14">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-black/45">
              Who it’s for
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-black/85">
              Built for agencies and operators.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60">
              Designed for environments where repeatable delivery, oversight and
              governance matter — especially in multi-client operating models.
            </p>
          </div>
          <Link
            href="/trust/overview"
            className="inline-flex items-center gap-2 self-start rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-black/70 hover:bg-black/[0.03]"
          >
            Review governance <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <AudienceCard
            title="Sales agencies"
            icon={Users}
            body="Run consistent campaigns across multiple clients with standardised workflows and clear reporting."
            bullets={[
              "Multi-client operating patterns.",
              "Campaign controls and QA posture.",
              "Reporting designed for oversight.",
            ]}
          />
          <AudienceCard
            title="BPO teams"
            icon={Building2}
            body="Unify outreach, intake and follow-up processes while keeping execution accountable and measurable."
            bullets={[
              "Role-based operational structure.",
              "Repeatable service delivery patterns.",
              "Audit-friendly process design.",
            ]}
          />
          <AudienceCard
            title="Telefundraising operators"
            icon={Headphones}
            body="Support high-volume engagement with governance-first handling and region-aware documentation."
            bullets={[
              "Suppression + consent signals (scope-dependent).",
              "Script + workflow support.",
              "Jurisdiction notes in Trust Center.",
            ]}
          />
        </div>
      </Section>

      {/* Trust band */}
      <Section tone="dark" className="py-14">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Pill>Operational clarity</Pill>
              <Pill>Governance-first</Pill>
              <Pill>Procurement-ready</Pill>
            </div>

            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Less fragmentation. More control.
            </h2>

            <p className="max-w-3xl text-sm leading-relaxed text-white/80">
              Built for teams that need one operating layer, not disconnected tool
              sprawl — with governance artefacts and commercial clarity that make
              procurement review easier.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <ShieldCheck className="h-4 w-4 text-white/80" />
                  Trust Center
                </div>
                <p className="mt-2 text-sm text-white/80">
                  Centralised security, privacy and governance documentation
                  with versioning.
                </p>
              </div>
              <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <FileText className="h-4 w-4 text-white/80" />
                  Commercial clarity
                </div>
                <p className="mt-2 text-sm text-white/80">
                  CapantraOne is the required platform baseline. Add-ons like
                  CapantraDial and CapantraSales follow explicit packaging and
                  access rules.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <CheckCircle2 className="h-4 w-4 text-white/80" />
              Recommended evaluation flow
            </div>
            <p className="mt-2 text-sm text-white/80">
              Start with governance artefacts, confirm the platform baseline,
              then map add-on scope against your operating model.
            </p>

            <ol className="mt-5 space-y-3 text-sm text-white/85">
              {EVAL_STEPS.map((s, i) => (
                <li key={s} className="flex gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs font-semibold">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed text-white/85">{s}</span>
                </li>
              ))}
            </ol>

            <div className="mt-6 grid gap-2">
              <Link
                href="/trust/overview"
                className={cn(
                  "inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black hover:bg-white/90",
                  "whitespace-nowrap"
                )}
              >
                Visit Trust Center <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/company/contact"
                className={cn(
                  "inline-flex h-11 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 text-sm font-semibold text-white hover:bg-white/10",
                  "whitespace-nowrap"
                )}
              >
                Request a briefing/demo
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="gradient" className="py-14">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-black/45">
            FAQ
          </div>
          <h2 className="mt-2 text-2xl font-semibold text-black/85">
            Common questions
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60">
            Quick answers to help procurement, operators, and founders align on
            scope.
          </p>
        </div>

        <div className="mt-8 grid gap-3 lg:grid-cols-2">
          <FaqItem
            q="Can we adopt a single product first?"
            a={
              <>
                Yes. Dial, One and Data can be adopted independently. The intent
                is to keep your operating layer consistent as you expand scope
                over time.
              </>
            }
          />
          <FaqItem
            q="Do you guarantee compliance?"
            a={
              <>
                We provide governance artefacts, documentation, and design
                patterns intended to support compliant operations. Final
                compliance depends on your jurisdiction, use case, and how the
                system is configured and used.
              </>
            }
          />
          <FaqItem
            q="What regions do you support?"
            a={
              <>
                AU-first with a structure to support UK/US considerations.
                Review the Trust Center for region notes and scope assumptions.
              </>
            }
          />
          <FaqItem
            q="How do we start?"
            a={
              <>
                Start with the Trust Center, then map your operating model and
                pick the smallest product surface that gets you to production.
              </>
            }
          />
        </div>
      </Section>

      {/* Final CTA */}
      <Section tone="plain" className="py-14">
        <Surface variant="outline" className="p-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-sm font-semibold text-black/85">
                Ready to map your rollout?
              </div>
              <p className="mt-1 text-sm leading-relaxed text-black/60">
                Tell us your region, channels, and operating model — we’ll
                suggest the most practical starting point.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link
                href="/company/contact"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-black px-6 text-sm font-semibold text-white hover:bg-black/90"
              >
                Request a briefing/demo
              </Link>
              <Link
                href="/trust/overview"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-black/15 bg-white px-6 text-sm font-semibold text-black/75 hover:bg-black/[0.03]"
              >
                Trust Center <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </Surface>
      </Section>
    </div>
  );
}
