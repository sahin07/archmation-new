import type { IndustrySlug } from "@/content/industries";
import { getIndustrySolutionsContent } from "@/content/industry-solutions";
import IndustrySolutionsSection from "@/components/industries/IndustrySolutionsSection";

type IndustrySolutionsProps = {
  slug: IndustrySlug;
};

export default function IndustrySolutions({ slug }: IndustrySolutionsProps) {
  const content = getIndustrySolutionsContent(slug);

  return <IndustrySolutionsSection content={content} />;
}
