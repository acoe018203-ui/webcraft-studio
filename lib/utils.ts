import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely (shadcn convention). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Build a WhatsApp deep-link with a pre-filled message. */
export function waLink(message: string): string {
  const base = process.env.NEXT_PUBLIC_WHATSAPP || "6285218378934";
  const text = encodeURI(message).replace(/%2C/gi, ",");
  return `https://wa.me/${base}?text=${text}`;
}