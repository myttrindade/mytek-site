import Link from "next/link";

import { Button } from "@/components/ui/button";
import { MytekLogo } from "@/components/mytek-logo";
import { MobileNav, type NavLink } from "@/components/mobile-nav";
import { siteConfig } from "@/lib/site-config";

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
  { href: "/#produtos", label: "Produtos" },
  { href: "/#recursos", label: "Recursos" },
  { href: "/#jornada", label: "Como funciona" },
  { href: "/pricing", label: "Preço" },
  { href: "/about", label: "Sobre" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <MytekLogo />
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden text-sm font-medium text-primary transition-colors hover:text-primary/80 md:inline-block"
          >
            Entrar
          </Link>
          <Button size="sm" asChild>
            <Link href="/pricing">Ver preços</Link>
          </Button>
          <MobileNav links={navLinks} />
        </div>
      </div>
    </header>
  );
}
