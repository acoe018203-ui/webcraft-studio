import { ArrowRight, Check, Rocket } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { plans } from "@/lib/data-social";
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
          description="Paket kami dibuat transparan dan mudah dibaca, dengan harga yang jelas untuk kebutuhan bisnis yang beragam."
        />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5",
                plan.highlighted
                  ? "border-2 border-emerald/60 bg-gradient-to-b from-emerald/10 to-violet/5 shadow-neon-emerald lg:scale-[1.04]"
                  : "glass-card"
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

              <a
                href={waLink(plan.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Pilih paket ${plan.name}`}
                className={cn(
                  "mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300",
                  plan.highlighted
                    ? "bg-gradient-to-r from-emerald via-violet to-gold text-white shadow-glow-card hover:brightness-110"
                    : "border border-white/10 bg-white/[0.03] text-foreground hover:border-emerald/60 hover:bg-white/[0.06]"
                )}
              >
                Pilih {plan.name} <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Butuh solusi yang disesuaikan?{" "}
          <a
            href="#kontak"
            aria-label="Konsultasikan kebutuhan Anda"
            className="font-semibold text-emerald transition-colors hover:text-violet"
          >
            Konsultasikan kebutuhan Anda →
          </a>
        </p>
      </div>
    </section>
  );
}