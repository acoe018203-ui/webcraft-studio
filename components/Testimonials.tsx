"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/lib/data-social";
import { staggerContainer, staggerItem } from "@/lib/motion";

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="Rating 5 dari 5 bintang">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-gold text-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimoni"
      className="scroll-mt-24 py-24 sm:py-28"
      aria-label="Testimoni"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Testimoni Klien"
          title={
            <>
              Dipercaya Mereka yang <span className="text-gradient">Sudah Rasakan Hasil</span>
            </>
          }
          description="Kepuasan dan hasil nyata adalah ukuran keberhasilan kami."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={staggerItem}
              className="relative flex flex-col gap-5 rounded-2xl glass-card p-7 glow-hover"
            >
              <Quote className="absolute right-6 top-6 h-9 w-9 text-white/[0.06]" />

              <Stars />
              <blockquote className="text-base leading-relaxed text-foreground/90">
                “{t.quote}”
              </blockquote>

              <figcaption className="flex items-center gap-3 border-t border-white/[0.07] pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-emerald to-violet font-display text-sm font-bold text-white">
                  {t.avatar}
                </span>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.company}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}