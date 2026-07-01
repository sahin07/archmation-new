import ReachOutContactSection from "@/components/ReachOutContactSection";
import { LEARN_MARKETING_REACH_OUT_CONTENT } from "@/content/learn-marketing/reach-out";

export default function LearnMarketingReachOut() {
  return (
    <ReachOutContactSection
      content={LEARN_MARKETING_REACH_OUT_CONTENT}
      formIdPrefix="learn-marketing"
    />
  );
}
