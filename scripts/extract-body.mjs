import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const source = fs.readFileSync(
  path.join(root, "..", "index.html"),
  "utf8",
);

const bodyMatch = source.match(/<body[^>]*>([\s\S]*)<\/body>/i);
if (!bodyMatch) {
  throw new Error("Could not find <body> in index.html");
}

// Scripts are wired separately in HomeClient (innerHTML does not execute <script>).
let bodyHtml = bodyMatch[1].replace(/<script[\s\S]*?<\/script>/gi, "").trim();

const ABOUT_MARKER = "<!-- @react:about -->";
const ABOUT_END = "<!-- @react:aboutEnd -->";
const INDUSTRIES_MARKER = "<!-- @react:industries -->";
const INDUSTRIES_END = "<!-- @react:industriesEnd -->";
const PROCESS_MARKER = "<!-- @react:process -->";
const PROCESS_END = "<!-- @react:processEnd -->";
const VALUE_MARKER = "<!-- @react:value -->";
const VALUE_END = "<!-- @react:valueEnd -->";
const CLIENTS_MARKER = "<!-- @react:clients -->";
const CLIENTS_END = "<!-- @react:clientsEnd -->";
const STATS_MARKER = "<!-- @react:stats -->";
const STATS_END = "<!-- @react:statsEnd -->";
const VIDEOS_MARKER = "<!-- @react:videos -->";
const VIDEOS_END = "<!-- @react:videosEnd -->";
const BLOGS_MARKER = "<!-- @react:blogs -->";
const BLOGS_END = "<!-- @react:blogsEnd -->";
const FAQ_MARKER = "<!-- @react:faq -->";
const FAQ_END = "<!-- @react:faqEnd -->";
const COLLABORATIONS_ANCHOR = '<div class="overflow-hidden">';
const FOOTER_ANCHOR = "<!-- @react:footerLegacy -->";
const ABOUT_ANCHOR = COLLABORATIONS_ANCHOR;

function hasMarkerPair(html, startMarker, endMarker) {
  const startIdx = html.indexOf(startMarker);
  const endIdx = html.indexOf(endMarker);
  return startIdx !== -1 && endIdx !== -1 && endIdx > startIdx;
}

function hasAboutMarkers(html) {
  return hasMarkerPair(html, ABOUT_MARKER, ABOUT_END);
}

function hasIndustriesMarkers(html) {
  return hasMarkerPair(html, INDUSTRIES_MARKER, INDUSTRIES_END);
}

function hasProcessMarkers(html) {
  return hasMarkerPair(html, PROCESS_MARKER, PROCESS_END);
}

function hasValueMarkers(html) {
  return hasMarkerPair(html, VALUE_MARKER, VALUE_END);
}

function hasClientsMarkers(html) {
  return hasMarkerPair(html, CLIENTS_MARKER, CLIENTS_END);
}

function hasStatsMarkers(html) {
  return hasMarkerPair(html, STATS_MARKER, STATS_END);
}

function hasVideosMarkers(html) {
  return hasMarkerPair(html, VIDEOS_MARKER, VIDEOS_END);
}

function hasBlogsMarkers(html) {
  return hasMarkerPair(html, BLOGS_MARKER, BLOGS_END);
}

function hasFaqMarkers(html) {
  return hasMarkerPair(html, FAQ_MARKER, FAQ_END);
}

if (!hasAboutMarkers(bodyHtml)) {
  const anchorIdx = bodyHtml.indexOf(ABOUT_ANCHOR);
  if (anchorIdx !== -1) {
    const markers = `\n    ${ABOUT_MARKER}\n    ${ABOUT_END}\n\n\n    `;
    bodyHtml = bodyHtml.slice(0, anchorIdx) + markers + bodyHtml.slice(anchorIdx);
    console.warn("Inserted missing about React markers before OUR CLIENTS & WORK section.");
  } else {
    console.warn(
      "Missing about React markers and testimonials anchor; add <!-- @react:about --> to index.html.",
    );
  }
}

if (!hasIndustriesMarkers(bodyHtml)) {
  const anchorIdx = bodyHtml.indexOf(COLLABORATIONS_ANCHOR);
  if (anchorIdx !== -1) {
    const markers = `\n    ${INDUSTRIES_MARKER}\n    ${INDUSTRIES_END}\n\n\n    `;
    bodyHtml = bodyHtml.slice(0, anchorIdx) + markers + bodyHtml.slice(anchorIdx);
    console.warn("Inserted missing industries React markers before OUR CLIENTS & WORK section.");
  } else {
    console.warn(
      "Missing industries React markers; add <!-- @react:industries --> to index.html.",
    );
  }
}

