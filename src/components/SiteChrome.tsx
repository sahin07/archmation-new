"use client";

import SiteFooter from "@/components/SiteFooter";
import { initHeaderNav, initHeaderScroll } from "@/hooks/useHeaderNav";
import { syncHeaderNavActive } from "@/lib/header-nav-active";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type SiteChromeProps = {
  headerHtml: string;
  children: React.ReactNode;
};

export default function SiteChrome({ headerHtml, children }: SiteChromeProps) {
  const headerHostRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const host = headerHostRef.current;
    if (!host) return;

    host.innerHTML = headerHtml;
    syncHeaderNavActive(host, pathname);
    const cleanupNav = initHeaderNav(host);
    const cleanupScroll = initHeaderScroll(host, { compactDefault: true });

    return () => {
      cleanupNav?.();
      cleanupScroll?.();
    };
  }, [headerHtml, pathname]);

  useEffect(() => {
    document.body.classList.add("page-service", "page-template-accueil");
    return () => {
      document.body.classList.remove("page-service", "page-template-accueil");
    };
  }, []);

  return (
    <div id="fullSite" className="slideInUp site-chrome">
      <div ref={headerHostRef} className="site-chrome__header" />
      <div className="site-chrome__main">{children}</div>
      <SiteFooter />
    </div>
  );
}
