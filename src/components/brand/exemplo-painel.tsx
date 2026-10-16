import Link from "next/link";
import {
  ArrowRightIcon,
  BellRingIcon,
  CheckIcon,
  LayoutDashboardIcon,
  LightbulbIcon,
  MousePointerClickIcon,
  RocketIcon,
  TrendingUpIcon,
  WalletIcon,
  WrenchIcon,
} from "lucide-react";

import { eyebrow } from "@/components/solutions-grid";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/velora/blur-fade";

/**
 * Exemplo de projeto sob medida na home: um painel de gestão para uma rede de
 * farmácias. Todos os dados são fictícios e isso aparece na legenda do vídeo e
 * no aviso abaixo dele. Sem números de resultado: o vídeo mostra o painel
 * funcionando, e os textos explicam para que serve, sem termo técnico.
 * Vídeo e imagem: public/brand/painel-varejo/.
 */
const serve = [
  "Ver todas as lojas e todos os canais de venda numa tela só, sem juntar planilha.",
  "Saber quanto a empresa realmente ganha, e não só quanto vende.",
  "Decidir com antecedência: o que vender, quando e a que preço.",
] as const;

const recursos = [
  {
    icon: LayoutDashboardIcon,
    title: "Tudo num lugar só",
    body: "Vendas de todas as lojas e de todos os canais (balcão, aplicativo, entrega e telefone), separadas por região, produto, vendedor e horário.",
  },
  {
    icon: WrenchIcon,
    title: "Arruma os dados antes de mostrar",
    body: "Cadastros incompletos, vendas repetidas e nomes escritos de jeitos diferentes são corrigidos, e o que não dá para usar fica separado, com um relatório do que foi mexido.",
  },
  {
    icon: WalletIcon,
    title: "Mostra o que sobra de verdade",
    body: "Do valor vendido, tira os descontos, as devoluções, o custo dos produtos e a comissão, e mostra o que fica de lucro em cada loja, produto e forma de pagamento.",
  },
  {
    icon: TrendingUpIcon,
    title: "Prevê as próximas semanas",
    body: "Olha o histórico de vendas, inclusive as épocas fortes de cada tipo de produto, e estima quanto deve vender nas próximas semanas, com uma margem de erro.",
  },
  {
    icon: BellRingIcon,
    title: "Avisa quando algo foge do normal",
    body: "Dia em que uma loja vendeu muito menos que o habitual, deu desconto demais ou teve devoluções fora do comum entra numa lista, com o motivo explicado.",
  },
  {
    icon: LightbulbIcon,
    title: "Ajuda a decidir",
    body: "Sugere o que oferecer junto (quem leva protetor solar costuma levar hidratante) e simula antes de você agir: se eu der 10% de desconto, quanto preciso vender a mais?",
  },
] as const;

export function ExemploPainel() {
  return (
    <section id="exemplo" className="relative overflow-hidden bg-background py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <BlurFade>
          <span className={eyebrow}>Exemplo de projeto sob medida</span>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
            Um painel de gestão feito para uma rede de farmácias
            <span className="text-emphasis">.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Para quem toca várias lojas e só descobre como o mês foi quando
            alguém termina de juntar as planilhas. Este painel mostra, em um
            lugar só, o que está acontecendo, o que deve acontecer e o que
            merece atenção.
          </p>
        </BlurFade>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.45fr_1fr]">
          <BlurFade delay={0.05}>
            <figure>
              <div className="overflow-hidden rounded-2xl border border-border bg-[#0F0819] shadow-[0_40px_100px_-40px_rgba(94,52,247,0.55)]">
                <video
                  src="/brand/painel-varejo/demo.mp4"
                  poster="/brand/painel-varejo/poster.jpg"
                  controls
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Gravação do painel de gestão para uma rede de farmácias: início com os painéis girando, vendas, lucro por produto, lojas, previsões, avisos e simulador"
                  className="aspect-video w-full bg-black"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted-foreground">
                Dados fictícios: as lojas, as vendas e os clientes deste exemplo
                foram inventados só para a demonstração.
              </figcaption>
            </figure>
          </BlurFade>

          <BlurFade delay={0.15}>
            <div className="rounded-2xl border border-border bg-card p-7">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.06em] text-primary">
                Para que serve
              </p>
              <ul className="mt-4 space-y-3.5">
                {serve.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <CheckIcon className="size-3" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-start gap-3 rounded-xl bg-muted p-4 text-sm">
                <MousePointerClickIcon className="mt-0.5 size-5 shrink-0 text-primary" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Como se usa: </span>
                  clicou em qualquer gráfico, todos os outros passam a mostrar só
                  aquilo. Clicou em &ldquo;Pix&rdquo;, tudo mostra só as vendas
                  pagas no Pix.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>

        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {recursos.map((r, i) => (
            <li key={r.title}>
              <BlurFade delay={i * 0.06} className="h-full">
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <r.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-bold tracking-[-0.02em]">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
                </div>
              </BlurFade>
            </li>
          ))}
        </ul>

        <BlurFade delay={0.1}>
          <div className="mt-12 grid items-center gap-6 rounded-2xl bg-muted p-7 lg:grid-cols-[1.4fr_1fr] lg:p-9">
            <div>
              <p className="font-heading text-xl font-extrabold tracking-[-0.03em]">
                Isto é um exemplo, e não o trabalho de um cliente real.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Os dados são fictícios e os números que aparecem no vídeo não
                são resultado de ninguém. Num projeto de verdade, o painel nasce
                dos dados do seu negócio e do que você precisa acompanhar, e
                tudo isso é combinado com você antes de começar.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button asChild size="lg">
                <Link href="/contact">
                  <RocketIcon className="size-4" />
                  Quero um painel assim
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/solucoes/sistemas-sob-medida">
                  Como funciona o sob medida <ArrowRightIcon className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
