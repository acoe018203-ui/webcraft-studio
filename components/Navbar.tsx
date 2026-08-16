"use client";

import { useEffect, useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/data-social";
import { cn, waLink } from "@/lib/utils";

function BrandLogo() {
  return (
    <a href="#beranda" className="flex items-center gap-2.5 group" aria-label="Webcraft Studio">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-tr from-emerald via-violet to-gold shadow-lg shadow-violet/20">
        <Sparkles className="h-5 w-5 text-white" />
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-emerald animate-pulse-dot" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-tight text-foreground">
          Webcraft<span className="text-gradient"> Studio</span>
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Agensi Digital Premium
        </span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6",
          scrolled
            ? "border border-white/10 bg-[#0d0e15]/70 backdrop-blur-xl shadow-lg shadow-black/30"
            : "border border-transparent bg-transparent"
        )}
        aria-label="Navigasi utama"
      >
        <BrandLogo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:inset-x-4 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-emerald after:to-violet after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild size="default" className="h-11">
            <a
              href={waLink("Halo Webcraft Studio, saya ingin konsultasi mengenai pembuatan website.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Konsultasi gratis via WhatsApp"
            >
              Konsultasi Gratis
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-[#0d0e15]/90 p-4 backdrop-blur-xl transition-all duration-300 md:hidden",
          open ? "opacity-100 translate-y-0" : "pointer-events-none hidden opacity-0 -translate-y-2"
        )}
      >
        <ul className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Button asChild className="mt-3 w-full">
          <a
            href={waLink("Halo Webcraft Studio, saya ingin konsultasi mengenai pembuatan website.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            aria-label="Konsultasi gratis melalui WhatsApp"
          >
            Konsultasi Gratis
          </a>
        </Button>
      </div>
    </header>
  );
}