if (!hasProcessMarkers(bodyHtml)) {
  const anchorIdx = bodyHtml.indexOf(COLLABORATIONS_ANCHOR);
  if (anchorIdx !== -1) {
    const markers = `\n    ${PROCESS_MARKER}\n    ${PROCESS_END}\n\n\n    `;
    bodyHtml = bodyHtml.slice(0, anchorIdx) + markers + bodyHtml.slice(anchorIdx);
    console.warn("Inserted missing process React markers before OUR CLIENTS & WORK section.");
  } else {
    console.warn(
      "Missing process React markers; add <!-- @react:process --> to index.html.",
    );
  }
}

if (!hasValueMarkers(bodyHtml)) {
  const anchorIdx = bodyHtml.indexOf(COLLABORATIONS_ANCHOR);
  if (anchorIdx !== -1) {
    const markers = `\n    ${VALUE_MARKER}\n    ${VALUE_END}\n\n\n    `;
    bodyHtml = bodyHtml.slice(0, anchorIdx) + markers + bodyHtml.slice(anchorIdx);
    console.warn("Inserted missing value React markers before OUR CLIENTS & WORK section.");
  } else {
    console.warn(
      "Missing value React markers; add <!-- @react:value --> to index.html.",
    );
  }
}

if (!hasClientsMarkers(bodyHtml)) {
  const anchorIdx = bodyHtml.indexOf(COLLABORATIONS_ANCHOR);
  if (anchorIdx !== -1) {
    const markers = `\n    ${CLIENTS_MARKER}\n    ${CLIENTS_END}\n\n\n    `;
    bodyHtml = bodyHtml.slice(0, anchorIdx) + markers + bodyHtml.slice(anchorIdx);
    console.warn("Inserted missing clients React markers before OUR CLIENTS & WORK section.");
  } else {
    console.warn(
      "Missing clients React markers; add <!-- @react:clients --> to index.html.",
    );
  }
}

if (!hasStatsMarkers(bodyHtml)) {
  const anchorIdx = bodyHtml.indexOf(COLLABORATIONS_ANCHOR);
  if (anchorIdx !== -1) {
    const markers = `\n    ${STATS_MARKER}\n    ${STATS_END}\n\n\n    `;
    bodyHtml = bodyHtml.slice(0, anchorIdx) + markers + bodyHtml.slice(anchorIdx);
    console.warn("Inserted missing stats React markers before OUR CLIENTS & WORK section.");
  } else {
    console.warn(
      "Missing stats React markers; add <!-- @react:stats --> to index.html.",
    );
  }
}

if (!hasVideosMarkers(bodyHtml)) {
  const anchorIdx = bodyHtml.indexOf(COLLABORATIONS_ANCHOR);
  if (anchorIdx !== -1) {
    const markers = `\n    ${VIDEOS_MARKER}\n    ${VIDEOS_END}\n\n\n    `;
    bodyHtml = bodyHtml.slice(0, anchorIdx) + markers + bodyHtml.slice(anchorIdx);
    console.warn("Inserted missing videos React markers before OUR CLIENTS & WORK section.");
  } else {
    console.warn(
      "Missing videos React markers; add <!-- @react:videos --> to index.html.",
    );
  }
}

if (!hasBlogsMarkers(bodyHtml)) {
  const anchorIdx = bodyHtml.indexOf(COLLABORATIONS_ANCHOR);
  if (anchorIdx !== -1) {
    const markers = `\n    ${BLOGS_MARKER}\n    ${BLOGS_END}\n\n\n    `;
    bodyHtml = bodyHtml.slice(0, anchorIdx) + markers + bodyHtml.slice(anchorIdx);
    console.warn("Inserted missing blogs React markers before OUR CLIENTS & WORK section.");
  } else {
    console.warn(
      "Missing blogs React markers; add <!-- @react:blogs --> to index.html.",
    );
  }
}

if (!hasFaqMarkers(bodyHtml)) {
  const anchorIdx = bodyHtml.indexOf(FOOTER_ANCHOR);
  if (anchorIdx !== -1) {
    const markers = `\n    ${FAQ_MARKER}\n    ${FAQ_END}\n\n\n    `;
    bodyHtml = bodyHtml.slice(0, anchorIdx) + markers + bodyHtml.slice(anchorIdx);
    console.warn("Inserted missing FAQ React markers before footer.");
  } else {
    console.warn(
      "Missing FAQ React markers; add <!-- @react:faq --> to index.html.",
    );
  }
}

const outDir = path.join(root, "src", "content");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "home-body.html"), bodyHtml, "utf8");
console.log("Wrote home-body.html (" + bodyHtml.length + " chars)");
