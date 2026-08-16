import dynamic from "next/dynamic";
import { ArrowRight, Gauge, PlayCircle, Star, TrendingUp } from "lucide-react";

import { waLink, WA_BASE_MESSAGE } from "@/lib/utils";

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
  { icon: TrendingUp, label: "Pengiriman Tepat Waktu", value: "100%" },
  { icon: Star, label: "Dukungan 24/7", value: "Tersedia" },
  { icon: Gauge, label: "Skor Lighthouse", value: "98" },
];

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-radial-hero pb-16 pt-28"
    >
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-emerald/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-violet/20 blur-[130px]" />

      <div className="container relative grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse-dot" />
              Web Development Premium di Indonesia
            </span>
          </div>

          <h1 className="max-w-xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Website Mewah, Performa Tinggi, <span className="text-gradient">Hasil Nyata</span> untuk Bisnis Anda.
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Kami merancang landing page dan website perusahaan modern yang cepat, elegan, dan siap mengubah pengunjung menjadi pelanggan setia.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={waLink(WA_BASE_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Konsultasi gratis via WhatsApp"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald via-violet to-gold px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(39,198,120,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
            >
              Konsultasi Gratis <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#portofolio"
              aria-label="Lihat hasil karya Webcraft Studio"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-emerald/60 hover:bg-white/[0.06]"
            >
              <PlayCircle className="h-4 w-4" /> Lihat Hasil Karya
            </a>
          </div>

          <dl className="mt-4 grid w-full grid-cols-3 gap-3 sm:max-w-md">
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
          </dl>
        </div>

        <div className="relative aspect-square w-full max-w-[560px] justify-self-center lg:justify-self-end" aria-hidden="true">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald/10 via-violet/10 to-gold/10 blur-2xl" />
          <Hero3D />
        </div>
      </div>

      <a
        href="#klien"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-muted-foreground md:flex"
        aria-label="Gulir ke bagian klien"
      >
        <span className="text-[11px] uppercase tracking-[0.25em]">Scroll</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-white/20 pt-1">
          <span className="h-1.5 w-1 rounded-full bg-emerald animate-[bounce_1.8s_infinite]" />
        </span>
      </a>
    </section>
  );
}