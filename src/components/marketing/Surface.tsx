import React from "react";
import { cn } from "@/lib/cn";

export function Surface({
  className,
  children,
  variant = "default",
}: {
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "soft" | "outline";
}) {
  const v =
    variant === "default"
      ? "bg-white/62 backdrop-blur"
      : variant === "soft"
      ? "bg-white/52 backdrop-blur"
      : "bg-white/58 backdrop-blur border border-[color:rgba(111,127,151,0.18)]";

  return <div className={cn("rounded-3xl", v, className)}>{children}</div>;
}
