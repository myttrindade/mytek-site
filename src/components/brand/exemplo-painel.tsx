import Link from "next/link";
import {
  ArrowUpRightIcon,
  BellRingIcon,
  BrushCleaningIcon,
  DatabaseIcon,
  FlaskConicalIcon,
  LightbulbIcon,
  MousePointerClickIcon,
  RocketIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";

import { eyebrow } from "@/components/solutions-grid";
import { BlurFade } from "@/components/velora/blur-fade";
import { GridPattern } from "@/components/velora/grid-pattern";
import { ShimmerButton } from "@/components/velora/shimmer-button";
import { TiltCard } from "@/components/velora/tilt-card";

/**
 * Exemplo de projeto sob medida na home: um painel de gestão para uma rede de
 * farmácias. Todos os dados são fictícios e isso aparece no selo do topo, na
 * legenda do vídeo e no bloco final. Sem números de resultado. Os textos
 * explicam para que serve, sem termo técnico.
 * Vídeo e imagem: public/brand/painel-varejo/.
 */
const serve = [
  "Ver todas as lojas e todos os canais de venda numa tela só, sem juntar planilha.",
  "Saber quanto a empresa realmente ganha, e não só quanto vende.",
  "Decidir com antecedência: o que vender, quando e a que preço.",
] as const;

const recursos = [
  {
    icon: DatabaseIcon,
    tag: "Visão geral",
    title: "Tudo num lugar só",
    body: "Vendas de todas as lojas e de todos os canais (balcão, aplicativo, entrega e telefone), separadas por região, produto, vendedor e horário.",
  },
  {
    icon: BrushCleaningIcon,
    tag: "Dados limpos",
    title: "Arruma os dados antes de mostrar",
    body: "Cadastros incompletos, vendas repetidas e nomes escritos de jeitos diferentes são corrigidos, e o que não dá para usar fica separado, com um relatório do que foi mexido.",
  },
  {
    icon: WalletIcon,
    tag: "Lucro",
    title: "Mostra o que sobra de verdade",
    body: "Do valor vendido, tira os descontos, as devoluções, o custo dos produtos e a comissão, e mostra o que fica de lucro em cada loja, produto e forma de pagamento.",
  },
  {
    icon: TrendingUpIcon,
    tag: "Previsão",
    title: "Prevê as próximas semanas",
    body: "Olha o histórico de vendas, inclusive as épocas fortes de cada tipo de produto, e estima quanto deve vender nas próximas semanas, com uma margem de erro.",
  },
  {
    icon: BellRingIcon,
    tag: "Alertas",
    title: "Avisa quando algo foge do normal",
    body: "Dia em que uma loja vendeu muito menos que o habitual, deu desconto demais ou teve devoluções fora do comum entra numa lista, com o motivo explicado.",
  },
  {
    icon: LightbulbIcon,
    tag: "Decisão",
    title: "Ajuda a decidir",
    body: "Sugere o que oferecer junto (quem leva protetor solar costuma levar hidratante) e simula antes de você agir: se eu der 10% de desconto, quanto preciso vender a mais?",
  },
] as const;

export function ExemploPainel() {
  return (
    <section id="exemplo" className="relative overflow-hidden bg-background py-24 lg:py-32">
      {/* fundo: névoa roxa e grade bem leve */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_90%_0%,rgba(94,52,247,0.12),transparent_70%),radial-gradient(ellipse_50%_40%_at_0%_100%,rgba(94,52,247,0.08),transparent_70%)]"
      />
      <GridPattern
        width={56}
        height={56}
        className="fill-transparent stroke-primary/[0.06] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
        {/* Cabeçalho */}
        <div className="grid items-end gap-8 lg:grid-cols-[1.35fr_1fr]">
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

          <BlurFade delay={0.1}>
            <div className="flex items-start gap-4 rounded-2xl border border-dashed border-primary/40 bg-primary/[0.05] p-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#7A57FF] to-[#4A22D6] text-white shadow-[0_10px_24px_-8px_rgba(94,52,247,0.7)] ring-1 ring-white/30">
                <FlaskConicalIcon className="size-5" />
              </span>
              <div>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.06em] text-primary">
                  Exemplo com dados fictícios
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Lojas, vendas e clientes foram inventados para esta
                  demonstração. Nada aqui é de um cliente real.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>

        {/* Palco: vídeo em uma janela + para que serve */}
        <BlurFade delay={0.05}>
          <div className="dark relative mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#1b0f36] via-[#140a2a] to-[#0F0819] p-4 text-foreground shadow-[0_50px_120px_-40px_rgba(94,52,247,0.8)] sm:p-6 lg:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-28 -top-28 size-[460px] rounded-full bg-[radial-gradient(circle,rgba(94,52,247,0.55),transparent_65%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-32 -left-24 size-[360px] rounded-full bg-[radial-gradient(circle,rgba(198,255,0,0.12),transparent_65%)]"
            />
            <GridPattern
              width={48}
              height={48}
              className="fill-transparent stroke-white/[0.05] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_40%,black,transparent)]"
            />

            <div className="relative grid items-start gap-6 lg:grid-cols-[1.8fr_1fr] lg:gap-8">
              <figure>
                <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#0F0819] shadow-[0_30px_80px_-24px_rgba(110,72,255,0.75)]">
                  <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-2.5">
                    <span className="size-2.5 rounded-full bg-white/25" />
                    <span className="size-2.5 rounded-full bg-white/25" />
                    <span className="size-2.5 rounded-full bg-white/25" />
                    <span className="ml-3 hidden flex-1 truncate rounded-md bg-white/[0.06] px-3 py-1 font-mono text-[10px] text-white/50 sm:block">
                      painel.suaempresa.com.br
                    </span>
                  </div>
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
                <figcaption className="mt-3 flex items-center justify-center gap-2 text-xs text-white/60">
                  <span className="size-2 rounded-full bg-lima shadow-[0_0_0_4px_rgba(198,255,0,0.18)]" />
                  Gravação do painel de exemplo, com dados fictícios.
                </figcaption>
              </figure>

              <div className="grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm">
                  <span className={eyebrow}>Para que serve</span>
                  <ol className="mt-4 space-y-4">
                    {serve.map((t, i) => (
                      <li key={t} className="flex items-start gap-3 text-sm text-white/85">
                        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-lima font-mono text-[11px] font-extrabold text-lima-foreground">
                          {i + 1}
                        </span>
                        {t}
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/25 text-lima">
                    <MousePointerClickIcon className="size-5" />
                  </span>
                  <p className="text-sm text-white/75">
                    <span className="font-heading font-bold text-white">Como se usa: </span>
                    clicou em qualquer gráfico, todos os outros passam a mostrar
                    só aquilo. Clicou em &ldquo;Pix&rdquo;, tudo mostra só as
                    vendas pagas no Pix.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* O que o painel faz */}
        <BlurFade>
          <div className="mt-20 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <span className={eyebrow}>O que o painel faz</span>
              <h3 className="mt-2 font-heading text-2xl font-extrabold tracking-[-0.03em] text-balance lg:text-3xl">
                Seis coisas que o dono da rede passa a saber
                <span className="text-emphasis">.</span>
              </h3>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">
              Cada projeto sob medida muda o que entra. Este é só um exemplo.
            </p>
          </div>
        </BlurFade>

        <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {recursos.map((r, i) => (
            <li key={r.title}>
              <BlurFade delay={i * 0.05} className="h-full">
                <TiltCard className="h-full" maxTilt={6}>
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-card to-[#F4F1FF] p-6 transition-all duration-300 hover:border-primary/60 hover:shadow-[0_26px_60px_-24px_rgba(94,52,247,0.5)]">
                    {/* número grande, só como textura */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -bottom-5 -right-1 select-none font-heading text-[92px] font-extrabold leading-none tracking-[-0.06em] text-primary/[0.07] transition-colors duration-300 group-hover:text-primary/[0.14]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {/* brilho no canto, aparece no hover */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full bg-primary/25 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
                    />
                    <div className="relative flex items-start justify-between">
                      <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7A57FF] to-[#4A22D6] text-white shadow-[0_10px_24px_-8px_rgba(94,52,247,0.7)] ring-1 ring-white/30 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                        <r.icon className="size-6" />
                      </span>
                      <span className="rounded-full border border-primary/20 bg-primary/[0.07] px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.07em] text-primary">
                        {r.tag}
                      </span>
                    </div>
                    <h4 className="relative mt-5 font-heading text-xl font-extrabold tracking-[-0.03em]">
                      {r.title}
                    </h4>
                    <p className="relative mt-2 text-sm text-muted-foreground">{r.body}</p>
                  </div>
                </TiltCard>
              </BlurFade>
            </li>
          ))}
        </ul>

        {/* Fechamento */}
        <BlurFade delay={0.1}>
          <div className="dark relative mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#5E34F7] via-[#4A22D6] to-[#1b0f36] p-8 text-foreground shadow-[0_40px_90px_-30px_rgba(94,52,247,0.75)] lg:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 size-[420px] rounded-full bg-[radial-gradient(circle,rgba(198,255,0,0.26),transparent_65%)]"
            />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.06em] text-lima">
                  Para ficar claro
                </span>
                <p className="mt-3 font-heading text-2xl font-extrabold leading-tight tracking-[-0.03em] text-balance text-white lg:text-4xl">
                  Isto é um exemplo, e não o trabalho de um cliente real
                  <span className="text-lima">.</span>
                </p>
                <p className="mt-4 max-w-xl text-white/80">
                  Os dados são fictícios e os números que aparecem no vídeo não
                  são resultado de ninguém. Num projeto de verdade, o painel
                  nasce dos dados do seu negócio e do que você precisa
                  acompanhar, e tudo isso é combinado com você antes de começar.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <ShimmerButton href="/contact" className="bg-lima text-lima-foreground">
                  <RocketIcon className="size-4" />
                  Quero um painel assim
                </ShimmerButton>
                <Link
                  href="/solucoes/sistemas-sob-medida"
                  className="group inline-flex items-center gap-1.5 text-sm font-bold text-white underline-offset-4 hover:text-lima hover:underline"
                >
                  Como funciona o sob medida
                  <ArrowUpRightIcon className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
