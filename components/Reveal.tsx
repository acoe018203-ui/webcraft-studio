"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/** Fade + slide-up reveal when scrolled into view. */
export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}