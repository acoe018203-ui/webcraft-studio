import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely (shadcn convention). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Build a WhatsApp deep-link with a pre-filled message. */
export function waLink(message: string): string {
  const base = process.env.NEXT_PUBLIC_WHATSAPP || "6281234567890";
  return `https://wa.me/${base}?text=${encodeURIComponent(message)}`;
}