import Link from "next/link";
import {
  Building2,
  Users,
  Headphones,
  ArrowRight,
  ShieldCheck,
  LineChart,
  ListChecks,
} from "lucide-react";

const audiences = [
  {
    icon: Users,
    title: "Sales agencies",
    body: "Deliver consistent campaigns across multiple clients with repeatable workflows and clear reporting.",
    points: [
      "Multi-client operating patterns",
      "Campaign controls + QA",
      "Procurement-friendly trust posture",
    ],
    href: "/solutions",
  },
  {
    icon: Building2,
    title: "BPO teams",
    body: "Standardise how teams run outreach, intake, and follow-up—while maintaining oversight and accountability.",
    points: ["Role-based access patterns", "Operational dashboards", "Audit-friendly processes"],
    href: "/solutions",
  },
  {
    icon: Headphones,
    title: "Telefundraising operators",
    body: "Support high-volume engagement with governance-first handling and region-aware documentation.",
    points: [
      "Suppression + consent signals",
      "Script + workflow support",
      "Jurisdiction notes in Trust Center",
    ],
    href: "/trust/overview",
  },
];

const proof = [
  {
    icon: ShieldCheck,
    title: "Trust Center",
    body: "A dedicated portal for legal, security, and procurement review.",
    href: "/trust/overview",
  },
  {
    icon: ListChecks,
    title: "Operational controls",
    body: "Designed to support oversight, reporting, and accountable execution.",
    href: "/trust/security",
  },
  {
    icon: LineChart,
    title: "Visibility",
    body: "Reporting patterns that help teams understand activity and outcomes.",
    href: "/solutions",
  },
];

export function UseCases() {
  return (
    <section className="bg-transparent">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold text-black/85">Designed for operators</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-black/60">
              Capantra is built for organisations that run customer engagement at scale — especially where governance,
              transparency, and repeatable delivery matter.
            </p>

            <div className="mt-6 grid gap-4">
              {proof.map((p) => (
                <Link
                  key={p.title}
                  href={p.href}
                  className="group flex items-start gap-3 border-l border-black/12 pl-4 transition hover:pl-5"
                >
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-black/[0.04]">
                    <p.icon className="h-5 w-5 text-black/70" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-sm font-semibold text-black/80 group-hover:text-black">{p.title}</div>
                      <ArrowRight className="h-4 w-4 text-black/30 group-hover:text-black/60" />
                    </div>
                    <div className="mt-1 text-sm leading-relaxed text-black/60">{p.body}</div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
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
                Review governance
              </Link>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {audiences.map((a) => (
              <div key={a.title} className="rounded-3xl border border-black/8 bg-white/65 p-6 backdrop-blur">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black/[0.04]">
                  <a.icon className="h-6 w-6 text-black/70" />
                </div>
                <div className="mt-4 text-sm font-semibold text-black/85">{a.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-black/60">{a.body}</div>

                <ul className="mt-4 space-y-2">
                  {a.points.map((p) => (
                    <li key={p} className="text-sm text-black/65">
                      <span className="mr-2 text-black/30">•</span>
                      {p}
                    </li>
                  ))}
                </ul>

                <Link
                  href={a.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black/70 hover:text-black"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
