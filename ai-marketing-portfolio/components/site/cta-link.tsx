import { cn } from "@/lib/utils";

export const BOOKING_URL = "/contact#book-consultation";

export function CtaLink({ children = "Get My Free Marketing Plan", className = "", variant = "primary" }: { children?: React.ReactNode; className?: string; variant?: "primary" | "light" }) {
  return <a href={BOOKING_URL} className={cn("inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center text-sm font-bold transition duration-200 hover:-translate-y-0.5", variant === "primary" ? "bg-[#f07c47] text-[#0b1f2a] shadow-[0_10px_24px_rgb(240_124_71/25%)] hover:bg-[#ff9160]" : "border border-white/25 bg-white text-primary hover:bg-[#e9fffa]", className)}>{children}</a>;
}
