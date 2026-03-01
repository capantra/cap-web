import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCall, Clock3, ListChecks, Globe2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { TrustHeroShell } from "@/components/trust/TrustHeroShell";

export const metadata: Metadata = {
  title: "Compliance",
  description:
    "Compliance overview for Capantra across AU, UK, and US contexts with jurisdictional and operational guidance.",
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-black/[0.02] px-3 py-1 text-xs font-semibold text-black/60">
      {children}
    </span>
  );
}

function Card({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black/[0.04]">
          <Icon className="h-5 w-5 text-black/70" />
        </div>
        <div className="min-w-0">
          <h2 className="text-lg font-semibold text-black/90">{title}</h2>
        </div>
      </div>
      <div className="mt-4 text-sm leading-relaxed text-black/65">{children}</div>
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

export default function TrustCompliancePage() {
  return (
    <div className="space-y-6">
      <TrustHeroShell>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <Pill>Trust Center</Pill>
              <Pill>Compliance</Pill>
              <Pill>AU · UK · US</Pill>
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

          <h1 className="text-3xl font-semibold tracking-tight text-black/90">
            Compliance posture and jurisdiction notes
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-black/65">
            This page provides high-level compliance considerations relevant to customer engagement workflows. It is
            designed to help procurement and risk teams understand how Capantra supports responsible operations.
          </p>

          <p className="text-xs leading-relaxed text-black/50">
            Note: Compliance obligations depend on customer use case, jurisdiction, and industry. Capantra does not
            provide legal advice. Customers are responsible for ensuring lawful basis and applicable permissions for
            outreach.
          </p>
        </div>
      </TrustHeroShell>

      <Card title="Outbound program governance" icon={ListChecks}>
        <p>
          Capantra provides tooling to support governance (e.g., access controls, auditability, reporting). Customers
          should implement controls appropriate to their program: consent/permission standards, contact list hygiene,
          and complaint handling.
        </p>
        <BulletList
          items={[
            "Clear ownership for datasets and outreach approvals.",
            "Contact list governance (source, lawful basis, suppression lists).",
            "Training and scripts aligned to jurisdiction requirements.",
            "Escalation pathway for complaints and opt-outs.",
          ]}
        />
      </Card>

      <Card title="Calling hours, frequency and respectful contact" icon={Clock3}>
        <p>
          Responsible outreach programs typically include guardrails around calling hours and frequency. Exact rules
          vary by jurisdiction and industry codes. Capantra can support configurable practices depending on product
          configuration.
        </p>
        <BulletList
          items={[
            "Configurable call attempt limits and pacing (where supported).",
            "Support for reporting and audit review of contact attempts.",
            "Use-case based restrictions (e.g., fundraising vs commercial outreach).",
          ]}
        />
      </Card>

      <Card title="Consent, opt-out and suppression handling" icon={PhoneCall}>
        <p>
          Customers remain responsible for obtaining and documenting the appropriate permissions for outreach and for
          maintaining suppression lists (do-not-contact). Capantra can support operational workflows that help enforce
          opt-out handling depending on product configuration.
        </p>
        <BulletList
          items={[
            "Operational capture of opt-out requests (where implemented).",
            "Suppression list workflows aligned to customer policies.",
            "Reporting to support compliance review and dispute handling.",
          ]}
        />
      </Card>

      <Card title="AU · UK · US high-level notes" icon={Globe2}>
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4">
            <div className="text-sm font-semibold text-black/80">Australia (AU)</div>
            <p className="mt-2 text-sm text-black/60">
              Rules may involve the Do Not Call Register and industry-specific standards. Lawful basis and consent
              expectations depend on context.
            </p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4">
            <div className="text-sm font-semibold text-black/80">United Kingdom (UK)</div>
            <p className="mt-2 text-sm text-black/60">
              UK PECR/GDPR considerations may apply depending on channel and lawful basis. Customers should ensure
              transparency and opt-out pathways.
            </p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4">
            <div className="text-sm font-semibold text-black/80">United States (US)</div>
            <p className="mt-2 text-sm text-black/60">
              US requirements vary by state and sector; rules may involve consent expectations and do-not-call
              obligations depending on program.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
