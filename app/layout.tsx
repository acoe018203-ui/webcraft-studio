import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { site, SITE_URL, structuredData } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Webcraft Studio — Agensi Pembuatan Website Premium & Konversi Tinggi",
  description:
    "Jasa pembuatan website profesional, cepat, dan elegan untuk tingkatkan kredibilitas serta penjualan bisnis Anda. Mulai dari Rp 965rb.",
  keywords: [
    "jasa pembuatan website",
    "website perusahaan",
    "landing page premium",
    "SEO website",
    "UI UX design Indonesia",
    "Webcraft Studio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Webcraft Studio — Agensi Pembuatan Website Premium & Konversi Tinggi",
    description:
      "Jasa pembuatan website profesional, cepat, dan elegan untuk tingkatkan kredibilitas serta penjualan bisnis Anda. Mulai dari Rp 965rb.",
    url: SITE_URL,
    siteName: "Webcraft Studio",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Webcraft Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webcraft Studio — Agensi Pembuatan Website Premium & Konversi Tinggi",
    description:
      "Jasa pembuatan website profesional, cepat, dan elegan untuk tingkatkan kredibilitas serta penjualan bisnis Anda. Mulai dari Rp 965rb.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070A0F",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <meta name="application-name" content={site.name} />
        <meta name="apple-mobile-web-app-title" content={site.name} />
        <meta name="format-detection" content="telephone=yes" />
        <Script id="webcraft-structured-data" type="application/ld+json" strategy="beforeInteractive">
          {structuredData}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2177989082744301');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2177989082744301&ev=PageView&noscript=1"
            alt="facebook-pixel"
          />
        </noscript>
      </head>
      <body className={`${inter.className} bg-[#070A0F] text-foreground`}>
        {children}
      </body>
    </html>
  );
}