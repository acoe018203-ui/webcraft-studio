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
    title: "UI/UX Pro Max Design",
    description:
      "Desain antarmuka penuh estetika dengan hierarki visual tajam, sistem desain modular, dan mikro-interaksi premium yang membuat pengunjung betah berlama-lama.",
    points: ["Wireframe & Prototype", "Design System Modular", "Micro-interaction"],
    accent: "emerald",
  },
  {
    icon: Boxes,
    title: "Custom 3D & Web Development",
    description:
      "Pengembangan website interaktif dengan visual 3D real-time, animasi sinematik, dan arsitektur kode modern yang mudah dikelola serta siap scaling.",
    points: ["React / Next.js", "Visual 3D & Motion", "Kode Bersih & Modular"],
    accent: "violet",
  },
  {
    icon: Gauge,
    title: "SEO On-Page & Speed Optimization",
    description:
      "Optimasi teknis dari hulu ke hilir: kecepatan memuat 95+ Lighthouse, struktur semantik, dan SEO on-page yang membawa website Anda ke halaman satu Google.",
    points: ["Lighthouse 95+", "Semantic HTML & Metadata", "Core Web Vitals"],
    accent: "gold",
  },
  {
    icon: TrendingUp,
    title: "Conversion Engine Optimization",
    description:
      "Riset psikologi pengunjung, desain alur konversi, serta CTA yang dirancang untuk mengubah pengunjung menjadi pelanggan yang membayar.",
    points: ["Copywriting Konversi", "A/B Testing", "Analitik & Tracking"],
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
    category: "Full 3D & Motion",
    description:
      "Platform properti mewah dengan tur 3D interaktif dan animasi parallax sinematik.",
    gradient: "from-emerald-500/30 via-violet-500/20 to-transparent",
    year: "2025",
    liveUrl: "#",
  },
  {
    title: "Pulse Fitness App",
    category: "High Conversion Landing Page",
    description:
      "Landing page aplikasi kebugaran dengan fokus konversi sampai +84% pendaftaran.",
    gradient: "from-violet-500/30 via-gold-500/15 to-transparent",
    year: "2025",
    liveUrl: "#",
  },
  {
    title: "Garuda Finance",
    category: "Corporate & SaaS",
    description:
      "Dashboard fintech dengan visualisasi data real-time dan desain enterprise modern.",
    gradient: "from-gold-500/30 via-emerald-500/15 to-transparent",
    year: "2024",
    liveUrl: "#",
  },
  {
    title: "Aurora E-commerce",
    category: "E-commerce Experience",
    description:
      "Toko online berperforma tinggi dengan animasi produk 3D dan checkout tanpa hambatan.",
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
    title: "UI/UX Pro",
    description:
      "Wireframe hingga desain final dengan fokus pada pengalaman pengguna dan konversi.",
  },
  {
    number: "03",
    title: "Development",
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