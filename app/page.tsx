import { MessageCircle } from "lucide-react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import { waLink } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <Services />
        <Portfolio />
        <Process />
        <Pricing />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />

      <a
        href={waLink("Halo Webcraft Studio, saya ingin konsultasi mengenai pembuatan website.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-emerald via-violet to-gold text-white shadow-[0_12px_35px_rgba(39,198,120,0.45)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_45px_rgba(139,92,246,0.55)]"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  );
}