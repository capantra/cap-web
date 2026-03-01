import Link from "next/link";
import { BadgeCheck, ScrollText, LockKeyhole, BookOpen } from "lucide-react";

const items = [
  {
    icon: BadgeCheck,
    title: "Trust Center portal",
    body: "Procurement-style access to policies, summaries, and updates.",
    href: "/trust/overview",
  },
  {
    icon: ScrollText,
    title: "Versioned governance",
    body: "Change history that’s easy to review and reference.",
    href: "/trust/versions",
  },
  {
    icon: LockKeyhole,
    title: "Controls & auditability",
    body: "Designed to support access controls, logs, and accountability.",
    href: "/trust/security",
  },
  {
    icon: BookOpen,
    title: "Clear legal posture",
    body: "Plain-language policy summaries and scannable documentation.",
    href: "/trust/artifacts",
  },
];

export function TrustSignals() {
  return (
    <section className="bg-transparent">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <Link
              key={it.title}
              href={it.href}
              className="group border-l border-black/10 pl-4 transition hover:pl-5"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black/[0.04]">
                  <it.icon className="h-5 w-5 text-black/70" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-black/82 group-hover:text-black">
                    {it.title}
                  </div>
                  <div className="mt-1 text-sm leading-relaxed text-black/58">{it.body}</div>
                  <div className="mt-3 text-xs font-semibold text-black/45 group-hover:text-black/70">
                    Learn more →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
