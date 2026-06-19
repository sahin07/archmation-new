import { injectServiceNavLinks } from "@/content/services";

export const EXPERTISE_MARKER = "<!-- @react:expertise -->";
export const ACCUEIL_FOND_NOIR_END = "<!-- @react:accueilFondNoirEnd -->";
export const SERVICES_MARKER = "<!-- @react:services -->";
export const SERVICES_END = "<!-- @react:servicesEnd -->";
export const ABOUT_MARKER = "<!-- @react:about -->";
export const ABOUT_END = "<!-- @react:aboutEnd -->";
export const INDUSTRIES_MARKER = "<!-- @react:industries -->";
export const INDUSTRIES_END = "<!-- @react:industriesEnd -->";
export const PROCESS_MARKER = "<!-- @react:process -->";
export const PROCESS_END = "<!-- @react:processEnd -->";
export const VALUE_MARKER = "<!-- @react:value -->";
export const VALUE_END = "<!-- @react:valueEnd -->";
export const CLIENTS_MARKER = "<!-- @react:clients -->";
export const CLIENTS_END = "<!-- @react:clientsEnd -->";
export const STATS_MARKER = "<!-- @react:stats -->";
export const STATS_END = "<!-- @react:statsEnd -->";
export const VIDEOS_MARKER = "<!-- @react:videos -->";
export const VIDEOS_END = "<!-- @react:videosEnd -->";
export const BLOGS_MARKER = "<!-- @react:blogs -->";
export const BLOGS_END = "<!-- @react:blogsEnd -->";
export const FAQ_MARKER = "<!-- @react:faq -->";
export const FAQ_END = "<!-- @react:faqEnd -->";
export const TESTIMONIALS_MARKER = "<!-- @react:testimonials -->";
export const TESTIMONIALS_END = "<!-- @react:testimonialsEnd -->";

/** @deprecated */
export const ACCUEIL_FOND_NOIR_START = "<!-- @react:accueilFondNoir -->";
export const EXPERTISE_SECTION_MARKER = "<!-- @react:ExpertiseSection -->";

const EXPERTISE_MOUNT = '<div id="react-expertise-root"></div>';
const SERVICES_MOUNT = '<div id="react-services-root"></div>';
const ABOUT_SHELL =
  '<section id="accueilQSN" class="sectionPaddingBottom archmation-about"><div id="react-about-root"></div></section>';
const INDUSTRIES_SHELL =
  '<section id="accueilIndustries" class="sectionPaddingBottom archmation-industries"><div id="react-industries-root"></div></section>';
const PROCESS_SHELL =
  '<section id="accueilProcess" class="sectionPaddingBottom archmation-process"><div id="react-process-root"></div></section>';
const VALUE_SHELL =
  '<section id="accueilValue" class="sectionPaddingBottom archmation-value"><div id="react-value-root"></div></section>';
const CLIENTS_SHELL =
  '<section id="accueilClients" class="sectionPaddingBottom archmation-clients"><div id="react-clients-root"></div></section>';
const STATS_SHELL =
  '<section id="accueilStats" class="sectionPaddingBottom archmation-stats"><div id="react-stats-root"></div></section>';
const VIDEOS_SHELL =
  '<section id="accueilVideoGallery" class="sectionPaddingBottom archmation-videos"><div id="react-videos-root"></div></section>';
const BLOGS_SHELL =
  '<section id="accueilBlogs" class="sectionPaddingBottom archmation-blogs"><div id="react-blogs-root"></div></section>';
const FAQ_SHELL =
  '<section id="accueilFaq" class="sectionPaddingBottom archmation-faq"><div id="react-faq-root"></div></section>';
const TESTIMONIALS_SHELL =
  '<section id="accueilTemoignages" class="sectionPaddingBottom widthGlobalContent"><div id="react-clients-say-root"></div></section>';
const COLLABORATIONS_ANCHOR = '<div class="overflow-hidden">';
export const FOOTER_MARKER = "<!-- @react:footerLegacy -->";
const FOOTER_MOUNT = '<div id="react-footer-root"></div>';
const FOOTER_ANCHOR = FOOTER_MARKER;
const ABOUT_ANCHOR = COLLABORATIONS_ANCHOR;

