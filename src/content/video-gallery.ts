import type {
  VideoGallerySectionContent,
  VideoItem,
} from "@/components/VideoGallerySection";

const ourWork = (file: string) => encodeURI(`/our-work/${file}`);

const OUR_WORK_VIDEOS: VideoItem[] = [
  { id: 1, title: "Cloud Landing Page", videoSrc: ourWork("Cloud Landing Page_360p.mp4") },
  { id: 2, title: "Cloud Architect Masters", videoSrc: ourWork("Cloud Architect Masters_360p.mp4") },
  { id: 3, title: "Black Friday AI", videoSrc: ourWork("Black Friday AI_360p.mp4") },
  {
    id: 4,
    title: "Faceless Explainer – Google ADK",
    videoSrc: ourWork("Faceless Explainer google adk insane_360p.mp4"),
  },
  {
    id: 5,
    title: "100 Days of Cloud Challenge",
    videoSrc: ourWork("100 Days of Cloud Challenge by KodeKloud FREE Program_360p.mp4"),
  },
  { id: 6, title: "What Is Kubestronaut", videoSrc: ourWork("What Is Kubestronaut_360p.mp4") },
  { id: 7, title: "Fresh Grad Ad", videoSrc: ourWork("Fresh Grad Ad_360p.mp4") },
];

/** Home page — #accueilVideoGallery */
export const HOME_VIDEO_GALLERY_CONTENT: VideoGallerySectionContent = {
  titleBefore: "Glimpses of our",
  titleAccent: "Work",
  videos: OUR_WORK_VIDEOS,
  showViewMore: false,
};

/** Video marketing service — short-form carousel */
export const SHORT_FORM_VIDEO_GALLERY_CONTENT: VideoGallerySectionContent = {
  titleBefore: "Short Form",
  titleAccent: "Videos",
};

/** Video marketing service — long-form carousel */
export const LONG_FORM_VIDEO_GALLERY_CONTENT: VideoGallerySectionContent = {
  titleBefore: "Long Form",
  titleAccent: "Videos",
};
