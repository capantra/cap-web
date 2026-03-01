"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import {
  DEFAULT_REGION,
  REGION_COOKIE,
  REGION_LABEL,
  type Region,
} from "@/lib/region";

const LOGO_URL =
  "https://pub-1e587b8a735340e788c5a49ed8f83204.r2.dev/Brand/logo.png";

function getCookie(name: string) {
  if (typeof document === "undefined") return "";
  const m = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return m ? decodeURIComponent(m[2] ?? "") : "";
}

function setCookie(name: string, value: string, days = 365) {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expires}; path=/; SameSite=Lax`;
}

function getInitialRegion(): Region {
  if (typeof document === "undefined") return DEFAULT_REGION;
  const saved = getCookie(REGION_COOKIE) as Region;
  return saved === "AU" || saved === "UK" || saved === "US"
    ? saved
    : DEFAULT_REGION;
}

type NavChild = { label: string; description?: string; href: string };
type NavLink = { label: string; href: string; children?: never };
type NavWithChildren = { label: string; children: NavChild[]; href?: never };
type NavItem = NavLink | NavWithChildren;

function isNavWithChildren(item: NavItem): item is NavWithChildren {
  return Array.isArray((item as NavWithChildren).children);
}

const NAV: NavItem[] = [
  {
    label: "Solutions",
    children: [
      {
        label: "CapantraDial",
        description:
          "Outbound + inbound engagement infrastructure with controls and reporting.",
        href: "/solutions/capantradial",
      },
      {
        label: "CapantraSales",
        description:
          "Agent-first solution for telefundraising and outbound sales with KPI, cost, and profitability visibility.",
        href: "/solutions/capantrasales",
      },
      {
        label: "CapantraData",
        description:
          "Data-enabled services with governance-first handling and transparency.",
        href: "/solutions/capantradata",
      },
      { label: "View all solutions", href: "/solutions" },
    ],
  },
  { label: "Trust Center", href: "/trust/overview" },
  {
    label: "Company",
    children: [
      { label: "About", href: "/company/about" },
      { label: "Contact", href: "/company/contact" },
    ],
  },
  { label: "Investors", href: "/investors" },
];

const LOGIN_DESTINATIONS: ReadonlyArray<{ label: string; href: string }> = [
  { label: "CapantraOne", href: "https://one.capantra.com" },
  { label: "Investor Login", href: "https://invest.capantra.com" },
];

function useDismiss(
  open: boolean,
  setOpen: (v: boolean) => void,
  ref: React.RefObject<HTMLElement | null>
) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const onPointerDown = (e: PointerEvent) => {
      const el = ref.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target)) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open, setOpen, ref]);
}

function RegionSelector({
  region,
  setRegion,
  compact,
}: {
  region: Region;
  setRegion: (r: Region) => void;
  compact?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  useDismiss(open, setOpen, wrapRef);

  return (
    <div ref={wrapRef} className={cn("relative", compact ? "w-full" : "")}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex items-center justify-between gap-2 rounded-xl border border-black/10 bg-white px-3 py-2 text-sm font-medium text-black/80 shadow-sm",
          "hover:bg-black/[0.02] active:bg-black/[0.04] focus:outline-none focus:ring-2 focus:ring-black/10",
          compact ? "h-11 w-full px-4" : ""
        )}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="inline-flex items-center gap-2">
          <span className="text-xs font-semibold text-black/50">Region</span>
          <span className="font-semibold">{region}</span>
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-black/60 transition",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <div
          className={cn(
            "absolute right-0 z-[9999] mt-2 w-56 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl",
            compact ? "left-0 right-0 w-full" : ""
          )}
          role="listbox"
        >
          {(["AU", "UK", "US"] as Region[]).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => {
                setRegion(r);
                setOpen(false);
              }}
              className={cn(
                "flex w-full items-center justify-between px-4 py-3 text-left text-sm",
                "hover:bg-black/[0.03] focus:outline-none focus:bg-black/[0.03]"
              )}
            >
              <div className="flex flex-col">
                <span className="font-semibold text-black/80">{r}</span>
                <span className="text-xs text-black/50">{REGION_LABEL[r]}</span>
              </div>
              {region === r ? (
                <span className="text-xs font-semibold text-black/60">
                  Selected
                </span>
              ) : null}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function LoginDropdown({ compact }: { compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  useDismiss(open, setOpen, wrapRef);

  return (
    <div ref={wrapRef} className={cn("relative", compact ? "w-full" : "")}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex items-center justify-between gap-2 rounded-xl border border-black/15 bg-white px-4 text-sm font-semibold text-black/75 shadow-sm",
          "hover:bg-black/[0.03] hover:text-black focus:outline-none focus:ring-2 focus:ring-black/10",
          compact ? "h-11 w-full" : "h-10"
        )}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span>Login</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-black/60 transition",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <div
          className={cn(
            "absolute right-0 z-[9999] mt-2 w-72 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl",
            compact ? "left-0 right-0 w-full" : ""
          )}
          role="menu"
        >
          <div className="p-2">
            <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-black/40">
              Unified login
            </div>

            {LOGIN_DESTINATIONS.map((d) => (
              <a
                key={d.href}
                href={d.href}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "group block rounded-xl px-3 py-3",
                  "hover:bg-black/[0.03] focus:outline-none focus:bg-black/[0.03]"
                )}
                onClick={() => setOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-black/80 group-hover:text-black">
                    {d.label}
                  </div>
                  <span className="text-xs font-semibold text-black/40 group-hover:text-black/60">
                    ↗
                  </span>
                </div>
                <div className="mt-0.5 text-xs text-black/55">
                  Sign in to your {d.label} portal
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function DesktopHoverMenu({ item }: { item: NavWithChildren }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const openNow = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const closeSoon = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), 180);
  };

  return (
    <div className="relative" onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <button
        type="button"
        className={cn(
          "inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-semibold text-black/80",
          "hover:bg-black/[0.03] hover:text-black focus:outline-none focus:ring-2 focus:ring-black/10"
        )}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown className={cn("h-4 w-4 transition", open && "rotate-180")} />
      </button>

      {open && (
        <div
          className="absolute left-0 z-[9999] mt-2 w-[420px] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl"
          role="menu"
          onMouseEnter={openNow}
          onMouseLeave={closeSoon}
        >
          <div className="p-2">
            {item.children.map((c: NavChild) => (
              <Link
                key={c.href}
                href={c.href}
                className={cn(
                  "group block rounded-xl px-4 py-3",
                  "hover:bg-black/[0.03] focus:outline-none focus:bg-black/[0.03]"
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-black/80 group-hover:text-black">
                      {c.label}
                    </div>
                    {c.description ? (
                      <div className="mt-0.5 text-xs text-black/55">
                        {c.description}
                      </div>
                    ) : null}
                  </div>
                  <span className="text-xs font-semibold text-black/40 group-hover:text-black/60">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileAccordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-2xl border border-black/10 bg-white">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-black/80">{title}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-black/50 transition",
            open && "rotate-180"
          )}
        />
      </button>
      {open && (
        <div className="border-t border-black/10 px-2 pb-2 pt-2">
          {children}
        </div>
      )}
    </div>
  );
}

export function MarketingHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [region, setRegionState] = useState<Region>(getInitialRegion);

  const setRegion = (r: Region) => {
    setRegionState(r);
    setCookie(REGION_COOKIE, r);
  };

  const trustHref = useMemo(() => "/trust/overview", []);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
        className={cn(
            "fixed inset-x-0 top-0 z-[9999] transition-colors duration-300",
            scrolled ? "border-b border-black/10" : "border-b border-transparent",
            scrolled && !mobileOpen && "backdrop-blur"
        )}
        style={{
            backgroundColor: scrolled
              ? "rgba(255,255,255,0.90)"
              : mobileOpen
                ? "rgba(255,255,255,0.98)"
                : "transparent",
        }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
        <div className="flex items-center gap-3">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src={LOGO_URL}
              alt="Capantra"
              width={160}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) =>
              isNavWithChildren(item) ? (
                <DesktopHoverMenu key={item.label} item={item} />
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "rounded-xl px-3 py-2 text-sm font-semibold text-black/80",
                    "hover:bg-black/[0.03] hover:text-black focus:outline-none focus:ring-2 focus:ring-black/10"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <RegionSelector region={region} setRegion={setRegion} />
          </div>

          <Link
            href={trustHref}
            className={cn(
              "hidden h-10 items-center rounded-xl bg-[var(--brand-primary)] px-4 text-sm font-semibold text-white shadow-sm",
              "hover:bg-[#088a71] focus:outline-none focus:ring-2 focus:ring-[color:rgba(11,157,130,0.35)] lg:inline-flex"
            )}
          >
            Trust Center
          </Link>

          <div className="hidden lg:block">
            <LoginDropdown />
          </div>

          <button
            type="button"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white shadow-sm",
              "hover:bg-black/[0.03] focus:outline-none focus:ring-2 focus:ring-black/10 lg:hidden"
            )}
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-5 w-5 text-black/70" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-[9999] bg-white">
            <div className="flex items-center justify-between border-b border-black/10 px-4 py-3">
              <div className="flex items-center gap-3">
                <Image
                  src={LOGO_URL}
                  alt="Capantra"
                  width={140}
                  height={36}
                  className="h-7 w-auto"
                />
                <span className="text-xs font-semibold text-black/45">
                  {region}
                </span>
              </div>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5 text-black/70" />
              </button>
            </div>

            <div className="h-[calc(100dvh-57px)] overflow-y-auto px-4 py-4 [@media(max-height:760px)]:px-3 [@media(max-height:760px)]:py-2">
              <div className="space-y-3 [@media(max-height:760px)]:space-y-2">
                <RegionSelector region={region} setRegion={setRegion} compact />
                <LoginDropdown compact />

                <MobileAccordion title="Solutions">
                  <div className="space-y-1">
                    {NAV.find(isNavWithChildren)?.children.map((c: NavChild) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-xl px-4 py-3 text-sm text-black/80 hover:bg-black/[0.03] [@media(max-height:760px)]:py-2"
                      >
                        <div className="font-semibold">{c.label}</div>
                        {c.description ? (
                          <div className="mt-0.5 text-xs text-black/55">
                            {c.description}
                          </div>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                </MobileAccordion>

                <Link
                  href="/trust/overview"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between rounded-2xl border border-black/10 bg-white px-4 py-4 [@media(max-height:760px)]:py-3"
                >
                  <span className="text-base font-semibold text-black/80">
                    Trust Center
                  </span>
                  <span className="text-sm font-semibold text-black/40">→</span>
                </Link>

                <MobileAccordion title="Company">
                  <div className="space-y-1">
                    {NAV.find(
                      (n): n is NavWithChildren =>
                        isNavWithChildren(n) && n.label === "Company"
                    )?.children.map((c: NavChild) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-xl px-4 py-3 text-sm font-semibold text-black/80 hover:bg-black/[0.03] [@media(max-height:760px)]:py-2"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </MobileAccordion>

                <Link
                  href="/investors"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between rounded-2xl border border-black/10 bg-white px-4 py-4 [@media(max-height:760px)]:py-3"
                >
                  <span className="text-base font-semibold text-black/80">
                    Investors
                  </span>
                  <span className="text-sm font-semibold text-black/40">→</span>
                </Link>

                <div className="grid grid-cols-1 gap-2 pt-2 [@media(max-height:760px)]:gap-1 [@media(max-height:760px)]:pt-1">
                  <Link
                    href="/trust/overview"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex h-11 items-center justify-center rounded-xl bg-[var(--brand-primary)] text-sm font-semibold text-white hover:bg-[#088a71] [@media(max-height:760px)]:h-10"
                  >
                    Visit Trust Center
                  </Link>
                  <Link
                    href="/company/contact"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex h-11 items-center justify-center rounded-xl bg-black/5 text-sm font-semibold text-black/80 [@media(max-height:760px)]:h-10"
                  >
                    Request a briefing/demo
                  </Link>
                </div>

                <p className="pt-2 text-xs leading-relaxed text-black/50 [@media(max-height:760px)]:pt-1">
                  Region setting affects select wording and region notes (AU/UK/US).
                  For detailed jurisdiction information, see the Trust Center.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
