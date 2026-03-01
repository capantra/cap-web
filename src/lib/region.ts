export type Region = "AU" | "UK" | "US";

export const REGION_LABEL: Record<Region, string> = {
  AU: "Australia",
  UK: "United Kingdom",
  US: "United States",
};

export const REGION_COOKIE = "capantra_region";
export const DEFAULT_REGION: Region = "AU";
