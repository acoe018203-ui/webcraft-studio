interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignCls =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignCls}`}>
      <span className="section-label">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse-dot" />
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem] text-balance">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}