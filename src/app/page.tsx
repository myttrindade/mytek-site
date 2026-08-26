import {
  CheckIcon,
  FilterIcon,
  GaugeIcon,
  GlobeIcon,
  MessageCircleIcon,
  MousePointerClickIcon,
  RocketIcon,
  ShieldIcon,
  SparklesIcon,
  Wand2Icon,
  ZapIcon,
} from "lucide-react";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ActivityList } from "@/components/demo/activity-list";
import { FounderProgram, founderEyebrow } from "@/components/founder-program";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroMockup } from "@/components/demo/hero-mockup";
import { FunnelPreview } from "@/components/demo/funnel-preview";
import { LandingPageMockup } from "@/components/demo/landing-page-mockup";
import { IntegrationsBeam } from "@/components/demo/integrations-beam";
import { AuroraBackground } from "@/components/velora/aurora-background";
import { BlurFade } from "@/components/velora/blur-fade";
import { BorderBeam } from "@/components/velora/border-beam";
import { Dock, DockIcon } from "@/components/velora/dock";
import { GridPattern } from "@/components/velora/grid-pattern";
import { Marquee } from "@/components/velora/marquee";
import { NumberTicker } from "@/components/velora/number-ticker";
import { Particles } from "@/components/velora/particles";
import { RetroGrid } from "@/components/velora/retro-grid";
import { ScrollProgress } from "@/components/velora/scroll-progress";
import { ShimmerButton } from "@/components/velora/shimmer-button";
import { SpotlightCard } from "@/components/velora/spotlight-card";
import { TiltCard } from "@/components/velora/tilt-card";
import {
  HERO_SCREENSHOT,
  HERO_SCREENSHOT_ALT,
  HERO_SCREENSHOT_SIZE,
} from "@/lib/site-config";

import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const differentiators = [
  { icon: <FilterIcon className="size-4" />, label: "Funil visual em Kanban" },
  { icon: <MessageCircleIcon className="size-4" />, label: "WhatsApp direto na plataforma" },
  { icon: <GlobeIcon className="size-4" />, label: "Landing page conectada ao funil" },
  { icon: <GaugeIcon className="size-4" />, label: "Métrica em tempo real" },
  { icon: <ZapIcon className="size-4" />, label: "Configuração em minutos" },
  { icon: <ShieldIcon className="size-4" />, label: "Controle de acesso por usuário" },
  { icon: <SparklesIcon className="size-4" />, label: "Módulo de IA sobre os dados" },
  { icon: <Wand2Icon className="size-4" />, label: "Orçamento sob medida pra projeto personalizado" },
];

/**
 * Só o primeiro item é um número que conta — os outros três são fatos
 * comerciais, não métricas. Nada aqui pode ser uma média inventada: a versão
 * anterior anunciava "18% de taxa de conversão" e "96% de satisfação" sem
 * nenhuma base, o que é publicidade enganosa (CDC art. 37).
 */
const heroStats: Array<
  { label: string } & ({ value: number; suffix: string } | { text: string })
> = [
  // Cenário B: a conversa é a porta de entrada, não um cadastro.
  { value: 10, suffix: " min", label: "da conversa ao funil configurado" },
  { text: "R$197/mês", label: "CRM completo, 3 usuários" },
  { text: "3 módulos", label: "contrate separado ou junto" },
  { text: "Sem fidelidade", label: "cancele quando quiser" },
];

const products = [
  {
    id: "crm",
    icon: <FilterIcon className="size-6" />,
    name: "CRM",
    description:
      "Funil de vendas visual e uma automação que avisa quando um lead esfria no WhatsApp. Nenhum lead esquecido por mais de 24 horas.",
  },
  {
    id: "landing-page",
    icon: <GlobeIcon className="size-6" />,
    name: "Landing Page",
    description:
      "Sua própria página, conectada ao mesmo funil, pronta pra converter visitante em lead sem depender de agência.",
  },
  {
    id: "dashboard",
    icon: <GaugeIcon className="size-6" />,
    name: "Dashboard",
    description:
      "Vendas, leads e atendimento num painel só, em tempo real. A métrica certa, sem planilha e sem pedir relatório pra ninguém.",
  },
];

