export type ContactFormMailtoFields = {
  name: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

export function buildContactFormMailtoHref(
  to: string,
  fields: ContactFormMailtoFields,
): string {
  const subject = `Website inquiry from ${fields.name}`.trim();
  const body = [
    `Name: ${fields.name}`,
    fields.company ? `Company: ${fields.company}` : null,
    fields.phone ? `Phone: ${fields.phone}` : null,
    `Email: ${fields.email}`,
    `Service: ${fields.service}`,
    "",
    fields.message ? `Message:\n${fields.message}` : "Message:",
  ]
    .filter((line): line is string => line !== null)
    .join("\n");

  const params = new URLSearchParams({
    subject,
    body,
  });

  return `mailto:${to}?${params.toString()}`;
}
