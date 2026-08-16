import type { Metadata, Viewport } from "next";

import "@fontsource/syne/500.css";
import "@fontsource/syne/600.css";
import "@fontsource/syne/700.css";
import "@fontsource/syne/800.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";

import "./globals.css";
import { site, SITE_URL, structuredData, CONTACT } from "@/lib/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090A0F",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Webcraft Studio — Jasa Pembuatan Website 3D Interaktif & Landing Page Premium",
    template: "%s | Webcraft Studio",
  },
  description: site.description,
  applicationName: site.name,
  keywords: site.keywords,
  authors: [{ name: site.name, url: SITE_URL }],
  creator: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: SITE_URL,
    title: site.name,
    description: site.description,
    locale: "id_ID",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Webcraft Studio — Jasa Pembuatan Website Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/og-image.svg"],
  },
  icons: { icon: "/favicon.svg" },
  formatDetection: { telephone: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" dir="ltr" className="dark">
      <body className="antialiased">
        {/* Schema.org structured data: ProfessionalService / LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredData }}
        />
        {/* Fallback OG/Twitter tags (server-rendered for crawlers) */}
        <meta name="twitter:site" content="@webcraftstudio" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Berapa biaya pembuatan website di Webcraft Studio?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Paket kami mulai dari Rp 3.500.000 untuk Starter Landing hingga paket Enterprise Custom sesuai kebutuhan.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Berapa lama proses pengerjaan website?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Pengerjaan landing page umumnya 5-7 hari kerja, bergantung pada kompleksitas dan paket yang dipilih.",
                  },
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}