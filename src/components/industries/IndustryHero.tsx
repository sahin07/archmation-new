import type { IndustrySlug } from "@/content/industries";
import { getIndustryHeroContent } from "@/content/industry-heroes";
import IndustryHeroSection from "@/components/industries/heroes/IndustryHeroSection";

type IndustryHeroProps = {
  slug: IndustrySlug;
};

export default function IndustryHero({ slug }: IndustryHeroProps) {
  return <IndustryHeroSection content={getIndustryHeroContent(slug)} />;
}
