import type { MetadataRoute } from "next";

import { hasCheckoutLinks } from "@/lib/checkout";
import { langs, localHref } from "@/lib/i18n";
import { siteConfig, mostrarValores } from "@/lib/site-config";
import { detailSolutions } from "@/lib/solutions-data";

export const dynamic = "force-static";

const BASE = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/crm",
    ...detailSolutions.map((x) => `/solucoes/${x.slug}`),
    "/solucoes/painel-de-gestao",
    ...(mostrarValores ? ["/pricing"] : []),
    // Só entra no sitemap quando existir link de pagamento de verdade.
    ...(mostrarValores && hasCheckoutLinks ? ["/pagamento"] : []),
    "/changelog",
    "/about",
    "/contact",
  ].map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  // Versões em espanhol e inglês das páginas já traduzidas.
  const traduzidas = ["", "/crm", "/about", "/contact"].flatMap((path) =>
    langs
      .filter((l) => l !== "pt")
      .map((l) => ({
        url: `${BASE}${localHref(l, path || "/")}`,
        changeFrequency: "weekly" as const,
        priority: path === "" ? 0.9 : 0.6,
      }))
  );

  return [...staticPages, ...traduzidas];
}
