import type { Metadata } from "next";
import { PolicyPage } from "@/components/marketing/legal/PolicyPage";
import { getPolicyByKey } from "@/content/legal/policies";

const policy = getPolicyByKey("regulatory");

export const metadata: Metadata = {
  title: `${policy.title} | Compliance`,
  description: policy.summary,
};

export default function ComplianceRegulatoryPage() {
  return <PolicyPage policy={policy} />;
}
