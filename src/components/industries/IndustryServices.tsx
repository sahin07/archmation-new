import type { IndustrySlug } from "@/content/industries";
import { getIndustryServicesContent } from "@/content/industry-services";
import IndustryServicesSection from "@/components/industries/IndustryServicesSection";

type IndustryServicesProps = {
  slug: IndustrySlug;
};

export default function IndustryServices({ slug }: IndustryServicesProps) {
  const content = getIndustryServicesContent(slug);

  if (!content) {
    return null;
  }

  return <IndustryServicesSection content={content} />;
}
