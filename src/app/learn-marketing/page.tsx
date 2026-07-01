import type { Metadata } from "next";
import InstructorSection from "@/components/learn-marketing/InstructorSection";
import LearnMarketingClientLogos from "@/components/learn-marketing/LearnMarketingClientLogos";
import LearnMarketingReachOut from "@/components/learn-marketing/LearnMarketingReachOut";
import LeadCircuitSection from "@/components/learn-marketing/LeadCircuitSection";
import MasterMarketingSection from "@/components/learn-marketing/MasterMarketingSection";

export const metadata: Metadata = {
  title: "Learn with Us | Archmation Studios",
  description:
    "Master marketing that actually works. The Lead Circuit — industry-based learning with no fluff. Foundations, funnels, paid media, SEO, content, and AI.",
  alternates: { canonical: "/learn-marketing" },
  openGraph: {
    title: "Learn with Us | Archmation Studios",
    description:
      "Master marketing that actually works. The Lead Circuit — industry-based learning with no fluff. Foundations, funnels, paid media, SEO, content, and AI.",
    url: "https://archmation.com/learn-marketing",
  },
};

export default function LearnMarketingPage() {
  return (
    <>
      <MasterMarketingSection />
      <LeadCircuitSection />
      <InstructorSection />
      <LearnMarketingReachOut />
      <LearnMarketingClientLogos />
    </>
  );
}
