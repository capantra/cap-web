export type TrustDocKey =
  | "security"
  | "privacy"
  | "compliance"
  | "governance";

export type TrustDocVersion = {
  version: string; // e.g. "v1.0"
  dateISO: string; // e.g. "2026-01-03"
  summary: string;
  changes: string[];
};

export type TrustDoc = {
  key: TrustDocKey;
  title: string;
  href: string;
  owner?: string; // e.g. "Security"
  versions: TrustDocVersion[];
};

const V1_INITIAL: TrustDocVersion = {
  version: "v1.0.1",
  dateISO: "2026-01-03",
  summary: "Initial procurement-grade documentation published.",
  changes: [
    "Published initial policy structure and procurement summaries.",
    "Enabled Trust Center version history and last-updated indicators.",
  ],
};

export const TRUST_DOCS: TrustDoc[] = [
  {
    key: "security",
    title: "Security",
    href: "/trust/security",
    owner: "Security",
    versions: [V1_INITIAL],
  },
  {
    key: "privacy",
    title: "Privacy",
    href: "/trust/privacy",
    owner: "Privacy",
    versions: [V1_INITIAL],
  },
  {
    key: "compliance",
    title: "Compliance",
    href: "/trust/compliance",
    owner: "Compliance",
    versions: [V1_INITIAL],
  },
  {
    key: "governance",
    title: "Governance",
    href: "/trust/governance",
    owner: "Governance",
    versions: [V1_INITIAL],
  },
];


export function formatDateDDMMYYYY(dateISO: string): string {
  const d = new Date(dateISO);
  if (Number.isNaN(d.getTime())) return dateISO;

  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = String(d.getFullYear());
  return `${dd}-${mm}-${yyyy}`;
}

export function daysSince(dateISO: string): number | null {
  const d = new Date(dateISO);
  if (Number.isNaN(d.getTime())) return null;
  const now = new Date();
  const ms = now.getTime() - d.getTime();
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  return Math.max(0, days);
}

export function getTrustLastUpdatedISO(): string | null {
  const allDates = TRUST_DOCS.flatMap((d) => d.versions.map((v) => v.dateISO));
  if (allDates.length === 0) return null;

  const latest = allDates
    .map((iso) => ({ iso, t: new Date(iso).getTime() }))
    .filter((x) => !Number.isNaN(x.t))
    .sort((a, b) => b.t - a.t)[0];

  return latest?.iso ?? null;
}

export function getTrustLastUpdatedLabel(): string {
  const iso = getTrustLastUpdatedISO();
  if (!iso) return "To be published";
  return formatDateDDMMYYYY(iso);
}

export function getTrustLastUpdatedHelper(): string | null {
  const iso = getTrustLastUpdatedISO();
  if (!iso) return null;

  const d = daysSince(iso);
  if (d === null) return null;
  if (d === 0) return "Updated today";
  return `Updated ${d} day${d === 1 ? "" : "s"} ago`;
}