function hasMarkerPair(html: string, startMarker: string, endMarker: string): boolean {
  const startIdx = html.indexOf(startMarker);
  const endIdx = html.indexOf(endMarker);
  return startIdx !== -1 && endIdx !== -1 && endIdx > startIdx;
}

/** Insert about markers before OUR CLIENTS & WORK when sync-html drops them. */
export function ensureAboutMarkers(html: string): string {
  if (hasMarkerPair(html, ABOUT_MARKER, ABOUT_END)) {
    return html;
  }

  const anchorIdx = html.indexOf(ABOUT_ANCHOR);
  if (anchorIdx === -1) {
    throw new Error(
      `home-body.html must contain ${ABOUT_MARKER} and ${ABOUT_END}, or #accueilCollaborations. Run sync-html after updating index.html.`,
    );
  }

  const markers = `\n    ${ABOUT_MARKER}\n    ${ABOUT_END}\n\n\n    `;
  return html.slice(0, anchorIdx) + markers + html.slice(anchorIdx);
}

/** Insert industries markers before OUR CLIENTS & WORK when sync-html drops them. */
export function ensureIndustriesMarkers(html: string): string {
  if (hasMarkerPair(html, INDUSTRIES_MARKER, INDUSTRIES_END)) {
    return html;
  }

  const anchorIdx = html.indexOf(COLLABORATIONS_ANCHOR);
  if (anchorIdx === -1) {
    throw new Error(
      `home-body.html must contain ${INDUSTRIES_MARKER} and ${INDUSTRIES_END}, or #accueilCollaborations. Run sync-html after updating index.html.`,
    );
  }

  const markers = `\n    ${INDUSTRIES_MARKER}\n    ${INDUSTRIES_END}\n\n\n    `;
  return html.slice(0, anchorIdx) + markers + html.slice(anchorIdx);
}

/** Insert process markers before OUR CLIENTS & WORK when sync-html drops them. */
export function ensureProcessMarkers(html: string): string {
  if (hasMarkerPair(html, PROCESS_MARKER, PROCESS_END)) {
    return html;
  }

  const anchorIdx = html.indexOf(COLLABORATIONS_ANCHOR);
  if (anchorIdx === -1) {
    throw new Error(
      `home-body.html must contain ${PROCESS_MARKER} and ${PROCESS_END}, or #accueilCollaborations. Run sync-html after updating index.html.`,
    );
  }

  const markers = `\n    ${PROCESS_MARKER}\n    ${PROCESS_END}\n\n\n    `;
  return html.slice(0, anchorIdx) + markers + html.slice(anchorIdx);
}

/** Insert value markers before OUR CLIENTS & WORK when sync-html drops them. */
export function ensureValueMarkers(html: string): string {
  if (hasMarkerPair(html, VALUE_MARKER, VALUE_END)) {
    return html;
  }

  const anchorIdx = html.indexOf(COLLABORATIONS_ANCHOR);
  if (anchorIdx === -1) {
    throw new Error(
      `home-body.html must contain ${VALUE_MARKER} and ${VALUE_END}, or #accueilCollaborations. Run sync-html after updating index.html.`,
    );
  }

  const markers = `\n    ${VALUE_MARKER}\n    ${VALUE_END}\n\n\n    `;
  return html.slice(0, anchorIdx) + markers + html.slice(anchorIdx);
}

/** Insert clients markers before OUR CLIENTS & WORK when sync-html drops them. */
export function ensureClientsMarkers(html: string): string {
  if (hasMarkerPair(html, CLIENTS_MARKER, CLIENTS_END)) {
    return html;
  }

  const anchorIdx = html.indexOf(COLLABORATIONS_ANCHOR);
  if (anchorIdx === -1) {
    throw new Error(
      `home-body.html must contain ${CLIENTS_MARKER} and ${CLIENTS_END}, or #accueilCollaborations. Run sync-html after updating index.html.`,
    );
  }

  const markers = `\n    ${CLIENTS_MARKER}\n    ${CLIENTS_END}\n\n\n    `;
  return html.slice(0, anchorIdx) + markers + html.slice(anchorIdx);
}

