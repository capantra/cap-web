import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/cn";
import { Section } from "@/components/marketing/Section";
import { Surface } from "@/components/marketing/Surface";
import { cloudflareAsset } from "@/lib/assets";

export function CompanyHero({
  eyebrow = "Company",
  title,
  subtitle,
  primaryCta = { label: "Contact", href: "/company/contact" },
  secondaryCta = { label: "Trust Center", href: "/trust/overview" },
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <Section tone="gradient" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={cloudflareAsset("capantra-hero-bg.png")}
          alt=""
          fill
          priority={false}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/78" />
      </div>

      <div className="relative py-14 lg:py-18">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/90 px-4 py-2 text-xs text-black/65 backdrop-blur">
          <span className="inline-flex h-2 w-2 rounded-full bg-[var(--brand-primary)]" />
          {eyebrow}
          <span className="h-1 w-1 rounded-full bg-black/35" />
          AU · UK · US
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-black/90 sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-black/70">
              {subtitle}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href={primaryCta.href}
                className="inline-flex h-11 items-center justify-center rounded-xl bg-[var(--brand-primary)] px-6 text-sm font-semibold text-white hover:bg-[#088a71]"
              >
                {primaryCta.label}
              </Link>
              <Link
                href={secondaryCta.href}
                className="inline-flex h-11 items-center justify-center rounded-xl border border-black/15 bg-white px-6 text-sm font-semibold text-black/80 hover:bg-black/[0.03] backdrop-blur"
              >
                {secondaryCta.label} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <Surface variant="outline" className="p-6">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-black/[0.04]">
                <ShieldCheck className="h-5 w-5 text-black/70" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-black/85">
                  Governance-first posture
                </div>
                <p className="mt-1 text-sm leading-relaxed text-black/65">
                  We design for review-readiness: clear documentation, versioned policies,
                  and operational controls.
                </p>
                <Link
                  href="/trust/overview"
                  className={cn(
                    "mt-4 inline-flex items-center gap-2 text-sm font-semibold text-black/70 hover:text-black"
                  )}
                >
                  Explore Trust Center <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Surface>
        </div>
      </div>
    </Section>
  );
}
