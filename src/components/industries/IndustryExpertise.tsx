import type { IndustrySlug } from "@/content/industries";
import { getIndustryExpertiseContent } from "@/content/industry-expertise";
import IndustryExpertiseSection from "@/components/industries/IndustryExpertiseSection";

type IndustryExpertiseProps = {
  slug: IndustrySlug;
};

export default function IndustryExpertise({ slug }: IndustryExpertiseProps) {
  return (
    <IndustryExpertiseSection content={getIndustryExpertiseContent(slug)} />
  );
}
