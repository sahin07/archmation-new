import ValuePropositionSection from "@/components/ValuePropositionSection";
import { ABOUT_VALUE_CONTENT } from "@/content/about/value";

export default function AboutValue() {
  return (
    <section
      id="accueilValue"
      className="archmation-value sectionPaddingBottom"
      aria-label={ABOUT_VALUE_CONTENT.label}
    >
      <ValuePropositionSection content={ABOUT_VALUE_CONTENT} />
    </section>
  );
}
