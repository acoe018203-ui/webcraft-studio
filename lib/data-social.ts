/**
 * Additional content: navigation, clients, pricing, testimonials, footer.
 * All user-facing copy is professional Bahasa Indonesia.
 */

/* ---------------------------------- Navbar --------------------------------- */
export const navLinks = [
  { label: "Layanan", href: "#layanan" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Proses", href: "#proses" },
  { label: "Harga", href: "#harga" },
];

/* ----------------------------------- Clients ---------------------------- */
export const clients = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "TypeScript",
  "Vercel",
  "Figma",
];

/* ----------------------------------- Pricing -------------------------------- */
export interface Plan {
  name: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  waMessage: string;
}

export const plans: Plan[] = [
  {
    name: "Standard",
    price: "Rp 965.000",
    unit: "per proyek",
    description: "Efficient solution for business landing pages or personal branding.",
    features: [
      "1 Responsive Page",
      "Direct WhatsApp Integration",
      "Basic SEO Optimization",
      "Fast Loading 90+",
    ],
    waMessage:
      "Halo Webcraft Studio! Saya tertarik dengan paket Standard (Rp 965.000). Bisa dibantu?",
  },
  {
    name: "Pro",
    price: "Rp 1.500.000",
    unit: "per proyek",
    description: "Complete package to boost business credibility & conversions.",
    features: [
      "Multi-page (Up to 5 Pages)",
      "Smooth & Interactive Animations",
      "On-Page SEO & Speed Optimization",
      "Contact Form & Analytics",
    ],
    highlighted: true,
    badge: "Paling Populer",
    waMessage:
      "Halo Webcraft Studio! Saya ingin paket Pro (Rp 1.500.000) untuk bisnis saya.",
  },
  {
    name: "Custom",
    price: "Custom",
    unit: "sesuai kebutuhan",
    description: "Exclusive solution for custom features and large-scale needs.",
    features: [
      "Custom 3D/Motion Design",
      "CMS / E-commerce Integration",
      "Custom Architecture & API",
      "Priority Support",
    ],
    waMessage:
      "Halo Webcraft Studio! Saya ingin paket Custom. Mohon infonya mengenai kebutuhan khusus.",
  },
];

/* --------------------------------- Testimonials ----------------------------- */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Landing page 3D yang dibuat Webcraft Studio melampaui ekspektasi. Konversi kami naik 3x lipat dalam dua bulan pertama.",
    name: "Rizky Pratama",
    role: "CEO",
    company: "Nusa Realty",
    avatar: "RP",
  },
  {
    quote:
      "Prosesnya sangat profesional dan komunikatif. Skor Lighthouse tembus 98, loading sepersekian detik. Luar biasa.",
    name: "Sari Dewi",
    role: "Head of Marketing",
    company: "Pulse Fitness",
    avatar: "SD",
  },
  {
    quote:
      "Visual 3D-nya membuat brand kami terlihat premium. Banyak klien yang memuji desain website kami sejak diluncurkan.",
    name: "Bagus Wirawan",
    role: "Founder",
    company: "Garuda Finance",
    avatar: "BW",
  },
  {
    quote:
      "Tim Webcraft Studio memahami betul psikologi customer kami. CTA dan copywriting-nya benar-benar work.",
    name: "Melati Anggraini",
    role: "Growth Lead",
    company: "Aurora E-commerce",
    avatar: "MA",
  },
];

/* ---------------------------------- Footer --------------------------------- */
export const footerLinkGroups = [
  {
    title: "Produk",
    links: [
      { label: "Layanan Kami", href: "#layanan" },
      { label: "Portofolio", href: "#portofolio" },
      { label: "Skema Proses", href: "#proses" },
      { label: "Paket Harga", href: "#harga" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { label: "Kontak", href: "#kontak" },
      { label: "Kebijakan Privasi", href: "#" },
      { label: "Syarat & Ketentuan", href: "#" },
    ],
  },
];