/**
 * Central site configuration & structured data (Schema.org).
 * All user-facing copy is professional Bahasa Indonesia.
 */

export const SITE_URL = "https://webcraft.studio";

export const site = {
  name: "Webcraft Studio",
  tagline: "Membangun Website Elegansi Tinggi & Performa Menakjubkan",
  description:
    "Webcraft Studio adalah agensi pengembangan web premium yang menghadirkan landing page 3D interaktif, desain UI/UX tingkat tinggi, kecepatan maksimal, dan SEO terbaik untuk konversi bisnis Anda.",
  locale: "id_ID",
  keywords: [
    "jasa pembuatan website",
    "landing page profesional",
    "web development 3D",
    "UI/UX design Indonesia",
    "SEO website",
    "optimasi konversi",
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

/**
 * Reusable JSON-LD structured data (ProfessionalService / LocalBusiness).
 * Serialized as a string to be injected via dangerouslySetInnerHTML.
 */
export const structuredData = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  image: `${SITE_URL}/og-image.svg`,
  description: site.description,
  telephone: `+${CONTACT.whatsappNumber}`,
  email: CONTACT.email,
  priceRange: "Rp3.500.000 - Rp15.000.000",
  currenciesAccepted: "IDR",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ID",
    addressLocality: "Jakarta",
  },
  areaServed: "Indonesia",
  sameAs: [CONTACT.instagram, CONTACT.linkedin, CONTACT.tiktok, CONTACT.x],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "124",
  },
  makesOffer: [
    {
      "@type": "Offer",
      name: "UI/UX Pro Max Design",
      priceCurrency: "IDR",
      price: "3500000",
    },
  ],
});