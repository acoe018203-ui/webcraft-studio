import { clients } from "@/lib/data-social";

/** Infinite scrolling client/partner logos with grayscale→color hover. */
export default function LogoMarquee() {
  const row = (hidden: boolean) => (
    <ul
      className="flex w-max shrink-0 items-center gap-14 pr-14"
      aria-hidden={hidden}
    >
      {clients.map((name) => (
        <li
          key={`${name}-${hidden}`}
          className="flex cursor-default items-center gap-2 text-lg font-semibold text-muted-foreground opacity-60 grayscale transition-all duration-500 hover:text-foreground hover:opacity-100 hover:grayscale-0"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-violet to-emerald" />
          {name}
        </li>
      ))}
    </ul>
  );

  return (
    <section
      id="klien"
      className="border-y border-white/[0.06] bg-white/[0.015] py-10"
      aria-label="Klien dan mitra kami"
    >
      <div className="container">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Dipercaya oleh brand &amp; perusahaan terbaik
        </p>
      </div>
      <div className="marquee-mask overflow-hidden" role="presentation">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  );
}