import SiteChrome from "@/components/SiteChrome";
import { buildSiteHeaderHtml } from "@/lib/site-header";

export default function ContactUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerHtml = buildSiteHeaderHtml();

  return <SiteChrome headerHtml={headerHtml}>{children}</SiteChrome>;
}
