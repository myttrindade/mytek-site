import Link from "next/link";
import { MailIcon } from "lucide-react";

import { MytekLogo } from "@/components/mytek-logo";
import { hasCheckoutLinks } from "@/lib/checkout";
import { mostrarValores } from "@/lib/site-config";
import { company, hasLegalIdentity, isFilled } from "@/lib/company";
import { cn } from "@/lib/utils";

const groups = [
  {
    title: "Soluções",
    links: [
      { text: "Sites", href: "/solucoes/sites" },
      { text: "Landing pages", href: "/solucoes/landing-pages" },
      { text: "CRM com WhatsApp", href: "/crm" },
      { text: "MyHub", href: "/solucoes/mytek-hub" },
      { text: "MyCash", href: "/solucoes/mycash" },
      { text: "Dashboards", href: "/solucoes/dashboards" },
      { text: "Agentes de IA", href: "/solucoes/agentes-de-ia" },
      { text: "Automação com n8n", href: "/solucoes/automacao-n8n" },
      { text: "Previsão de churn", href: "/solucoes/previsao-de-churn" },
      { text: "Sistemas sob medida", href: "/solucoes/sistemas-sob-medida" },
      ...(mostrarValores ? [{ text: "Preço", href: "/pricing" }] : []),
      // Aparece só quando o checkout estiver de fato cobrando.
      ...(mostrarValores && hasCheckoutLinks
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
];


/** Icones de marca em SVG proprio (os de marca saem do lucide-react nas versoes novas). */
function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5.2" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.95L2 22l5.2-1.5A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 1 1-4.3 14.97l-.31-.19-3.08.89.9-3-.2-.32A8.1 8.1 0 0 1 12.04 3.8Zm-3.2 3.9c-.17 0-.45.06-.69.32-.24.26-.9.88-.9 2.15s.92 2.5 1.05 2.67c.13.17 1.78 2.84 4.4 3.87 2.17.86 2.6.69 3.07.65.47-.04 1.52-.62 1.73-1.22.22-.6.22-1.11.15-1.22-.06-.1-.24-.17-.5-.3-.26-.13-1.52-.75-1.76-.84-.24-.09-.4-.13-.58.13-.17.26-.67.84-.82 1.01-.15.17-.3.2-.56.07-.26-.13-1.1-.4-2.1-1.29-.77-.69-1.3-1.55-1.45-1.81-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.07-.13-.58-1.4-.8-1.92-.21-.5-.42-.43-.58-.44h-.5Z" />
    </svg>
  );
}

const contactLinks = [
  {
    label: "Instagram da mytek",
    href: `https://instagram.com/${company.instagram}`,
    icon: InstagramGlyph,
    external: true,
  },
  {
    label: "Falar com a mytek no WhatsApp",
    href: `https://wa.me/${company.whatsapp}`,
    icon: WhatsAppGlyph,
    external: true,
  },
  {
    label: "Enviar e-mail para a mytek",
    href: `mailto:${company.email}`,
    icon: MailIcon,
    external: false,
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="dark border-t border-border bg-background py-14 text-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <MytekLogo />
          </Link>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            CRM com WhatsApp, landing page e dashboard. Nenhum lead esquecido
            no caminho.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            Implantação em minutos, sem precisar de equipe técnica
          </p>
          <ul className="mt-5 flex items-center gap-3" aria-label="Contato">
            {contactLinks.map(({ label, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  title={label}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition-all hover:-translate-y-0.5 hover:border-lima hover:bg-lima hover:text-lima-foreground"
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
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
