import { notFound } from "next/navigation";
import IndustryHero from "@/components/industries/IndustryHero";
import IndustryServices from "@/components/industries/IndustryServices";
import IndustrySolutions from "@/components/industries/IndustrySolutions";
import IndustryExpertise from "@/components/industries/IndustryExpertise";
import IndustryFAQ from "@/components/industries/IndustryFAQ";
import ClientsSaySection from "@/components/ClientsSaySection";
import IndustryContact from "@/components/industries/IndustryContact";
import { INDUSTRY_SLUGS, isIndustrySlug } from "@/content/industries";

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return INDUSTRY_SLUGS.map((slug) => ({ slug }));
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;

  if (!isIndustrySlug(slug)) {
    notFound();
  }

  return (
    <>
      <IndustryHero slug={slug} />
      <IndustryServices slug={slug} />
      <IndustryExpertise slug={slug} />
      <IndustrySolutions slug={slug} />
      <IndustryFAQ slug={slug} />
      <ClientsSaySection />
      <IndustryContact />
    </>
  );
}
