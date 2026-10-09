import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://grownep-ai-marketing.bradleyjackson1.chatgpt.site";
  return ["", "/about", "/services", "/contact"].map((path, index) => ({ url: `${base}${path}`, changeFrequency: index === 0 ? "weekly" : "monthly", priority: index === 0 ? 1 : 0.8 }));
}
