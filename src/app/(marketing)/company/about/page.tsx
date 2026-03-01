import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  PhoneCall,
  Database,
  Layers,
} from "lucide-react";
import { Section } from "@/components/marketing/Section";
import { Split } from "@/components/marketing/Split";
import { Surface } from "@/components/marketing/Surface";
import { CompanyHero } from "@/components/marketing/company/CompanyHero";
import { ValuesGrid } from "@/components/marketing/company/ValuesGrid";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Capantra’s mission, operating principles, and approach to compliant customer engagement platforms.",
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-black/[0.02] px-3 py-1 text-xs font-semibold text-black/60">
      {children}
    </span>
  );
}

function ProductTiles() {
  const items = [
    {
      name: "CapantraDial",
      icon: PhoneCall,
      href: "/solutions/capantradial",
      body: "Engagement infrastructure for outbound + inbound operations, with controls and reporting patterns.",
      bullets: ["Campaign controls", "Routing + reporting", "Responsible-use posture"],
    },
    {
      name: "CapantraOne",
      icon: Layers,
      href: "/solutions/capantraone",
      body: "The operating layer that unifies workflows, forms, and team management in a single platform.",
      bullets: ["Workflow + forms", "Agent management", "Operational visibility"],
      featured: true,
    },
    {
      name: "CapantraData",
      icon: Database,
      href: "/solutions/capantradata",
      body: "Governed data services and patterns designed to support transparency and suppression workflows.",
      bullets: ["Governed handling", "Suppression support", "Region-aware notes"],
    },
  ];

  return (
    <div className="mt-8 grid gap-4 lg:grid-cols-3">
      {items.map((it) => (
        <div
          key={it.name}
          className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black/[0.04]">
              <it.icon className="h-6 w-6 text-black/70" />
            </div>
            {it.featured ? (
              <span className="inline-flex rounded-full border border-black/10 bg-black/[0.03] px-2 py-0.5 text-[10px] font-semibold text-black/55">
                Flagship
              </span>
            ) : null}
          </div>

          <div className="mt-4 text-lg font-semibold text-black/85">{it.name}</div>
          <p className="mt-2 text-sm leading-relaxed text-black/60">{it.body}</p>

          <ul className="mt-4 space-y-2">
            {it.bullets.map((b) => (
              <li key={b} className="text-sm text-black/65">
                <span className="mr-2 text-black/30">•</span>
                {b}
              </li>
            ))}
          </ul>

          <Link
            href={it.href}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black/70 hover:text-black"
          >
            Learn more <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <CompanyHero
        eyebrow="Company"
        title="Built for operators. Designed for governance."
        subtitle="Capantra builds customer engagement infrastructure for agencies and operators who need repeatable delivery, clear controls, and review-ready documentation."
        primaryCta={{ label: "Contact", href: "/company/contact" }}
        secondaryCta={{ label: "Explore solutions", href: "/solutions" }}
      />

      <Section tone="plain" className="py-14">
        <Split
          left={
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Pill>Mission</Pill>
                <Pill>Vision</Pill>
                <Pill>Operating principles</Pill>
              </div>

              <h2 className="mt-4 text-2xl font-semibold text-black/85">
                Digital infrastructure for revenue operations.
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60">
                Our mission is to help teams run outbound + inbound engagement with
                clarity and accountability. Our vision is a modern operating layer
                where governance isn’t an afterthought — it’s part of the product.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Surface variant="outline" className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-black/[0.04]">
                      <Sparkles className="h-5 w-5 text-black/70" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-black/80">
                        Operator-first
                      </div>
                      <div className="mt-1 text-sm leading-relaxed text-black/60">
                        Built for agencies and BPO teams managing high-volume
                        engagement across clients and regions.
                      </div>
                    </div>
                  </div>
                </Surface>

                <Surface variant="outline" className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-black/[0.04]">
                      <ShieldCheck className="h-5 w-5 text-black/70" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-black/80">
                        Governance-first
                      </div>
                      <div className="mt-1 text-sm leading-relaxed text-black/60">
                        Documentation, versioning, and control patterns designed
                        for procurement review and trust.
                      </div>
                    </div>
                  </div>
                </Surface>
              </div>

              <div className="mt-7 flex flex-col gap-2 sm:flex-row">
                <Link
                  href="/trust/overview"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-black px-6 text-sm font-semibold text-white hover:bg-black/90"
                >
                  Trust Center
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-black/15 bg-white px-6 text-sm font-semibold text-black/75 hover:bg-black/[0.03]"
                >
                  View solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          }
          right={
            <Surface variant="soft" className="p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-black/45">
                What we build
              </div>
              <div className="mt-3 text-sm font-semibold text-black/80">
                A shared operating layer
              </div>
              <p className="mt-2 text-sm leading-relaxed text-black/60">
                Capantra is structured as a platform with product surfaces that
                can be adopted independently — while sharing consistent
                governance and operational primitives.
              </p>

              <div className="mt-5 space-y-2">
                {[
                  { label: "Engagement", value: "Dial + messaging + routing" },
                  { label: "Operations", value: "Workflows, forms, team management" },
                  { label: "Governance", value: "Versioned policies, region notes, controls" },
                ].map((r) => (
                  <div
                    key={r.label}
                    className="flex items-center justify-between rounded-2xl border border-black/10 bg-white/70 px-4 py-3"
                  >
                    <div className="text-xs font-semibold text-black/55">{r.label}</div>
                    <div className="text-sm font-semibold text-black/75">{r.value}</div>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs leading-relaxed text-black/45">
                Note: capabilities and requirements vary by jurisdiction and use case.
                See the Trust Center for detail.
              </p>
            </Surface>
          }
          rightSticky
        />
      </Section>

      <Section tone="tint" className="py-14">
        <h2 className="text-2xl font-semibold text-black/85">Platforms</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60">
          Three product surfaces — one consistent posture for governance and
          operational visibility.
        </p>
        <ProductTiles />
      </Section>

      <Section tone="plain" className="py-14">
        <h2 className="text-2xl font-semibold text-black/85">Operating principles</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60">
          These principles shape how we build and how we engage with customers —
          especially in regulated environments.
        </p>
        <ValuesGrid />
      </Section>

      <Section tone="gradient" className="py-14">
        <Surface variant="outline" className="p-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-sm font-semibold text-black/85">Want to work with us?</div>
              <p className="mt-1 text-sm leading-relaxed text-black/60">
                Share your use case, region, and timeline — we’ll respond with a clear next step.
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
                href="/trust/overview"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-black/15 bg-white px-6 text-sm font-semibold text-black/75 hover:bg-black/[0.03]"
              >
                Trust Center <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </Surface>
      </Section>
    </>
  );
}
