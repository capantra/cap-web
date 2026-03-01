import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  FileText,
  Layers,
  PhoneCall,
  Database,
  Users,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { cloudflareAsset } from "@/lib/assets";

/* ---------- Platform strip (bottom overlay) ---------- */

function PlatformStrip() {
  const products = [
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

  return (
    <div className="relative z-10 mt-6 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0">
      <div className="mx-auto max-w-7xl px-4 pb-6 lg:px-6">
        <div className="mb-3 inline-flex items-center rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-semibold text-black/60 backdrop-blur">
          CapantraOne is the operating system and required licence for all platform surfaces.
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {products.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              className={cn(
                "group flex items-center gap-4 rounded-2xl border border-black/10 bg-white/80 px-5 py-4 shadow-sm backdrop-blur transition",
                "hover:bg-white hover:shadow-md"
              )}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/[0.04]">
                <p.icon className="h-5 w-5 text-black/70" />
              </div>

              <div className="min-w-0">
                <div className="text-sm font-semibold text-black/85">
                  {p.name}
                </div>
                <div className="mt-0.5 text-xs text-black/55">{p.meta}</div>
              </div>

            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Trust snapshot ---------- */

function TrustSnapshot() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Security & governance",
      body: "Procurement-ready documentation and controls.",
    },
    {
      icon: FileText,
      title: "Policy versioning",
      body: "Clear change history and last-updated visibility.",
    },
    {
      icon: Layers,
      title: "Region-aware",
      body: "AU default with UK/US considerations.",
    },
  ];

  return (
    <div className="rounded-3xl border border-black/10 bg-white/85 p-6 shadow-sm backdrop-blur">
      <div className="text-xs font-semibold uppercase tracking-wide text-black/45">
        Trust snapshot
      </div>

      <div className="mt-4 space-y-4">
        {items.map((it) => (
          <div key={it.title} className="flex gap-3">
            <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-black/[0.04]">
              <it.icon className="h-5 w-5 text-black/70" />
            </div>
            <div>
              <div className="text-sm font-semibold text-black/80">
                {it.title}
              </div>
              <div className="mt-0.5 text-sm text-black/60">{it.body}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-2">
        <Link
          href="/trust/overview"
          className="inline-flex h-11 items-center justify-center rounded-xl bg-[var(--brand-primary)] px-5 text-sm font-semibold text-white hover:bg-[#088a71]"
        >
          Visit Trust Center
        </Link>
        <Link
          href="/company/contact"
          className="inline-flex h-11 items-center justify-center rounded-xl border border-black/15 bg-white px-5 text-sm font-semibold text-black/75 hover:bg-black/[0.03]"
        >
          Request a briefing/demo
        </Link>
      </div>
    </div>
  );
}

/* ---------- HERO ---------- */

export function HomeHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={cloudflareAsset("capantra-hero-bg.png")}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/55 to-white/90" />
        {/* subtle brand-tinted light (green) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(11,157,130,0.20),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(10,22,56,0.12),transparent_45%)]" />
      </div>

      {/* Main hero content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="mx-auto flex w-full max-w-7xl flex-1 items-center px-4 pt-28 pb-8 lg:px-6 lg:pt-32 lg:pb-40">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-regular text-black/55 shadow-sm backdrop-blur">
                <span className="inline-flex h-2 w-2 rounded-full bg-[var(--brand-primary)]" />
                Digital infrastructure for revenue operations
                <span className="h-1 w-1 rounded-full bg-black/30" />
                AU · UK · US
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-black/90 sm:text-5xl">
                Customer engagement infrastructure,
                <br className="hidden sm:block" />
                built with governance in mind.
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-black/65">
                CapantraOne is the core platform for outbound + inbound engagement, with add-on solutions —
                designed to support transparent operations, robust controls, and
                procurement-ready documentation.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/trust/overview"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-[var(--brand-primary)] px-6 text-sm font-semibold text-white hover:bg-[#088a71]"
                >
                  Visit Trust Center
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-black/15 bg-white/80 px-6 text-sm font-semibold text-black/75 hover:bg-black/[0.03] backdrop-blur"
                >
                  Explore solutions
                </Link>
              </div>

              <p className="mt-5 text-xs leading-relaxed text-black/50">
                Regulatory note: requirements vary by jurisdiction and use case.
                See the Trust Center for details.
                <br />
                Access note: CapantraOne is required for add-on access. CapantraSales and CapantraDial are available
                through briefing/demo-led onboarding.
              </p>
            </div>

            <TrustSnapshot />
          </div>
        </div>
        <PlatformStrip />
      </div>
    </section>
  );
}

