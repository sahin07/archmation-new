import SiteChrome from "@/components/SiteChrome";
import { buildSiteHeaderHtml } from "@/lib/site-header";
import QueryProvider from "@/components/case-studies/QueryProvider";
import "@/components/case-studies/case-studies-responsive.css";

export default function BlogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerHtml = buildSiteHeaderHtml();

  return (
    <QueryProvider>
      <SiteChrome headerHtml={headerHtml}>
        <div className="case-studies-page">{children}</div>
      </SiteChrome>
    </QueryProvider>
  );
}
