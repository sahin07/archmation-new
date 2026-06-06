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
const COLLABORATIONS_ANCHOR = '<section id="accueilCollaborations"';
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

const outDir = path.join(root, "src", "content");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "home-body.html"), bodyHtml, "utf8");
console.log("Wrote home-body.html (" + bodyHtml.length + " chars)");
