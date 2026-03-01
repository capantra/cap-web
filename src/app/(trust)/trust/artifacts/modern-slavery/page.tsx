import type { Metadata } from "next";
import Link from "next/link";
import { Globe2, FileText, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/cn";
import { getTrustLastUpdatedLabel } from "@/lib/trust/versions";
import { TrustHeroShell } from "@/components/trust/TrustHeroShell";

export const metadata: Metadata = {
  title: "Modern Slavery Statement",
  description:
    "Capantra modern slavery statement covering governance commitments, due diligence, and reporting approach.",
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-black/[0.02] px-3 py-1 text-xs font-semibold text-black/60">
      {children}
    </span>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-black/90">{title}</h2>
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

export default function ModernSlaveryStatementPage() {
  const lastUpdated = getTrustLastUpdatedLabel();

  return (
    <div className="space-y-6">
      <TrustHeroShell>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <Pill>Trust Center</Pill>
              <Pill>Artifacts</Pill>
              <Pill>Modern Slavery</Pill>
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
              Request ESG pack →
            </Link>
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-black/90">
            Modern Slavery Statement
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-black/65">
            This statement describes Capantra’s approach to identifying and reducing modern slavery risks in our
            operations and supply chain. It is written in a procurement-friendly format and intended to align with
            AU reporting expectations and common vendor due diligence practices.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-black/10 bg-black/[0.02] px-4 py-3">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">Last updated</div>
              <div className="mt-1 text-sm font-semibold text-black/80">{lastUpdated}</div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-black/[0.02] px-4 py-3">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">Reporting period</div>
              <div className="mt-1 text-sm font-semibold text-black/80">FY2025–2026</div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-black/[0.02] px-4 py-3">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">Entity</div>
              <div className="mt-1 text-sm font-semibold text-black/80">Capantra (group)</div>
            </div>
          </div>

          <p className="text-xs leading-relaxed text-black/50">
            Note: This is a published procurement-facing statement. It does not constitute legal advice and may be
            revised as operations and supplier base evolves.
          </p>
        </div>
      </TrustHeroShell>

      <Section title="1. Our commitment">
        <p>
          Capantra is committed to operating ethically and responsibly. We do not tolerate modern slavery, forced
          labour, child labour, human trafficking, servitude, or other exploitative practices.
        </p>
        <BulletList
          items={[
            "Risk-based approach to identifying modern slavery risks relevant to our business.",
            "Supplier expectations aligned to ethical conduct and lawful labour practices.",
            "Procurement transparency and continuous improvement as operations scale.",
          ]}
        />
      </Section>

      <Section title="2. Operations and supply chain (high level)">
        <p>
          Capantra builds and operates software products and related services. Modern slavery risk exposure is
          generally associated with third-party suppliers supporting hosting, IT tooling, and professional services.
        </p>

        <div className="mt-4 grid gap-3 lg:grid-cols-3">
          <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-black/80">
              <Globe2 className="h-4 w-4 text-black/60" />
              Service providers
            </div>
            <p className="mt-2 text-sm text-black/60">Cloud, communications and operational tooling providers.</p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-black/80">
              <FileText className="h-4 w-4 text-black/60" />
              Professional services
            </div>
            <p className="mt-2 text-sm text-black/60">Legal, accounting, and specialist advisory services.</p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-black/80">
              <ShieldCheck className="h-4 w-4 text-black/60" />
              Procurement controls
            </div>
            <p className="mt-2 text-sm text-black/60">Supplier onboarding and review scaled to risk and criticality.</p>
          </div>
        </div>
      </Section>

      <Section title="3. Due diligence and supplier expectations">
        <p>
          Where proportionate, Capantra applies due diligence activities aligned to procurement norms. This may include
          requesting policies, contractual commitments, or attestations depending on supplier criticality and scope.
        </p>
        <BulletList
          items={[
            "Preference for reputable suppliers with published ethical commitments where available.",
            "Escalation and remediation approach where concerns are identified.",
            "Ongoing improvement to documentation and procurement responsiveness.",
          ]}
        />
      </Section>
    </div>
  );
}
