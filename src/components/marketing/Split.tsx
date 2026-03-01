import React from "react";
import { cn } from "@/lib/cn";

export function Split({
  left,
  right,
  reverse,
  rightSticky = false,
  className,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  reverse?: boolean;
  rightSticky?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]",
        reverse ? "lg:grid-cols-[0.85fr_1.15fr]" : "",
        className
      )}
    >
      <div className={reverse ? "lg:order-2" : ""}>{left}</div>
      <div className={cn(reverse ? "lg:order-1" : "", rightSticky ? "lg:sticky lg:top-24" : "")}>
        {right}
      </div>
    </div>
  );
}
