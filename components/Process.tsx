import SectionHeading from "@/components/SectionHeading";
import { processSteps } from "@/lib/data";

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
          description="Proses kami dibuat jelas, cepat, dan terukur — dari identifikasi kebutuhan hingga hasil live yang siap mendukung target penjualan Anda."
        />

        <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-emerald/60 via-violet/60 to-gold/60 lg:block" />

          {processSteps.map((step, index) => (
            <li key={step.number} className="group relative flex flex-col gap-4">
              <div className="relative z-10 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-emerald to-violet font-display text-base font-bold text-white shadow-lg shadow-violet/30 transition-transform duration-300 group-hover:scale-110">
                  {step.number}
                </span>
                {index < processSteps.length - 1 && (
                  <span className="h-px flex-1 bg-white/10 lg:hidden" />
                )}
              </div>

              <div className="glass-card rounded-2xl p-5 transition-all duration-300 hover:border-emerald/20">
                <h3 className="font-display text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}