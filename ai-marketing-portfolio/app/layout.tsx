import type { Metadata } from "next";
import { Header } from "@/components/site/header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://grownep-ai-marketing.bradleyjackson1.chatgpt.site"),
  title: { default: "[NAME] | AI Marketing Expert", template: "%s | [NAME]" },
  description: "AI-powered digital marketing for small and medium businesses that want to attract the right customers, generate more leads, and grow with a clear, practical strategy.",
  alternates: { canonical: "/" },
  openGraph: { title: "[NAME] | AI Marketing Expert", description: "Attract the right customers, generate more leads, and grow with a clear, practical AI-powered digital marketing strategy.", type: "website", url: "/" },
  icons: { icon: "/grownep-logo.png", shortcut: "/grownep-logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = { "@context": "https://schema.org", "@type": "ProfessionalService", name: "[NAME] — AI Marketing Expert", url: "https://grownep-ai-marketing.bradleyjackson1.chatgpt.site", description: "AI-powered digital marketing for small and medium businesses that want more qualified leads and a clear, practical growth strategy.", areaServed: "[LOCATION_OR_SERVICE_AREA]", sameAs: ["[LINKEDIN_URL]"], email: "ranagb275@gmail.com" };
  return <html lang="en"><body className="antialiased"><a href="#main-content" className="fixed left-3 top-3 z-[100] -translate-y-24 rounded-md bg-white px-4 py-2 font-semibold text-primary transition focus:translate-y-0">Skip to content</a><Header />{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
