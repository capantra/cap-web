import Image from "next/image";
import React from "react";
import { cloudflareAsset } from "@/lib/assets";

export function TrustHeroShell({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
      <Image
        src={cloudflareAsset("capantra-hero-bg.png")}
        alt=""
        fill
        priority={false}
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-white/88" />
      <div className="relative">{children}</div>
    </section>
  );
}
