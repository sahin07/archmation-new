import WhoAreWeSection from "@/components/about/WhoAreWeSection";
import { ABOUT_WHO_ARE_WE_CONTENT } from "@/content/about";

export default function AboutWhoAreWe() {
  return (
    <section
      id="accueilQSN"
      className="archmation-about sectionPaddingBottom"
      aria-label={`${ABOUT_WHO_ARE_WE_CONTENT.label} — ${ABOUT_WHO_ARE_WE_CONTENT.titleAccent}`}
    >
      <WhoAreWeSection content={ABOUT_WHO_ARE_WE_CONTENT} />
    </section>
  );
}
