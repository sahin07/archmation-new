import VideoGallerySection, {
  type VideoGallerySectionContent,
} from "@/components/VideoGallerySection";

type ServiceVideoGallerySectionProps = {
  content?: VideoGallerySectionContent;
  /** Optional id for first/home-aligned gallery; service duplicates use shell class only. */
  sectionId?: string;
};

export default function ServiceVideoGallerySection({
  content,
  sectionId,
}: ServiceVideoGallerySectionProps) {
  return (
    <section
      id={sectionId}
      className="sectionPaddingBottom archmation-videos archmation-videos-shell"
    >
      <VideoGallerySection content={content} />
    </section>
  );
}
