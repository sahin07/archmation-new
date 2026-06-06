import fs from "fs";
import path from "path";
import HomeClient from "@/components/HomeClient";
import { buildHomeBodyHtml } from "@/lib/home-body";

export default function Home() {
  const bodyHtml = fs.readFileSync(
    path.join(process.cwd(), "src/content/home-body.html"),
    "utf8",
  );

  return <HomeClient bodyHtml={buildHomeBodyHtml(bodyHtml)} />;
}
