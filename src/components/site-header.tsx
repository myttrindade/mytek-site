import Link from "next/link";

import { Button } from "@/components/ui/button";
import { MytekLogo } from "@/components/mytek-logo";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <MytekLogo />
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <Link href="/#produtos" className="transition-colors hover:text-foreground">
            Produtos
          </Link>
          <Link href="/#recursos" className="transition-colors hover:text-foreground">
            Recursos
          </Link>
          <Link href="/#como-funciona" className="transition-colors hover:text-foreground">
            Como funciona
          </Link>
          <Link href="/pricing" className="transition-colors hover:text-foreground">
            Preço
          </Link>
          <Link href="/about" className="transition-colors hover:text-foreground">
            Sobre
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
          >
            Entrar
          </Link>
          <Button size="sm" asChild>
            <Link href="/pricing">Ver preços</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
