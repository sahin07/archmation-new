function toWhatsAppHref(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}`;
}

export const SOCIAL_LINKS = {
  facebook: {
    label: "Facebook",
    href: "https://www.facebook.com/archmation.studios",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/archmation-studios",
  },
  instagram: {
    label: "Instagram",
    href: "https://www.instagram.com/archmation.studios",
  },
} as const;

/** All profile URLs for schema / meta tags. */
export const SOCIAL_PROFILE_URLS = [
  SOCIAL_LINKS.facebook.href,
  SOCIAL_LINKS.linkedin.href,
  SOCIAL_LINKS.instagram.href,
] as const;

/** Keep legacy HTML social icons in sync with SOCIAL_LINKS. */
export function injectSocialLinks(html: string): string {
  return html
    .replace(
      /(<a href=")[^"]*(" target="_blank" class="rsIcon facebook-icon">)/g,
      `$1${SOCIAL_LINKS.facebook.href}$2`,
    )
    .replace(
      /(<a href=")[^"]*(" target="_blank" class="rsIcon linkedin-icon">)/g,
      `$1${SOCIAL_LINKS.linkedin.href}$2`,
    )
    .replace(
      /(<a href=")[^"]*(" target="_blank" class="rsIcon instagram-icon">)/g,
      `$1${SOCIAL_LINKS.instagram.href}$2`,
    )
    .replace(
      /(<meta property="article:publisher" content=")[^"]*(")/g,
      `$1${SOCIAL_LINKS.facebook.href}$2`,
    )
    .replace(
      /"sameAs":\[[^\]]*\]/g,
      `"sameAs":${JSON.stringify([...SOCIAL_PROFILE_URLS])}`,
    );
}

export const FLOATING_SOCIAL_LINKS = {
  whatsapp: {
    label: "Chat with Archmation Studio on WhatsApp",
    href: toWhatsAppHref("+91 78271 08192"),
  },
  linkedin: SOCIAL_LINKS.linkedin,
} as const;
