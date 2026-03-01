import type { Metadata } from "next";
import { PolicyPage } from "@/components/marketing/legal/PolicyPage";
import { getPolicyByKey } from "@/content/legal/policies";

const policy = getPolicyByKey("master-services");

export const metadata: Metadata = {
  title: `${policy.title} | Legal`,
  description: policy.summary,
};

export default function LegalMasterServicesPage() {
  return <PolicyPage policy={policy} />;
}
