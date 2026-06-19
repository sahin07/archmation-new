import { notFound } from "next/navigation";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceSpecificSections, {
  ServiceBrandingPortfolioSection,
  ServiceVideoMarketingLongFormSection,
} from "@/components/services/ServiceSpecificSections";
import DevelopmentSection from "@/components/services/DevelopmentSection";
import HowItWorksSection from "@/components/services/HowItWorksSection";
import TimelyDeliverySection from "@/components/services/TimelyDeliverySection";
import ClientsSaySection from "@/components/ClientsSaySection";
import { isServiceSlug, SERVICE_SLUGS } from "@/content/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;

  if (!isServiceSlug(slug)) {
    notFound();
  }

  return (
    <>
      <ServiceHero slug={slug} />
      <ServiceSpecificSections slug={slug} />
      <div id="serviceFondNoir" className="service-fond-noir">
        <DevelopmentSection serviceSlug={slug} />
        <ServiceVideoMarketingLongFormSection slug={slug} />
        <ServiceBrandingPortfolioSection slug={slug} />
        <HowItWorksSection serviceSlug={slug} />
        <TimelyDeliverySection serviceSlug={slug} />
      </div>
      <ClientsSaySection />
    </>
  );
}