const features = [
  {
    icon: <ZapIcon className="size-5" />,
    title: "Implantação rápida",
    // Cenário B: não prometer "comece a usar" quando a entrada é comercial.
    body: "Configuramos com você em uma conversa. Sem projeto de três meses.",
  },
  {
    icon: <MousePointerClickIcon className="size-5" />,
    title: "Interface intuitiva",
    body: "Pensada para quem não é técnico. Você aprende em minutos, não em semanas.",
  },
  {
    icon: <ShieldIcon className="size-5" />,
    title: "Controle de acesso",
    body: "Defina o que cada administrador ou usuário pode ver e fazer.",
  },
  {
    icon: <MessageCircleIcon className="size-5" />,
    // O SLA vive na descrição, não no título: os outros três cards têm duas
    // palavras, e sete aqui quebravam o ritmo da grade.
    title: "Suporte no WhatsApp",
    body: "Atendimento direto pelo WhatsApp, sem burocracia. Resposta em até 4h úteis.",
  },
];

// Cenário B: o passo 1 descreve o que acontece de verdade hoje.
const steps = [
  {
    num: "1",
    title: "Fale com o time",
    body: "A gente entende seu processo de venda e monta o funil com você.",
  },
  {
    num: "2",
    title: "Personalize",
    body: "Ajuste dashboard, landing page e etapas do funil do seu jeito.",
  },
  {
    num: "3",
    title: "Acompanhe os resultados",
    body: "Veja tudo em tempo real e decida com dado de verdade.",
  },
];

// A seção de depoimentos foi removida em 26/08/2026. Os seis que estavam aqui
// eram inventados, com avatares gerados pela api.dicebear.com, e contradiziam
// o "2 de 5 vagas do programa fundador preenchidas" logo abaixo na mesma
// página. Depoimento fabricado é publicidade enganosa (CDC art. 37).
//
// Formato de depoimento aprovado (usar só com cliente real e consentimento):
// "Antes a gente respondia lead do Instagram no dia seguinte. Hoje o alerta
//  chega em 15 minutos."
// — Nome, cargo, empresa · setor, cidade
// Se o cliente não quiser expor a marca, anonimize a EMPRESA, nunca a pessoa
// e a métrica.

