import ImpactStatsSection from "@/components/ImpactStatsSection";
import { ABOUT_IMPACT_STATS_CONTENT } from "@/content/about/impact-stats";

export default function AboutImpactStats() {
  return (
    <section
      id="accueilStats"
      className="archmation-stats sectionPaddingBottom"
      aria-label={ABOUT_IMPACT_STATS_CONTENT.title}
    >
      <ImpactStatsSection content={ABOUT_IMPACT_STATS_CONTENT} />
    </section>
  );
}
