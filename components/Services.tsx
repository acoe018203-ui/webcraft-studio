import { Check } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";

const accentMap = {
  emerald: {
    icon: "text-emerald",
    ring: "from-emerald/15 to-transparent",
  },
  violet: {
    icon: "text-violet",
    ring: "from-violet/15 to-transparent",
  },
  gold: {
    icon: "text-gold",
    ring: "from-gold/15 to-transparent",
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
              Solusi Digital Utuh untuk <span className="text-gradient">Bisnis Anda</span>
            </>
          }
          description="Dari strategi, desain, pengembangan, sampai optimasi konversi — semua dibangun untuk hadir lebih cepat, lebih elegan, dan lebih menguntungkan."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description, points, accent }) => {
            const colors = accentMap[accent];
            return (
              <article
                key={title}
                className="group relative overflow-hidden rounded-2xl glass-card p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald/30"
              >
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
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}