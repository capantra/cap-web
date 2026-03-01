import React from "react";
import { cn } from "@/lib/cn";

type SectionTone = "plain" | "tint" | "gradient" | "dark";

export function Section({
  tone = "plain",
  className,
  innerClassName,
  children,
}: {
  tone?: SectionTone;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
}) {
  const toneClass = tone === "dark" ? "bg-[var(--brand-navy)] text-white" : "bg-transparent";

  return (
    <section className={cn("w-full", toneClass, className)}>
      <div className={cn("mx-auto w-full max-w-7xl px-4 lg:px-6", innerClassName)}>
        {children}
      </div>
    </section>
  );
}
