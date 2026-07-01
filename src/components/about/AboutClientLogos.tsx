import ClientLogosSection from "@/components/ClientLogosSection";
import { ABOUT_CLIENTS_CONTENT } from "@/content/about/clients";

export default function AboutClientLogos() {
  return (
    <section
      id="accueilClients"
      className="archmation-clients sectionPaddingBottom"
      aria-label={`${ABOUT_CLIENTS_CONTENT.titleBefore}${ABOUT_CLIENTS_CONTENT.titleAccent}${ABOUT_CLIENTS_CONTENT.titleAfter}`}
    >
      <ClientLogosSection content={ABOUT_CLIENTS_CONTENT} />
    </section>
  );
}
