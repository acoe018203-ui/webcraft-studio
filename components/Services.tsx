"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { cn } from "@/lib/utils";

const accentMap = {
  emerald: {
    icon: "text-emerald",
    ring: "from-emerald/15 to-transparent",
    badge: "border-emerald/30 bg-emerald/10 text-emerald",
  },
  violet: {
    icon: "text-violet",
    ring: "from-violet/15 to-transparent",
    badge: "border-violet/30 bg-violet/10 text-violet",
  },
  gold: {
    icon: "text-gold",
    ring: "from-gold/15 to-transparent",
    badge: "border-gold/30 bg-gold/10 text-gold",
  },
} as const;

export default function Services() {
  return (
    <section
      id="layanan"
      className="scroll-mt-24 py-24 sm:py-28"
      aria-label="Layanan"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Layanan Kami"
          title={
            <>
              Solusi Digital Utuh untuk{" "}
              <span className="text-gradient">Bisnis Anda</span>
            </>
          }
          description="Dari desain hingga peluncuran, kami mengelola setiap detail untuk menghasilkan website mewah, cepat, dan berorientasi konversi."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map(({ icon: Icon, title, description, points, accent }) => {
            const colors = accentMap[accent];
            return (
              <motion.article
                key={title}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-2xl glass-card p-6 glow-hover transition-transform duration-500 hover:-translate-y-1.5"
              >
                {/* ambient top glow */}
                <div
                  className={cn(
                    "absolute -top-20 -right-16 h-40 w-40 rounded-full bg-gradient-to-br opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100",
                    colors.ring
                  )}
                />

                <div className="relative flex flex-col gap-4">
                  <div
                    className={cn(
                      "grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/[0.04] transition-transform duration-500 group-hover:scale-110",
                      colors.icon
                    )}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="font-display text-xl font-semibold text-balance">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>

                  <ul className="mt-1 flex flex-col gap-2">
                    {points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 text-sm text-foreground/90"
                      >
                        <Check className="h-4 w-4 shrink-0 text-emerald" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}