"use client";

import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT } from "@/lib/site";
import { waLink } from "@/lib/utils";

export default function ContactCTA() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    brief: "",
  });

  function update(field: keyof typeof form) {
    return (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message = [
      "Halo Webcraft Studio, saya ingin konsultasi mengenai pembuatan website.",
      `Nama: ${form.name}`,
      form.email ? `Email: ${form.email}` : null,
      form.brief ? `Ringkasan Proyek: ${form.brief}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(
      waLink(message),
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <section
      id="kontak"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-28"
      aria-label="Kontak"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-violet/15 blur-[130px]" />

      <div className="container relative grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <SectionHeading
            align="left"
            eyebrow="Kontak"
            title={
              <>
                Siap Membangun Website{" "}
                <span className="text-gradient">Impian Anda?</span>
              </>
            }
            description="Isi formulir di samping atau hubungi kami langsung melalui WhatsApp. Diskusi pertama tanpa biaya, tanpa komitmen."
          />

          <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> Balasan dalam 1×24 jam
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-violet" /> Konsultasi &amp; proposal gratis
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Tim senior berpengalaman
            </li>
          </ul>

          <Button
            asChild
            variant="gradient"
            size="lg"
            className="h-14 w-fit px-8"
          >
            <a
              href={waLink(
                "Halo Webcraft Studio, saya ingin konsultasi mengenai pembuatan website."
              )}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat WhatsApp sekarang"
            >
              <MessageCircle className="h-5 w-5" />
              Chat WhatsApp Sekarang
            </a>
          </Button>
        </div>

        {/* Glassmorphic form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-3xl glass-card p-7 transition-all duration-300 sm:p-9"
        >
          <div>
            <h3 className="font-display text-2xl font-bold">Mulai Konsultasi Gratis</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Ceritakan proyek Anda — kami akan segera merespons.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="nama">Nama Lengkap</Label>
            <Input
              id="nama"
              placeholder="cth: Rizky Pratama"
              required
              value={form.name}
              onChange={update("name")}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email Bisnis</Label>
            <Input
              id="email"
              type="email"
              placeholder="cth: halo@perusahaan.com"
              value={form.email}
              onChange={update("email")}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="brief">Ringkasan Proyek</Label>
            <Textarea
              id="brief"
              placeholder="Deskripsikan singkat kebutuhan website Anda..."
              value={form.brief}
              onChange={update("brief")}
            />
          </div>

          <Button type="submit" size="lg" className="h-13 py-3.5">
            <Send className="h-4 w-4" /> Kirim via WhatsApp
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            Atau email ke{" "}
            <a
              href={`mailto:${CONTACT.email}`}
              className="font-semibold text-emerald hover:text-violet"
            >
              {CONTACT.email}
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}