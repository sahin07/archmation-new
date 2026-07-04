/** Rewrite legacy archmation.com URLs to local Next.js routes. */
export function normalizeInternalLinks(html: string): string {
  return html
    .replace(/href="https:\/\/archmation\.com\/"/g, 'href="/"')
    .replace(/href="https:\/\/archmation\.com\/about-us\/?"/g, 'href="/about-us"')
    .replace(/href="https:\/\/archmation\.com\/contact\/?"/g, 'href="/contact-us"')
    .replace(/href="https:\/\/archmation\.com\/contact-us\/?"/g, 'href="/contact-us"')
    .replace(/href="https:\/\/archmation\.com\/learn-marketing\/?"/g, 'href="/learn-marketing"')
    .replace(/href="https:\/\/archmation\.com\/blog\/?"/g, 'href="/blog"')
    .replace(/href="https:\/\/archmation\.com\/category\/blog\/?"/g, 'href="/blog"')
    .replace(/href="https:\/\/archmation\.com\/case-study\/?"/g, 'href="/case-studies"')
    .replace(/href="https:\/\/archmation\.com\/blog-insights\/?"/g, 'href="/blogs"')
    .replace(/href="https:\/\/archmation\.com\/case-studies\/?"/g, 'href="/blogs"')
    .replace(/href="https:\/\/archmation\.com\/our-work\/?"/g, 'href="/blogs"')
    .replace(
      /<a href="https:\/\/archmation\.com">\s*\n?\s*<svg width="236"/,
      '<a href="/">\n                            <svg width="236"',
    );
}
