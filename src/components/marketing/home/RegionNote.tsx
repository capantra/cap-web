"use client";

import { useState } from "react";
import { DEFAULT_REGION, REGION_COOKIE, REGION_LABEL, type Region } from "@/lib/region";
import { cn } from "@/lib/cn";

function getCookie(name: string) {
  if (typeof document === "undefined") return "";
  const m = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return m ? decodeURIComponent(m[2] ?? "") : "";
}

function setCookie(name: string, value: string, days = 365) {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

const getInitialRegion = (): Region => {
  if (typeof document === "undefined") return DEFAULT_REGION;
  const saved = getCookie(REGION_COOKIE) as Region;
  return saved === "AU" || saved === "UK" || saved === "US"
    ? saved
    : DEFAULT_REGION;
};

const copy: Record<Region, string> = {
  AU: "Default region is Australia. AU-specific operating considerations are prioritised, with jurisdiction notes available in the Trust Center.",
  UK: "Region is United Kingdom. UK-specific considerations are available in the Trust Center for review and procurement alignment.",
  US: "Region is United States. US-specific considerations are available in the Trust Center for review and procurement alignment.",
};

export function RegionNote() {
  const [region, setRegion] = useState<Region>(getInitialRegion);

  return (
    <section className="bg-transparent">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
        <div className="rounded-3xl bg-white/55 p-6 lg:flex lg:items-center lg:justify-between">
          <div>
            <div className="text-sm font-semibold text-black/80">
              Region settings
            </div>
            <p className="mt-2 max-w-3xl text-sm text-black/60">
              {copy[region]}
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-2 sm:flex-row lg:mt-0">
            {(["AU", "UK", "US"] as Region[]).map((r) => (
              <button
                key={r}
                onClick={() => {
                  setRegion(r);
                  setCookie(REGION_COOKIE, r);
                }}
                className={cn(
                  "inline-flex h-11 items-center justify-center rounded-xl border px-4 text-sm font-semibold",
                  region === r
                    ? "border-black/20 bg-black text-white"
                    : "border-black/15 bg-white text-black/75 hover:bg-black/[0.03]"
                )}
              >
                {r}
                <span className="ml-2 text-xs opacity-80">
                  {REGION_LABEL[r]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
