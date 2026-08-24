import type { Metadata } from "next";
import {
  CheckIcon,
  CreditCardIcon,
  MessageCircleIcon,
  RepeatIcon,
  ShieldCheckIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { BlurFade } from "@/components/velora/blur-fade";
import { checkoutGroups, hasCheckoutLinks } from "@/lib/checkout";

export const metadata: Metadata = {
  title: "Pagamento",
  description:
    "Contrate CRM, Dashboard ou Landing Page da mytek. Pagamento por cartão, Pix ou boleto, com checkout do Mercado Pago.",
  alternates: { canonical: "/pagamento" },
  // Enquanto nenhum link de pagamento existir, a página não deve ser
  // indexada: seria um checkout que não cobra nada.
  ...(hasCheckoutLinks ? {} : { robots: { index: false, follow: true } }),
};

const howItWorks = [
  {
    icon: <CreditCardIcon className="size-5" />,
    title: "Cartão, Pix ou boleto",
    body: "Você escolhe a forma de pagamento na tela do Mercado Pago. Assinatura no cartão é renovada sozinha todo mês.",
  },
  {
    icon: <ShieldCheckIcon className="size-5" />,
    title: "Seus dados não passam por aqui",
    body: "O pagamento acontece dentro do Mercado Pago. Este site não recebe, não guarda e não enxerga número de cartão.",
  },
  {
    icon: <RepeatIcon className="size-5" />,
    title: "Cancele quando quiser",
    body: "As assinaturas não têm fidelidade. O cancelamento é feito com a gente e vale a partir do ciclo seguinte.",
  },
];

export default function PagamentoPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          eyebrow="Pagamento"
          title="Contrate o seu plano"
          description="Escolha abaixo e finalize no Mercado Pago. Assinaturas são mensais e sem fidelidade; a Landing Page é pagamento único."
        />

        <div className="mx-auto max-w-6xl px-4 pb-24 lg:px-8">
          {!hasCheckoutLinks && (
            <BlurFade>
              <div className="mb-14 rounded-2xl border border-primary/30 bg-primary/5 p-6">
                <h2 className="text-base font-semibold">
                  O pagamento online está sendo ativado
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Enquanto isso, a contratação é feita direto com o nosso time,
                  pelo mesmo preço da tabela. É só clicar em{" "}
                  <span className="font-medium text-foreground">
                    Falar com a gente
                  </span>{" "}
                  no plano que você quer — a resposta sai no mesmo dia.
                </p>
              </div>
            </BlurFade>
          )}

          <div className="flex flex-col gap-16">
            {checkoutGroups.map((group) => (
              <section key={group.slug} id={group.slug} className="scroll-mt-28">
                <BlurFade>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-2xl font-semibold tracking-tight">
                        {group.title}
                      </h2>
                      <span className="rounded-full border px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                        {group.billing}
                      </span>
                    </div>
                    <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                      {group.description}
                    </p>
                  </div>
                </BlurFade>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {group.plans.map((plan, i) => (
                    <BlurFade key={plan.slug} delay={i * 0.1} className="h-full">
                      <div
                        id={plan.slug}
                        className="flex h-full scroll-mt-28 flex-col rounded-2xl border bg-card p-7"
                      >
                        <h3 className="text-lg font-semibold">{plan.name}</h3>
                        <p className="mt-3 text-4xl font-semibold tracking-tight">
                          {plan.price}
                          {plan.unit && (
                            <span className="text-base font-normal text-muted-foreground">
                              {plan.unit}
                            </span>
                          )}
                        </p>
                        {!plan.unit && (
                          <p className="mt-1 text-sm text-muted-foreground">
                            Pagamento único
                          </p>
                        )}
                        <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                          {plan.features.map((f) => (
                            <li key={f} className="flex items-center gap-2.5">
                              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                                <CheckIcon className="size-3" />
                              </span>
                              {f}
                            </li>
                          ))}
                        </ul>
                        {plan.url ? (
                          <Button className="mt-6 w-full rounded-full" asChild>
                            <a
                              href={plan.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Ir para o pagamento
                            </a>
                          </Button>
                        ) : (
                          <Button
                            variant="outline"
                            className="mt-6 w-full rounded-full"
                            asChild
                          >
                            <a href="/contact">Falar com a gente</a>
                          </Button>
                        )}
                      </div>
                    </BlurFade>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <BlurFade>
            <section className="mt-20 border-t pt-14">
              <h2 className="text-2xl font-semibold tracking-tight">
                Como funciona o pagamento
              </h2>
              <div className="mt-8 grid gap-8 sm:grid-cols-3">
                {howItWorks.map((item) => (
                  <div key={item.title}>
                    <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      {item.icon}
                    </span>
                    <h3 className="mt-4 font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </BlurFade>

          <BlurFade>
            <section className="mt-16 rounded-2xl border bg-card p-8">
              <h2 className="text-xl font-semibold tracking-tight">
                Depois que você paga
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
                O Mercado Pago envia o comprovante por e-mail na hora. A gente
                recebe a confirmação e entra em contato pelo WhatsApp em até um
                dia útil para configurar seu acesso. Precisa de nota fiscal ou
                de pagamento por outro meio? É só pedir.
              </p>
              <Button variant="outline" className="mt-6 rounded-full" asChild>
                <a href="/contact">
                  <MessageCircleIcon className="size-4" />
                  Tirar uma dúvida antes
                </a>
              </Button>
            </section>
          </BlurFade>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
