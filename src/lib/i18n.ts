import type { Metadata } from "next";

import { en } from "@/lib/i18n/en";
import { es } from "@/lib/i18n/es";

/**
 * Idiomas do site. O português fica nos endereços de sempre (`/`, `/crm`...);
 * espanhol e inglês ficam em `/es/...` e `/en/...`.
 *
 * Como funciona a tradução: o texto em português é a chave. `t("Falar com o
 * time")` devolve o texto traduzido no idioma da página, ou o próprio texto
 * em português se ainda não houver tradução. Os dicionários estão em
 * `src/lib/i18n/es.ts` e `en.ts`; `pnpm i18n` lista o que falta traduzir.
 */
export const langs = ["pt", "es", "en"] as const;
export type Lang = (typeof langs)[number];
export const defaultLang: Lang = "pt";

export const langInfo: Record<Lang, { nome: string; htmlLang: string; ogLocale: string }> = {
  pt: { nome: "Português", htmlLang: "pt-BR", ogLocale: "pt_BR" },
  es: { nome: "Español", htmlLang: "es", ogLocale: "es_ES" },
  en: { nome: "English", htmlLang: "en", ogLocale: "en_US" },
};

export const isLang = (v: string): v is Lang => (langs as readonly string[]).includes(v);

/** Devolve o tradutor de um idioma. Em português, devolve o texto como está. */
export function makeT(lang: Lang) {
  if (lang === "pt") return (texto: string) => texto;
  const dicionario = lang === "es" ? es : en;
  return (texto: string) => dicionario[texto] ?? texto;
}
export type T = ReturnType<typeof makeT>;

/**
 * Páginas já traduzidas. Os links de uma página em espanhol ou inglês só ganham
 * o prefixo do idioma quando o destino existe nele; os demais continuam
 * apontando para a página em português, em vez de quebrar.
 */
export const translatedPaths = new Set<string>(["/", "/crm", "/about", "/contact"]);

/** Separa "/crm#preco" em caminho e âncora. */
function split(href: string) {
  const i = href.search(/[#?]/);
  return i === -1 ? [href, ""] : [href.slice(0, i), href.slice(i)];
}

/** Endereço de `href` no idioma `lang` (só prefixa se a página existir nele). */
export function localHref(lang: Lang, href: string): string {
  if (lang === defaultLang || !href.startsWith("/")) return href;
  const [path, resto] = split(href);
  const limpo = path.length > 1 ? path.replace(/\/$/, "") : path;
  if (!translatedPaths.has(limpo)) return href;
  return (limpo === "/" ? `/${lang}` : `/${lang}${limpo}`) + resto;
}

/** Idioma e caminho (sem prefixo) a partir do endereço atual. */
export function parsePathname(pathname: string): { lang: Lang; path: string } {
  const m = pathname.match(/^\/(es|en)(\/.*)?$/);
  if (!m) return { lang: "pt", path: pathname || "/" };
  return { lang: m[1] as Lang, path: m[2] && m[2] !== "/" ? m[2].replace(/\/$/, "") : "/" };
}

/**
 * Para onde a bandeira de `alvo` leva quando se está em `pathname`: a mesma
 * página no outro idioma, se ela existir lá; senão, a home do idioma.
 */
export function switchHref(pathname: string, alvo: Lang): string {
  const { path } = parsePathname(pathname);
  if (alvo === "pt") return path;
  return translatedPaths.has(path) ? localHref(alvo, path) : `/${alvo}`;
}

/** `alternates.languages` (hreflang) de uma página que existe nos 3 idiomas. */
export function languageAlternates(path: string) {
  return {
    "pt-BR": path,
    es: localHref("es", path),
    en: localHref("en", path),
    "x-default": path,
  };
}

/** Metadados (título, descrição, endereço canônico e idiomas alternativos) de uma página traduzida. */
export function pageMetadata(
  lang: Lang,
  path: string,
  titulo: string | { absolute: string } | null,
  descricao: string | null
): Metadata {
  const t = makeT(lang);
  return {
    title: typeof titulo === "string" ? t(titulo) : titulo ?? undefined,
    description: descricao ? t(descricao) : undefined,
    alternates: { canonical: localHref(lang, path), languages: languageAlternates(path) },
    openGraph: { locale: langInfo[lang].ogLocale },
  };
}
