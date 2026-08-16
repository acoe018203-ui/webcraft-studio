import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        // Primary Emerald CTA
        primary:
          "bg-emerald text-primary-foreground shadow-neon-emerald hover:shadow-[0_0_40px_rgba(16,185,129,0.65)] hover:brightness-110",
        // Glassmorphic secondary
        glass:
          "glass text-foreground hover:bg-white/[0.08] hover:border-white/20",
        // Gradient premium
        gradient:
          "bg-gradient-to-r from-emerald via-violet to-gold text-white shadow-glow-card hover:brightness-110",
        ghost: "text-muted-foreground hover:text-foreground hover:bg-white/5",
        outline:
          "border border-white/15 text-foreground hover:border-emerald hover:text-emerald",
      },
      size: {
        default: "h-11 px-6",
        lg: "h-13 px-8 text-base py-3",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };