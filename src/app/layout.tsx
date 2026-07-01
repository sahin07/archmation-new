import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Archmation Studios : Digital Marketing Agency in Bangalore",
  description:
    "Archmation Studios offers digital marketing, web development, SEO, video marketing, performance marketing and branding services to grow your business in Bangalore and beyond.",
  metadataBase: new URL("https://archmation.com"),
  alternates: { canonical: "/" },
  openGraph: {
    locale: "en_US",
    type: "website",
    title: "Archmation Studios - Digital Marketing Agency in Bangalore",
    description:
      "Lead generation, performance marketing, video marketing, SEO, branding and web solutions for B2B and B2C businesses.",
    url: "https://archmation.com/",
    siteName: "Archmation Studios",
    images: [
      {
        url: "/images/oroya_page_accueil.png",
        width: 1908,
        height: 910,
        type: "image/png",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

const bodyClass =
  "home wp-singular page-template page-template-templates page-template-accueil page-template-templatesaccueil-php page page-id-2 wp-theme-oroyaV2 page-oroya";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/images/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/images/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/images/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/images/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/images/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/images/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/images/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/images/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/images/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/images/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="https://www.oroya.fr/wp-content/themes/oroyaV2/dist/assets/img/favicons/manifest.json"
        />
        <meta name="msapplication-TileColor" content="transparent" />
        <meta
          name="msapplication-TileImage"
          content="https://www.oroya.fr/wp-content/themes/oroyaV2/dist/assets/img/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="transparent" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,500&family=Tenor+Sans&display=swap"
          rel="stylesheet"
        />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="//unpkg.com" />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
        <style
          id="wp-img-auto-sizes-contain-inline-css"
          dangerouslySetInnerHTML={{
            __html:
              "img:is([sizes=auto i],[sizes^=\"auto,\" i]){contain-intrinsic-size:3000px 1500px}",
          }}
        />
        <style
          id="classic-theme-styles-inline-css"
          dangerouslySetInnerHTML={{
            __html:
              ".wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}",
          }}
        />
        <style
          id="global-styles-inline-css"
          dangerouslySetInnerHTML={{
            __html: `:root{--wp--preset--aspect-ratio--square: 1;--wp--preset--aspect-ratio--4-3: 4/3;--wp--preset--aspect-ratio--3-4: 3/4;--wp--preset--aspect-ratio--3-2: 3/2;--wp--preset--aspect-ratio--2-3: 2/3;--wp--preset--aspect-ratio--16-9: 16/9;--wp--preset--aspect-ratio--9-16: 9/16;--wp--preset--color--black: #000000;--wp--preset--color--white: #ffffff;}:where(.is-layout-flex){gap: 0.5em;}body .is-layout-flex{display: flex;}`,
          }}
        />
        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="stylesheet" href="/css/tarteaucitron.css" />
        <link rel="stylesheet" href="/css/oroya_tarteaucitron_white.css" />
        <link rel="stylesheet" href="/css/app.css" />
        <link rel="stylesheet" href="/css/fancybox.css" />
        <link rel="stylesheet" href="/css/style.css?v=20250625zb" />
        <Script id="base-url" strategy="beforeInteractive">
          {`const baseURL = \`\${window.location.protocol}//\${window.location.host}\`;`}
        </Script>
        <Script id="mtcaptcha-config" strategy="beforeInteractive">
          {`var mtcaptchaConfig ={"sitekey":"MTPublic-S3694lw50","autoFormValidate":true,"render":"explicit","renderQueue":["mtcaptcha"],"theme":"highcontrast","widgetSize":"mini","lang":"en"}`}
        </Script>
        <Script src="/js/tarteaucitron.js" strategy="beforeInteractive" />
        <Script src="/js/tarteaucitron_oroya.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
        <Script id="mtcaptcha-cdn" strategy="beforeInteractive">
          {`(function(){var mt_captcha_service = document.createElement('script');mt_captcha_service.async = true;mt_captcha_service.src = 'https://service.mtcaptcha.com/mtcv1/client/mtcaptcha.min.js';(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(mt_captcha_service);
var mt_captcha_service2 = document.createElement('script');mt_captcha_service2.async = true;mt_captcha_service2.src = 'https://service2.mtcaptcha.com/mtcv1/client/mtcaptcha2.min.js';(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(mt_captcha_service2);})();`}
        </Script>
        <Script src="/js/mtcaptcha.min.js" strategy="beforeInteractive" />
        <Script src="/js/mtcaptcha2.min.js" strategy="beforeInteractive" />
      </head>
      <body className={bodyClass} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
