import type { Metadata } from "next";
import { PolicyPage } from "@/components/marketing/legal/PolicyPage";
import { getPolicyByKey } from "@/content/legal/policies";

const policy = getPolicyByKey("anti-spam");

export const metadata: Metadata = {
  title: `${policy.title} | Compliance`,
  description: policy.summary,
};

export default function ComplianceAntiSpamPage() {
  return <PolicyPage policy={policy} />;
}
