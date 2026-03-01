"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Handshake, LifeBuoy, Mail } from "lucide-react";
import { Section } from "@/components/marketing/Section";
import { Surface } from "@/components/marketing/Surface";
import { CompanyHero } from "@/components/marketing/company/CompanyHero";
import { ContactMailtoForm } from "@/components/marketing/company/ContactMailtoForm";

function ContactCard({
  icon: Icon,
  title,
  body,
  onSelect,
  selected,
  hint,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
  onSelect: () => void;
  selected?: boolean;
  hint?: string;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={
        "group block rounded-3xl border bg-white p-6 text-left shadow-sm transition hover:bg-black/[0.01] " +
        (selected
          ? "border-black/30 ring-2 ring-black/10"
          : "border-black/10")
      }
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black/[0.04]">
        <Icon className="h-6 w-6 text-black/70" />
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="text-sm font-semibold text-black/85 group-hover:text-black">{title}</div>
        <ArrowRight className="h-4 w-4 text-black/30 group-hover:text-black/60" />
      </div>
      <div className="mt-2 text-sm leading-relaxed text-black/60">{body}</div>
      {hint ? <div className="mt-3 text-xs text-black/45">{hint}</div> : null}
    </button>
  );
}

export default function ContactPage() {
  const [selectedTopic, setSelectedTopic] = useState("General");
  const [focusSignal, setFocusSignal] = useState(0);
  const formWrapRef = useRef<HTMLDivElement | null>(null);

  const handleSelectTopic = (topic: string) => {
    setSelectedTopic(topic);
    setFocusSignal((n) => n + 1);
    formWrapRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <CompanyHero
        eyebrow="Company"
        title="Contact"
        subtitle="Tell us what you’re building — we’ll help map the most practical next step, with governance and region requirements in mind."
        primaryCta={{ label: "Trust Center", href: "/trust/overview" }}
        secondaryCta={{ label: "Explore solutions", href: "/solutions" }}
      />

      <Section tone="plain" className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold text-black/85">How can we help?</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-black/60">
              Choose a path below, or send a message. If you’re security or procurement,
              the Trust Center is the fastest starting point.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <ContactCard
                icon={Handshake}
                title="Sales & partnerships"
                body="Discuss use cases, rollout plans, or multi-client deployments for agencies and operators."
                onSelect={() => handleSelectTopic("Sales & partnerships")}
                selected={selectedTopic === "Sales & partnerships"}
                hint="Typical response: 1–2 business days"
              />
              <ContactCard
                icon={ShieldCheck}
                title="Security & procurement"
                body="Review our trust posture, policies, and governance materials for internal assessment."
                onSelect={() => handleSelectTopic("Security & procurement")}
                selected={selectedTopic === "Security & procurement"}
                hint="Start here for compliance review"
              />
              <ContactCard
                icon={LifeBuoy}
                title="Support"
                body="For existing customers and operational issues. If urgent, include impact and timeframe."
                onSelect={() => handleSelectTopic("Support")}
                selected={selectedTopic === "Support"}
                hint="Email draft opens in your client"
              />
              <ContactCard
                icon={Mail}
                title="General"
                body="Anything else — media, community, or product feedback."
                onSelect={() => handleSelectTopic("General")}
                selected={selectedTopic === "General"}
                hint="hello@capantra.com"
              />
            </div>

            <Surface variant="soft" className="mt-6 p-6">
              <div className="text-sm font-semibold text-black/85">Region note</div>
              <p className="mt-2 text-sm leading-relaxed text-black/60">
                Capantra is AU-first and built with a structure to support UK/US considerations.
                Requirements vary by jurisdiction and use case — we’ll align next steps accordingly.
              </p>
              <Link
                href="/trust/overview"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-black/70 hover:text-black"
              >
                Review Trust Center <ArrowRight className="h-4 w-4" />
              </Link>
            </Surface>
          </div>

          <div ref={formWrapRef}>
            <ContactMailtoForm
              defaultTo="hello@capantra.com"
              topic={selectedTopic}
              onTopicChange={setSelectedTopic}
              focusSignal={focusSignal}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
