import type { Variants } from "framer-motion";

/** Shared Framer Motion variants for a consistent scroll reveal system. */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9 } },
};

/** Parent for stagger children (slide-up + fade). */
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const viewportOnce = { once: true, margin: "-80px" } as const;

/** Standard scroll-reveal props for motion sections. */
export const revealProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: viewportOnce,
} as const;