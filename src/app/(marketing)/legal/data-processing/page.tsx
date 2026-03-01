import type { Metadata } from "next";
import { PolicyPage } from "@/components/marketing/legal/PolicyPage";
import { getPolicyByKey } from "@/content/legal/policies";

const policy = getPolicyByKey("data-processing");

export const metadata: Metadata = {
  title: `${policy.title} | Capantra`,
  description: policy.summary,
};

export default function LegalDataProcessingPage() {
  return <PolicyPage policy={policy} />;
}
