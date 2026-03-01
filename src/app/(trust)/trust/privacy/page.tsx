import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  Database,
  Scissors,
  Timer,
  UserRoundCheck,
  Globe2,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { TrustHeroShell } from "@/components/trust/TrustHeroShell";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy approach for Capantra including data minimisation, retention, cross-border handling, and governance controls.",
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

function TwoCol({ left, right }: { left: React.ReactNode; right: React.ReactNode }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4">{left}</div>
      <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4">{right}</div>
    </div>
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

function Row({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
      <div className="text-sm font-semibold text-black/85">{title}</div>
      <div className="mt-2 text-sm text-black/60">{body}</div>
    </div>
  );
}

export default function TrustPrivacyPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <TrustHeroShell>
        <div className="space-y-4">
          {/* Badge row + action badge */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <Pill>Trust Center</Pill>
              <Pill>Privacy</Pill>
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
            Privacy, data handling and transparency
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-black/65">
            This page summarises Capantra’s privacy posture in a procurement-friendly format. It describes how data is
            handled, minimised, retained, and how data subject requests (DSRs) are supported, with jurisdiction notes
            for AU, UK and US.
          </p>

          <p className="text-xs leading-relaxed text-black/50">
            Note: This material is informational and non-exhaustive. Privacy obligations depend on product, customer
            configuration, data sources, and applicable law. For contractual documents and DPIA/PIA support, contact
            Capantra.
          </p>
        </div>
      </TrustHeroShell>

      {/* Data handling overview */}
      <Card title="Data handling overview" icon={Database}>
        <p>
          Capantra products are designed to support customer engagement workflows. Personal information (if any) is
          handled according to documented governance principles: transparency, minimisation, access control, and
          purpose limitation. Exact data flows vary by product and customer usage.
        </p>

        <TwoCol
          left={
            <>
              <div className="text-xs font-semibold uppercase tracking-wide text-black/45">
                Typical data categories (depends on use)
              </div>
              <BulletList
                items={[
                  "Account and user administration data (e.g., user identifiers, role metadata).",
                  "Operational interaction metadata (e.g., activity logs, workflow events).",
                  "Customer-provided contact records and campaign data (where customers upload/provide).",
                  "Support communications and service management records (as applicable).",
                ]}
              />
            </>
          }
          right={
            <>
              <div className="text-xs font-semibold uppercase tracking-wide text-black/45">Data roles (high level)</div>
              <BulletList
                items={[
                  "Capantra may act as a service provider/processor for customer-provided data depending on contract.",
                  "Customers typically control the purposes and means of processing for their campaign/contact data.",
                  "Capantra applies platform controls and governance measures aligned to the agreed service scope.",
                ]}
              />
            </>
          }
        />
      </Card>

      {/* Minimisation */}
      <Card title="Data minimisation and purpose limitation" icon={Scissors}>
        <p>
          Capantra aims to collect and process only what is necessary for platform functionality, security, billing,
          and support. Product configuration is designed to support minimisation by default and discourage unnecessary
          collection.
        </p>

        <TwoCol
          left={
            <>
              <div className="text-xs font-semibold uppercase tracking-wide text-black/45">Minimisation controls</div>
              <BulletList
                items={[
                  "Support for role-based access and restricted visibility by function.",
                  "Configuration options intended to reduce exposure of sensitive fields.",
                  "Separation between administrative metadata and customer-provided operational records.",
                  "Encouraging customers to only upload or use data they are authorised to process.",
                ]}
              />
            </>
          }
          right={
            <>
              <div className="text-xs font-semibold uppercase tracking-wide text-black/45">Purpose limitation</div>
              <BulletList
                items={[
                  "Data is used to deliver the service, maintain security, and provide support.",
                  "Additional uses (if applicable) should be governed by contract and transparency requirements.",
                  "Customers remain responsible for lawful basis/consent requirements for their outbound programs.",
                ]}
              />
            </>
          }
        />
      </Card>

      {/* Retention */}
      <Card title="Retention and deletion" icon={Timer}>
        <p>
          Retention is guided by operational needs, legal obligations, and contractual terms. Where supported, Capantra
          aims to provide reasonable mechanisms for deletion or de-identification, subject to security and audit
          requirements.
        </p>

        <div className="grid gap-3 lg:grid-cols-3">
          <Row
            title="Operational retention"
            body="Service logs and operational records may be retained to support troubleshooting, security monitoring, and service assurance, subject to policy."
          />
          <Row
            title="Customer-controlled data"
            body="Customer-provided datasets and campaign records are handled per service scope and contract. Customers may request deletion where feasible."
          />
          <Row
            title="Backups and resiliency"
            body="Backups may retain data for limited periods consistent with disaster recovery and integrity requirements. Deletion may follow backup lifecycle."
          />
        </div>

        <div className="mt-4 rounded-2xl border border-black/10 bg-black/[0.02] p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-black/80">
            <ShieldCheck className="h-4 w-4 text-black/60" />
            Audit and integrity exception
          </div>
          <p className="mt-2 text-sm text-black/60">
            Some records may be retained for security, fraud prevention, incident investigation, or compliance
            requirements. Where retention is required, access is restricted and governed.
          </p>
        </div>
      </Card>

      {/* Data Subject Requests */}
      <Card title="Data subject requests (DSRs) and rights handling" icon={UserRoundCheck}>
        <p>
          Capantra supports customers in responding to data subject requests where Capantra is acting as a
          processor/service provider for customer-controlled data. Response obligations depend on jurisdiction, the
          customer’s role, and contractual arrangements.
        </p>

        <TwoCol
          left={
            <>
              <div className="text-xs font-semibold uppercase tracking-wide text-black/45">Typical request types</div>
              <BulletList
                items={[
                  "Access: confirm and provide data copies where applicable.",
                  "Correction: update inaccurate information where within scope.",
                  "Deletion: delete or de-identify where feasible and permitted.",
                  "Restriction/objection: supported depending on product and role allocation.",
                ]}
              />
            </>
          }
          right={
            <>
              <div className="text-xs font-semibold uppercase tracking-wide text-black/45">
                Operational handling (high level)
              </div>
              <BulletList
                items={[
                  "Requests are typically routed via the customer (controller/business) unless contract specifies otherwise.",
                  "Identity verification is required to prevent unauthorised disclosure.",
                  "We coordinate to locate relevant records and apply appropriate actions within scope.",
                  "Some data may be exempt from deletion due to security/audit/legal obligations.",
                ]}
              />
            </>
          }
        />
      </Card>

      {/* Cross-border and jurisdiction notes */}
      <Card title="Cross-border processing and jurisdiction notes (AU · UK · US)" icon={Globe2}>
        <p>
          Cross-border processing considerations depend on where customers are located, where systems are hosted, and
          the nature of the data. Capantra aims to support enterprise procurement requirements through transparent
          documentation and appropriate contractual measures.
        </p>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4">
            <div className="text-sm font-semibold text-black/80">Australia (AU)</div>
            <p className="mt-2 text-sm text-black/60">
              Privacy obligations may include APPs and sector-specific requirements depending on use case. Customers
              remain responsible for lawful basis and consent obligations for their programs.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4">
            <div className="text-sm font-semibold text-black/80">United Kingdom (UK)</div>
            <p className="mt-2 text-sm text-black/60">
              UK GDPR/DP Act considerations may apply. Data transfer safeguards and processor terms may be required
              depending on controller/processor roles and hosting.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4">
            <div className="text-sm font-semibold text-black/80">United States (US)</div>
            <p className="mt-2 text-sm text-black/60">
              US privacy requirements vary by state and sector. Where applicable, Capantra can support
              service-provider style terms aligned to contract scope.
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-black/10 bg-black/[0.02] p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-black/80">
            <FileText className="h-4 w-4 text-black/60" />
            Contractual documentation
          </div>
          <p className="mt-2 text-sm text-black/60">
            For enterprise procurement, Capantra can provide privacy addenda and supporting artefacts on request,
            subject to scope and legal review.
          </p>
        </div>
      </Card>
    </div>
  );
}
