import type { Metadata } from "next";
import { PolicyIndexPage } from "@/components/marketing/legal/PolicyIndexPage";

export const metadata: Metadata = {
  title: "Compliance Policies | Capantra",
  description: "Browse Capantra compliance policies including Telecommunications, Anti-Spam, Regulatory, and Responsible Use.",
};

export default function ComplianceIndexPage() {
  return (
    <PolicyIndexPage
      category="Compliance"
      title="Compliance Policies"
      description="Browse compliance policy documents covering telecommunications obligations, anti-spam standards, regulatory alignment, and responsible use expectations."
    />
  );
}
