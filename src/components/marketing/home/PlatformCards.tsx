import Link from "next/link";
import { ArrowRight, PhoneCall, Database, Users } from "lucide-react";
import { cn } from "@/lib/cn";

const products = [
  {
    name: "CapantraSales",
    icon: Users,
    href: "/solutions/capantrasales",
    desc: "Field sales management platform with in-depth employee and contractor insights.",
    bullets: ["Onboarding + contractor readiness", "Leaderboards + KPI visibility", "Performance and margin insights"],
    status: "Demo ready",
    ctaLabel: "Book demo",
  },
  {
    name: "CapantraDial",
    icon: PhoneCall,
    href: "/solutions/capantradial",
    desc: "Outbound + inbound engagement infrastructure designed to support governance and operational control (requires CapantraOne licence).",
    bullets: [
      "Campaign controls & routing",
      "Operational reporting",
      "Responsible-use tooling support",
    ],
    status: "Beta testing phase",
    ctaLabel: "View beta overview",
  },
  {
    name: "CapantraData",
    icon: Database,
    href: "/solutions/capantradata",
    desc: "Data-enabled services with governance-first handling and transparency for regulated use cases (requires CapantraOne licence).",
    bullets: ["Controlled data handling", "Suppression support", "Jurisdiction-aware notes"],
    status: "Launches 1 Jul 2026",
    ctaLabel: "View launch plan",
  },
];

export function PlatformCards() {
  return (
    <section className="bg-transparent">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-black/85">Platforms</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-black/60">
              Built to help teams operate with clarity, accountability, and documentation suitable for procurement
              review.
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-black/55">
              Current focus: CapantraSales is demo ready, CapantraDial is in beta testing, and CapantraData launches
              on 1 July 2026.
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-black/55">
              CapantraOne remains the core operating system and required licence for access to Dial, Data, and Sales.
            </p>
          </div>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 self-start rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-black/70 hover:bg-black/[0.03]"
          >
            View all solutions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {products.map((p) => (
            <div
              key={p.name}
              className="flex h-full flex-col rounded-3xl border border-black/8 bg-white/65 p-6 backdrop-blur"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black/[0.04] ring-1 ring-emerald-500/10">
                  <p.icon className="h-6 w-6 text-black/70" />
                </div>
                <span className="inline-flex items-center rounded-full bg-black/[0.05] px-2.5 py-1 text-[11px] font-semibold text-black/58">
                  {p.status}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-black/88">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-black/58">{p.desc}</p>

              <ul className="mt-4 space-y-2">
                {p.bullets.map((b) => (
                  <li key={b} className="text-sm text-black/65">
                    <span className="mr-2 text-black/30">•</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-auto grid grid-cols-1 gap-2 pt-6 sm:grid-cols-2">
                <Link
                  href={p.href}
                  className={cn(
                    "inline-flex h-11 items-center justify-center rounded-xl bg-black px-4 text-sm font-semibold text-white",
                    "hover:bg-black/90"
                  )}
                >
                  {p.ctaLabel}
                </Link>
                <Link
                  href="/investors"
                  className={cn(
                    "inline-flex h-11 items-center justify-center rounded-xl border border-black/15 bg-white px-4 text-sm font-semibold text-black/75",
                    "hover:bg-black/[0.03]"
                  )}
                >
                  Investor updates
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
