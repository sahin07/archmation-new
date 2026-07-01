import ReachOutContactSection from "@/components/ReachOutContactSection";
import { INDUSTRY_CONTACT_CONTENT } from "@/content/industry-contact";

export default function IndustryContactSection() {
  return (
    <ReachOutContactSection
      content={INDUSTRY_CONTACT_CONTENT}
      formIdPrefix="industry-contact"
    />
  );
}
