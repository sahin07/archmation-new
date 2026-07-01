import ClientLogosSection from "@/components/ClientLogosSection";
import { LEARN_MARKETING_CLIENTS_CONTENT } from "@/content/learn-marketing/clients";

export default function LearnMarketingClientLogos() {
  return (
    <section
      id="accueilClients"
      className="archmation-clients sectionPaddingBottom"
      aria-label={`${LEARN_MARKETING_CLIENTS_CONTENT.titleBefore}${LEARN_MARKETING_CLIENTS_CONTENT.titleAccent}${LEARN_MARKETING_CLIENTS_CONTENT.titleAfter}`}
    >
      <ClientLogosSection content={LEARN_MARKETING_CLIENTS_CONTENT} />
    </section>
  );
}
