"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Star, TrendingUp, Gauge } from "lucide-react";

import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { waLink } from "@/lib/utils";

const Hero3D = dynamic(() => import("@/components/Hero3D"), {
  ssr: false,
  loading: () => (
    <div
      aria-hidden="true"
      className="h-full min-h-[320px] w-full rounded-3xl"
      style={{
        background:
          "radial-gradient(circle at 50% 45%, rgba(139,92,246,0.18), rgba(16,185,129,0.08), transparent 70%)",
      }}
    />
  ),
});

const stats = [
  { icon: TrendingUp, label: "Proyek Selesai", value: "124+" },
  { icon: Star, label: "Rating Klien", value: "5.0" },
  { icon: Gauge, label: "Skor Lighthouse", value: "98" },
];

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-radial-hero pb-16 pt-28"
    >
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-emerald/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-violet/20 blur-[130px]" />

      <div className="container relative grid items-center gap-12 lg:grid-cols-2">
        {/* Copy */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-4 py-1.5 text-xs font-semibold text-emerald">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse-dot" />
              Web Development Premium di Indonesia
            </span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Membangun Website{" "}
            <span className="text-gradient">Elegansi Tinggi</span> &{" "}
            <span className="text-gradient">Performa Menakjubkan</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Kami menghadirkan desain interaktif 3D sinematik, antarmuka UI/UX
            tingkat tinggi, kecepatan maksimal 95+ Lighthouse, dan SEO top-tier —
            dirancang untuk mengubah pengunjung menjadi pelanggan.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticButton>
              <Button asChild size="lg" className="h-14 px-8">
                <a
                  href={waLink(
                    "Halo Webcraft Studio! Saya ingin memulai proyek website bersama Anda."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mulai Proyek Anda <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button asChild size="lg" variant="glass" className="h-14 px-8">
                <a href="#portofolio">
                  <PlayCircle className="h-5 w-5" /> Lihat Hasil Karya
                </a>
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Trust stats */}
          <motion.dl
            variants={staggerItem}
            className="mt-4 grid w-full grid-cols-3 gap-3 sm:max-w-md"
          >
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="glass-card flex flex-col gap-1 rounded-2xl px-4 py-3"
              >
                <dt className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                  <Icon className="h-3.5 w-3.5 text-emerald" />
                  {label}
                </dt>
                <dd className="font-display text-2xl font-bold">{value}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* 3D interactive canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative aspect-square w-full max-w-[560px] justify-self-center lg:justify-self-end"
          aria-hidden="true"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald/10 via-violet/10 to-gold/10 blur-2xl" />
          <Hero3D />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#klien"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-muted-foreground md:flex"
        aria-label="Gulir ke bawah"
      >
        <span className="text-[11px] uppercase tracking-[0.25em]">Scroll</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-white/20 pt-1">
          <motion.span
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-1 rounded-full bg-emerald"
          />
        </span>
      </motion.a>
    </section>
  );
}