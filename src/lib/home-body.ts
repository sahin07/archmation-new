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
const COLLABORATIONS_ANCHOR = '<section id="accueilCollaborations"';
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
  let html = replaceBetweenMarkers(
    bodyHtml,
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
