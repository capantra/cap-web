import type { Metadata } from "next";
import Link from "next/link";
import { Clock, FileText, ArrowRight } from "lucide-react";
import {
  TRUST_DOCS,
  getTrustLastUpdatedHelper,
  getTrustLastUpdatedLabel,
  formatDateDDMMYYYY,
} from "@/lib/trust/versions";
import { TrustHeroShell } from "@/components/trust/TrustHeroShell";

export const metadata: Metadata = {
  title: "Versions",
  description:
    "Version history for Capantra Trust Center documents, including publication dates and change summaries.",
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-black/[0.02] px-3 py-1 text-xs font-semibold text-black/60">
      {children}
    </span>
  );
}

function LastUpdatedPill({
  label,
  helper,
}: {
  label: string;
  helper?: string | null;
}) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-4 py-2 shadow-sm">
      <Clock className="h-4 w-4 text-black/55" />
      <div className="flex flex-col leading-tight">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
          Last updated
        </span>
        <span className="text-xs font-semibold text-black/80">{label}</span>
        {helper ? (
          <span className="text-[11px] font-semibold text-black/45">{helper}</span>
        ) : null}
      </div>
    </div>
  );
}

function VersionCard({
  title,
  href,
  versions,
}: {
  title: string;
  href: string;
  versions: {
    version: string;
    dateISO: string;
    summary: string;
    changes: string[];
  }[];
}) {
  const latest = versions[0];

  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Document</Badge>
            <div className="text-lg font-semibold text-black/90">{title}</div>
          </div>
          <div className="mt-2 text-sm text-black/60">
            {latest ? (
              <>
                Latest:{" "}
                <span className="font-semibold text-black/75">{latest.version}</span>{" "}
                <span className="text-black/45">
                  ({formatDateDDMMYYYY(latest.dateISO)})
                </span>{" "}
                — {latest.summary}
              </>
            ) : (
              <>No published versions yet.</>
            )}
          </div>
        </div>

        <Link
          href={href}
          className="inline-flex h-10 items-center justify-center rounded-xl border border-black/10 bg-white px-4 text-sm font-semibold text-black/70 hover:bg-black/[0.03]"
        >
          View <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>

      {versions.length > 0 ? (
        <div className="mt-5 space-y-3">
          {versions.slice(0, 5).map((v) => (
            <div
              key={`${title}-${v.version}-${v.dateISO}`}
              className="rounded-2xl border border-black/10 bg-black/[0.02] p-4"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm font-semibold text-black/85">
                  {v.version}{" "}
                  <span className="text-black/45">· {formatDateDDMMYYYY(v.dateISO)}</span>
                </div>
                <div className="text-xs font-semibold uppercase tracking-wide text-black/45">
                  Version
                </div>
              </div>

              <div className="mt-2 text-sm text-black/60">{v.summary}</div>

              {v.changes.length ? (
                <ul className="mt-3 space-y-2">
                  {v.changes.map((c) => (
                    <li key={c} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black/35" />
                      <span className="text-sm text-black/65">{c}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function TrustVersionsPage() {
  const lastUpdatedLabel = getTrustLastUpdatedLabel();
  const lastUpdatedHelper = getTrustLastUpdatedHelper();

  const docsSorted = [...TRUST_DOCS].sort((a, b) => {
    const aDate = a.versions[0]?.dateISO ? new Date(a.versions[0].dateISO).getTime() : -1;
    const bDate = b.versions[0]?.dateISO ? new Date(b.versions[0].dateISO).getTime() : -1;
    return bDate - aDate;
  });

  return (
    <div className="space-y-6">
      <TrustHeroShell>
        {/* ✅ Top row: badges left, last-updated inline right */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Trust Center</Badge>
            <Badge>Version history</Badge>
          </div>

          <LastUpdatedPill label={lastUpdatedLabel} helper={lastUpdatedHelper} />
        </div>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-black/90">
          Version history
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-black/65">
          Track updates to Trust Center documentation. Each document maintains a change history so
          procurement teams can review what changed and when.
        </p>
      </TrustHeroShell>

      <div className="grid gap-4">
        {docsSorted.map((d) => (
          <VersionCard
            key={d.key}
            title={d.title}
            href={d.href}
            versions={[...d.versions].sort((a, b) => (b.dateISO > a.dateISO ? 1 : -1))}
          />
        ))}
      </div>

      <section className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black/[0.04]">
            <FileText className="h-5 w-5 text-black/70" />
          </div>
          <div className="min-w-0">
            <div className="text-lg font-semibold text-black/90">
              Want a formal security/privacy pack?
            </div>
            <p className="mt-2 text-sm text-black/60">
              If your process requires a specific questionnaire format or evidence, contact us and we’ll
              align to your procurement workflow where practicable.
            </p>
            <div className="mt-4">
              <Link
                href="/company/contact"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-black px-5 text-sm font-semibold text-white hover:bg-black/90"
              >
                Request pack
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
