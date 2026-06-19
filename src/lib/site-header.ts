import fs from "fs";
import path from "path";
import { injectServiceNavLinks } from "@/content/services";

export function buildSiteHeaderHtml(): string {
  const homeBody = fs.readFileSync(
    path.join(process.cwd(), "src/content/home-body.html"),
    "utf8",
  );

  const start = homeBody.indexOf('<header id="headerSite"');
  const end = homeBody.indexOf("<!-- /header -->");

  if (start === -1 || end === -1) {
    throw new Error("site header markers missing in home-body.html");
  }

  let header = homeBody.slice(start, end).trim();
  header = injectServiceNavLinks(header);

  return header
    .replace(
      '<header id="headerSite" class="header clear no-smoothState"',
      '<header id="headerSite" class="header clear no-smoothState small"',
    )
    .replace(/href="https:\/\/archmation\.com\/"/g, 'href="/"')
    .replace(
      /<a href="https:\/\/archmation\.com">\s*\n?\s*<svg width="236"/,
      '<a href="/">\n                            <svg width="236"',
    );
}
