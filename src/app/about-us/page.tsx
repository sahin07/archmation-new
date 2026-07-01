import type { Metadata } from "next";
import AboutClientLogos from "@/components/about/AboutClientLogos";
import AboutDreamTeam from "@/components/about/AboutDreamTeam";
import AboutImpactStats from "@/components/about/AboutImpactStats";
import AboutPrimaryIndustries from "@/components/about/AboutPrimaryIndustries";
import AboutValue from "@/components/about/AboutValue";
import AboutWhoAreWe from "@/components/about/AboutWhoAreWe";

export const metadata: Metadata = {
  title: "About Us | Archmation Studios",
  description:
    "Meet the Archmation Studios dream team — digital marketing specialists in Bangalore driving growth for brands worldwide.",
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: "About Us | Archmation Studios",
    description:
      "Meet the Archmation Studios dream team — digital marketing specialists in Bangalore driving growth for brands worldwide.",
    url: "https://archmation.com/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <>
      <AboutWhoAreWe />
      <AboutPrimaryIndustries />
      <AboutClientLogos />
      <AboutValue />
      <AboutImpactStats />
      <AboutDreamTeam />
    </>
  );
}
