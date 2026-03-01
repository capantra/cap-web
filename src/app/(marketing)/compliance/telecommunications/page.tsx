import type { Metadata } from "next";
import { PolicyPage } from "@/components/marketing/legal/PolicyPage";
import { getPolicyByKey } from "@/content/legal/policies";

const policy = getPolicyByKey("telecommunications");

export const metadata: Metadata = {
  title: `${policy.title} | Capantra`,
  description: policy.summary,
};

export default function ComplianceTelecommunicationsPage() {
  return <PolicyPage policy={policy} />;
}
