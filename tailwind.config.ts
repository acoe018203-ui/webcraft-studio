import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: "hsl(var(--surface))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        glass: "hsl(var(--glass))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        emerald: {
          DEFAULT: "#10B981",
        },
        violet: {
          DEFAULT: "#8B5CF6",
        },
        gold: {
          DEFAULT: "#F59E0B",
        },
      },
      fontFamily: {
        display: ["Syne", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: [
          "Plus Jakarta Sans",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "radial-hero":
          "radial-gradient(ellipse 80% 50% at 70% -10%, rgba(139,92,246,0.22), transparent 60%), radial-gradient(ellipse 60% 40% at 20% 110%, rgba(16,185,129,0.18), transparent 60%)",
        "glow-gradient":
          "linear-gradient(90deg, #10B981, #8B5CF6, #F59E0B)",
      },
      boxShadow: {
        "neon-emerald": "0 0 24px rgba(16,185,129,0.45)",
        "neon-violet": "0 0 24px rgba(139,92,246,0.45)",
        "glow-card": "0 8px 40px -8px rgba(139,92,246,0.35)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-50%)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 0 0 rgba(16,185,129,0.6)" },
          "50%": { opacity: "0.7", boxShadow: "0 0 0 6px rgba(16,185,129,0)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "pulse-dot": "pulse-dot 2s ease-out infinite",
        "float-slow": "float-slow 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;