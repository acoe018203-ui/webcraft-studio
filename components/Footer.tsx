"use client";

import { motion } from "framer-motion";
import {
  ArrowUp,
  Instagram,
  Linkedin,
  Twitter,
  Music2,
  Sparkles,
} from "lucide-react";

import { footerLinkGroups } from "@/lib/data-social";
import { site, CONTACT } from "@/lib/site";

const socials = [
  { icon: Instagram, label: "Instagram", href: CONTACT.instagram },
  { icon: Twitter, label: "X / Twitter", href: CONTACT.x },
  { icon: Linkedin, label: "LinkedIn", href: CONTACT.linkedin },
  { icon: Music2, label: "TikTok", href: CONTACT.tiktok },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-white/[0.06] bg-[#07080c]"
      aria-label="Footer"
    >
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="#beranda" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-tr from-emerald via-violet to-gold">
                <Sparkles className="h-5 w-5 text-white" />
              </span>
              <span className="font-display text-xl font-bold">
                Webcraft<span className="text-gradient"> Studio</span>
              </span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Agensi pengembangan web premium yang menghadirkan website elegan,
              interaktif, dan berperforma tinggi di Indonesia.
            </p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-muted-foreground transition-all duration-300 hover:border-emerald hover:text-emerald hover:-translate-y-0.5"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinkGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-foreground">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-emerald"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Back to top */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-foreground">
              Kembali ke Atas
            </h3>
            <motion.a
              href="#beranda"
              aria-label="Kembali ke atas"
              whileHover={{ y: -4 }}
              className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-emerald transition-colors hover:border-emerald"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. Hak cipta dilindungi.
          </p>
          <nav className="flex items-center gap-4" aria-label="Legal">
            <a href="#" className="transition-colors hover:text-emerald">
              Kebijakan Privasi
            </a>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <a href="#" className="transition-colors hover:text-emerald">
              Syarat &amp; Ketentuan
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}