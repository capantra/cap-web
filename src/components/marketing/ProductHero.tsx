import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { cloudflareAsset } from "@/lib/assets";

type HeroVariant = "blueWave" | "aquaWave" | "neutralWave" | "amberWave";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/15 bg-white/85 px-3 py-1 text-xs font-semibold text-black/70 backdrop-blur">
      {children}
    </span>
  );
}

function heroTheme(variant: HeroVariant) {
  if (variant === "blueWave") {
    return {
      base: "bg-[#f4f4f3]",
      glow: "from-[color:rgba(28,164,162,0.10)] via-[color:rgba(11,157,130,0.07)] to-transparent",
      blob1: "bg-[color:rgba(28,164,162,0.12)]",
      blob2: "bg-[color:rgba(10,157,130,0.09)]",
    };
  }
  if (variant === "aquaWave") {
    return {
      base: "bg-[#f4f4f3]",
      glow: "from-[color:rgba(52,72,159,0.10)] via-[color:rgba(22,111,120,0.08)] to-transparent",
      blob1: "bg-[color:rgba(52,72,159,0.12)]",
      blob2: "bg-[color:rgba(22,111,120,0.10)]",
    };
  }
  if (variant === "amberWave") {
    return {
      base: "bg-[#f4f4f3]",
      glow: "from-[color:rgba(194,126,25,0.12)] via-[color:rgba(10,157,130,0.07)] to-transparent",
      blob1: "bg-[color:rgba(194,126,25,0.12)]",
      blob2: "bg-[color:rgba(10,157,130,0.10)]",
    };
  }
  return {
    base: "bg-[#f4f4f3]",
    glow: "from-[color:rgba(22,111,120,0.10)] via-[color:rgba(11,157,130,0.07)] to-transparent",
    blob1: "bg-[color:rgba(22,111,120,0.11)]",
    blob2: "bg-[color:rgba(11,157,130,0.10)]",
  };
}

export function ProductHero({
  variant = "blueWave",
  badges,
  title,
  subtitle,
  note,
  primaryCta,
  secondaryCta,
  right,
}: {
  variant?: HeroVariant;
  badges: string[];
  title: React.ReactNode;
  subtitle: React.ReactNode;
  note?: React.ReactNode;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  right?: React.ReactNode;
}) {
  const t = heroTheme(variant);

  return (
    <section className={cn("relative overflow-hidden", t.base)}>
      <div className="absolute inset-0">
        <Image
          src={cloudflareAsset("capantra-hero-bg.png")}
          alt=""
          fill
          priority={false}
          className="object-cover opacity-55"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-white/72" />
        <div className={cn("absolute inset-0 bg-gradient-to-br", t.glow)} />
        <div className={cn("absolute -left-24 top-10 h-72 w-72 rounded-full blur-3xl", t.blob1)} />
        <div className={cn("absolute -right-24 bottom-0 h-80 w-80 rounded-full blur-3xl", t.blob2)} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/34" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-24 lg:px-6 lg:pb-14 lg:pt-28">
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              {badges.map((badge) => (
                <Pill key={badge}>{badge}</Pill>
              ))}
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-black/90 sm:text-5xl">{title}</h1>
            <div className="mt-4 max-w-3xl text-base leading-relaxed text-black/70">{subtitle}</div>

            {note ? <div className="mt-5 text-xs leading-relaxed text-black/60">{note}</div> : null}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={primaryCta.href}
                className={cn(
                  "inline-flex h-11 items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold",
                  "bg-[var(--brand-primary)] text-black hover:bg-[#088a71]"
                )}
              >
                {primaryCta.label} <ArrowRight className="h-4 w-4" />
              </Link>

              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className={cn(
                    "inline-flex h-11 items-center justify-center rounded-xl px-6 text-sm font-semibold",
                    "border border-black/15 bg-white text-black/80 hover:bg-black/[0.03]"
                  )}
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </div>

          <div className="lg:justify-self-end">
            {right ? (
              <div className="rounded-3xl border border-black/12 bg-white/78 p-5 backdrop-blur">{right}</div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
