export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return <section className="relative overflow-hidden bg-[#0b1f2a] text-white"><div className="grid-texture absolute inset-0 opacity-35" aria-hidden="true"/><div className="site-shell relative py-20 sm:py-28"><p className="eyebrow mb-5 text-[#79d5c7]">{eyebrow}</p><h1 className="font-display max-w-5xl text-[clamp(3rem,7vw,6.2rem)] leading-[.98] tracking-[-.045em]">{title}</h1><div className="mt-7 max-w-3xl text-lg leading-8 text-white/70">{children}</div></div></section>;
}
