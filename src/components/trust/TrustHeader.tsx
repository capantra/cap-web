import Image from "next/image";
import Link from "next/link";

const LOGO_URL =
  "https://pub-1e587b8a735340e788c5a49ed8f83204.r2.dev/Brand/logo.png";

export function TrustHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[color:rgba(111,127,151,0.28)] bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
        <Link href="/" className="inline-flex items-center gap-3">
          <Image
            src={LOGO_URL}
            alt="Capantra"
            width={160}
            height={50}
            className="h-8 w-auto"
            priority
          />
          <span className="hidden text-sm font-semibold text-black/60 sm:inline">
            Trust Center
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/company/contact"
            className="hidden rounded-xl border border-[color:rgba(111,127,151,0.28)] bg-white px-4 py-2 text-sm font-semibold text-[color:rgba(15,23,42,0.78)] hover:bg-[#f7f8fa] sm:inline-flex"
          >
            Request a briefing/demo
          </Link>
          <Link
            href="/"
            className="rounded-xl bg-[var(--brand-primary)] px-4 py-2 text-sm font-semibold text-white hover:bg-[#088a71]"
          >
            Back to site
          </Link>
        </div>
      </div>
    </header>
  );
}