/** Insert stats markers before OUR CLIENTS & WORK when sync-html drops them. */
export function ensureStatsMarkers(html: string): string {
  if (hasMarkerPair(html, STATS_MARKER, STATS_END)) {
    return html;
  }

  const anchorIdx = html.indexOf(COLLABORATIONS_ANCHOR);
  if (anchorIdx === -1) {
    throw new Error(
      `home-body.html must contain ${STATS_MARKER} and ${STATS_END}, or #accueilCollaborations. Run sync-html after updating index.html.`,
    );
  }

  const markers = `\n    ${STATS_MARKER}\n    ${STATS_END}\n\n\n    `;
  return html.slice(0, anchorIdx) + markers + html.slice(anchorIdx);
}

/** Insert videos markers before OUR CLIENTS & WORK when sync-html drops them. */
export function ensureVideosMarkers(html: string): string {
  if (hasMarkerPair(html, VIDEOS_MARKER, VIDEOS_END)) {
    return html;
  }

  const anchorIdx = html.indexOf(COLLABORATIONS_ANCHOR);
  if (anchorIdx === -1) {
    throw new Error(
      `home-body.html must contain ${VIDEOS_MARKER} and ${VIDEOS_END}, or #accueilCollaborations. Run sync-html after updating index.html.`,
    );
  }

  const markers = `\n    ${VIDEOS_MARKER}\n    ${VIDEOS_END}\n\n\n    `;
  return html.slice(0, anchorIdx) + markers + html.slice(anchorIdx);
}

/** Insert blogs markers before OUR CLIENTS & WORK when sync-html drops them. */
export function ensureBlogsMarkers(html: string): string {
  if (hasMarkerPair(html, BLOGS_MARKER, BLOGS_END)) {
    return html;
  }

  const anchorIdx = html.indexOf(COLLABORATIONS_ANCHOR);
  if (anchorIdx === -1) {
    throw new Error(
      `home-body.html must contain ${BLOGS_MARKER} and ${BLOGS_END}, or #accueilCollaborations. Run sync-html after updating index.html.`,
    );
  }

  const markers = `\n    ${BLOGS_MARKER}\n    ${BLOGS_END}\n\n\n    `;
  return html.slice(0, anchorIdx) + markers + html.slice(anchorIdx);
}

/** Insert FAQ markers before footer when sync-html drops them. */
export function ensureFaqMarkers(html: string): string {
  if (hasMarkerPair(html, FAQ_MARKER, FAQ_END)) {
    return html;
  }

  const anchorIdx = html.indexOf(FOOTER_ANCHOR);
  if (anchorIdx === -1) {
    throw new Error(
      `home-body.html must contain ${FAQ_MARKER} and ${FAQ_END}, or #footerSite. Run sync-html after updating index.html.`,
    );
  }

  const markers = `\n    ${FAQ_MARKER}\n    ${FAQ_END}\n\n\n    `;
  return html.slice(0, anchorIdx) + markers + html.slice(anchorIdx);
}

/** Insert testimonials markers before footer when sync-html drops them. */
export function ensureTestimonialsMarkers(html: string): string {
  if (hasMarkerPair(html, TESTIMONIALS_MARKER, TESTIMONIALS_END)) {
    return html;
  }

  const anchorIdx = html.indexOf(FOOTER_ANCHOR);
  if (anchorIdx === -1) {
    throw new Error(
      `home-body.html must contain ${TESTIMONIALS_MARKER} and ${TESTIMONIALS_END}, or #footerSite. Run sync-html after updating index.html.`,
    );
  }

  const markers = `\n        ${TESTIMONIALS_MARKER}\n        ${TESTIMONIALS_END}\n\n    `;
  return html.slice(0, anchorIdx) + markers + html.slice(anchorIdx);
}

