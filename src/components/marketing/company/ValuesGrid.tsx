import React from "react";
import {
  Scale,
  ShieldCheck,
  LayoutGrid,
  HeartHandshake,
  FileText,
  MapPin,
} from "lucide-react";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Governance by default",
    body: "We build with controls, documentation, and review-readiness close to the workflow.",
  },
  {
    icon: FileText,
    title: "Clarity over complexity",
    body: "Simple primitives and transparent system behavior so operators can trust what’s happening.",
  },
  {
    icon: Scale,
    title: "Responsible operations",
    body: "Design choices that support accountability and appropriate use across different jurisdictions.",
  },
  {
    icon: LayoutGrid,
    title: "Composable platforms",
    body: "A shared operating layer with product surfaces that fit different teams and workflows.",
  },
  {
    icon: HeartHandshake,
    title: "Operator empathy",
    body: "Built for agencies and BPO teams who need repeatability, reporting, and strong day-to-day usability.",
  },
  {
    icon: MapPin,
    title: "Region-aware",
    body: "AU-first with a structure that supports global expansion and jurisdiction-specific requirements.",
  },
];

export function ValuesGrid() {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {VALUES.map((v) => (
        <div
          key={v.title}
          className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black/[0.04]">
            <v.icon className="h-6 w-6 text-black/70" />
          </div>
          <div className="mt-4 text-sm font-semibold text-black/85">{v.title}</div>
          <div className="mt-2 text-sm leading-relaxed text-black/60">{v.body}</div>
        </div>
      ))}
    </div>
  );
}
