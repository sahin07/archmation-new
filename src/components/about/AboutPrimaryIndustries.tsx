import PrimaryIndustriesSection from "@/components/PrimaryIndustriesSection";
import { ABOUT_PRIMARY_INDUSTRIES_CONTENT } from "@/content/about/primary-industries";

export default function AboutPrimaryIndustries() {
  return (
    <section
      id="accueilIndustries"
      className="archmation-industries sectionPaddingBottom"
      aria-label={ABOUT_PRIMARY_INDUSTRIES_CONTENT.title}
    >
      <PrimaryIndustriesSection content={ABOUT_PRIMARY_INDUSTRIES_CONTENT} />
    </section>
  );
}
