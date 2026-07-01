import ClientLogosSection from "@/components/ClientLogosSection";
import { CONTACT_CLIENTS_CONTENT } from "@/content/contact-page/clients";

export default function ContactClientLogos() {
  return (
    <section
      id="accueilClients"
      className="archmation-clients sectionPaddingBottom"
      aria-label={`${CONTACT_CLIENTS_CONTENT.titleBefore}${CONTACT_CLIENTS_CONTENT.titleAccent}${CONTACT_CLIENTS_CONTENT.titleAfter}`}
    >
      <ClientLogosSection content={CONTACT_CLIENTS_CONTENT} />
    </section>
  );
}
