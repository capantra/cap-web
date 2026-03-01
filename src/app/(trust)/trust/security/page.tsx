import type { Metadata } from "next";
import Link from "next/link";
import {
  KeyRound,
  ScrollText,
  Siren,
  Bug,
  ServerCog,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { TrustHeroShell } from "@/components/trust/TrustHeroShell";

export const metadata: Metadata = {
  title: "Security",
  description:
    "Security posture for Capantra including access controls, monitoring, incident response, and vulnerability management.",
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

export default function TrustSecurityPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <TrustHeroShell>
        <div className="space-y-4">
          {/* Badge row + action badge */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <Pill>Trust Center</Pill>
              <Pill>Security</Pill>
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
            Security, controls and operational assurance
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-black/65">
            This page summarises Capantra’s security posture in a procurement-friendly format. It covers access
            controls, logging, incident response, and supporting operational practices.
          </p>

          <p className="text-xs leading-relaxed text-black/50">
            Note: This material is informational and non-exhaustive. Control implementation may vary by product,
            deployment model, and customer configuration. For evidence packs or questionnaires, contact Capantra.
          </p>
        </div>
      </TrustHeroShell>

      <Card title="Access control and identity" icon={KeyRound}>
        <p>
          Access to systems and customer data is governed by role-based access and least-privilege principles.
          Administrative access is restricted and logged. Customers should apply their own governance to user access
          within their tenant.
        </p>

        <TwoCol
          left={
            <>
              <div className="text-xs font-semibold uppercase tracking-wide text-black/45">
                Typical access controls
              </div>
              <BulletList
                items={[
                  "Role-based access controls (RBAC) aligned to job function.",
                  "Administrative actions restricted and audited.",
                  "Support access governed via process and scoped to need.",
                  "Separation of customer environments where applicable to deployment model.",
                ]}
              />
            </>
          }
          right={
            <>
              <div className="text-xs font-semibold uppercase tracking-wide text-black/45">
                Customer responsibilities (high level)
              </div>
              <BulletList
                items={[
                  "Maintain appropriate user access governance (joiners/movers/leavers).",
                  "Use strong authentication controls (per configuration).",
                  "Ensure lawful and authorised use of any customer-provided datasets and campaigns.",
                  "Apply least privilege for internal users and agencies.",
                ]}
              />
            </>
          }
        />
      </Card>

      <Card title="Logging, monitoring and auditability" icon={ScrollText}>
        <p>
          Operational logs and telemetry support troubleshooting, service assurance, and security monitoring.
          Logging practices may vary by environment and product; we aim to balance observability with minimisation.
        </p>

        <TwoCol
          left={
            <>
              <div className="text-xs font-semibold uppercase tracking-wide text-black/45">
                Common log categories
              </div>
              <BulletList
                items={[
                  "Authentication and administrative events (where supported).",
                  "Operational workflow and activity events.",
                  "Service health/availability signals and alerting events.",
                  "Security-relevant indicators to support investigation and response.",
                ]}
              />
            </>
          }
          right={
            <>
              <div className="text-xs font-semibold uppercase tracking-wide text-black/45">
                Audit considerations
              </div>
              <BulletList
                items={[
                  "Access and administrative actions should be attributable to a user identity where feasible.",
                  "Retention and access to logs governed by policy and operational need.",
                  "Investigations follow a documented approach with appropriate approvals.",
                ]}
              />
            </>
          }
        />
      </Card>

      <Card title="Incident response and breach handling" icon={Siren}>
        <p>
          Capantra maintains an incident response approach aligned to operational best practice. Incidents are
          triaged, contained, investigated, and remediated, with customer communications appropriate to severity,
          contract scope, and legal obligations.
        </p>

        <TwoCol
          left={
            <>
              <div className="text-xs font-semibold uppercase tracking-wide text-black/45">
                Response lifecycle (high level)
              </div>
              <BulletList
                items={[
                  "Detection and triage (severity assessment).",
                  "Containment and mitigation actions.",
                  "Root-cause analysis and remediation.",
                  "Customer communication and post-incident review.",
                ]}
              />
            </>
          }
          right={
            <>
              <div className="text-xs font-semibold uppercase tracking-wide text-black/45">
                Customer communications
              </div>
              <BulletList
                items={[
                  "Notification timing depends on facts, severity and applicable law.",
                  "We aim to share actionable information that supports customer risk decisions.",
                  "For formal processes, contact procurement for incident disclosure terms.",
                ]}
              />
            </>
          }
        />
      </Card>

      <Card title="Vulnerability management" icon={Bug}>
        <p>
          We aim to identify, prioritise and remediate vulnerabilities based on risk. Processes may include
          dependency patching, configuration hardening, and security testing appropriate to product maturity.
        </p>

        <TwoCol
          left={
            <>
              <div className="text-xs font-semibold uppercase tracking-wide text-black/45">
                Practices (typical)
              </div>
              <BulletList
                items={[
                  "Patch management for dependencies and infrastructure components.",
                  "Secure configuration baselines and change control.",
                  "Security review for sensitive changes (as applicable).",
                ]}
              />
            </>
          }
          right={
            <>
              <div className="text-xs font-semibold uppercase tracking-wide text-black/45">
                Responsible disclosure
              </div>
              <BulletList
                items={[
                  "Vulnerability reports can be coordinated via support/procurement channels.",
                  "We assess and respond based on severity and exploitability.",
                  "Evidence and timelines may be provided as part of procurement packs where appropriate.",
                ]}
              />
            </>
          }
        />
      </Card>

      <Card title="Business continuity and resilience" icon={ServerCog}>
        <p>
          Resilience measures support availability and recovery. Backup and recovery practices are designed to meet
          service assurance requirements and may vary by product/deployment model.
        </p>

        <TwoCol
          left={
            <>
              <div className="text-xs font-semibold uppercase tracking-wide text-black/45">
                Resilience measures (high level)
              </div>
              <BulletList
                items={[
                  "Backups and recovery processes (per environment).",
                  "Monitoring and alerting for service health.",
                  "Change control to reduce operational risk.",
                ]}
              />
            </>
          }
          right={
            <>
              <div className="text-xs font-semibold uppercase tracking-wide text-black/45">
                Procurement notes
              </div>
              <BulletList
                items={[
                  "RTO/RPO targets depend on product tier and deployment model.",
                  "Formal BCP/DR documentation can be provided on request where applicable.",
                ]}
              />
            </>
          }
        />
      </Card>
    </div>
  );
}
