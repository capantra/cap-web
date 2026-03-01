import type { Metadata } from "next";
import { PolicyIndexPage } from "@/components/marketing/legal/PolicyIndexPage";

export const metadata: Metadata = {
  title: "Legal Policies | Legal",
  description: "Browse Capantra legal policies including Terms, Privacy, DPA, Acceptable Use, and Security.",
};

export default function LegalIndexPage() {
  return (
    <PolicyIndexPage
      category="Legal"
      title="Legal Policies"
      description="Browse legal policy documents used for transparency and procurement support, including Terms, Privacy, Data Processing, Acceptable Use, and Security."
    />
  );
}
