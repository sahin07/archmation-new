import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(
  __dirname,
  "..",
  "public",
  "wp-content",
  "themes",
  "oroyaV2",
  "dist",
  "assets",
  "img",
  "pictos",
);

const base =
  "https://www.oroya.fr/wp-content/themes/oroyaV2/dist/assets/img/pictos/";
const files = [
  "cactus.json",
  "marketing.json",
  "graphisme.json",
  "site-internet.json",
  "dev-web-app.json",
  "motion-design.json",
  "elearning.json",
];

fs.mkdirSync(outDir, { recursive: true });

for (const file of files) {
  const url = base + file;
  const res = await fetch(url);
  if (!res.ok) {
    console.error("Failed:", file, res.status);
    continue;
  }
  const text = await res.text();
  fs.writeFileSync(path.join(outDir, file), text, "utf8");
  console.log("Wrote", file);
}
