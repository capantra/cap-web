import type { Metadata } from "next";
import Link from "next/link";
import { Layers, ClipboardList, FileCheck2, Users, ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { TrustHeroShell } from "@/components/trust/TrustHeroShell";

export const metadata: Metadata = {
  title: "Governance",
  description:
    "Governance framework for Capantra, including policy ownership, review cadence, and accountability controls.",
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

export default function TrustGovernancePage() {
  return (
    <div className="space-y-6">
      <TrustHeroShell>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <Pill>Trust Center</Pill>
              <Pill>Governance</Pill>
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
              Request governance pack →
            </Link>
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-black/90">
            Governance, oversight and policy management
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-black/65">
            This page summarises how governance is applied across products and environments, including policy
            oversight, change management, and supplier governance practices.
          </p>

          <p className="text-xs leading-relaxed text-black/50">
            Note: Governance controls may vary by product maturity and deployment model. For formal procurement packs,
            contact Capantra.
          </p>
        </div>
      </TrustHeroShell>

      <Card title="Policy framework and ownership" icon={Layers}>
        <p>
          Capantra maintains governance documentation to support transparent operations. Policies and standards are
          reviewed and updated as the business evolves, including security and privacy posture changes.
        </p>
        <BulletList
          items={[
            "Documented policies and procurement-facing summaries (Trust Center).",
            "Clear ownership and escalation pathways for key operational domains.",
            "Change history visibility via Trust Center versioning.",
          ]}
        />
      </Card>

      <Card title="Risk management and review" icon={ClipboardList}>
        <p>
          Risk is assessed using a pragmatic approach aligned to business maturity. Reviews may cover operational,
          security, privacy, and supplier risks. Controls scale with materiality and customer impact.
        </p>
        <BulletList
          items={[
            "Risk-based prioritisation for control implementation.",
            "Incident learnings feed into governance and improvement planning.",
            "Procurement feedback is used to improve documentation and control clarity.",
          ]}
        />
      </Card>

      <Card title="Change management and releases" icon={FileCheck2}>
        <p>
          Changes are managed to reduce operational risk and maintain transparency. Where relevant to procurement, we
          provide visibility into key documentation changes via version history.
        </p>
        <BulletList
          items={[
            "Change control practices for production-impacting updates (scope dependent).",
            "Tracking of policy updates and governance documentation changes.",
            "Customer communications aligned to severity and contract scope (where applicable).",
          ]}
        />
      </Card>

      <Card title="Supplier and third-party governance" icon={Users}>
        <p>
          Third-party suppliers are assessed based on criticality and risk. Subprocessor information is maintained in
          the Trust Center and may be supplemented under NDA.
        </p>
        <div className="mt-4">
          <Link
            href="/trust/artifacts/subprocessors"
            className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black/70 hover:bg-black/[0.03]"
          >
            View sub-processors register <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Card>
    </div>
  );
}
