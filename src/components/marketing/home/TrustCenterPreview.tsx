import Link from "next/link";
import { FileText, Clock, ArrowRight } from "lucide-react";

const docs = [
  { title: "Security Policy", href: "/trust/security", meta: "Controls, governance artefacts, review notes" },
  { title: "Privacy", href: "/trust/privacy", meta: "Data handling principles and transparency" },
  { title: "Compliance", href: "/trust/compliance", meta: "Calling, messaging, and jurisdiction notes" },
  { title: "Artifacts", href: "/trust/artifacts", meta: "Sub-processors and statement artefacts" },
];

export function TrustCenterPreview() {
  return (
    <section className="bg-transparent">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <div className="rounded-3xl bg-white/50 p-6 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-black/60">
                <Clock className="h-4 w-4" />
                Procurement-ready portal experience
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-black/85">Trust Center</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-black/60">
                A separate portal designed for legal, security, and procurement review — with policy summaries,
                version history, and clear change visibility.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <Link
                href="/trust/overview"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-black px-6 text-sm font-semibold text-white hover:bg-black/90"
              >
                Open Trust Center
              </Link>
              <Link
                href="/trust/versions"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-black/15 bg-white px-6 text-sm font-semibold text-black/75 hover:bg-black/[0.03]"
              >
                View version history
              </Link>
            </div>
          </div>

          <div className="mt-8 grid gap-3 lg:grid-cols-2">
            {docs.map((d) => (
              <Link
                key={d.title}
                href={d.href}
                className="group flex items-start gap-3 rounded-2xl bg-white/75 p-5"
              >
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-black/[0.04]">
                  <FileText className="h-5 w-5 text-black/70" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-semibold text-black/80 group-hover:text-black">
                      {d.title}
                    </div>
                    <ArrowRight className="h-4 w-4 text-black/30 group-hover:text-black/60" />
                  </div>
                  <div className="mt-1 text-sm text-black/60">{d.meta}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
