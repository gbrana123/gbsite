import { LockKeyhole, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fieldClass = "min-h-12 rounded-xl bg-white px-4 text-base";
const siteUrl = "https://grownep-ai-marketing.bradleyjackson1.chatgpt.site";

export function ContactForm() {
  return (
    <div>
      <div className="mb-6 flex gap-3 rounded-xl border border-[#0b7c78]/25 bg-[#eaf6f2] p-4 text-sm text-[#274b4c]">
        <LockKeyhole className="mt-0.5 h-5 w-5 shrink-0 text-[#0b7c78]" aria-hidden="true" />
        <p>Your consultation request will be delivered directly to <strong>ranagb275@gmail.com</strong>.</p>
      </div>

      <form action="https://formsubmit.co/ranagb275@gmail.com" method="POST" acceptCharset="UTF-8" className="grid gap-5 sm:grid-cols-2">
        <input type="hidden" name="_subject" value="New GrowNep Free Consultation Request" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value={`${siteUrl}/thank-you`} />
        <input type="hidden" name="_url" value={`${siteUrl}/contact#book-consultation`} />
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
          <Button type="submit" className="min-h-12 w-full rounded-full bg-[#f07c47] px-7 text-base font-bold text-primary hover:bg-[#ff9160] sm:w-auto">
            <Send aria-hidden="true" />Book My Free Consultation
          </Button>
          <p className="mt-3 text-sm text-[#53636a]">Required fields must be completed before your request can be sent.</p>
        </div>
      </form>
    </div>
  );
}
