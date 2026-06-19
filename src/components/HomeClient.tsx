"use client";

import AboutSection from "@/components/AboutSection";
import ClientsSection from "@/components/ClientsSection";
import ClientsSaySection from "@/components/ClientsSaySection";
import ExpertiseSection from "@/components/ExpertiseSection";
import IndustriesSection from "@/components/IndustriesSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import ValueSection from "@/components/ValueSection";
import BlogsSection from "@/components/BlogsSection";
import FAQSection from "@/components/FAQSection";
import SiteFooter from "@/components/SiteFooter";
import VideoGallerySection from "@/components/VideoGallerySection";
import { HOME_VIDEO_GALLERY_CONTENT } from "@/content/video-gallery";
import { initHeaderNav } from "@/hooks/useHeaderNav";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type HomeClientProps = {
  bodyHtml: string;
};

type ReactMounts = {
  expertise: HTMLElement | null;
  services: HTMLElement | null;
  about: HTMLElement | null;
  industries: HTMLElement | null;
  process: HTMLElement | null;
  value: HTMLElement | null;
  clients: HTMLElement | null;
  stats: HTMLElement | null;
  videos: HTMLElement | null;
  blogs: HTMLElement | null;
  faq: HTMLElement | null;
  clientsSay: HTMLElement | null;
  footer: HTMLElement | null;
};