function replaceBetweenMarkers(
  html: string,
  startMarker: string,
  endMarker: string,
  buildReplacement: (middle: string) => string,
): string {
  const startIdx = html.indexOf(startMarker);
  const endIdx = html.indexOf(endMarker);

  if (startIdx === -1 || endIdx === -1 || endIdx <= startIdx) {
    throw new Error(
      `home-body.html must contain ${startMarker} and ${endMarker}. Run sync-html after updating index.html.`,
    );
  }

  const middle = html.slice(startIdx + startMarker.length, endIdx);
  const replacement = buildReplacement(middle);

  return (
    html.slice(0, startIdx) + replacement + html.slice(endIdx + endMarker.length)
  );
}

export function buildHomeBodyHtml(bodyHtml: string): string {
  let html = injectServiceNavLinks(bodyHtml);

  html = replaceBetweenMarkers(
    html,
    EXPERTISE_MARKER,
    ACCUEIL_FOND_NOIR_END,
    (middle) => {
      const servicesHtml = replaceBetweenMarkers(
        middle,
        SERVICES_MARKER,
        SERVICES_END,
        () => SERVICES_MOUNT,
      );
      return `${EXPERTISE_MOUNT}${servicesHtml}</section>`;
    },
  );

  html = replaceBetweenMarkers(
    ensureAboutMarkers(html),
    ABOUT_MARKER,
    ABOUT_END,
    () => ABOUT_SHELL,
  );

  html = replaceBetweenMarkers(
    ensureIndustriesMarkers(html),
    INDUSTRIES_MARKER,
    INDUSTRIES_END,
    () => INDUSTRIES_SHELL,
  );

  html = replaceBetweenMarkers(
    ensureProcessMarkers(html),
    PROCESS_MARKER,
    PROCESS_END,
    () => PROCESS_SHELL,
  );

  html = replaceBetweenMarkers(
    ensureValueMarkers(html),
    VALUE_MARKER,
    VALUE_END,
    () => VALUE_SHELL,
  );

  html = replaceBetweenMarkers(
    ensureClientsMarkers(html),
    CLIENTS_MARKER,
    CLIENTS_END,
    () => CLIENTS_SHELL,
  );

  html = replaceBetweenMarkers(
    ensureStatsMarkers(html),
    STATS_MARKER,
    STATS_END,
    () => STATS_SHELL,
  );

  html = replaceBetweenMarkers(
    ensureVideosMarkers(html),
    VIDEOS_MARKER,
    VIDEOS_END,
    () => VIDEOS_SHELL,
  );

  html = replaceBetweenMarkers(
    ensureBlogsMarkers(html),
    BLOGS_MARKER,
    BLOGS_END,
    () => BLOGS_SHELL,
  );

  html = replaceBetweenMarkers(
    ensureFaqMarkers(html),
    FAQ_MARKER,
    FAQ_END,
    () => FAQ_SHELL,
  );

  html = replaceBetweenMarkers(
    ensureTestimonialsMarkers(html),
    TESTIMONIALS_MARKER,
    TESTIMONIALS_END,
    () => TESTIMONIALS_SHELL,
  );

  if (html.includes(FOOTER_MARKER)) {
    html = html.replace(FOOTER_MARKER, FOOTER_MOUNT);
  }

  return html;
}

/** @deprecated Use buildHomeBodyHtml */
export function splitHomeBodyForAccueilFondNoir(bodyHtml: string) {
  const startIdx = bodyHtml.indexOf(ACCUEIL_FOND_NOIR_START);
  const endIdx = bodyHtml.indexOf(ACCUEIL_FOND_NOIR_END);
  if (startIdx === -1 || endIdx === -1) {
    throw new Error("Missing accueil fond noir markers");
  }
  return {
    before: bodyHtml.slice(0, startIdx),
    fondNoirTail: bodyHtml.slice(
      startIdx + ACCUEIL_FOND_NOIR_START.length,
      endIdx,
    ),
    after: bodyHtml.slice(endIdx + ACCUEIL_FOND_NOIR_END.length),
  };
}
