"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShieldCheck,
  FileText,
  Scale,
  Layers,
  Clock,
  Archive,
  Globe2,
  Database,
} from "lucide-react";
import { cn } from "@/lib/cn";

type NavItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

type NavGroup = {
  title: string;
  items: NavItem[];
};

const GROUPS: NavGroup[] = [
  {
    title: "Trust Center",
    items: [
      { label: "Overview", href: "/trust/overview", icon: ShieldCheck },
      { label: "Security", href: "/trust/security", icon: ShieldCheck },
      { label: "Privacy", href: "/trust/privacy", icon: FileText },
      { label: "Compliance", href: "/trust/compliance", icon: Scale },
      { label: "Governance", href: "/trust/governance", icon: Layers },
      { label: "Version history", href: "/trust/versions", icon: Clock },
    ],
  },
  {
    title: "Artifacts",
    items: [
      { label: "Index", href: "/trust/artifacts", icon: Archive },
      { label: "Modern Slavery", href: "/trust/artifacts/modern-slavery", icon: Globe2 },
      { label: "Sub-processors", href: "/trust/artifacts/subprocessors", icon: Database },
    ],
  },
];

function isActive(pathname: string, href: string) {
  if (href === "/trust/overview") return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function TrustSidebar() {
  const pathname = usePathname();

  return (
    <aside className="lg:sticky lg:top-24">
      <div className="space-y-3">
        {GROUPS.map((g) => (
          <div
            key={g.title}
            className="rounded-3xl border border-[color:rgba(111,127,151,0.28)] bg-white p-3 shadow-sm"
          >
            <div className="px-1.5 pb-2 text-[11px] font-semibold uppercase tracking-wide text-black/45">
              {g.title}
            </div>

            <nav className="space-y-1">
              {g.items.map((it) => {
                const active = isActive(pathname, it.href);
                const Icon = it.icon;

                return (
                  <Link
                    key={it.href}
                    href={it.href}
                    className={cn(
                      "flex items-center gap-2 rounded-2xl px-2 py-2 text-sm font-semibold",
                      active
                        ? "bg-[var(--brand-navy)] text-white"
                        : "text-black/70 hover:bg-black/[0.03] hover:text-black/90"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    <span
                      className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-2xl",
                        active ? "bg-white/15" : "bg-black/[0.04]"
                      )}
                    >
                      <Icon className={cn("h-4 w-4", active ? "text-white" : "text-black/70")} />
                    </span>

                    <span className="min-w-0 truncate">{it.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}

        {/* Smaller, less tall note */}
        <div className="rounded-3xl border border-[color:rgba(111,127,151,0.28)] bg-white p-4 shadow-sm">
          <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
            Note
          </div>
          <p className="mt-2 text-sm leading-relaxed text-black/60">
            Procurement summaries. Scope varies by product, jurisdiction and deployment.
          </p>
        </div>
      </div>
    </aside>
  );
}
