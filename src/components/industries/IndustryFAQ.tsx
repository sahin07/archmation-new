import type { IndustrySlug } from "@/content/industries";
import { getIndustryFAQContent } from "@/content/industry-faq";
import IndustryFAQSection from "@/components/industries/IndustryFAQSection";

type IndustryFAQProps = {
  slug: IndustrySlug;
};

export default function IndustryFAQ({ slug }: IndustryFAQProps) {
  const content = getIndustryFAQContent(slug);

  return <IndustryFAQSection content={content} />;
}
