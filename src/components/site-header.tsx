import Link from "next/link";
import { mostrarValores } from "@/lib/site-config";
import { localHref, makeT, type Lang } from "@/lib/i18n";

import { Button } from "@/components/ui/button";
import { MytekLogo } from "@/components/mytek-logo";
import { LanguageSwitcher } from "@/components/language-switcher";
import { MobileNav, type NavLink } from "@/components/mobile-nav";

/**
 * Fonte única dos links de navegação: o menu do desktop e o do celular leem
 * daqui. Enquanto eram duas listas, só uma existia — a do desktop — e o
 * celular ficava sem navegação nenhuma.
 *
 * "Como funciona" aponta para #jornada: a seção com esse nome foi removida
 * em 27/08/2026 por repetir a jornada com outras palavras.
 */
const navLinks: readonly NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/#solucoes", label: "Soluções" },
  ...(mostrarValores ? [{ href: "/pricing", label: "Preço" }] : []),
  { href: "/about", label: "Sobre" },
];

export function SiteHeader({ lang = "pt" }: { lang?: Lang }) {
  const t = makeT(lang);
  const links: NavLink[] = navLinks.map((l) => ({
    href: localHref(lang, l.href),
    label: t(l.label),
  }));
  return (
    <header className="dark fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 text-foreground backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:px-8">
        <Link href={localHref(lang, "/")} className="flex items-center gap-2 font-semibold">
          <MytekLogo />
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <Button size="sm" asChild>
            <Link href={localHref(lang, "/contact")}>{t("Falar com o time")}</Link>
          </Button>
          <MobileNav links={links} lang={lang} />
        </div>
      </div>
    </header>
  );
}
