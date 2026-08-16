import { ArrowUpRight, Monitor } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/lib/data";
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
          title={<>Studi Kasus & Proyek Pilihan</>}
          description="Setiap proyek kami dibangun dengan standar tinggi — visual menawan, performa cepat, dan alur konversi yang jelas untuk mendukung pertumbuhan bisnis."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl glass-card transition-transform duration-500 hover:-translate-y-1 hover:border-emerald/30"
            >
              <div className="relative overflow-hidden">
                <div
                  className={cn(
                    "relative flex h-52 items-end justify-center overflow-hidden bg-gradient-to-br p-6 transition-transform duration-700 group-hover:scale-105",
                    project.gradient
                  )}
                >
                  <div className="relative h-full w-full max-w-sm rounded-lg border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
                    <div className="mb-3 h-3 w-2/3 rounded-full bg-white/25" />
                    <div className="mb-4 h-2 w-1/2 rounded-full bg-white/15" />
                    <div className="flex gap-2">
                      <span className="h-24 flex-1 rounded-md bg-gradient-to-br from-emerald/40 to-violet/40" />
                      <span className="h-24 flex-1 rounded-md bg-white/10" />
                    </div>
                  </div>
                </div>

                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-md">
                  <Monitor className="h-3.5 w-3.5 text-emerald" />
                  {project.category}
                </span>
                <span className="absolute right-4 top-4 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-medium text-muted-foreground backdrop-blur-md">
                  {project.year}
                </span>
              </div>

              <div className="flex flex-col gap-4 p-6">
                <div>
                  <h3 className="font-display text-2xl font-bold">{project.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>
                </div>

                <div className="flex items-center">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Lihat proyek ${project.title}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald transition-colors hover:text-violet"
                  >
                    Lihat Proyek <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}