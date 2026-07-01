/** Rewrite legacy archmation.com URLs to local Next.js routes. */
export function normalizeInternalLinks(html: string): string {
  return html
    .replace(/href="https:\/\/archmation\.com\/"/g, 'href="/"')
    .replace(/href="https:\/\/archmation\.com\/about-us\/?"/g, 'href="/about-us"')
    .replace(/href="https:\/\/archmation\.com\/contact\/?"/g, 'href="/contact-us"')
    .replace(/href="https:\/\/archmation\.com\/contact-us\/?"/g, 'href="/contact-us"')
    .replace(/href="https:\/\/archmation\.com\/learn-marketing\/?"/g, 'href="/learn-marketing"')
    .replace(
      /<a href="https:\/\/archmation\.com">\s*\n?\s*<svg width="236"/,
      '<a href="/">\n                            <svg width="236"',
    );
}
