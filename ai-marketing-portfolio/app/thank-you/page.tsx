import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Consultation Request Sent",
  description: "Your GrowNep consultation request has been sent.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main id="main-content">
      <section className="bg-[#0b1f2a] text-white">
        <div className="site-shell grid min-h-[calc(100svh-5rem)] place-items-center py-20">
          <div className="w-full max-w-2xl rounded-[2rem] border border-white/15 bg-white/[.06] p-8 text-center shadow-2xl backdrop-blur-sm sm:p-12">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#79d5c7] text-primary">
              <CheckCircle2 className="h-9 w-9" aria-hidden="true" />
            </span>
            <p className="eyebrow mt-7 text-[#79d5c7]">Request received</p>
            <h1 className="mt-4 font-display text-5xl leading-tight tracking-tight">Thank you for reaching out.</h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/70">Your consultation request has been sent. I’ll review your details and respond by email or mobile as soon as possible.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="/" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#f07c47] px-6 py-3 text-sm font-bold text-primary hover:bg-[#ff9160]">Return to Home</a>
              <a href="/contact#book-consultation" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-bold hover:bg-white/10">Send Another Request</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
