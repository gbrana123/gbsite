import type { Metadata } from "next";
import Script from "next/script";
import { Header } from "@/components/site/header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://grownep-ai-marketing.bradleyjackson1.chatgpt.site"),
  title: { default: "GrowNep | AI Marketing Expert", template: "%s | GrowNep" },
  description: "AI-powered digital marketing for small and medium businesses that want to attract the right customers, generate more leads, and grow with a clear, practical strategy.",
  alternates: { canonical: "/" },
  openGraph: { title: "GrowNep | AI Marketing Expert", description: "Attract the right customers, generate more leads, and grow with a clear, practical AI-powered digital marketing strategy.", type: "website", url: "/" },
  icons: { icon: "/grownep-logo.png", shortcut: "/grownep-logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = { "@context": "https://schema.org", "@type": "ProfessionalService", name: "GrowNep — AI Marketing Expert", url: "https://grownep-ai-marketing.bradleyjackson1.chatgpt.site", description: "AI-powered digital marketing for small and medium businesses that want more qualified leads and a clear, practical growth strategy.", areaServed: "Across Nepal", telephone: "+9779806543361", email: "info@grownep.com" };
  return <html lang="en"><body className="antialiased"><noscript><img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=1165406799292454&ev=PageView&noscript=1" alt="" /></noscript><a href="#main-content" className="fixed left-3 top-3 z-[100] -translate-y-24 rounded-md bg-white px-4 py-2 font-semibold text-primary transition focus:translate-y-0">Skip to content</a><Header />{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><Script id="meta-pixel" strategy="afterInteractive">{`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1165406799292454');fbq('track','PageView');`}</Script></body></html>;
}
