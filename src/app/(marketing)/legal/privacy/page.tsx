import type { Metadata } from "next";
import { PolicyPage } from "@/components/marketing/legal/PolicyPage";
import { getPolicyByKey } from "@/content/legal/policies";

const policy = getPolicyByKey("privacy");

export const metadata: Metadata = {
  title: `${policy.title} | Legal`,
  description: policy.summary,
};

export default function LegalPrivacyPage() {
  return <PolicyPage policy={policy} />;
}
