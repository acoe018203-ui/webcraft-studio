/**
 * Additional content: navigation, clients, pricing, testimonials, footer.
 * All user-facing copy is professional Bahasa Indonesia.
 */

export const navLinks = [
  { label: "Layanan", href: "#layanan" },
  { label: "Proses", href: "#proses" },
  { label: "Harga", href: "#harga" },
];

export const clients = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "TypeScript",
  "Vercel",
  "Figma",
];

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
    description:
      "Landing Page Cepat, Design Modern, Integrasi WA, dan SEO Dasar untuk bisnis yang ingin tampil profesional tanpa biaya berlebih.",
    features: [
      "1 halaman fokus konversi",
      "Desain modern & responsif",
      "Integrasi WhatsApp langsung",
      "SEO dasar + kecepatan ringan",
    ],
    waMessage: "Halo Webcraft Studio, saya ingin konsultasi pembuatan website.",
  },
  {
    name: "Pro",
    price: "Rp 1.500.000",
    unit: "per proyek",
    description:
      "Website multi-halaman premium dengan custom design, animasi smooth, dan strategi SEO lengkap untuk menjangkau lebih banyak lead.",
    features: [
      "Multi-halaman hingga 5 halaman",
      "Custom design & motion halus",
      "SEO lengkap & struktur teknis",
      "Form kontak & integrasi analitik",
    ],
    highlighted: true,
    badge: "Paling Populer",
    waMessage: "Halo Webcraft Studio, saya ingin konsultasi pembuatan website.",
  },
  {
    name: "Custom",
    price: "Custom",
    unit: "sesuai kebutuhan",
    description:
      "Solusi enterprise dan web application dengan fitur khusus, skalabilitas tinggi, dan support prioritas untuk kebutuhan kompleks.",
    features: [
      "Desain eksklusif & fitur khusus",
      "CMS atau sistem internal custom",
      "Integrasi API & backend",
      "Prioritas support & pengembangan",
    ],
    waMessage: "Halo Webcraft Studio, saya ingin konsultasi pembuatan website.",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Website baru kami terlihat premium, fast, dan sangat mudah digunakan. Prosesnya rapi dan hasilnya sejalan dengan brand yang kami inginkan.",
    name: "Hendra Wijaya",
    company: "Nusa Realty",
    avatar: "HW",
  },
  {
    quote:
      "Kecepatan loading dan desain alur pembelian meningkat signifikan. Kami mendapatkan lebih banyak inquiry dari calon customer yang serius.",
    name: "Maya Putri",
    company: "Pulse Fitness",
    avatar: "MP",
  },
  {
    quote:
      "Timnya komunikatif dan responsif. Hasil akhirnya sesuai standard perusahaan dan membuat brand kami terasa lebih profesional di mata klien.",
    name: "Budi Santoso",
    company: "Garuda Finance",
    avatar: "BS",
  },
];

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