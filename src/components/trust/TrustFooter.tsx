import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { getTrustLastUpdatedLabel } from "@/lib/trust/versions";

const LOGO_URL =
  "https://pub-1e587b8a735340e788c5a49ed8f83204.r2.dev/Brand/logo.png";

function StatusItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="min-w-0">
      <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
        {label}
      </div>
      <div className="mt-1 text-sm font-semibold text-black/80">{value}</div>
    </div>
  );

  if (!href) return content;

  return (
    <Link
      href={href}
      className={cn(
        "group block rounded-2xl border border-black/10 bg-white p-4 shadow-sm",
        "hover:bg-black/[0.02] hover:border-black/15 transition"
      )}
    >
      <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
        {label}
      </div>
      <div className="mt-1 flex items-center justify-between gap-3">
        <div className="text-sm font-semibold text-black/80 group-hover:text-black/90">
          {value}
        </div>
        <span className="text-sm font-semibold text-black/35 group-hover:text-black/55">
          →
        </span>
      </div>
    </Link>
  );
}

export function TrustFooter() {
  const lastUpdated = getTrustLastUpdatedLabel(); // DD-MM-YYYY or "To be published"

  return (
    <footer className="border-t border-[color:rgba(111,127,151,0.28)] bg-[var(--brand-bg-light)]">
      {/* Procurement status row */}
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
              Last updated
            </div>
            <div className="mt-1 text-sm font-semibold text-black/80">{lastUpdated}</div>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
              Jurisdictions
            </div>
            <div className="mt-1 text-sm font-semibold text-black/80">AU · UK · US</div>
          </div>

          <StatusItem
            label="Support contact"
            value="Request a briefing/demo"
            href="/company/contact"
          />
        </div>

        {/* Footer links + brand */}
        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src={LOGO_URL}
                alt="Capantra"
                width={180}
                height={60}
                className="h-8 w-auto"
              />
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-black/60">
              Procurement-ready documentation for Capantra’s security, privacy and governance posture.
              Materials may vary by product and deployment model.
            </p>

            <p className="mt-4 text-xs text-black/45">
              © {new Date().getFullYear()} Capantra. All rights reserved.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-black/45">
                Trust Center
              </div>
              <div className="mt-3 space-y-2 text-sm">
                <Link className="block text-black/70 hover:text-black/90" href="/trust/overview">
                  Overview
                </Link>
                <Link className="block text-black/70 hover:text-black/90" href="/trust/security">
                  Security
                </Link>
                <Link className="block text-black/70 hover:text-black/90" href="/trust/privacy">
                  Privacy
                </Link>
                <Link className="block text-black/70 hover:text-black/90" href="/trust/compliance">
                  Compliance
                </Link>
                <Link className="block text-black/70 hover:text-black/90" href="/trust/governance">
                  Governance
                </Link>
                <Link className="block text-black/70 hover:text-black/90" href="/trust/versions">
                  Version history
                </Link>
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-black/45">
                Company
              </div>
              <div className="mt-3 space-y-2 text-sm">
                <Link className="block text-black/70 hover:text-black/90" href="/company/about">
                  About
                </Link>
                <Link className="block text-black/70 hover:text-black/90" href="/company/contact">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-black/45">
                Legal
              </div>
              <div className="mt-3 space-y-2 text-sm">
                <Link className="block text-black/70 hover:text-black/90" href="/trust/overview">
                  Trust portal notice
                </Link>
                <Link className="block text-black/70 hover:text-black/90" href="/company/contact">
                  Procurement requests
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Fine print */}
        <div className="mt-10 rounded-2xl border border-[color:rgba(111,127,151,0.28)] bg-white/75 p-4">
          <p className="text-xs leading-relaxed text-black/55">
            This Trust Center is provided for informational purposes and does not constitute legal advice. Control
            implementation may vary by product, deployment model and customer configuration. For formal procurement
            packs, evidence, or contractual materials, please contact Capantra.
          </p>
        </div>
      </div>
    </footer>
  );
}
