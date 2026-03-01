import Link from "next/link";
import { cn } from "@/lib/cn";

export function FinalCTA() {
  return (
    <section className="bg-transparent">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <div className="rounded-3xl border border-black/10 bg-black p-8 shadow-sm lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-white">Make procurement easier.</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/80">
                Start with the Trust Center portal, then explore solutions. We’re building for transparency,
                control, and review readiness across AU, UK, and US contexts.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row lg:justify-end">
              <Link
                href="/trust/overview"
                className={cn(
                  "inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black",
                  "hover:bg-white/95"
                )}
              >
                Visit Trust Center
              </Link>
              <Link
                href="/company/contact"
                className={cn(
                  "inline-flex h-11 items-center justify-center rounded-xl bg-white/10 px-5 text-sm font-semibold text-white",
                  "hover:bg-white/15"
                )}
              >
                Request a briefing
              </Link>
              <Link
                href="/solutions"
                className={cn(
                  "inline-flex h-11 items-center justify-center rounded-xl border border-white/15 bg-transparent px-5 text-sm font-semibold text-white",
                  "hover:bg-white/10"
                )}
              >
                Explore solutions
              </Link>
            </div>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-white/60">
            Compliance obligations vary by jurisdiction and use case. Materials in the Trust Center are intended to
            support review and procurement processes.
          </p>
        </div>
      </div>
    </section>
  );
}
