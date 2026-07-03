import type { Metadata } from "next";
import DigitalWizardsSection from "@/components/services/DigitalWizardsSection";
import FullSpectrumServicesSection from "@/components/services/FullSpectrumServicesSection";

export const metadata: Metadata = {
  title: "Our Services | Archmation Studios",
  description:
    "Full spectrum digital services — web and tech solutions, video marketing, performance marketing, SEO, branding and design, and education.",
  alternates: { canonical: "/our-services" },
  openGraph: {
    title: "Our Services | Archmation Studios",
    description:
      "Full spectrum digital services — web and tech solutions, video marketing, performance marketing, SEO, branding and design, and education.",
    url: "https://archmation.com/our-services",
  },
};

export default function OurServicesPage() {
  return (
    <>
      <FullSpectrumServicesSection />
      <DigitalWizardsSection />
    </>
  );
}
