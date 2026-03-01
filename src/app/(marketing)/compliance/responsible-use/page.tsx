import type { Metadata } from "next";
import { PolicyPage } from "@/components/marketing/legal/PolicyPage";
import { getPolicyByKey } from "@/content/legal/policies";

const policy = getPolicyByKey("responsible-use");

export const metadata: Metadata = {
  title: `${policy.title} | Capantra`,
  description: policy.summary,
};

export default function ComplianceResponsibleUsePage() {
  return <PolicyPage policy={policy} />;
}
