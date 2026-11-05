import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fieldClass = "min-h-12 rounded-xl bg-white px-4 text-base";
const siteUrl = "https://grownep.com";

export function ContactForm() {
  return (
    <div>
      <form action="https://api.web3forms.com/submit" method="POST" acceptCharset="UTF-8" className="grid gap-5 sm:grid-cols-2">
        <input type="hidden" name="access_key" value="3a5b7c39-d251-4793-8368-40e563b46af9" />
        <input type="hidden" name="subject" value="New GrowNep Free Consultation Request" />
        <input type="hidden" name="from_name" value="GrowNep Website" />
        <input type="hidden" name="redirect" value={`${siteUrl}/thank-you`} />
        <input type="checkbox" name="botcheck" tabIndex={-1} className="hidden" aria-hidden="true" />

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
