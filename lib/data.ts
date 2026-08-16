/**
 * Content data for landing page sections.
 * All user-facing copy is professional Bahasa Indonesia.
 */
import {
  Palette,
  Boxes,
  Gauge,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
  accent: "emerald" | "violet" | "gold";
}

export const services: Service[] = [
  {
    icon: Palette,
    title: "Desain UI/UX Premium",
    description:
      "Desain antarmuka elegan dengan hierarchy visual yang jelas, struktur informasi yang kuat, dan pengalaman brand yang konsisten untuk meningkatkan trust pada calon pelanggan.",
    points: ["Wireframe Strategis", "Visual Premium", "UX Conversion"],
    accent: "emerald",
  },
  {
    icon: Boxes,
    title: "Pengembangan Web Kustom",
    description:
      "Website modern dibangun dengan arsitektur yang rapi, responsif di semua perangkat, dan siap tumbuh sesuai kebutuhan bisnis Anda di masa depan.",
    points: ["Next.js Modern", "Integrasi API", "Scalable Build"],
    accent: "violet",
  },
  {
    icon: Gauge,
    title: "SEO & Kecepatan Maksimal",
    description:
      "Struktur teknis yang bersih, Core Web Vitals terjaga, serta optimasi on-page yang membantu website tampil cepat dan lebih mudah ditemukan di Google.",
    points: ["Lighthouse 95+", "Meta SEO", "Kecepatan Tinggi"],
    accent: "gold",
  },
  {
    icon: TrendingUp,
    title: "Konversi & Penjualan",
    description:
      "Setiap elemen dikemas untuk memandu pengunjung menuju tindakan: kontak, inquiry, hingga transaksi. Hasilnya lebih banyak prospek yang siap dibahas.",
    points: ["Copywriting CTA", "Funnel & Trust", "Lead Generation"],
    accent: "emerald",
  },
];

export interface Project {
  title: string;
  category: string;
  description: string;
  gradient: string;
  year: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    title: "Nusa Realty",
    category: "Properti & Real Estate",
    description:
      "Platform penjualan properti premium dengan galeri visual yang mewah, navigasi cepat, dan CTA yang memudahkan calon pembeli menghubungi tim.",
    gradient: "from-emerald-500/30 via-violet-500/20 to-transparent",
    year: "2025",
    liveUrl: "#",
  },
  {
    title: "Pulse Fitness",
    category: "Gym & Lifestyle",
    description:
      "Landing page fitness berorientasi konversi dengan paket membership, jadwal kelas, dan alur inquiry yang jelas untuk menaikkan penjualan.",
    gradient: "from-violet-500/30 via-gold-500/15 to-transparent",
    year: "2025",
    liveUrl: "#",
  },
  {
    title: "Garuda Finance",
    category: "Fintech & Perusahaan",
    description:
      "Website perusahaan dengan citra profesional, informasi keuangan yang mudah dibaca, dan desain yang memperkuat kredibilitas brand.",
    gradient: "from-gold-500/30 via-emerald-500/15 to-transparent",
    year: "2024",
    liveUrl: "#",
  },
  {
    title: "Aurora Commerce",
    category: "Toko Online Modern",
    description:
      "Storefront modern yang fokus pada pengalaman checkout, visual produk premium, dan performa cepat untuk menjaga tingkat penjualan tetap tinggi.",
    gradient: "from-violet-500/30 via-emerald-500/15 to-transparent",
    year: "2024",
    liveUrl: "#",
  },
];

export interface Step {
  number: string;
  title: string;
  description: string;
}

export const processSteps: Step[] = [
  {
    number: "01",
    title: "Briefing",
    description:
      "Kami memahami visi, target pasar, dan tujuan bisnis Anda agar strategi web selaras dengan kebutuhan yang nyata.",
  },
  {
    number: "02",
    title: "UI/UX Premium",
    description:
      "Membuat struktur informasi, wireframe, dan visual premium yang mudah dipahami dan mendorong keputusan pelanggan.",
  },
  {
    number: "03",
    title: "Pengembangan",
    description:
      "Website dibangun dengan performa tinggi, responsif, dan efisien dari sisi SEO dan pengalaman pengguna.",
  },
  {
    number: "04",
    title: "Peluncuran",
    description:
      "Proses uji kualitas, peluncuran, dan evaluasi lanjutan agar website terus membantu pertumbuhan bisnis Anda.",
  },
];