import Link from "next/link";

import { MytekLogo } from "@/components/mytek-logo";
import { hasCheckoutLinks } from "@/lib/checkout";
import { company, hasLegalIdentity, isFilled } from "@/lib/company";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const groups = [
  {
    title: "Produto",
    links: [
      { text: "CRM", href: "/#crm" },
      { text: "Landing Page", href: "/#landing-page" },
      { text: "Dashboard", href: "/#dashboard" },
      { text: "Preço", href: "/pricing" },
      // Aparece só quando o checkout estiver de fato cobrando.
      ...(hasCheckoutLinks
        ? [{ text: "Pagamento", href: "/pagamento" }]
        : []),
    ],
  },
  {
    title: "Empresa",
    links: [
      { text: "Sobre", href: "/about" },
      { text: "Contato", href: "/contact" },
    ],
  },
  {
    title: "Conta",
    links: [
      { text: "Entrar", href: "/login" },
      // Aponta para /contact enquanto a entrada for sempre pelo time
      // comercial. Ver o TODO(produto) no hero de src/app/page.tsx: a tela de
      // cadastro deste site é do template e finge sucesso sem criar conta.
      { text: "Criar conta", href: "/contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <MytekLogo />
            {siteConfig.name}
          </Link>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            CRM com WhatsApp, landing page e dashboard. Nenhum lead esquecido
            no caminho.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            Implantação em minutos, sem precisar de equipe técnica
          </p>
        </div>
        {groups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h3 className="text-sm font-semibold">{group.title}</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {group.links.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      {/*
        Identidade jurídica. Só aparece depois que os TODO de src/lib/company.ts
        forem preenchidos — em B2B, um CNPJ falso pesa mais contra do que a
        ausência dele.
      */}
      {hasLegalIdentity && (
        <address className="mx-auto mt-12 max-w-6xl border-t border-border/40 px-4 pt-6 text-xs leading-relaxed text-muted-foreground not-italic lg:px-8">
          <span className="block">
            mytek
            {isFilled(company.legalName) && <> — {company.legalName}</>}
            {isFilled(company.cnpj) && <> · CNPJ {company.cnpj}</>}
          </span>
          {isFilled(company.addressStreet) && (
            <span className="block">
              {company.addressStreet} · {company.addressLocality}/
              {company.addressRegion}
            </span>
          )}
          <span className="block">
            <a
              href={`mailto:${company.email}`}
              className="transition-colors hover:text-foreground"
            >
              {company.email}
            </a>
            {isFilled(company.phone) && (
              <>
                {" · "}
                <a
                  href={`tel:+55${company.phone.replace(/\D/g, "")}`}
                  className="transition-colors hover:text-foreground"
                >
                  {company.phone}
                </a>
              </>
            )}
          </span>
          <span className="block">{company.businessHours}</span>
        </address>
      )}

      <div
        className={cn(
          "mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-border/40 px-4 pt-6 text-xs text-muted-foreground md:flex-row lg:px-8",
          // Sem o bloco jurídico acima, esta é a primeira divisória do rodapé
          // e precisa do respiro maior.
          hasLegalIdentity ? "mt-6" : "mt-12"
        )}
      >
        <span>© {new Date().getFullYear()} mytek. Todos os direitos reservados.</span>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          {company.dataHostedInBrazil && (
            <span>Dados hospedados no Brasil, sob a LGPD</span>
          )}
          <Link href="/politica-privacidade" className="transition-colors hover:text-foreground">
            Política de Privacidade
          </Link>
          <Link href="/termos" className="transition-colors hover:text-foreground">
            Termos de Serviço
          </Link>
        </div>
      </div>
    </footer>
  );
}
