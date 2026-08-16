"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Monitor } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { cn } from "@/lib/utils";

export default function Portfolio() {
  return (
    <section
      id="portofolio"
      className="scroll-mt-24 bg-white/[0.015] py-24 sm:py-28"
      aria-label="Portofolio"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Portofolio"
          title={
            <>
              Studi Kasus & Proyek Pilihan
            </>
          }
          description="Setiap proyek kami kembangan dengan standar tinggi — interaktif, cepat, dan dirancang untuk menghasilkan hasil nyata."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={staggerItem}
              className="group overflow-hidden rounded-2xl glass-card glow-hover transition-transform duration-500 hover:-translate-y-1"
            >
              {/* Preview visual with zoom-on-hover */}
              <div className="relative overflow-hidden">
                <div
                  className={cn(
                    "relative flex h-52 items-end justify-center overflow-hidden bg-gradient-to-br p-6 transition-transform duration-700 group-hover:scale-105",
                    project.gradient
                  )}
                >
                  {/* decorative shapes representing a mock layout */}
                  <div className="relative h-full w-full max-w-sm rounded-lg border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
                    <div className="mb-3 h-3 w-2/3 rounded-full bg-white/25" />
                    <div className="mb-4 h-2 w-1/2 rounded-full bg-white/15" />
                    <div className="flex gap-2">
                      <span className="h-24 flex-1 rounded-md bg-gradient-to-br from-emerald/40 to-violet/40" />
                      <span className="h-24 flex-1 rounded-md bg-white/10" />
                    </div>
                  </div>
                </div>

                {/* Category badge */}
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-md">
                  <Monitor className="h-3.5 w-3.5 text-emerald" />
                  {project.category}
                </span>
                <span className="absolute right-4 top-4 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-medium text-muted-foreground backdrop-blur-md">
                  {project.year}
                </span>
              </div>

              <div className="flex flex-col gap-4 p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-2xl font-bold">{project.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald transition-colors hover:text-violet"
                  >
                    Lihat Proyek <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <span className="h-1 w-1 rounded-full bg-white/20" />
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Preview Live
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}