import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { Section } from "@/components/marketing/Section";
import { Surface } from "@/components/marketing/Surface";
import { CompanyHero } from "@/components/marketing/company/CompanyHero";
import { type PolicyDoc, getPolicyNav } from "@/content/legal/policies";

export function PolicyIndexPage({
  category,
  title,
  description,
}: {
  category: PolicyDoc["category"];
  title: string;
  description: string;
}) {
  const docs = getPolicyNav(category);

  return (
    <>
      <CompanyHero
        eyebrow={category}
        title={title}
        subtitle={description}
        primaryCta={{ label: "Request a briefing/demo", href: "/company/contact" }}
        secondaryCta={{ label: "Trust Center", href: "/trust/overview" }}
      />

      <Section tone="plain" className="py-12">
        <div className="grid gap-4 lg:grid-cols-2">
          {docs.map((doc) => (
            <Surface key={doc.path} variant="outline" className="flex h-full flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black/[0.04]">
                  <FileText className="h-5 w-5 text-black/70" />
                </div>
                <span className="inline-flex items-center rounded-full border border-black/10 bg-black/[0.03] px-2.5 py-1 text-[11px] font-semibold text-black/60">
                  {doc.version}
                </span>
              </div>

              <h2 className="mt-4 text-lg font-semibold text-black/90">{doc.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-black/65">{doc.summary}</p>

              <div className="mt-4 text-xs text-black/50">
                Last updated: {doc.lastUpdated} · Policy ID: {doc.policyId}
              </div>

              <div className="mt-auto pt-6">
                <Link
                  href={doc.path}
                  className="inline-flex h-10 items-center justify-center rounded-xl bg-black px-4 text-sm font-semibold text-white hover:bg-black/90"
                >
                  Open policy <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </Surface>
          ))}
        </div>
      </Section>
    </>
  );
}
