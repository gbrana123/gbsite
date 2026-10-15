"use client";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CtaLink } from "./cta-link";

const links = [{ href: "/", label: "Home" }, { href: "/about", label: "About Me" }, { href: "/services", label: "Services" }, { href: "/contact", label: "Contact" }];
export function Header() {
  const [open, setOpen] = useState(false); const path = usePathname();
  return <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1f2a]/95 text-white backdrop-blur-xl"><div className="site-shell flex min-h-20 items-center justify-between gap-6"><a href="/" className="shrink-0" aria-label="GrowNep home"><Image src="/grownep-logo.png" alt="GrowNep" width={2753} height={663} priority className="h-auto w-[9.75rem] rounded-lg sm:w-[11.25rem]" /></a><nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">{links.map(link => <a key={link.href} href={link.href} aria-current={path === link.href ? "page" : undefined} className={`text-sm font-semibold transition hover:text-[#79d5c7] ${path === link.href ? "text-[#79d5c7]" : "text-white/75"}`}>{link.label}</a>)}<CtaLink className="min-h-11 px-5" /></nav><button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(v => !v)} className="grid h-11 w-11 place-items-center rounded-full border border-white/20 lg:hidden">{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button></div>{open && <nav id="mobile-menu" className="border-t border-white/10 bg-[#0b1f2a] px-4 py-5 lg:hidden" aria-label="Mobile navigation"><div className="mx-auto flex max-w-3xl flex-col gap-2">{links.map(link => <a key={link.href} href={link.href} className="rounded-lg px-4 py-3 text-base font-semibold text-white/80 hover:bg-white/10">{link.label}</a>)}<CtaLink className="mt-3 w-full" /></div></nav>}</header>;
}
