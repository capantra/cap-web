import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Regulator | Compliance",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ComplianceRegulatorAliasPage() {
  redirect("/compliance/regulatory");
}
