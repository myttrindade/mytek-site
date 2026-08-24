import Link from "next/link";

import { MytekLogo } from "@/components/mytek-logo";
import { hasCheckoutLinks } from "@/lib/checkout";
import { siteConfig } from "@/lib/site-config";

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
      { text: "Criar conta", href: "/signup" },
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
            Dashboards, landing pages e CRM numa plataforma só, feita pra
            negócios que querem crescer com organização.
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
      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-border/40 px-4 pt-6 text-xs text-muted-foreground md:flex-row lg:px-8">
        <span>© {new Date().getFullYear()} mytek. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}
