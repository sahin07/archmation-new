import SiteChrome from "@/components/SiteChrome";
import { buildSiteHeaderHtml } from "@/lib/site-header";
import "@/components/learn-marketing/learn-marketing-responsive.css";

export default function LearnMarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerHtml = buildSiteHeaderHtml();

  return (
    <SiteChrome headerHtml={headerHtml}>
      <div className="learn-marketing-page">{children}</div>
    </SiteChrome>
  );
}
