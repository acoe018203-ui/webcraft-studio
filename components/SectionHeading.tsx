import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
}

/** Consistent animated heading block for every section. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col gap-4 ${alignCls}`}>
      <motion.span
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-label"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse-dot" />
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem] text-balance"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed"
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  );
}