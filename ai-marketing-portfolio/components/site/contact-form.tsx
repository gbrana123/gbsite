"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fieldClass = "min-h-12 rounded-xl bg-white px-4 text-base";
const formEndpoint = "https://formsubmit.co/ajax/info@grownep.com";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setError("");

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
        signal: controller.signal,
      });
      const result = (await response.json().catch(() => null)) as { success?: boolean; message?: string } | null;

      if (!response.ok || result?.success === false) {
        throw new Error(result?.message || "FormSubmit could not process the request.");
      }

      form.reset();
      window.location.assign("/thank-you");
    } catch (submissionError) {
      const timedOut = submissionError instanceof DOMException && submissionError.name === "AbortError";
      setError(
        timedOut
          ? "The email service is taking too long. Please try again, or contact us on WhatsApp at 9864683116."
          : "We couldn’t send your request right now. Please try again, or contact us on WhatsApp at 9864683116.",
      );
    } finally {
      window.clearTimeout(timeout);
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} acceptCharset="UTF-8" className="grid gap-5 sm:grid-cols-2">
        <input type="hidden" name="_subject" value="New GrowNep Free Consultation Request" />
        <input type="hidden" name="_template" value="table" />
        <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

        <div>
          <label htmlFor="name" className="mb-2 block font-semibold">Name</label>
          <Input id="name" name="Name" autoComplete="name" required className={fieldClass} />
        </div>

        <div>
          <label htmlFor="mobile" className="mb-2 block font-semibold">Mobile</label>
          <Input id="mobile" name="Mobile" type="tel" inputMode="tel" autoComplete="tel" required className={fieldClass} />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block font-semibold">Email</label>
          <Input id="email" name="email" type="email" autoComplete="email" required className={fieldClass} />
        </div>

        <div>
          <label htmlFor="business" className="mb-2 block font-semibold">Business</label>
          <Input id="business" name="Business" autoComplete="organization" required className={fieldClass} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="help" className="mb-2 block font-semibold">
            How can we help you? <span className="font-normal text-[#53636a]">(Optional)</span>
          </label>
          <Textarea id="help" name="Message" rows={5} placeholder="Tell us briefly about your goals or marketing challenges." className={`${fieldClass} min-h-36`} />
        </div>

        <div className="sm:col-span-2">
          <Button type="submit" disabled={isSubmitting} className="min-h-12 w-full rounded-full bg-[#f07c47] px-7 text-base font-bold text-primary hover:bg-[#ff9160] disabled:cursor-wait disabled:opacity-70 sm:w-auto">
            <Send aria-hidden="true" />{isSubmitting ? "Sending…" : "Book My Free Consultation"}
          </Button>
          <p className="mt-3 text-sm text-[#53636a]" aria-live="polite">
            {error || "Required fields must be completed before your request can be sent."}
          </p>
        </div>
      </form>
    </div>
  );
}
