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

/* ---------------------------------- Services -------------------------------- */
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
      "Desain antarmuka penuh estetika dengan hierarki visual tajam, sistem desain modular, dan mikro-interaksi premium yang membuat pengunjung betah berlama-lama.",
    points: ["Wireframe & Prototype", "Sistem Desain Modular", "Mikro-Interaksi"],
    accent: "emerald",
  },
  {
    icon: Boxes,
    title: "Pengembangan Web & 3D Kustom",
    description:
      "Pengembangan website interaktif dengan visual 3D real-time, animasi sinematik, dan arsitektur kode modern yang mudah dikelola serta siap berkembang.",
    points: ["React / Next.js", "Visual 3D & Animasi", "Kode Bersih & Modular"],
    accent: "violet",
  },
  {
    icon: Gauge,
    title: "Optimasi SEO & Kecepatan",
    description:
      "Optimasi teknis dari hulu ke hilir: kecepatan memuat 95+ Lighthouse, struktur semantik, dan SEO on-page yang membawa website Anda ke halaman satu Google.",
    points: ["Lighthouse 95+", "HTML Semantik & Metadata", "Core Web Vitals"],
    accent: "gold",
  },
  {
    icon: TrendingUp,
    title: "Optimasi Mesin Konversi",
    description:
      "Riset psikologi pengunjung, desain alur konversi, serta CTA yang dirancang untuk mengubah pengunjung menjadi pelanggan yang membayar.",
    points: ["Copywriting Konversi", "A/B Testing", "Analitik & Pelacakan"],
    accent: "emerald",
  },
];

/* ---------------------------------- Portfolio ------------------------------- */
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
      "Platform website properti mewah dengan fitur tur virtual 360°, galeri interaktif, dan sistem integrasi jadwal kunjungan calon pembeli.",
    gradient: "from-emerald-500/30 via-violet-500/20 to-transparent",
    year: "2025",
    liveUrl: "#",
  },
  {
    title: "Pulse Fitness App",
    category: "Aplikasi & Gym",
    description:
      "Landing page modern untuk jaringan pusat kebugaran, dilengkapi fitur pemilihan paket membership, jadwal kelas interaktif, dan integrasi pembayaran.",
    gradient: "from-violet-500/30 via-gold-500/15 to-transparent",
    year: "2025",
    liveUrl: "#",
  },
  {
    title: "Garuda Finance",
    category: "Fintech & Perusahaan",
    description:
      "Website profil perusahaan fintech profesional dengan tampilan dashboard interaktif, standar keamanan tinggi, dan penyampaian informasi yang intuitif.",
    gradient: "from-gold-500/30 via-emerald-500/15 to-transparent",
    year: "2024",
    liveUrl: "#",
  },
  {
    title: "Aurora E-commerce",
    category: "Toko Online Modern",
    description:
      "Platform e-commerce performa tinggi dengan fitur filter produk cerdas, proses checkout yang cepat, dan optimasi kecepatan muat halaman.",
    gradient: "from-violet-500/30 via-emerald-500/15 to-transparent",
    year: "2024",
    liveUrl: "#",
  },
];

/* ----------------------------------- Process -------------------------------- */
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
      "Kami memetakan visi, target pasar, dan tujuan bisnis Anda melalui sesi konsultasi mendalam.",
  },
  {
    number: "02",
    title: "UI/UX Premium",
    description:
      "Wireframe hingga desain final dengan fokus pada pengalaman pengguna dan konversi.",
  },
  {
    number: "03",
    title: "Pengembangan",
    description:
      "Front-end presisi, animasi halus, 3D interaktif, dan optimasi performa menyeluruh.",
  },
  {
    number: "04",
    title: "Peluncuran",
    description:
      "Quality assurance, peluncuran, serta monitoring performa pasca-launch bersama tim Anda.",
  },
];