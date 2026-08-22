import type { Metadata } from "next";
import ContactClientLogos from "@/components/contact/ContactClientLogos";
import ContactReachOut from "@/components/contact/ContactReachOut";
import { defaultOpenGraphImages } from "@/lib/site-metadata";

export const metadata: Metadata = {
  title: "Contact Us | Archmation Studios",
  description:
    "Get in touch with Archmation Studios. See the businesses we've helped and reach out for digital marketing, web development, SEO, and branding services.",
  alternates: { canonical: "/contact-us" },
  openGraph: {
    title: "Contact Us | Archmation Studios",
    description:
      "Get in touch with Archmation Studios. See the businesses we've helped and reach out for digital marketing, web development, SEO, and branding services.",
    url: "https://archmation.com/contact-us",
    images: defaultOpenGraphImages,
  },
};

export default function ContactUsPage() {
  return (
    <>
      <ContactReachOut />
      <ContactClientLogos />
    </>
  );
}
