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
    name: "Standar",
    price: "Rp 965.000",
    unit: "per proyek",
    description: "Solusi efisien untuk landing page bisnis atau personal branding yang ingin hadir lebih profesional.",
    features: [
      "1 Halaman Responsif",
      "Integrasi WhatsApp Langsung",
      "Optimasi SEO Dasar",
      "Loading Cepat 90+",
    ],
    waMessage:
      "Halo Webcraft Studio! Saya tertarik dengan paket Standar (Rp 965.000). Bisa dibantu?",
  },
  {
    name: "Pro",
    price: "Rp 1.500.000",
    unit: "per proyek",
    description: "Paket lengkap untuk meningkatkan kredibilitas brand dan memperbaiki konversi secara nyata.",
    features: [
      "Multi-halaman (hingga 5 Halaman)",
      "Animasi Halus & Interaktif",
      "SEO On-Page & Optimasi Kecepatan",
      "Form Kontak & Analitik",
    ],
    highlighted: true,
    badge: "Paling Populer",
    waMessage:
      "Halo Webcraft Studio! Saya ingin paket Pro (Rp 1.500.000) untuk bisnis saya.",
  },
  {
    name: "Kustom",
    price: "Kustom",
    unit: "sesuai kebutuhan",
    description: "Solusi eksklusif untuk fitur khusus, skala besar, dan kebutuhan bisnis yang lebih kompleks.",
    features: [
      "Desain 3D & Motion Kustom",
      "Integrasi CMS / E-commerce",
      "Arsitektur & API Khusus",
      "Prioritas Dukungan",
    ],
    waMessage:
      "Halo Webcraft Studio! Saya ingin paket Kustom. Mohon infonya mengenai kebutuhan khusus.",
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
      "Desain website sangat bersih dan sesuai standar brand kami. Proses pengerjaan tepat waktu dan tim sangat komunikatif.",
    name: "Hendra Wijaya",
    role: "Founder",
    company: "Nusa Realty",
    avatar: "HW",
  },
  {
    quote:
      "Kecepatan muat halaman dan alur pemesanan di website baru kami meningkat pesat. Pengunjung merasa jauh lebih nyaman.",
    name: "Maya Putri",
    role: "Marketing Lead",
    company: "Pulse Fitness",
    avatar: "MP",
  },
  {
    quote:
      "Sangat puas dengan hasil akhir. Tampilan profesional dan integrasi WhatsApp memudahkan calon klien menghubungi kami secara langsung.",
    name: "Budi Santoso",
    role: "Direktur",
    company: "Garuda Finance",
    avatar: "BS",
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