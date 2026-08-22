import type { Metadata } from "next";

/** Default social preview image for link shares (Open Graph / Twitter). */
export const SITE_OG_IMAGE = {
  url: "/images/meta-og.jpeg",
  width: 1200,
  height: 630,
  alt: "Archmation Studios — Digital Growth, Delivered",
  type: "image/jpeg",
} as const;

export const defaultOpenGraphImages: NonNullable<
  Metadata["openGraph"]
>["images"] = [SITE_OG_IMAGE];

export const defaultTwitterImages: NonNullable<Metadata["twitter"]>["images"] =
  [SITE_OG_IMAGE.url];
