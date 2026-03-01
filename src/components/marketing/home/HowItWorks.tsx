import Link from "next/link";
import {
  ArrowRight,
  Cable,
  Workflow,
  ShieldCheck,
  PhoneCall,
  Database,
  Users,
} from "lucide-react";

const steps = [
  {
    icon: Cable,
    eyebrow: "Step 1",
    title: "Connect channels + data",
    body: "Bring your dialling, messaging, routing, and data workflows into a single operating layer — with clear ownership and visibility.",
    points: ["Inbound + outbound flows", "Data inputs + suppression", "Role-based operational access"],
  },
  {
    icon: Workflow,
    eyebrow: "Step 2",
    title: "Run consistent operations",
    body: "Standardise how teams work: campaigns, scripts, forms, QA, and reporting — designed for repeatability across clients and regions.",
    points: ["Workflows + forms", "Operational reporting", "Team management patterns"],
  },
  {
    icon: ShieldCheck,
    eyebrow: "Step 3",
    title: "Govern with confidence",
    body: "Support review readiness with policy visibility, versioning, and a trust-first posture — without overpromising legal outcomes.",
    points: ["Versioned policies", "Audit-friendly operations", "Region-aware documentation"],
  },
];

type Product = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  meta: string;
  href: string;
  featured?: boolean;
};

const products: Product[] = [
  {
    name: "CapantraSales",
    icon: Users,
    meta: "Demo ready",
    href: "/solutions/capantrasales",
  },
  {
    name: "CapantraDial",
    icon: PhoneCall,
    meta: "Beta testing phase",
    href: "/solutions/capantradial",
  },
  {
    name: "CapantraData",
    icon: Database,
    meta: "Launches 1 Jul 2026",
    href: "/solutions/capantradata",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-transparent">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-black/55">
              How it works
              <span className="h-1 w-1 rounded-full bg-black/25" />
              Build operational clarity
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-black/85">
              Digital infrastructure for revenue operations.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60">
              Capantra is designed for teams that need to scale outbound and inbound engagement while keeping governance,
              documentation, and review-readiness close to the workflow.
            </p>

            <div className="mt-7 grid gap-6 md:grid-cols-3">
              {steps.map((s) => (
                <div key={s.title} className="border-l border-black/12 pl-5">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/[0.04]">
                      <s.icon className="h-6 w-6 text-black/70" />
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-black/35">
                      {s.eyebrow}
                    </div>
                  </div>
                  <div className="mt-4 text-sm font-semibold text-black/85">{s.title}</div>
                  <div className="mt-2 text-sm leading-relaxed text-black/60">{s.body}</div>
                  <ul className="mt-4 space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="text-sm text-black/65">
                        <span className="mr-2 text-black/30">•</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-2 sm:flex-row">
              <Link
                href="/solutions"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-black px-6 text-sm font-semibold text-white hover:bg-black/90"
              >
                Explore solutions
              </Link>
              <Link
                href="/trust/overview"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-black/15 bg-white px-6 text-sm font-semibold text-black/75 hover:bg-black/[0.03]"
              >
                See Trust Center <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right: simple architecture / platform stack */}
          <div className="rounded-3xl border border-black/8 bg-white/58 p-6 backdrop-blur lg:p-8">
            <div className="text-xs font-semibold uppercase tracking-wide text-black/45">Platform stack</div>
            <div className="mt-3 text-sm font-semibold text-black/80">
              Sales, Data, and Dial surfaces on CapantraOne.
            </div>
            <p className="mt-2 text-sm leading-relaxed text-black/60">
              Current focus is CapantraSales (demo ready), CapantraDial (beta testing), and CapantraData (launches 1
              July 2026).
            </p>
            <p className="mt-2 text-sm leading-relaxed text-black/55">
              CapantraOne is the operating system and required licence for access to every other Capantra solution
              add-on.
            </p>

            <div className="mt-6 space-y-3">
              {products.map((p, idx) => (
                <div key={p.name} className="relative">
                  {idx !== 0 ? <div className="absolute -top-3 left-6 h-3 w-px bg-black/10" /> : null}

                  <Link
                    href={p.href}
                    className="group flex items-center gap-4 rounded-2xl border border-black/8 bg-white/75 px-5 py-4 hover:bg-white"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black/[0.04]">
                      <p.icon className="h-6 w-6 text-black/70" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-semibold text-black/85">{p.name}</div>
                        {p.featured ? (
                          <span className="inline-flex rounded-full border border-black/10 bg-black/[0.03] px-2 py-0.5 text-[10px] font-semibold text-black/55">
                            Flagship
                          </span>
                        ) : null}
                      </div>
                      <div className="mt-0.5 text-xs text-black/55">{p.meta}</div>
                    </div>
                    <ArrowRight className="ml-auto h-4 w-4 text-black/30 group-hover:text-black/60" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-black/8 bg-white/75 p-5">
              <div className="text-sm font-semibold text-black/80">Built for agencies + operators</div>
              <p className="mt-2 text-sm leading-relaxed text-black/60">
                Designed for multi-client environments, repeatable delivery, and clear operational controls.
              </p>
              <Link
                href="/company/contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-black/70 hover:text-black"
              >
                Request a briefing/demo <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
