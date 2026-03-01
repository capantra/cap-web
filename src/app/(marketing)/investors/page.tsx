import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { ArrowRight, ChartColumn, Sparkles, ShieldCheck, Globe2, Layers, PhoneCall, Database } from "lucide-react";
import { CompanyHero } from "@/components/marketing/company/CompanyHero";
import { Section } from "@/components/marketing/Section";
import { Surface } from "@/components/marketing/Surface";
import { InvestorRelationsForm } from "@/components/marketing/investors/InvestorRelationsForm";

export const metadata: Metadata = {
  title: "Investors | Capantra",
  description:
    "Investor overview for Capantra: platform strategy, product momentum, and regulated market opportunity.",
};

function SignalCard({
  title,
  body,
  icon: Icon,
}: {
  title: string;
  body: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Surface variant="outline" className="p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-black/[0.04]">
          <Icon className="h-5 w-5 text-black/70" />
        </div>
        <div>
          <div className="text-sm font-semibold text-black/85">{title}</div>
          <p className="mt-2 text-sm leading-relaxed text-black/60">{body}</p>
        </div>
      </div>
    </Surface>
  );
}

export default function InvestorsPage() {
  return (
    <>
      <CompanyHero
        eyebrow="Investors"
        title="Building compliance-first infrastructure for a growing global need."
        subtitle="Capantra is building an integrated platform stack for regulated customer engagement: outbound infrastructure, governed operations, and data accountability in one operating model."
        primaryCta={{ label: "Investor contact", href: "#investor-form" }}
        secondaryCta={{ label: "Explore solutions", href: "/solutions" }}
      />

      <Section tone="plain" className="py-14">
        <div className="grid gap-4 lg:grid-cols-3">
          <SignalCard
            icon={Layers}
            title="Platform architecture"
            body="One shared operating layer across multiple product surfaces reduces fragmentation and supports durable expansion."
          />
          <SignalCard
            icon={ShieldCheck}
            title="Regulation-aligned posture"
            body="Governance, policy, and trust artefacts are embedded in product and go-to-market posture from day one."
          />
          <SignalCard
            icon={Globe2}
            title="Cross-jurisdiction relevance"
            body="Built AU-first with clear alignment to UK/US expectations for privacy, telecom obligations, and operational controls."
          />
        </div>
      </Section>

      <Section tone="tint" className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-black/45">Why now</div>
            <h2 className="mt-2 text-2xl font-semibold text-black/85">
              The engagement stack is converging around accountability.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60">
              Operators increasingly need systems that balance performance with control. Capantra is positioned at this
              convergence point: execution speed, governance visibility, and procurement-ready documentation.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Surface variant="outline" className="p-5">
                <div className="flex items-start gap-3">
                  <ChartColumn className="mt-0.5 h-5 w-5 text-black/70" />
                  <div>
                    <div className="text-sm font-semibold text-black/80">Operational leverage</div>
                    <p className="mt-1 text-sm leading-relaxed text-black/60">
                      Unified tooling improves execution consistency and lowers coordination overhead for multi-client teams.
                    </p>
                  </div>
                </div>
              </Surface>
              <Surface variant="outline" className="p-5">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-5 w-5 text-black/70" />
                  <div>
                    <div className="text-sm font-semibold text-black/80">Product optionality</div>
                    <p className="mt-1 text-sm leading-relaxed text-black/60">
                      Modular surfaces support phased adoption and expansion paths without rebuilding core operations.
                    </p>
                  </div>
                </div>
              </Surface>
            </div>
          </div>

          <Surface variant="soft" className="p-6 lg:p-8">
            <div className="text-xs font-semibold uppercase tracking-wide text-black/45">Solutions momentum</div>
            <div className="mt-3 space-y-3">
              {[
                { icon: PhoneCall, name: "CapantraDial", note: "Engagement infrastructure" },
                { icon: Layers, name: "CapantraOne", note: "Operating layer + workflows" },
                { icon: Database, name: "CapantraData", note: "Governed data handling" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between rounded-2xl border border-black/10 bg-white/70 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-black/[0.04]">
                      <item.icon className="h-4 w-4 text-black/70" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-black/80">{item.name}</div>
                      <div className="text-xs text-black/55">{item.note}</div>
                    </div>
                  </div>
                  <Link href={`/solutions/${item.name.toLowerCase()}`} className="text-xs font-semibold text-black/60 hover:text-black/85">
                    View →
                  </Link>
                </div>
              ))}
            </div>

            <Link
              href="/solutions"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-black/70 hover:text-black"
            >
              View full solution suite <ArrowRight className="h-4 w-4" />
            </Link>
          </Surface>
        </div>
      </Section>

      <Section tone="gradient" className="py-14">
        <div id="investor-form" className="scroll-mt-28" />
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-black/45">Investor relations</div>
            <h2 className="mt-2 text-2xl font-semibold text-black/85">Let’s discuss strategic fit.</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-black/60">
              We welcome conversations with investors aligned to long-term platform building in regulated environments.
              Share your focus, and we’ll coordinate the right next discussion.
            </p>

            <Surface variant="outline" className="mt-6 p-6">
              <div className="text-sm font-semibold text-black/80">What to include</div>
              <ul className="mt-3 space-y-2">
                {[
                  "Investment stage and mandate",
                  "Relevant domain focus",
                  "Preferred discussion scope (product, market, partnerships)",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black/35" />
                    <span className="text-sm text-black/65">{item}</span>
                  </li>
                ))}
              </ul>
            </Surface>
          </div>

          <InvestorRelationsForm />
        </div>
      </Section>
    </>
  );
}
