"use client";

import { motion } from "framer-motion";

import SectionHeading from "@/components/SectionHeading";
import { processSteps } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/motion";

export default function Process() {
  return (
    <section
      id="proses"
      className="scroll-mt-24 py-24 sm:py-28"
      aria-label="Skema Proses"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Skema Proses"
          title={
            <>
              Empat Langkah Menuju <span className="text-gradient">Hasil Maksimal</span>
            </>
          }
          description="Jalur yang jernih dan transparan dari ide pertama hingga peluncuran website yang menakjubkan."
        />

        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-emerald/60 via-violet/60 to-gold/60 lg:block" />

          {processSteps.map((step, index) => (
            <motion.li
              key={step.number}
              variants={staggerItem}
              className="group relative flex flex-col gap-4"
            >
              {/* Numbered marker */}
              <div className="relative z-10 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-emerald to-violet font-display text-base font-bold text-white shadow-lg shadow-violet/30 transition-transform duration-300 group-hover:scale-110">
                  {step.number}
                </span>
                {index < processSteps.length - 1 && (
                  <span className="h-px flex-1 bg-white/10 lg:hidden" />
                )}
              </div>

              <div className="glass-card rounded-2xl p-5 glow-hover">
                <h3 className="font-display text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}