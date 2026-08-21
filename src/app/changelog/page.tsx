import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { BlurFade } from "@/components/velora/blur-fade";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "Cada entrega da mytek: CRM, Landing Page, Dashboard e o que vem a seguir no roadmap.",
  alternates: { canonical: "/changelog" },
};

interface Release {
  date: string;
  version: string;
  title: string;
  tag?: "Novo" | "Melhoria" | "Correção";
  items: string[];
}

const releases: Release[] = [
  {
    date: "16 de julho de 2026",
    version: "0.4.0",
    title: "Módulo Conhecimento com IA no CRM Plus",
    tag: "Novo",
    items: [
      "CRM Plus agora inclui o módulo Conhecimento com IA sobre os dados da empresa, com treinamento incluído",
      "Combos de CRM + Dashboard com preço especial, a partir de R$228/mês",
      "Programa fundador aberto: 5 vagas com condições especiais",
    ],
  },
  {
    date: "28 de junho de 2026",
    version: "0.3.0",
    title: "Desconto de fidelidade na Landing Page",
    tag: "Novo",
    items: [
      "Cliente ativo de CRM ou Dashboard ganha 20% de desconto na Landing Page",
      "1 mês de manutenção grátis pra quem contrata Landing Page ou Dashboard",
      "Dashboard agora pode ser contratado avulso, sem precisar de CRM",
    ],
  },
  {
    date: "2 de junho de 2026",
    version: "0.2.0",
    title: "Dashboard em tempo real",
    tag: "Novo",
    items: [
      "Painéis de vendas, leads e atendimento atualizados em tempo real",
      "Exportação de relatórios prontos pra reunião",
      "Conecte suas fontes de dados (CRM, vendas, WhatsApp) uma vez só",
    ],
  },
  {
    date: "18 de maio de 2026",
    version: "0.1.1",
    title: "CRM com funil visual e atendimento via WhatsApp",
    tag: "Novo",
    items: [
      "Funil de vendas em Kanban, arraste e solte entre etapas",
      "Atendimento e histórico de WhatsApp direto na plataforma",
      "Times de até 3 pessoas incluídos no plano",
    ],
  },
  {
    date: "3 de maio de 2026",
    version: "0.1.0",
    title: "Primeira versão",
    tag: "Novo",
    items: [
      "CRM com funil visual e integração básica de WhatsApp",
      "Fundação da plataforma: dashboards, landing pages e CRM, pensados pra trabalhar juntos",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <main className="relative">
      <SiteHeader />

      <PageHeader
        eyebrow="Changelog"
        title={
          <>
            O que há de <span className="text-primary">novo</span>
          </>
        }
        description="CRM, Landing Page, Dashboard e o programa fundador: cada entrega, documentada."
      />

      <section className="pb-28">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <ol className="relative space-y-14 border-l border-border/60 pl-8">
            {releases.map((release, i) => (
              <li key={release.version} className="relative">
                <span className="absolute -left-[2.44rem] top-1.5 size-3 rounded-full border-2 border-primary bg-background" />
                <BlurFade delay={Math.min(i * 0.08, 0.3)}>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <time>{release.date}</time>
                      <Badge variant="outline" className="font-mono">
                        v{release.version}
                      </Badge>
                      {release.tag && (
                        <Badge className="bg-primary/15 text-primary hover:bg-primary/15">
                          {release.tag}
                        </Badge>
                      )}
                    </div>
                    <h2 className="mt-3 text-xl font-semibold tracking-tight">
                      {release.title}
                    </h2>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                      {release.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </BlurFade>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
