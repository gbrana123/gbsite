import Image from "next/image";
import { BarChart3, Check, Clock3, Lightbulb, Sparkles, Target } from "lucide-react";
import { CtaLink } from "@/components/site/cta-link";
import { FinalCta } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";

const challenges = [
  "Not enough qualified leads",
  "Low website traffic or sales",
  "Inconsistent social media results",
  "Expensive ads that don’t convert",
  "Too many marketing tools and no clear direction",
  "Not enough time to manage everything yourself",
];

const benefits = [
  { icon: Target, text: "Reach your ideal customers" },
  { icon: Sparkles, text: "Create better content faster" },
  { icon: Lightbulb, text: "Improve your website and campaigns" },
  { icon: BarChart3, text: "Turn more visitors into leads" },
  { icon: Check, text: "Make informed marketing decisions" },
  { icon: Clock3, text: "Save time and reduce wasted spending" },
];

const steps = [
  {
    number: "01",
    title: "Book Your Free Consultation",
    text: "We discuss your business, goals, challenges, and current marketing.",
  },
  {
    number: "02",
    title: "Get Your Customized Plan",
    text: "You receive clear, practical recommendations based on your needs.",
  },
  {
    number: "03",
    title: "Start Taking Action",
    text: "Begin implementing your plan immediately—with support available if you need it.",
  },
];

const planOutcomes = [
  "What to focus on first",
  "Which marketing channels fit your business",
  "How to attract and convert more customers",
  "What you can improve right away",
  "The next steps for sustainable growth",
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="relative isolate overflow-hidden bg-[#0b1f2a] text-white">
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/10 lg:hidden">
          <Image
            src="/website-hero.png"
            alt="Portrait of the GrowNep AI marketing expert"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[68%_center]"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b1f2a] to-transparent" aria-hidden="true" />
        </div>

        <div className="absolute inset-0 -z-20 hidden lg:block">
          <Image
            src="/website-hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 -z-10 hidden bg-[linear-gradient(90deg,rgba(7,24,32,.99)_0%,rgba(11,31,42,.96)_34%,rgba(11,31,42,.72)_50%,rgba(11,31,42,.08)_72%,transparent_100%)] lg:block" aria-hidden="true" />

        <div className="site-shell flex items-center py-14 sm:py-16 lg:min-h-[calc(100svh-5rem)] lg:py-20">
          <div className="relative z-10 max-w-3xl lg:max-w-[46rem] xl:max-w-[49rem]">
            <p className="eyebrow reveal mb-6 text-[#79d5c7]">AI-Powered Digital Marketing Service</p>
            <h1 className="font-display reveal reveal-delay-1 text-[clamp(2.65rem,8vw,4rem)] leading-[.96] tracking-[-.05em] lg:text-[clamp(3.5rem,5.4vw,5.6rem)]">
              Grow Your Business With <em className="font-normal text-[#79d5c7]">Smarter</em> Digital Marketing
            </h1>
            <p className="reveal reveal-delay-2 mt-8 max-w-2xl text-xl font-bold leading-8 text-white">
              Stop wasting time and money on marketing that doesn’t deliver.
            </p>
            <p className="reveal reveal-delay-2 mt-4 max-w-2xl text-lg leading-8 text-white/72">
              My AI-Powered Digital Marketing Service helps small and medium businesses attract the right customers, generate more leads, and grow with a clear, practical strategy.
            </p>
            <p className="mt-6 flex max-w-2xl items-start gap-3 text-base font-semibold leading-7 text-white/90">
              <Check className="mt-1 h-5 w-5 shrink-0 text-[#79d5c7]" aria-hidden="true" />
              Book your Free Consultation and get a customized Digital Marketing Plan you can start implementing immediately.
            </p>
            <CtaLink className="mt-8">Get My Free Marketing Plan</CtaLink>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-shell grid gap-14 lg:grid-cols-[.86fr_1.14fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow text-[#0b7c78]">A focused plan for your business</p>
            <h2 className="mt-4 font-display text-5xl leading-[1.04] tracking-tight sm:text-6xl">Is Your Marketing Holding Your Business Back?</h2>
            <p className="mt-6 text-lg font-semibold">You may be dealing with:</p>
            <p className="mt-5 max-w-xl text-lg text-[#53636a]">You don’t need more random tactics. You need a focused plan built around your business.</p>
          </div>
          <ul className="border-t border-primary/20">
            {challenges.map((challenge, index) => (
              <li key={challenge} className="flex gap-5 border-b border-primary/20 py-6">
                <span className="font-display text-2xl text-[#f07c47]">0{index + 1}</span>
                <span className="text-lg font-semibold">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="site-shell section-pad">
          <div className="max-w-4xl">
            <p className="eyebrow text-[#0b7c78]">A better way to market</p>
            <h2 className="mt-4 font-display text-5xl leading-tight tracking-tight sm:text-6xl">Smarter Marketing, Powered by AI</h2>
            <p className="mt-6 max-w-3xl text-lg text-[#53636a]">I combine proven digital marketing strategies with AI-powered insights to help you:</p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-primary/15 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, text }) => (
              <article key={text} className="bg-[#f4f0e7] p-8 transition hover:bg-[#dce9e4]">
                <Icon className="h-8 w-8 text-[#0b7c78]" aria-hidden="true" />
                <h3 className="mt-8 text-xl font-bold leading-tight">{text}</h3>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-lg font-semibold">Every recommendation is customized to your goals, customers, and budget.</p>
        </div>
      </section>

      <section className="section-pad bg-[#0b1f2a] text-white">
        <div className="site-shell">
          <p className="eyebrow text-[#79d5c7]">Simple, practical, actionable</p>
          <h2 className="mt-4 font-display text-5xl tracking-tight sm:text-6xl">Your Clear Path to Growth</h2>
          <ol className="mt-14 grid gap-10 lg:grid-cols-3">
            {steps.map((step) => (
              <li key={step.number} className="relative border-t border-white/20 pt-8">
                <span className="absolute -top-4 left-0 grid h-8 w-8 place-items-center rounded-full bg-[#79d5c7] text-xs font-bold text-primary">{step.number}</span>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="mt-4 text-lg leading-8 text-white/65">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-shell grid gap-14 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <div>
            <p className="eyebrow text-[#0b7c78]">Know what comes next</p>
            <h2 className="mt-4 font-display text-5xl leading-tight tracking-tight sm:text-6xl">No Confusing Advice. Just a Clear Plan.</h2>
            <p className="mt-6 text-lg text-[#53636a]">You’ll leave your consultation knowing:</p>
          </div>
          <div className="rounded-[2rem] bg-white p-7 shadow-[0_24px_70px_rgb(11_31_42/9%)] sm:p-10">
            <ul className="space-y-6">
              {planOutcomes.map((outcome) => (
                <li key={outcome} className="flex gap-4">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#dce9e4]">
                    <Check className="h-4 w-4 text-[#0b7c78]" aria-hidden="true" />
                  </span>
                  <span className="font-semibold">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FinalCta />
      <Footer />
    </main>
  );
}
