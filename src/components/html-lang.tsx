"use client";

import { useEffect } from "react";

import { langInfo, type Lang } from "@/lib/i18n";

/**
 * Ajusta o `lang` do <html> ao idioma da página. O layout raiz é um só e fixa
 * "pt-BR"; sem isto, as páginas em espanhol e inglês seriam lidas como
 * português por leitores de tela e tradutores automáticos.
 */
export function HtmlLang({ lang }: { lang: Lang }) {
  useEffect(() => {
    document.documentElement.lang = langInfo[lang].htmlLang;
  }, [lang]);
  return null;
}
