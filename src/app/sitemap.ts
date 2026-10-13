import type { MetadataRoute } from "next";

import { hasCheckoutLinks } from "@/lib/checkout";
import { siteConfig } from "@/lib/site-config";
import { detailSolutions } from "@/lib/solutions-data";

export const dynamic = "force-static";

const BASE = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/crm",
    ...detailSolutions.map((x) => `/solucoes/${x.slug}`),
    "/pricing",
    // Só entra no sitemap quando existir link de pagamento de verdade.
    ...(hasCheckoutLinks ? ["/pagamento"] : []),
    "/changelog",
    "/about",
    "/contact",
  ].map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  return staticPages;
}
