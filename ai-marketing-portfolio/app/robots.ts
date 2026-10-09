import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://grownep-ai-marketing.bradleyjackson1.chatgpt.site/sitemap.xml" };
}