const faqs = [
  {
    q: "CRM, Landing Page e Dashboard são vendidos separados?",
    a: "São. Cada módulo funciona sozinho e você contrata só o que faz sentido agora. Quem junta CRM e Dashboard paga menos nos dois: a partir de R$394/mês contra R$594/mês contratando avulso. A Landing Page é pagamento único e não tem mensalidade.",
  },
  {
    q: "A mytek é feita só pra um tipo de negócio?",
    a: "Não. Ela serve pra qualquer negócio que receba lead por WhatsApp, Instagram ou formulário e precise acompanhar o que acontece depois — comércio, serviço, clínica, escritório, distribuidora. Se o seu processo de venda hoje mora numa planilha ou na cabeça de alguém, é pra você. Se a sua venda é 100% automática, sem conversa no meio, provavelmente não é.",
  },
  {
    q: "Preciso de equipe técnica pra configurar?",
    a: "Não. O cadastro leva cerca de 10 minutos e o funil já vem com etapas padrão que dá pra usar do jeito que está ou renomear arrastando. Conectar o WhatsApp é escanear um QR Code. A Landing Page e o Dashboard, esses sim, a gente configura pra você antes de entregar.",
  },
  {
    // Versão B, confirmada em 26/08/2026: não existe teste gratuito. Se um
    // trial for lançado, troque por: "Tem. Você usa o CRM por 14 dias sem
    // cartão de crédito..." — e o CTA do hero e a microcopy abaixo dele
    // precisam mudar junto, senão a página promete duas coisas diferentes.
    q: "Existe algum benefício gratuito?",
    a: "Não temos teste gratuito por enquanto, mas também não temos fidelidade: você paga o primeiro mês, testa de verdade com seus dados e cancela quando quiser. Contratando Landing Page ou Dashboard, o primeiro mês de manutenção vem incluso (até 5 solicitações). Se quiser ver a plataforma antes de decidir, a gente faz uma demonstração ao vivo no WhatsApp.",
  },
  {
    q: "A mytek é uma empresa nova?",
    a: "É. Estamos no primeiro ano de operação e não escondemos isso — é justamente por isso que existe o programa fundador, com preço travado e acesso direto a quem constrói o produto. Somos uma empresa registrada, com CNPJ e contrato, e seus dados ficam em servidores no Brasil sob a LGPD.",
  },
  {
    q: "Tem fidelidade ou multa de cancelamento?",
    a: "Não. Os planos mensais são mês a mês e o cancelamento é feito pelo próprio WhatsApp do suporte, sem carência. A Landing Page, por ser pagamento único, é entregue e é sua.",
  },
  {
    // A exportação em CSV ainda não existe no produto (confirmado em
    // 26/08/2026), então a resposta promete só o que a gente cumpre hoje:
    // entregar a base quando o cliente pedir. Quando o botão de exportar
    // existir, troque por: "Não. Você exporta sua base de leads, clientes e
    // histórico em CSV a qualquer momento, inclusive nos 30 dias após o
    // cancelamento. Os dados são seus."
    q: "E se eu cancelar, perco meus dados?",
    a: "Não. Os dados são seus: é só pedir e a gente entrega sua base de leads, clientes e histórico, inclusive nos 30 dias após o cancelamento. A exportação por conta própria, direto na plataforma, está no nosso roteiro e ainda não está disponível.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const pricingTeasers = [
  {
    icon: <FilterIcon className="size-6" />,
    name: "CRM",
    price: "R$197/mês",
    unit: "a partir de · 3 usuários incluídos",
    description:
      "Funil de vendas visual, atendimento via WhatsApp e automação de lead parado.",
  },
  {
    icon: <GlobeIcon className="size-6" />,
    name: "Landing Page",
    price: "R$1.497",
    unit: "pagamento único",
    description:
      "Página conectada ao funil, pronta em poucos dias após aprovação do conteúdo.",
  },
  {
    icon: <GaugeIcon className="size-6" />,
    name: "Dashboard",
    price: "R$397/mês",
    unit: "a partir de · avulso, sem precisar de CRM",
    description:
      "Vendas, leads e atendimento em tempo real. Mais barato como add-on de quem já é do CRM.",
  },
];

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />

      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-28">
        <AuroraBackground intensity="subtle" />
        <GridPattern
          width={48}
          height={48}
          className="fill-transparent stroke-border/60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
        />
        <div className="relative mx-auto max-w-6xl px-4 text-center lg:px-8">
          <BlurFade delay={0} direction="down">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-1.5 text-sm backdrop-blur">
              <SparklesIcon className="size-3.5 text-primary" />
              <span className="font-medium">{founderEyebrow}</span>
            </span>
          </BlurFade>

          {/*
            Um H1 só, e uma subhead só, no DOM.

            A versão anterior mantinha as duas redações no HTML e escondia uma
            por CSS. O texto servido virava "Lead respondido 6 horas depois não
            vira venda.Seu lead respondeu no Instagram.Sua equipe viu 6 horas
            depois." — duas manchetes concorrentes para o buscador e uma
            loteria para o preview de link. A quebra em duas linhas agora é do
            CSS (`block`), não de um segundo texto.
          */}
          <BlurFade delay={0.15}>
            <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-7xl">
              Seu lead respondeu no Instagram.{" "}
              <span className="mt-1 block font-normal text-muted-foreground">
                Sua equipe viu 6 horas depois.
              </span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.35}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
              A mytek avisa quando um lead para de andar no funil e centraliza
              o WhatsApp num lugar só.
              {/* A segunda frase some no celular por CSS, sem duplicar texto. */}
              <span className="hidden sm:inline">
                {" "}
                Mostra em tempo real o que virou venda: CRM, landing page e
                dashboard na mesma plataforma.
              </span>
            </p>
          </BlurFade>

          {/*
            A entrada é sempre pelo time comercial, então o CTA diz isso — e a
            página inteira (microcopy, stat, "Como funciona", card de
            Recursos) fala a mesma língua. Prometer "crie sua conta" e entregar
            um formulário de contato é a contradição que essa rodada corrige.

            TODO(produto): o cadastro self-service existe no produto, mas a
            tela deste site é falsa — src/components/template/auth-form.tsx faz
            `e.preventDefault(); setDone(true);` e mostra sucesso sem criar
            conta nem avisar ninguém. Quando ela for religada de verdade, o
            caminho de volta é: CTA para /signup com o rótulo "Começar agora →",
            e reverter os quatro pontos de copy marcados com "Cenário B" nesta
            página.
          */}
          <BlurFade delay={0.5}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
              <ShimmerButton href="/contact">
                <RocketIcon className="size-4" />
                Falar com o time →
              </ShimmerButton>
              {/* No celular o secundário vira link de texto, não um segundo botão. */}
              <Button
                variant="ghost"
                size="lg"
                className="hidden sm:inline-flex"
                asChild
              >
                <a href="#produtos">Ver como funciona ↓</a>
              </Button>
              <a
                href="#produtos"
                className="text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground sm:hidden"
              >
                Ver como funciona ↓
              </a>
            </div>
          </BlurFade>

          <BlurFade delay={0.6}>
            {/* Cenário B: "com a gente" deixa explícito que a configuração é feita junto. */}
            <p className="mt-5 text-sm text-muted-foreground">
              Sem fidelidade · configuração em 10 minutos com a gente · suporte
              no WhatsApp
            </p>
          </BlurFade>

          {/* Stats */}
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 lg:grid-cols-4">
            {heroStats.map((stat, i) => (
              <BlurFade key={stat.label} delay={i * 0.1}>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-3xl font-semibold tracking-tight lg:text-4xl">
                    {"value" in stat ? (
                      <NumberTicker value={stat.value} suffix={stat.suffix} />
                    ) : (
                      stat.text
                    )}
                  </span>
                  <span className="text-sm text-muted-foreground text-balance">
                    {stat.label}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>

          <BlurFade delay={0.5}>
            <p className="mt-8 text-sm text-muted-foreground">
              Em operação desde 2026, com os primeiros negócios do programa
              fundador.
            </p>
          </BlurFade>

          {/*
            Enquanto HERO_SCREENSHOT for null nada é renderizado aqui — nem
            moldura, nem espaço reservado. Ver src/lib/site-config.ts.
          */}
          {HERO_SCREENSHOT && (
            <BlurFade delay={0.7}>
              <Image
                src={HERO_SCREENSHOT}
                alt={HERO_SCREENSHOT_ALT}
                width={HERO_SCREENSHOT_SIZE.width}
                height={HERO_SCREENSHOT_SIZE.height}
                priority
                className="mx-auto mt-16 w-full max-w-4xl rounded-2xl border shadow-2xl"
              />
            </BlurFade>
          )}
        </div>
      </section>

      {/* Dor */}
      <section id="problema" className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance lg:text-5xl">
              Seus leads estão{" "}
              <span className="text-primary">esfriando</span> antes de virar
              venda
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              O problema não é só gerar interesse. É responder, acompanhar e
              transformar cada conversa numa oportunidade fechada.
            </p>
          </BlurFade>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                num: "01",
                title: "Mensagem no Instagram ignorada",
                body: "a equipe só vê horas depois, quando alguém lembra de abrir o app.",
              },
              {
                num: "02",
                title: "Planilha desatualizada",
                body: "ninguém sabe quantos leads viraram venda esse mês.",
              },
              {
                num: "03",
                title: "Equipe sobrecarregada",
                body: "respondendo Instagram, WhatsApp e telefone ao mesmo tempo, sem prioridade clara.",
              },
            ].map((pain, i) => (
              <BlurFade key={pain.num} delay={i * 0.1} className="h-full">
                <TiltCard maxTilt={6} className="h-full">
                  <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-primary/30 bg-card p-7 shadow-xl shadow-primary/5">
                    <BorderBeam size={70} duration={8} delay={i * 2} />
                    <span className="text-sm font-semibold tracking-wide text-primary">
                      {pain.num}
                    </span>
                    <p className="mt-4 text-sm text-muted-foreground">
                      <strong className="font-semibold text-card-foreground">
                        {pain.title}
                      </strong>
                      <br />
                      {pain.body}
                    </p>
                  </div>
                </TiltCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais marquee */}
      <section className="border-y border-border/40 py-12">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <p className="mb-8 text-center text-sm text-muted-foreground">
            Diferenciais da mytek
          </p>
          <Marquee pauseOnHover className="[--duration:30s]">
            {differentiators.map((d) => (
              <span
                key={d.label}
                className="mx-3 flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="text-primary">{d.icon}</span>
                {d.label}
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Produtos: visão geral */}
      <section id="produtos" className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-semibold tracking-tight text-balance lg:text-5xl">
              Três produtos,{" "}
              <span className="text-primary">uma plataforma só</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              CRM, Landing Page e Dashboard trabalham juntos ou de forma
              independente, no seu ritmo.
            </p>
          </BlurFade>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {products.map((product, i) => (
              <BlurFade key={product.id} delay={i * 0.12}>
                <SpotlightCard className="h-full p-8">
                  <div className="mb-4 w-fit rounded-xl bg-primary/10 p-3 text-primary">
                    {product.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {product.description}
                  </p>
                  <a
                    href={`#${product.id}`}
                    className="mt-4 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Ver como funciona ↓
                  </a>
                </SpotlightCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Módulos: o que cada um faz, na prática */}
      <section id="modulos" className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <span className="text-sm font-medium text-primary">Produtos</span>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance lg:text-5xl">
              O que cada módulo faz, na prática
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Três soluções pensadas para trabalhar juntas, ou de forma
              independente, no seu ritmo.
            </p>
          </BlurFade>

          {/* Módulo · CRM */}
          <div
            id="crm"
            className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
          >
            <BlurFade direction="right">
              <div>
                <span className="text-sm font-medium text-primary">
                  Módulo · CRM
                </span>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-balance lg:text-4xl">
                  Organize sua base e pare de perder venda por demora
                </h3>
                <p className="mt-4 text-muted-foreground">
                  Do primeiro contato ao pós-venda: funil visual em Kanban,
                  atendimento via WhatsApp direto na plataforma, e histórico
                  completo de cada cliente. Ninguém precisa “lembrar” de
                  nada.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {[
                    "Funil de vendas visual, arraste e solte entre etapas",
                    "Atendimento e histórico de WhatsApp num só lugar",
                    "Times de até 3 pessoas incluídos no plano",
                    "Plano Plus adiciona um módulo de IA sobre os dados da empresa",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <CheckIcon className="size-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="/pricing"
                  className="mt-6 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  Ver planos do CRM →
                </a>
              </div>
            </BlurFade>
            <BlurFade direction="left" delay={0.15}>
              <FunnelPreview />
            </BlurFade>
          </div>

          {/* Módulo · Landing Page */}
          <div
            id="landing-page"
            className="mt-24 grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
          >
            <BlurFade direction="right" className="order-2 lg:order-1">
              <LandingPageMockup />
            </BlurFade>
            <BlurFade direction="left" delay={0.15} className="order-1 lg:order-2">
              <div>
                <span className="text-sm font-medium text-primary">
                  Módulo · Landing Page
                </span>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-balance lg:text-4xl">
                  Uma página feita para converter visitante em cliente
                </h3>
                <p className="mt-4 text-muted-foreground">
                  Criamos a página do zero, ou você escolhe o modelo
                  essencial pronto, com foco em captar contato. Cada lead
                  que preenche o formulário cai direto no seu funil de
                  vendas.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {[
                    "Design pensado para conversão, não só estética",
                    "Formulário conectado automaticamente ao CRM",
                    "Otimizada para carregar rápido no celular",
                    "Pronta em poucos dias após aprovação do conteúdo",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <CheckIcon className="size-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="/pricing"
                  className="mt-6 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  Ver planos de Landing Page →
                </a>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Todo canal, um lugar só */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <BlurFade direction="right">
            <div>
              <span className="text-sm font-medium text-primary">
                Tudo integrado
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance lg:text-4xl">
                Todo canal,{" "}
                <span className="text-primary">um lugar só</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Redes sociais, telefone, agenda, e-mail e pagamento: tudo
                cai no mesmo funil, com o WhatsApp como centro do
                atendimento. Nada de aba trocada, nada de copiar e colar
                entre sistemas.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Todo canal cai no mesmo funil, sem planilha",
                  "WhatsApp como centro do atendimento",
                  "Nenhum lead se perde entre uma ferramenta e outra",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <CheckIcon className="size-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </BlurFade>
          <BlurFade direction="left" delay={0.15}>
            <IntegrationsBeam />
          </BlurFade>
        </div>
      </section>

      {/* Dashboard */}
      <section id="dashboard" className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <span className="text-sm font-medium text-primary">
              Módulo · Dashboard
            </span>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance lg:text-5xl">
              Veja os números do seu negócio{" "}
              <span className="text-primary">em tempo real</span>
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              O Dashboard reúne vendas, leads e atendimento em painéis
              visuais que qualquer pessoa da equipe entende, sem planilha,
              sem pedir relatório pra ninguém.
            </p>
          </BlurFade>

          <BlurFade delay={0.2} offset={32}>
            <HeroMockup className="mt-16" />
          </BlurFade>
        </div>
      </section>

      {/* Live activity */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <RetroGrid />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <BlurFade direction="right" className="order-2 lg:order-1">
            <ActivityList />
          </BlurFade>
          <BlurFade direction="left" delay={0.15} className="order-1 lg:order-2">
            <div>
              <span className="text-sm font-medium text-primary">
                Operação ao vivo
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance lg:text-4xl">
                Cada lead, rastreado do{" "}
                <span className="text-primary">primeiro contato à venda</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Novo lead, resposta enviada, alerta de atraso, negócio
                fechado: um feed ao vivo do que está acontecendo na
                equipe, sem precisar abrir planilha nenhuma.
              </p>
              <p className="mt-4 text-muted-foreground">
                Por trás: os três produtos, alimentando o mesmo funil.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Recursos */}
      <section id="recursos" className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <span className="text-sm font-medium text-primary">Recursos</span>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance lg:text-5xl">
              Simples de usar hoje, pronto para crescer amanhã
            </h2>
          </BlurFade>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <BlurFade key={f.title} delay={i * 0.1}>
                <SpotlightCard className="h-full p-6">
                  <div className="mb-4 w-fit rounded-xl bg-primary/10 p-2.5 text-primary">
                    {f.icon}
                  </div>
                  <h3 className="text-base font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {f.body}
                  </p>
                </SpotlightCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <span className="text-sm font-medium text-primary">
              Como funciona
            </span>
            <h2 className="mx-auto mt-3 max-w-2xl text-center text-3xl font-semibold tracking-tight text-balance lg:text-5xl">
              Comece a usar em três passos simples
            </h2>
          </BlurFade>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {steps.map((s, i) => (
              <BlurFade key={s.num} delay={i * 0.12}>
                <div className="text-center">
                  <span className="mx-auto flex size-11 items-center justify-center rounded-full bg-primary text-base font-semibold text-primary-foreground">
                    {s.num}
                  </span>
                  <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {s.body}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Programa fundador — no lugar dos depoimentos inventados.
          O bloco e a contagem de vagas vivem em founder-program.tsx,
          compartilhados com a /pricing. */}
      <FounderProgram className="relative py-24 lg:py-32" />

      {/* Pricing */}
      <section id="preco" className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-semibold tracking-tight text-balance lg:text-5xl">
              Um preço por produto.{" "}
              <span className="text-primary">Combine e economize.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              CRM, Landing Page e Dashboard podem ser contratados separados
              ou juntos. Quanto mais módulos, menor o preço de cada um.
            </p>
          </BlurFade>

          <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-3">
            {pricingTeasers.map((p, i) => (
              <BlurFade key={p.name} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-2xl border bg-card p-6">
                  <div className="mb-4 w-fit rounded-xl bg-primary/10 p-3 text-primary">
                    {p.icon}
                  </div>
                  <span className="text-sm font-medium text-primary">
                    {p.name}
                  </span>
                  <p className="mt-3 text-3xl font-semibold tracking-tight">
                    {p.price}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {p.unit}
                  </p>
                  <p className="mt-4 flex-1 text-sm text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>

          <BlurFade delay={0.3}>
            <div className="mx-auto mt-6 flex max-w-4xl flex-col items-center justify-between gap-4 rounded-2xl border border-primary/30 bg-primary/5 px-8 py-6 text-center sm:flex-row sm:text-left">
              <p className="text-sm text-card-foreground">
                <strong className="font-semibold">
                  CRM + Dashboard a partir de R$394/mês.
                </strong>{" "}
                Combine os módulos e o preço já sai com o desconto aplicado.
              </p>
              <Button className="shrink-0 rounded-full" asChild>
                <a href="/pricing">Ver todos os planos e valores →</a>
              </Button>
            </div>
          </BlurFade>

          {/*
            O card do programa fundador que ficava aqui foi removido: a seção
            "Somos novos. Por isso o programa fundador." acima já conta essa
            história inteira, com o mesmo contador de vagas. Dois blocos
            dizendo "2 de 5 vagas" na mesma página enfraqueciam os dois — e o
            botão daqui nem era um link, não levava a lugar nenhum.
          */}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 lg:py-32">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <BlurFade>
            <h2 className="text-center text-3xl font-semibold tracking-tight lg:text-4xl">
              Perguntas frequentes
            </h2>
          </BlurFade>
          <BlurFade delay={0.15}>
            <Accordion type="single" collapsible className="mt-12">
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

      {/* CTA */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <AuroraBackground intensity="subtle" />
        <Particles quantity={50} />
        <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
          <BlurFade>
            <h2 className="text-4xl font-semibold tracking-tight text-balance lg:text-6xl">
              Pronto para organizar e{" "}
              <span className="text-primary">escalar seu negócio</span>?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Fale com nosso time e veja como a mytek se encaixa na rotina
              da sua empresa.
            </p>
            <div className="mt-10">
              <ShimmerButton href="/pricing" className="h-14 px-10 text-base">
                <RocketIcon className="size-5" />
                Ver planos e valores
              </ShimmerButton>
            </div>
          </BlurFade>
          <BlurFade delay={0.2}>
            <div className="mt-16">
              <p className="mb-4 text-xs text-muted-foreground">
                CRM, Landing Page e Dashboard, num único lugar
              </p>
              <Dock>
                <DockIcon label="CRM">
                  <FilterIcon className="size-5" />
                </DockIcon>
                <DockIcon label="Landing Page">
                  <GlobeIcon className="size-5" />
                </DockIcon>
                <DockIcon label="Dashboard">
                  <GaugeIcon className="size-5" />
                </DockIcon>
                <DockIcon label="WhatsApp">
                  <MessageCircleIcon className="size-5" />
                </DockIcon>
                <DockIcon label="Comece agora">
                  <RocketIcon className="size-5" />
                </DockIcon>
              </Dock>
            </div>
          </BlurFade>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
