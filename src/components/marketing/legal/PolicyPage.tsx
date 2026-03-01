import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { Section } from "@/components/marketing/Section";
import { Surface } from "@/components/marketing/Surface";
import { CompanyHero } from "@/components/marketing/company/CompanyHero";
import { type PolicyDoc, getPolicyNav } from "@/content/legal/policies";

export function PolicyPage({ policy }: { policy: PolicyDoc }) {
  const nav = getPolicyNav(policy.category);

  return (
    <>
      <CompanyHero
        eyebrow={`${policy.category} Policy`}
        title={policy.title}
        subtitle={policy.summary}
        primaryCta={{ label: "Contact", href: "/company/contact" }}
        secondaryCta={{
          label: policy.category === "Legal" ? "Legal index" : "Compliance index",
          href: policy.category === "Legal" ? "/legal" : "/compliance",
        }}
      />

      <Section tone="plain" className="py-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Surface variant="outline" className="p-4">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">Policy ID</div>
            <div className="mt-1 text-sm font-semibold text-black/80">{policy.policyId}</div>
          </Surface>
          <Surface variant="outline" className="p-4">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">Last updated</div>
            <div className="mt-1 text-sm font-semibold text-black/80">{policy.lastUpdated}</div>
          </Surface>
          <Surface variant="outline" className="p-4">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">Version</div>
            <div className="mt-1 text-sm font-semibold text-black/80">{policy.version}</div>
          </Surface>
          <Surface variant="outline" className="p-4">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">Category</div>
            <div className="mt-1 text-sm font-semibold text-black/80">{policy.category}</div>
          </Surface>
        </div>
      </Section>

      <Section tone="plain" className="py-12">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="space-y-3">
            <Surface variant="outline" className="p-4">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">On this page</div>
              <nav className="mt-3 space-y-2">
                {policy.sections.map((s) => (
                  <a
                    key={s.heading}
                    href={`#${s.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    className="block text-sm text-black/70 hover:text-black/90"
                  >
                    {s.heading}
                  </a>
                ))}
              </nav>
            </Surface>

            <Surface variant="outline" className="p-4">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">More {policy.category}</div>
              <nav className="mt-3 space-y-2">
                {nav.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="block text-sm text-black/70 hover:text-black/90"
                    aria-current={item.path === policy.path ? "page" : undefined}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </Surface>
          </aside>

          <div className="space-y-4">
            {policy.sections.map((section) => {
              const id = section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-");

              return (
                <Surface key={section.heading} variant="outline" className="p-6" >
                  <h2 id={id} className="text-lg font-semibold text-black/90">
                    {section.heading}
                  </h2>

                  {section.paragraphs?.map((p) => (
                    <p key={p} className="mt-3 text-sm leading-relaxed text-black/65">
                      {p}
                    </p>
                  ))}

                  {section.bullets?.length ? (
                    <ul className="mt-3 space-y-2">
                      {section.bullets.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black/35" />
                          <span className="text-sm leading-relaxed text-black/65">{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </Surface>
              );
            })}

            <Surface variant="outline" className="p-6">
              <h2 className="text-lg font-semibold text-black/90">Versioning & change log</h2>
              <div className="mt-4 space-y-3">
                {policy.changeLog.map((entry) => (
                  <div key={`${entry.version}-${entry.date}`} className="rounded-2xl border border-black/10 bg-black/[0.02] p-4">
                    <div className="text-sm font-semibold text-black/80">
                      {entry.version} · {entry.date}
                    </div>
                    <ul className="mt-2 space-y-2">
                      {entry.notes.map((note) => (
                        <li key={note} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black/35" />
                          <span className="text-sm text-black/65">{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-black/50">
                Policies may be updated for regulatory, security, or product reasons. Material changes are communicated where required.
              </p>
            </Surface>

            <Surface variant="soft" className="p-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-black/[0.04]">
                  <FileText className="h-5 w-5 text-black/70" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-black/85">Policy notice</div>
                  <p className="mt-2 text-sm leading-relaxed text-black/60">
                    This policy is provided for transparency and procurement support and does not constitute legal advice.
                  </p>
                  {policy.contacts?.length ? (
                    <p className="mt-2 text-sm text-black/60">
                      {policy.contacts.map((c) => `${c.label}: ${c.email}`).join(" • ")}
                    </p>
                  ) : null}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link
                      href="/company/contact"
                      className="inline-flex h-10 items-center justify-center rounded-xl bg-black px-4 text-sm font-semibold text-white hover:bg-black/90"
                    >
                      Contact legal team <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      href="/trust/overview"
                      className="inline-flex h-10 items-center justify-center rounded-xl border border-black/15 bg-white px-4 text-sm font-semibold text-black/75 hover:bg-black/[0.03]"
                    >
                      Trust Center
                    </Link>
                  </div>
                </div>
              </div>
            </Surface>
          </div>
        </div>
      </Section>
    </>
  );
}
