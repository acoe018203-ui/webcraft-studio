"use client";

import { motion } from "framer-motion";
import { Check, Rocket, ArrowRight } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";
import { plans } from "@/lib/data-social";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { cn, waLink } from "@/lib/utils";

export default function Pricing() {
  return (
    <section
      id="harga"
      className="scroll-mt-24 bg-white/[0.015] py-24 sm:py-28"
      aria-label="Paket Harga"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Paket Harga"
          title={
            <>
              Investasi Cerdas, <span className="text-gradient">Skala Menyesuaikan</span>
            </>
          }
          description="Paket transparan tanpa biaya tersembunyi. Pilih sesuai kebutuhan, atau konsultasikan kebutuhan khusus Anda."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid items-stretch gap-6 lg:grid-cols-3"
        >
          {plans.map((plan) => (
            <motion.article
              key={plan.name}
              variants={staggerItem}
              className={cn(
                "relative flex flex-col rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-1.5",
                plan.highlighted
                  ? "border-2 border-emerald/60 bg-gradient-to-b from-emerald/10 to-violet/5 shadow-neon-emerald lg:scale-[1.04]"
                  : "glass-card glow-hover"
              )}
            >
              {plan.badge && (
                <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-emerald to-violet px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-violet/30">
                  <Rocket className="h-3.5 w-3.5" />
                  {plan.badge}
                </span>
              )}

              <header className="flex flex-col gap-2">
                <h3 className="font-display text-xl font-semibold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="font-display text-3xl font-bold">{plan.price}</span>
                  <span className="pb-1 text-sm text-muted-foreground">{plan.unit}</span>
                </div>
              </header>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={cn(
                        "mt-0.5 h-4 w-4 shrink-0",
                        plan.highlighted ? "text-emerald" : "text-violet"
                      )}
                    />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <MagneticButton className="mt-8 w-full">
                <Button
                  asChild
                  variant={plan.highlighted ? "gradient" : "glass"}
                  className="w-full"
                >
                  <a
                    href={waLink(plan.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pilih {plan.name} <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </MagneticButton>
            </motion.article>
          ))}
        </motion.div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Butuh solusi yang disesuaikan?{" "}
          <a
            href="#kontak"
            className="font-semibold text-emerald transition-colors hover:text-violet"
          >
            Konsultasikan kebutuhan Anda →
          </a>
        </p>
      </div>
    </section>
  );
}