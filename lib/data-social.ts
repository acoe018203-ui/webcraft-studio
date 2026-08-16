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

/* --------------------------------- Client logos ---------------------------- */
export const clients = [
  "Nusantara Digital",
  "Kreasi Media",
  "TechNusa",
  "Bali Ventures",
  "Studio Garuda",
  "Jakarta Labs",
  "Sana Company",
  "Aurora Fintech",
  "Prima E-commerce",
  "Selatan Group",
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
    name: "Starter Landing",
    price: "Rp 3.500.000",
    unit: "per proyek",
    description: "Landing page premium 1 halaman yang cepat, elegan, dan siap konversi.",
    features: [
      "1 halaman landing premium",
      "Desain UI/UX responsif",
      "Optimasi SEO on-page",
      "Kecepatan Lighthouse 90+",
      "Revisi 2 kali",
      "Pengiriman 5-7 hari kerja",
    ],
    waMessage:
      "Halo Webcraft Studio! Saya tertarik dengan paket Starter Landing (Rp 3.500.000). Bisa dibantu?",
  },
  {
    name: "Pro 3D Agency",
    price: "Rp 7.500.000",
    unit: "per proyek",
    description: "Landing page interaktif dengan visual 3D & animasi sinematik kelas agensi.",
    features: [
      "Semua fitur Starter Landing",
      "Visual 3D interaktif custom",
      "Animasi & motion premium",
      "Copywriting berbahasa konversi",
      "Integrasi WhatsApp & form",
      "Optimasi Lighthouse 95+",
      "Revisi 5 kali",
    ],
    highlighted: true,
    badge: "Paling Populer",
    waMessage:
      "Halo Webcraft Studio! Saya ingin paket Pro 3D Agency (Rp 7.500.000) dengan visual 3D interaktif.",
  },
  {
    name: "Enterprise Custom",
    price: "Custom",
    unit: "sesuai kebutuhan",
    description: "Solusi penuh skala besar dengan tim khusus dan SLA prioritas tinggi.",
    features: [
      "Fitur Pro 3D Agency",
      "Multi-halaman & sistem CMS",
      "Branding & design system khusus",
      "Tim developer dedicated",
      "Maintenance & SLA prioritas",
      "Konsultasi strategi digital",
    ],
    waMessage:
      "Halo Webcraft Studio! Saya ingin berkonsultasi untuk paket Enterprise Custom. Mohon infonya.",
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