function appendScript(src?: string, inline?: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    if (src) {
      script.src = src;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load ${src}`));
    } else {
      script.text = inline ?? "";
      resolve();
    }
    document.body.appendChild(script);
  });
}

function readReactMounts(host: HTMLElement): ReactMounts {
  return {
    expertise: host.querySelector<HTMLElement>("#react-expertise-root"),
    services: host.querySelector<HTMLElement>("#react-services-root"),
    about: host.querySelector<HTMLElement>("#react-about-root"),
    industries: host.querySelector<HTMLElement>("#react-industries-root"),
    process: host.querySelector<HTMLElement>("#react-process-root"),
    value: host.querySelector<HTMLElement>("#react-value-root"),
    clients: host.querySelector<HTMLElement>("#react-clients-root"),
    stats: host.querySelector<HTMLElement>("#react-stats-root"),
    videos: host.querySelector<HTMLElement>("#react-videos-root"),
    blogs: host.querySelector<HTMLElement>("#react-blogs-root"),
    faq: host.querySelector<HTMLElement>("#react-faq-root"),
    clientsSay: host.querySelector<HTMLElement>("#react-clients-say-root"),
    footer: host.querySelector<HTMLElement>("#react-footer-root"),
  };
}

export default function HomeClient({ bodyHtml }: HomeClientProps) {
  const booted = useRef(false);
  const htmlHostRef = useRef<HTMLDivElement>(null);
  const [mounts, setMounts] = useState<ReactMounts>({
    expertise: null,
    services: null,
    about: null,
    industries: null,
    process: null,
    value: null,
    clients: null,
    stats: null,
    videos: null,
    blogs: null,
    faq: null,
    clientsSay: null,
    footer: null,
  });
  const [sectionKey, setSectionKey] = useState(0);

  useEffect(() => {
    const host = htmlHostRef.current;
    if (!host) return;

    host.innerHTML = bodyHtml;
    setMounts(readReactMounts(host));

    const cleanupNav = initHeaderNav(host);

    return () => {
      cleanupNav?.();
      setMounts({
        expertise: null,
        services: null,
        about: null,
        industries: null,
        process: null,
        value: null,
        clients: null,
        stats: null,
        videos: null,
        blogs: null,
        faq: null,
        clientsSay: null,
        footer: null,
      });
    };
  }, [bodyHtml]);

  useEffect(() => {
    if (booted.current) return;
    booted.current = true;

    async function bootFooterScripts() {
      if (
        typeof window !== "undefined" &&
        "mtcaptchaConfig" in window
      ) {
        const cfg = (
          window as Window & { mtcaptchaConfig?: { renderQueue: string[] } }
        ).mtcaptchaConfig;
        cfg?.renderQueue.push("contact-form-2069225787");
      }

      await appendScript("/js/hooks.min.js");
      await appendScript("/js/i18n.min.js");
      await appendScript(
        undefined,
        "wp.i18n.setLocaleData( { 'text direction\\u0004ltr': [ 'ltr' ] } );",
      );
      await appendScript("/js/index_1.js");
      await appendScript(
        undefined,
        `( function( domain, translations ) {
  var localeData = translations.locale_data[ domain ] || translations.locale_data.messages;
  localeData[""].domain = domain;
  wp.i18n.setLocaleData( localeData, domain );
} )( "contact-form-7", {"translation-revision-date":"2024-10-17 17:27:10+0000","generator":"GlotPress\\/4.0.1","domain":"messages","locale_data":{"messages":{"":{"domain":"messages","plural-forms":"nplurals=2; plural=n != 1;","lang":"en"},"This contact form is placed in the wrong place.":["Ce formulaire de contact est plac\\u00e9 dans un mauvais endroit."],"Error:":["Erreur\\u00a0:"]}},"comment":{"reference":"includes\\/js\\/index.js"}} );`,
      );
      await appendScript(
        undefined,
        `var wpcf7 = {
  "api": {
    "root": "https://www.oroya.fr/wp-json/",
    "namespace": "contact-form-7/v1"
  },
  "cached": 1
};`,
      );
      await appendScript("/js/index.js");
      await appendScript("/js/lottie_svg.min.js");
      await appendScript("/js/isotope.pkgd.min.js");
      await appendScript("/js/fancybox.umd.js");
      await appendScript("/js/imagesloaded.min.js");
      await appendScript("/js/legacy-compat.js");
      await appendScript("/js/app.js");
      (
        window as Window & { __archmationNudgeLoaderImages?: () => void }
      ).__archmationNudgeLoaderImages?.();
      await appendScript("/js/loader-finish.js");
      (
        window as Window & { __archmationNudgeLoaderImages?: () => void }
      ).__archmationNudgeLoaderImages?.();
      document.dispatchEvent(new Event("DOMContentLoaded", { bubbles: true }));
      window.dispatchEvent(new Event("scroll"));

      const host = htmlHostRef.current;
      if (host) {
        setMounts(readReactMounts(host));
        setSectionKey((key) => key + 1);
      }

      await appendScript("/js/hero-loop.js");
    }

    bootFooterScripts().catch(console.error);
  }, []);

  return (
    <div className="site-html-root" style={{ width: "100%" }}>
      <div ref={htmlHostRef} />
      {mounts.expertise
        ? createPortal(<ExpertiseSection key={`expertise-${sectionKey}`} />, mounts.expertise)
        : null}
      {mounts.services
        ? createPortal(<ServicesSection key={`services-${sectionKey}`} />, mounts.services)
        : null}
      {mounts.about
        ? createPortal(<AboutSection key={`about-${sectionKey}`} />, mounts.about)
        : null}
      {mounts.industries
        ? createPortal(
            <IndustriesSection key={`industries-${sectionKey}`} />,
            mounts.industries,
          )
        : null}
      {mounts.process
        ? createPortal(<ProcessSection key={`process-${sectionKey}`} />, mounts.process)
        : null}
      {mounts.value
        ? createPortal(<ValueSection key={`value-${sectionKey}`} />, mounts.value)
        : null}
      {mounts.clients
        ? createPortal(<ClientsSection key={`clients-${sectionKey}`} />, mounts.clients)
        : null}
      {mounts.stats
        ? createPortal(<StatsSection key={`stats-${sectionKey}`} />, mounts.stats)
        : null}
      {mounts.videos
        ? createPortal(
            <VideoGallerySection
              key={`videos-${sectionKey}`}
              content={HOME_VIDEO_GALLERY_CONTENT}
            />,
            mounts.videos,
          )
        : null}
      {mounts.blogs
        ? createPortal(<BlogsSection key={`blogs-${sectionKey}`} />, mounts.blogs)
        : null}
      {mounts.faq
        ? createPortal(<FAQSection key={`faq-${sectionKey}`} />, mounts.faq)
        : null}
      {mounts.clientsSay
        ? createPortal(
            <ClientsSaySection key={`clients-say-${sectionKey}`} />,
            mounts.clientsSay,
          )
        : null}
      {mounts.footer
        ? createPortal(<SiteFooter key={`footer-${sectionKey}`} />, mounts.footer)
        : null}
    </div>
  );
}
