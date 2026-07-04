import fs from "fs";
import path from "path";
import { injectGoodReadsNavLink } from "@/content/case-studies";
import { injectIndustryNavLinks } from "@/content/industries";
import { injectServiceNavLinks } from "@/content/services";
import { normalizeInternalLinks } from "@/lib/internal-links";

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
  header = injectIndustryNavLinks(header);
  header = injectGoodReadsNavLink(header);
  header = normalizeInternalLinks(header);

  return header.replace(
    '<header id="headerSite" class="header clear no-smoothState"',
    '<header id="headerSite" class="header clear no-smoothState small"',
  );
}
