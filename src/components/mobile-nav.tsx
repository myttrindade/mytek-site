"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";

/**
 * Navegação do celular.
 *
 * Até 27/08/2026 não existia: a `<nav>` do header é `hidden md:flex`, então
 * abaixo de 768px o site inteiro ficava sem Home, sem Produtos, sem nada —
 * só o logo e "Ver preços". Quem abria no telefone não tinha como navegar.
 *
 * Os links são os mesmos do desktop, definidos uma vez em `navLinks` e
 * consumidos pelos dois, para não dessincronizarem.
 */
export type NavLink = { href: string; label: string };

export function MobileNav({ links }: { links: readonly NavLink[] }) {
  const [aberto, setAberto] = useState(false);

  // Trava o scroll do corpo enquanto o painel está aberto, e devolve depois.
  useEffect(() => {
    if (!aberto) return;
    const anterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setAberto(false);
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = anterior;
      window.removeEventListener("keydown", onEsc);
    };
  }, [aberto]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setAberto((v) => !v)}
        aria-expanded={aberto}
        aria-controls="menu-mobile"
        aria-label={aberto ? "Fechar menu" : "Abrir menu"}
        className="flex size-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
      >
        {aberto ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
      </button>

      {/*
        O painel é sempre renderizado e escondido por `hidden`, não montado
        condicionalmente: o conteúdo do menu existe no HTML exportado, e o
        atributo `aria-expanded` do botão diz o estado.
      */}
      <div
        id="menu-mobile"
        hidden={!aberto}
        className="fixed inset-x-0 top-16 z-40 border-b border-border/40 bg-background/95 px-4 pb-6 backdrop-blur-xl"
      >
        <nav className="flex flex-col">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setAberto(false)}
              className="border-b border-border/40 py-3.5 text-base transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setAberto(false)}
            className="py-3.5 text-base font-medium text-primary"
          >
            Entrar
          </Link>
        </nav>
      </div>
    </div>
  );
}
