import ReachOutContactSection from "@/components/ReachOutContactSection";
import { CONTACT_PAGE_REACH_OUT_CONTENT } from "@/content/contact-page/reach-out";

export default function ContactReachOut() {
  return (
    <ReachOutContactSection
      content={CONTACT_PAGE_REACH_OUT_CONTENT}
      formIdPrefix="contact-page"
    />
  );
}
