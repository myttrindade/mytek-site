import type { Metadata } from "next";
import { CheckIcon, GiftIcon, MessageCircleIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { BlurFade } from "@/components/velora/blur-fade";
import { BorderBeam } from "@/components/velora/border-beam";
import { TiltCard } from "@/components/velora/tilt-card";

export const metadata: Metadata = {
  title: "Preço",
  description:
    "CRM a partir de R$129/mês, Dashboard a partir de R$199/mês e Landing Page a partir de R$899 (pagamento único). Combine e economize.",
};

const crmPlans = [
  {
    name: "CRM Normal",
    price: "R$129",
    unit: "/mês",
    highlight: false,
    features: ["3 usuários incluídos", "Funil de vendas visual (Kanban)", "Atendimento via WhatsApp"],
  },
  {
    name: "CRM Plus",
    price: "R$249",
    unit: "/mês",
    highlight: true,
    features: [
      "3 usuários incluídos",
      "Módulo Conhecimento com IA",
      "Treinamento obrigatório incluído",
    ],
  },
];

const dashboardPlans = [
  {
    name: "Dashboard Avulso",
    price: "R$199",
    unit: "/mês",
    features: ["Painéis personalizáveis", "Relatórios exportáveis", "Sem suporte incluso"],
  },
  {
    name: "Dashboard Avulso + Suporte",
    price: "R$399",
    unit: "/mês",
    features: ["Painéis personalizáveis", "Relatórios exportáveis", "Suporte incluso"],
  },
];

const landingPagePlans = [
  {
    name: "Landing Page Essencial",
    price: "R$899",
    features: ["Template customizado", "1 integração", "Sem copy profissional"],
  },
  {
    name: "Landing Page Completa",
    price: "R$1.799",
    features: [
      "Design sob medida",
      "Copy profissional",
      "Integração com CRM/e-mail",
      "SEO básico",
    ],
  },
];

const combos = [
  { label: "CRM Normal + Dashboard sem suporte", price: "R$228/mês" },
  { label: "CRM Normal + Dashboard com suporte", price: "R$328/mês" },
  { label: "CRM Plus + Dashboard sem suporte", price: "R$348/mês" },
  { label: "CRM Plus + Dashboard com suporte", price: "R$448/mês" },
];

const faqs = [
  {
    q: "Preciso ter CRM pra contratar o Dashboard?",
    a: "Não. O Dashboard pode ser contratado avulso, por qualquer negócio, mesmo sem usar o CRM da mytek. Quem já é do CRM paga menos, como add-on: +R$99/mês sem suporte ou +R$199/mês com suporte.",
  },
  {
    q: "A Landing Page é cobrada todo mês?",
    a: "Não. É pagamento único. Você paga uma vez pela página pronta. Cliente ativo de CRM ou Dashboard tem 20% de desconto: Essencial por R$719 e Completa por R$1.439.",
  },
  {
    q: "Qual a diferença entre o CRM Normal e o Plus?",
    a: "O Plus inclui o módulo Conhecimento com IA e treinamento obrigatório incluído. Os dois planos cobrem 3 usuários e têm o funil e o atendimento via WhatsApp completos.",
  },
  {
    q: "Como funciona a manutenção gratuita?",
    a: "Contratando Landing Page ou Dashboard, você ganha 1 mês de manutenção grátis (até 5 solicitações). Depois, converte para suporte mensal ou manutenção avulsa a partir de R$150/mês.",
  },
  {
    q: "E se eu precisar de algo fora desses planos?",
    a: "A gente monta um orçamento sob medida. É só falar com o time.",
  },
];

export default function PricingPage() {
  return (
    <main className="relative">
      <SiteHeader />

      <PageHeader
        eyebrow="Planos"
        title="Escolha por onde começar"
        description="Cada módulo funciona separado, ou combine CRM e Dashboard com preço especial."
      />

      {/* Promo banner */}
      <section className="pb-4">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <BlurFade>
            <div className="flex items-start gap-3 rounded-2xl border bg-primary/5 p-5 text-sm text-muted-foreground">
              <GiftIcon className="mt-0.5 size-5 shrink-0 text-primary" />
              <p>
                Contratando Landing Page ou Dashboard, você ganha{" "}
                <strong className="text-card-foreground">
                  1 mês de manutenção grátis
                </strong>{" "}
                (até 5 solicitações). Depois, converte para suporte mensal ou
                manutenção avulsa a partir de R$150/mês.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* CRM */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <BlurFade>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-xl font-semibold tracking-tight">CRM</h2>
              <p className="text-sm text-muted-foreground">
                Mensal · funil de vendas, atendimento e organização de clientes
              </p>
            </div>
          </BlurFade>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {crmPlans.map((plan, i) => (
              <BlurFade key={plan.name} delay={i * 0.1}>
                <div
                  className={
                    plan.highlight
                      ? "relative overflow-hidden rounded-2xl border border-primary/40 bg-card p-7"
                      : "rounded-2xl border bg-card p-7"
                  }
                >
                  {plan.highlight && <BorderBeam size={72} duration={8} />}
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                    {plan.highlight && (
                      <span className="rounded-full bg-primary/15 px-2.5 py-1 text-[11px] font-medium text-primary">
                        Com IA
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-4xl font-semibold tracking-tight">
                    {plan.price}
                    <span className="text-base font-normal text-muted-foreground">
                      {plan.unit}
                    </span>
                  </p>
                  <ul className="mt-6 space-y-2.5 text-sm">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5">
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                          <CheckIcon className="size-3" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.highlight ? "default" : "outline"}
                    className="mt-6 w-full rounded-full"
                    asChild
                  >
                    <a href="/contact">Quero este</a>
                  </Button>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <BlurFade>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-xl font-semibold tracking-tight">Dashboard</h2>
              <p className="text-sm text-muted-foreground">
                Mensal · painéis e relatórios em tempo real
              </p>
            </div>
          </BlurFade>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {dashboardPlans.map((plan, i) => (
              <BlurFade key={plan.name} delay={i * 0.1}>
                <div className="rounded-2xl border bg-card p-7">
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <p className="mt-3 text-4xl font-semibold tracking-tight">
                    {plan.price}
                    <span className="text-base font-normal text-muted-foreground">
                      {plan.unit}
                    </span>
                  </p>
                  <ul className="mt-6 space-y-2.5 text-sm">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5">
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                          <CheckIcon className="size-3" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="mt-6 w-full rounded-full" asChild>
                    <a href="/contact">Quero este</a>
                  </Button>
                </div>
              </BlurFade>
            ))}
          </div>
          <BlurFade delay={0.15}>
            <p className="mt-6 text-sm text-muted-foreground">
              Já é cliente CRM? Adicione o Dashboard por{" "}
              <strong className="text-card-foreground">R$99/mês</strong> (sem
              suporte) ou <strong className="text-card-foreground">R$199/mês</strong>{" "}
              (com suporte): valor extra sobre a mensalidade do CRM Normal
              ou Plus.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Landing Page */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <BlurFade>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-xl font-semibold tracking-tight">Landing Page</h2>
              <p className="text-sm text-muted-foreground">
                Pagamento único · página pronta para conversão
              </p>
            </div>
          </BlurFade>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {landingPagePlans.map((plan, i) => (
              <BlurFade key={plan.name} delay={i * 0.1}>
                <div className="rounded-2xl border bg-card p-7">
                  <span className="inline-block rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                    Pagamento único
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{plan.name}</h3>
                  <p className="mt-3 text-4xl font-semibold tracking-tight">
                    {plan.price}
                  </p>
                  <ul className="mt-6 space-y-2.5 text-sm">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5">
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                          <CheckIcon className="size-3" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="mt-6 w-full rounded-full" asChild>
                    <a href="/contact">Quero este</a>
                  </Button>
                </div>
              </BlurFade>
            ))}
          </div>
          <BlurFade delay={0.15}>
            <p className="mt-6 text-sm text-muted-foreground">
              Cliente ativo de CRM ou Dashboard tem{" "}
              <strong className="text-card-foreground">20% de desconto</strong>:
              Essencial por R$719 e Completa por R$1.439.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Combos */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <BlurFade>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-xl font-semibold tracking-tight">
                Combine CRM + Dashboard
              </h2>
              <p className="text-sm text-muted-foreground">
                Economize contratando o Dashboard como add-on do seu CRM
              </p>
            </div>
          </BlurFade>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {combos.map((c, i) => (
              <BlurFade key={c.label} delay={i * 0.06}>
                <div className="flex items-center justify-between gap-4 rounded-2xl border bg-card p-5 transition-transform hover:-translate-y-0.5">
                  <span className="text-sm text-muted-foreground">{c.label}</span>
                  <span className="shrink-0 text-lg font-semibold tracking-tight">
                    {c.price}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Custom quote */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <BlurFade>
            <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-dashed bg-muted/30 p-8">
              <div>
                <h3 className="font-semibold">Não achou o que precisa?</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Se seu negócio precisa de algo fora desses planos, montamos
                  um orçamento sob medida pra você.
                </p>
              </div>
              <Button className="shrink-0 rounded-full" asChild>
                <a href="/contact">Pedir orçamento personalizado</a>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Founder program */}
      <section className="pb-24">
        <div className="mx-auto max-w-2xl px-4 lg:px-8">
          <BlurFade>
            <TiltCard maxTilt={5}>
              <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-card p-10 text-center shadow-xl shadow-primary/5">
                <BorderBeam size={100} duration={9} />
                <span className="text-xs font-semibold tracking-wide text-primary uppercase">
                  Programa fundador
                </span>
                <p className="mx-auto mt-4 max-w-lg text-lg text-card-foreground italic">
                  "Estamos abrindo o programa fundador, com condições
                  especiais em troca do seu feedback direto pra moldar o
                  produto."
                </p>
                <div className="mt-6 flex justify-center gap-1.5">
                  {[true, true, false, false, false].map((filled, i) => (
                    <span
                      key={i}
                      className={
                        filled
                          ? "size-2.5 rounded-full bg-primary"
                          : "size-2.5 rounded-full bg-muted"
                      }
                    />
                  ))}
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  2 de 5 vagas do programa fundador preenchidas
                </p>
                <Button size="lg" className="mt-6 rounded-full" asChild>
                  <a href="/contact">
                    <MessageCircleIcon className="size-4" />
                    Falar com o time fundador
                  </a>
                </Button>
              </div>
            </TiltCard>
          </BlurFade>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-28">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <BlurFade>
            <h2 className="text-center text-3xl font-semibold tracking-tight">
              Dúvidas sobre o preço
            </h2>
            <Accordion type="single" collapsible className="mt-10">
              {faqs.map((faq) => (
                <AccordionItem key={faq.q} value={faq.q}>
                  <AccordionTrigger className="text-left text-base">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </BlurFade>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
