"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import { FileText, ExternalLink, Download } from "lucide-react";
import { cn } from "@/lib/cn";
import { getTrustLastUpdatedLabel } from "@/lib/trust/versions";
import { TrustHeroShell } from "@/components/trust/TrustHeroShell";

type SubprocessorStatus = "Active" | "Planned" | "On request" | "Retired";

type Subprocessor = {
  supplier: string;
  website?: string;
  purpose: string;
  region: "AU" | "UK" | "US" | "Global" | "Multi";
  dataCategories: string[];
  status: SubprocessorStatus;
  notes?: string;
};

const SUBPROCESSOR_ROWS: Subprocessor[] = [
  {
    supplier: "Cloud Infrastructure Provider",
    purpose: "Hosting and platform infrastructure (compute, networking, storage).",
    region: "Multi",
    dataCategories: ["Account metadata", "Operational logs", "Customer-provided records (where applicable)"],
    status: "On request",
    notes: "Specific provider(s) and region controls may be disclosed under NDA as part of procurement due diligence.",
  },
  {
    supplier: "Transactional Email Provider",
    purpose: "Service emails (alerts, verification, operational notifications).",
    region: "Multi",
    dataCategories: ["User identifiers", "Email delivery metadata", "Support communications (as applicable)"],
    status: "On request",
    notes: "Exact provider depends on environment and product. Some customers may use their own outbound email configuration.",
  },
  {
    supplier: "Monitoring / Observability Provider",
    purpose: "Operational monitoring, metrics, and alerting for service reliability and security signals.",
    region: "Global",
    dataCategories: ["Service telemetry", "Operational logs", "Incident metadata"],
    status: "Planned",
  },
  {
    supplier: "Customer Support Tooling",
    purpose: "Support ticketing and customer communications for service delivery.",
    region: "Global",
    dataCategories: ["Contact details", "Support conversation content", "Case metadata"],
    status: "Planned",
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-black/[0.02] px-3 py-1 text-xs font-semibold text-black/60">
      {children}
    </span>
  );
}

function ActionBadge({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2",
        "rounded-full border border-black/10 bg-black/[0.02]",
        "px-4 py-2 text-xs font-semibold text-black/70",
        "hover:bg-black/[0.04] hover:text-black"
      )}
    >
      {children}
    </Link>
  );
}

function StatusPill({
  status,
  active,
  onClick,
}: {
  status: SubprocessorStatus | "All";
  active: boolean;
  onClick: () => void;
}) {
  const tone = (() => {
    if (status === "All") return "bg-black/[0.02] border-black/10 text-black/70";
    if (status === "Active") return "bg-emerald-50 border-emerald-200 text-emerald-800";
    if (status === "Planned") return "bg-amber-50 border-amber-200 text-amber-800";
    if (status === "On request") return "bg-sky-50 border-sky-200 text-sky-800";
    return "bg-black/[0.02] border-black/10 text-black/60";
  })();

  const activeRing = active ? "ring-2 ring-black/10" : "ring-0";

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold",
        tone,
        "hover:bg-black/[0.03] focus:outline-none focus:ring-2 focus:ring-black/10",
        activeRing
      )}
      aria-pressed={active}
    >
      {status}
    </button>
  );
}

function statusChip(status: SubprocessorStatus) {
  const base = "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold";
  const dot = "h-2 w-2 rounded-full";

  switch (status) {
    case "Active":
      return { base: cn(base, "border-emerald-200 bg-emerald-50 text-emerald-800"), dot: cn(dot, "bg-emerald-500") };
    case "Planned":
      return { base: cn(base, "border-amber-200 bg-amber-50 text-amber-800"), dot: cn(dot, "bg-amber-500") };
    case "On request":
      return { base: cn(base, "border-sky-200 bg-sky-50 text-sky-800"), dot: cn(dot, "bg-sky-500") };
    case "Retired":
      return { base: cn(base, "border-black/10 bg-black/[0.02] text-black/60"), dot: cn(dot, "bg-black/25") };
    default:
      return { base: cn(base, "border-black/10 bg-black/[0.02] text-black/60"), dot: cn(dot, "bg-black/25") };
  }
}

function BadgeBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-black/[0.02] px-4 py-3">
      <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">{label}</div>
      <div className="mt-1 text-sm font-semibold text-black/80">{value}</div>
    </div>
  );
}

