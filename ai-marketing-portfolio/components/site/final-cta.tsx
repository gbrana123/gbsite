import { CtaLink } from "./cta-link";

export function FinalCta({ title = "Ready to Make Your Marketing Work Harder?" }: { title?: string }) {
  return <section className="bg-[#0b7c78] text-white"><div className="site-shell grid items-center gap-8 py-16 md:grid-cols-[1fr_auto]"><div><p className="eyebrow mb-3 text-[#c7fff4]">Your next step</p><h2 className="font-display max-w-3xl text-4xl leading-tight tracking-tight sm:text-5xl">{title}</h2><p className="mt-5 max-w-3xl text-lg text-white/80">Book your Free Consultation today and get a customized Digital Marketing Plan you can start using immediately.</p></div><CtaLink variant="light" className="w-full md:w-auto">Book My Free Consultation</CtaLink></div></section>;
}
