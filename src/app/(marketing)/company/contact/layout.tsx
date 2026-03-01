import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Capantra for sales, partnerships, support, or procurement discussions across AU, UK, and US operations.",
  alternates: {
    canonical: "/company/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}