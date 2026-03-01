import type { Metadata } from "next";
import { PolicyPage } from "@/components/marketing/legal/PolicyPage";
import { getPolicyByKey } from "@/content/legal/policies";

const policy = getPolicyByKey("security");

export const metadata: Metadata = {
  title: `${policy.title} | Legal`,
  description: policy.summary,
};

export default function LegalSecurityPage() {
  return <PolicyPage policy={policy} />;
}
