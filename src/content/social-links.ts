function toWhatsAppHref(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}`;
}

export const FLOATING_SOCIAL_LINKS = {
  whatsapp: {
    label: "Chat with Archmation Studio on WhatsApp",
    href: toWhatsAppHref("+91 78271 08192"),
  },
  linkedin: {
    label: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/sahaya-sachin",
  },
} as const;
