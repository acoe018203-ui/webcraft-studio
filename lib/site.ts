/**
 * Central site configuration & structured data (Schema.org).
 * All user-facing copy is professional Bahasa Indonesia.
 */

export const SITE_URL = "https://webcraft-studio-lake.vercel.app";

export const site = {
  name: "Webcraft Studio",
  tagline: "Website Mewah, Performa Tinggi, Hasil Nyata untuk Bisnis Anda.",
  description:
    "Jasa pembuatan website profesional, cepat, dan elegan untuk tingkatkan kredibilitas serta penjualan bisnis Anda. Mulai dari Rp 965rb.",
  locale: "id_ID",
  keywords: [
    "jasa pembuatan website",
    "landing page premium",
    "website perusahaan Indonesia",
    "UI/UX design Indonesia",
    "SEO website",
    "konversi bisnis",
    "Webcraft Studio",
  ],
};

export const CONTACT = {
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP || "6285218378934",
  email: "halo@webcraft.studio",
  instagram: "https://instagram.com/webcraft.studio",
  tiktok: "https://tiktok.com/@webcraft.studio",
  linkedin: "https://linkedin.com/company/webcraft-studio",
  x: "https://x.com/webcraftstudio",
};

export const structuredData = JSON.stringify({
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "Organization"],
  name: site.name,
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.svg`,
  image: `${SITE_URL}/og-image.svg`,
  description: site.description,
  telephone: `+${CONTACT.whatsappNumber}`,
  email: CONTACT.email,
  priceRange: "Rp965.000 - Rp15.000.000",
  currenciesAccepted: "IDR",
  areaServed: "Indonesia",
  sameAs: [CONTACT.instagram, CONTACT.linkedin, CONTACT.tiktok, CONTACT.x],
  address: {
    "@type": "PostalAddress",
    addressCountry: "ID",
    addressLocality: "Jakarta",
  },
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Pembuatan Website Profesional",
        description: site.description,
      },
      priceCurrency: "IDR",
      price: "965000",
      availability: "https://schema.org/InStock",
    },
  ],
});