function Categories({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <span
          key={t}
          className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-black/60"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function toCSV(rows: Subprocessor[]) {
  const header = ["Supplier", "Purpose", "Region", "Data categories", "Status", "Website", "Notes"];

  const escape = (v: string) => {
    const needsQuotes = /[",\n]/.test(v);
    const safe = v.replace(/"/g, '""');
    return needsQuotes ? `"${safe}"` : safe;
  };

  const lines = [
    header.join(","),
    ...rows.map((r) =>
      [
        r.supplier,
        r.purpose,
        r.region,
        r.dataCategories.join("; "),
        r.status,
        r.website ?? "",
        r.notes ?? "",
      ]
        .map(escape)
        .join(",")
    ),
  ];

  return lines.join("\n");
}

function downloadTextFile(filename: string, text: string) {
  const blob = new Blob([text], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export default function TrustSubprocessorsPage() {
  const lastUpdated = getTrustLastUpdatedLabel();

  const [filter, setFilter] = useState<SubprocessorStatus | "All">("All");

  const filtered = useMemo(() => {
    if (filter === "All") return SUBPROCESSOR_ROWS;
    return SUBPROCESSOR_ROWS.filter((r) => r.status === filter);
  }, [filter]);

  const counts = useMemo(() => {
    const base: Record<SubprocessorStatus, number> = {
      Active: 0,
      Planned: 0,
      "On request": 0,
      Retired: 0,
    };
    for (const r of SUBPROCESSOR_ROWS) base[r.status] += 1;
    return base;
  }, []);

  const handleDownload = () => {
    const csv = toCSV(filtered);
    const stamp = lastUpdated.replaceAll("-", ""); // e.g. 03012026
    downloadTextFile(`capantra-subprocessors-${stamp}.csv`, csv);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <TrustHeroShell>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <Pill>Trust Center</Pill>
              <Pill>Artifacts</Pill>
              <Pill>Sub-processors</Pill>
              <Pill>AU · UK · US</Pill>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <ActionBadge href="/company/contact">Request sub-processor details →</ActionBadge>

              <button
                type="button"
                onClick={handleDownload}
                className={cn(
                  "inline-flex items-center gap-2",
                  "rounded-full border border-black/10 bg-black/[0.02]",
                  "px-4 py-2 text-xs font-semibold text-black/70",
                  "hover:bg-black/[0.04] hover:text-black",
                  "focus:outline-none focus:ring-2 focus:ring-black/10"
                )}
              >
                <Download className="h-4 w-4" />
                Download CSV
              </button>
            </div>
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-black/90">
            Sub-processors register (procurement)
          </h1>

          <p className="max-w-4xl text-sm leading-relaxed text-black/65">
            This register lists key third-party service providers (“sub-processors”) that may be used to operate
            Capantra services, including infrastructure, monitoring, and support tooling. Actual subprocessors may
            vary by product, deployment model, tenant configuration, and customer requirements.
          </p>

          <p className="text-xs leading-relaxed text-black/50">
            Note: This register is informational and may be updated over time. For a customer-specific list (including
            hosting region and vendor names), contact us as part of procurement due diligence.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <BadgeBox label="Last updated" value={lastUpdated} />
            <BadgeBox label="Jurisdictions" value="AU · UK · US" />
            <BadgeBox label="Disclosure level" value="Public + NDA (as required)" />
          </div>
        </div>
      </TrustHeroShell>

      {/* Filter row */}
      <section className="rounded-3xl border border-black/10 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0">
            <div className="text-sm font-semibold text-black/85">Filter</div>
            <div className="mt-1 text-sm text-black/60">
              Showing <span className="font-semibold text-black/80">{filtered.length}</span> of{" "}
              <span className="font-semibold text-black/80">{SUBPROCESSOR_ROWS.length}</span> entries.
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <StatusPill status="All" active={filter === "All"} onClick={() => setFilter("All")} />
            <StatusPill
              status="Active"
              active={filter === "Active"}
              onClick={() => setFilter("Active")}
            />
            <StatusPill
              status="Planned"
              active={filter === "Planned"}
              onClick={() => setFilter("Planned")}
            />
            <StatusPill
              status="On request"
              active={filter === "On request"}
              onClick={() => setFilter("On request")}
            />
            <StatusPill
              status="Retired"
              active={filter === "Retired"}
              onClick={() => setFilter("Retired")}
            />
          </div>

          <div className="text-xs text-black/45">
            Counts: Active {counts.Active} · Planned {counts.Planned} · On request {counts["On request"]} · Retired{" "}
            {counts.Retired}
          </div>
        </div>
      </section>

      {/* Register table */}
      <section className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <div className="text-lg font-semibold text-black/90">Register</div>
            <p className="mt-1 text-sm text-black/60">
              Procurement-friendly summary of subprocessors and their role in service delivery.
            </p>
          </div>

          <Link
            href="/trust/privacy"
            className="hidden sm:inline-flex h-10 items-center justify-center rounded-xl border border-black/10 bg-white px-4 text-sm font-semibold text-black/70 hover:bg-black/[0.03]"
          >
            Privacy overview →
          </Link>
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl border border-black/10">
          <div className="overflow-x-auto">
            <table className="min-w-[980px] w-full border-collapse">
              <thead className="bg-black/[0.02]">
                <tr>
                  <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-black/45">
                    Supplier
                  </th>
                  <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-black/45">
                    Purpose
                  </th>
                  <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-black/45">
                    Region
                  </th>
                  <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-black/45">
                    Data categories
                  </th>
                  <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-black/45">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-black/10">
                {filtered.map((r) => {
                  const chip = statusChip(r.status);
                  return (
                    <tr key={`${r.supplier}-${r.purpose}`} className="align-top">
                      <td className="px-4 py-4">
                        <div className="text-sm font-semibold text-black/85">{r.supplier}</div>
                        {r.website ? (
                          <a
                            href={r.website}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-black/55 hover:text-black/80"
                          >
                            Website <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        ) : null}
                        {r.notes ? (
                          <div className="mt-2 text-xs leading-relaxed text-black/50">{r.notes}</div>
                        ) : null}
                      </td>

                      <td className="px-4 py-4">
                        <div className="text-sm text-black/65">{r.purpose}</div>
                      </td>

                      <td className="px-4 py-4">
                        <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-black/70">
                          {r.region}
                        </span>
                      </td>

                      <td className="px-4 py-4">
                        <Categories items={r.dataCategories} />
                      </td>

                      <td className="px-4 py-4">
                        <span className={chip.base}>
                          <span className={chip.dot} aria-hidden="true" />
                          {r.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}

                {filtered.length === 0 ? (
                  <tr>
                    <td className="px-4 py-8 text-sm text-black/60" colSpan={5}>
                      No entries match this filter.
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-black/10 bg-black/[0.02] p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-black/80">
            <FileText className="h-4 w-4 text-black/60" />
            Procurement note
          </div>
          <p className="mt-2 text-sm text-black/60">
            Some vendor details may be provided under NDA or subject to security constraints. Customer-specific
            subprocessors may also include customer-provided integrations.
          </p>
        </div>
      </section>
    </div>
  );
}
