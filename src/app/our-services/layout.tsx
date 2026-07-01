import SiteChrome from "@/components/SiteChrome";
import { buildSiteHeaderHtml } from "@/lib/site-header";
import "@/components/services/services-responsive.css";

export default function OurServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerHtml = buildSiteHeaderHtml();

  return (
    <SiteChrome headerHtml={headerHtml}>
      <div className="our-services-page">{children}</div>
    </SiteChrome>
  );
}
