import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

const LOGO_URL =
  "https://pub-1e587b8a735340e788c5a49ed8f83204.r2.dev/Brand/logo.png";

const COLS: Array<{ title: string; links: Array<{ label: string; href: string }> }> = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/company/about" },
      { label: "Contact", href: "/company/contact" },
      { label: "Investors", href: "/investors" },
      { label: "Portal login", href: "https://one.capantra.com" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Solutions hub", href: "/solutions" },
      { label: "CapantraDial", href: "/solutions/capantradial" },
      { label: "CapantraOne", href: "/solutions/capantraone" },
      { label: "CapantraData", href: "/solutions/capantradata" },
    ],
  },
  {
    title: "Trust Center",
    links: [
      { label: "Overview", href: "/trust/overview" },
      { label: "Security", href: "/trust/security" },
      { label: "Privacy", href: "/trust/privacy" },
      { label: "Compliance", href: "/trust/compliance" },
      { label: "Artifacts", href: "/trust/artifacts" },
      { label: "Version history", href: "/trust/versions" },
    ],
  },
  {
    title: "Legal & Compliance",
    links: [
      { label: "Terms", href: "/legal/terms" },
      { label: "Privacy", href: "/legal/privacy" },
      { label: "DPA", href: "/legal/data-processing" },
      { label: "Acceptable Use", href: "/legal/acceptable-use" },
      { label: "Security", href: "/legal/security" },
      { label: "Telecom Compliance", href: "/compliance/telecommunications" },
      { label: "Anti-Spam", href: "/compliance/anti-spam" },
      { label: "Regulatory", href: "/compliance/regulatory" },
      { label: "Responsible Use", href: "/compliance/responsible-use" },
    ],
  },
];

export function MarketingFooter() {
  return (
    <footer className="border-t border-[color:rgba(111,127,151,0.28)] bg-[var(--brand-bg-light)]">
      {/* Trust band */}
      <div className="border-b border-[color:rgba(111,127,151,0.28)] bg-white/80">
        <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
          <div className="grid items-start gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h3 className="text-xl font-semibold text-black/85">
                Built for transparency, governance, and procurement confidence.
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-black/60">
                Explore policies, controls, and version history in our Trust Center portal — designed to make
                reviews easier for legal, security, and procurement teams.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
              <Link
                href="/trust/overview"
                className={cn(
                  "inline-flex h-11 items-center justify-center rounded-xl bg-[var(--brand-primary)] px-5 text-sm font-semibold text-white",
                  "hover:bg-[#088a71]"
                )}
              >
                Visit Trust Center
              </Link>
              <Link
                href="/company/contact"
                className={cn(
                  "inline-flex h-11 items-center justify-center rounded-xl border border-[color:rgba(111,127,151,0.28)] bg-white px-5 text-sm font-semibold text-[color:rgba(15,23,42,0.78)]",
                  "hover:bg-[#f7f8fa]"
                )}
              >
                Request a briefing/demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2.8fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image src={LOGO_URL} alt="Capantra" width={170} height={44} className="h-9 w-auto" />
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-black/60">
              Capantra builds customer engagement infrastructure designed with governance in mind — enabling
              teams to operate with transparency and control.
            </p>

            <div className="mt-6 rounded-2xl border border-black/10 bg-white p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-black/40">Regions</div>
              <div className="mt-2 text-sm font-semibold text-black/75">Australia · United Kingdom · United States</div>
              <p className="mt-2 text-xs leading-relaxed text-black/55">
                Region notes and jurisdiction considerations are available in the Trust Center.
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {COLS.map((col) => (
              <div key={col.title}>
                <div className="text-sm font-semibold text-black/75">{col.title}</div>
                <ul className="mt-4 space-y-2">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-black/60 hover:text-black/85"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Utility row */}
        <div className="mt-10 flex flex-col gap-4 border-t border-[color:rgba(111,127,151,0.28)] pt-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-black/60">
            <Link className="hover:text-black/85" href="/trust/overview">
              Trust Center
            </Link>
            <Link className="hover:text-black/85" href="/legal/privacy">
              Privacy
            </Link>
            <Link className="hover:text-black/85" href="/legal/terms">
              Terms
            </Link>
            <Link className="hover:text-black/85" href="/legal">
              Legal
            </Link>
            <Link className="hover:text-black/85" href="/compliance/regulatory">
              Compliance
            </Link>
            <Link className="hover:text-black/85" href="/compliance">
              Compliance index
            </Link>
            <Link className="hover:text-black/85" href="/trust/artifacts/modern-slavery">
              Modern Slavery
            </Link>
            <Link className="hover:text-black/85" href="/company/contact">
              Contact
            </Link>
          </div>

          <div className="text-xs text-black/50">
            © {new Date().getFullYear()} Capantra. All rights reserved.
          </div>
        </div>

        {/* Legal note */}
        <p className="mt-4 text-xs leading-relaxed text-black/45">
          Information on this website is provided for general purposes only and does not constitute legal advice.
          For procurement and risk review materials, refer to the Trust Center.
        </p>
      </div>
    </footer>
  );
}
