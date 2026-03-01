import { Shield, KeyRound, DatabaseZap, Activity } from "lucide-react";

const pillars = [
  {
    icon: KeyRound,
    title: "Access control & accountability",
    body: "Designed to support role-based access patterns, administrative oversight, and audit-friendly operations.",
  },
  {
    icon: DatabaseZap,
    title: "Data handling & retention controls",
    body: "Governance-minded approaches to handling, minimisation, retention, and lawful-use documentation.",
  },
  {
    icon: Shield,
    title: "Consent & suppression support",
    body: "Tooling patterns that can support consent signals and suppression workflows across use cases.",
  },
  {
    icon: Activity,
    title: "Monitoring & operational controls",
    body: "Operational reporting, review workflows, and controls to support responsible use and oversight.",
  },
];

export function GovernancePillars() {
  return (
    <section className="bg-transparent">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold text-black/85">Governance-first design</h2>
            <p className="mt-3 text-sm leading-relaxed text-black/60">
              Our approach prioritises transparency and control. Features are designed to support responsible
              operations and review readiness — without overpromising legal outcomes.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-black/50">
              Note: compliance obligations vary by jurisdiction and use case. Refer to the Trust Center for policy
              documentation and region considerations.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-3xl border border-black/8 bg-white/65 p-6 backdrop-blur">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/[0.04]">
                  <p.icon className="h-6 w-6 text-black/70" />
                </div>
                <div className="mt-4 text-sm font-semibold text-black/85">{p.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-black/60">{p.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
