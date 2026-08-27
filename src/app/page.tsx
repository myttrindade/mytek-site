import { Fragment } from "react";

import {
  BellRingIcon,
  CheckIcon,
  FilterIcon,
  GaugeIcon,
  GlobeIcon,
  MessageCircleIcon,
  RocketIcon,
  ShieldIcon,
  SparklesIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ActivityList } from "@/components/demo/activity-list";
import { FounderProgram, founderEyebrow } from "@/components/founder-program";
import { JourneyFlow } from "@/components/journey/journey-flow";
import { LeadLifecycle } from "@/components/journey/lead-lifecycle";
import { StalledPanel } from "@/components/journey/stalled-panel";
import { AiAnswers } from "@/components/ai-answer";
import { RoiCalculator } from "@/components/roi-calculator";
import { ProductShot } from "@/components/product-shot";
import { SocialProof } from "@/components/social-proof";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroMockup } from "@/components/demo/hero-mockup";
import { FunnelPreview } from "@/components/demo/funnel-preview";
import { LandingPageMockup } from "@/components/demo/landing-page-mockup";
import { IntegrationsBeam } from "@/components/demo/integrations-beam";
import { AuroraBackground } from "@/components/velora/aurora-background";
import { BlurFade } from "@/components/velora/blur-fade";
import { Dock, DockIcon } from "@/components/velora/dock";
import { GridPattern } from "@/components/velora/grid-pattern";
import { NumberTicker } from "@/components/velora/number-ticker";
import { Particles } from "@/components/velora/particles";
import { RetroGrid } from "@/components/velora/retro-grid";
import { ScrollProgress } from "@/components/velora/scroll-progress";
import { ShimmerButton } from "@/components/velora/shimmer-button";
import { SpotlightCard } from "@/components/velora/spotlight-card";
import { productShots } from "@/lib/site-config";

import { cn } from "@/lib/utils";

import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/**
 * Funcionalidade vira benefício: o título diz o que a pessoa ganha, o corpo
 * diz como. A versão anterior era um marquee de rótulos soltos ("Funil visual
 * em Kanban", "Módulo de IA sobre os dados") que descrevia o software sem
 * dizer o que ele resolve.
 *
 * "Alerta de lead parado" vem primeiro porque é o argumento da empresa.
 */
const benefits = [
  {
    icon: <BellRingIcon className="size-5" />,
    title: "Alerta de lead parado",
    body: "Saiba quais oportunidades estão esfriando antes que seja tarde para agir.",
  },
  {
    icon: <MessageCircleIcon className="size-5" />,
    title: "WhatsApp com contexto",
    body: "Converse com o lead sem perder o histórico da oportunidade nem trocar de aba.",
  },
  {
    icon: <FilterIcon className="size-5" />,
    title: "Funil que a equipe entende",
    body: "Cada etapa com responsável, valor e última interação. Ninguém precisa lembrar de nada.",
  },
  {
    icon: <GaugeIcon className="size-5" />,
    title: "Origem das vendas",
    body: "Descubra quais canais realmente geram venda, e pare de investir no achismo.",
  },
  {
    icon: <GlobeIcon className="size-5" />,
    title: "Captura conectada",
    body: "A landing page manda o lead direto para o funil, sem planilha no meio do caminho.",
  },
  {
    icon: <SparklesIcon className="size-5" />,
    title: "Perguntas sobre seus dados",
    body: "Pergunte em português e a IA responde sobre a sua base, sem você garimpar no funil.",
  },
  {
    icon: <ShieldIcon className="size-5" />,
    title: "Cada um vê o que deve",
    body: "Controle de acesso por usuário: você define o que administrador e vendedor enxergam.",
  },
  {
    icon: <MessageCircleIcon className="size-5" />,
    title: "Suporte que responde",
    body: "Atendimento direto no WhatsApp, sem central de tickets. Resposta em até 4h úteis.",
  },
];

/**
 * Só o primeiro item é um número que conta — os outros três são fatos
 * comerciais, não métricas. Nada aqui pode ser uma média inventada: a versão
 * anterior anunciava "18% de taxa de conversão" e "96% de satisfação" sem
 * nenhuma base, o que é publicidade enganosa (CDC art. 37).
 */
/**
 * Quatro fatos defensáveis, logo abaixo do CTA. A Novus faz isso e funciona:
 * responde à objeção antes de ela ser formulada. Cada item aqui precisa ser
 * verdade hoje — se algum deixar de ser, tire, não reescreva mais bonito.
 */
/**
 * Cada dor é uma frase que uma equipe comercial de fato diz, seguida do que
 * a mytek faz a respeito. O formato veio de observar que dor em terceira
 * pessoa ("mensagem no Instagram ignorada") não gera reconhecimento — a
 * pessoa precisa se ouvir falando.
 *
 * São falas genéricas do setor, não depoimentos: por isso sem nome, sem
 * empresa e sem aspas de autoria.
 */
/** A cadeia da captura, do visitante à venda. Elo por elo, sem metáfora. */
const captureChain = [
  "Visitante",
  "Landing page",
  "Lead no funil",
  "Vendedor",
  "Venda",
];

const pains = [
  {
    quote: "Respondi esse cliente semana passada e esqueci de voltar.",
    title: "O alerta lembra por você",
    answer:
      "Quando um negócio para de andar numa etapa, o responsável é avisado — antes de a oportunidade esfriar.",
  },
  {
    quote:
      "Cliente chama no Instagram, no WhatsApp e pelo site, e a equipe se perde.",
    title: "Um funil só, com o histórico junto",
    answer:
      "Todo lead entra na mesma fila, com a conversa e a ficha do negócio na mesma tela.",
  },
  {
    quote: "Não sei quantos leads viraram venda esse mês.",
    title: "O número existe sem ninguém montar planilha",
    answer:
      "Vendas, conversão e origem em tempo real, sem depender de alguém preencher célula.",
  },
  {
    quote: "O vendedor saiu e levou o histórico dos clientes com ele.",
    title: "O histórico é da empresa",
    answer:
      "Conversas e negociações ficam na plataforma, com controle de acesso por usuário.",
  },
];

const trustPoints = [
  "Sem fidelidade",
  "Configuração em 10 minutos com a gente",
  "Dados no Brasil, sob a LGPD",
  "Suporte no WhatsApp em até 4h úteis",
];

const heroStats: Array<
  { label: string } & ({ value: number; suffix: string } | { text: string })
> = [
  // Cenário B: a conversa é a porta de entrada, não um cadastro.
  { value: 10, suffix: " min", label: "da conversa ao funil configurado" },
  { text: "R$197/mês", label: "CRM completo, 3 usuários" },
  { text: "3 módulos", label: "contrate separado ou junto" },
  { text: "Sem fidelidade", label: "cancele quando quiser" },
];

// Cenário B: o passo 1 descreve o que acontece de verdade hoje.
/**
 * As perguntas que o módulo de IA responde, ditas como o cliente diria.
 *
 * TODO(produto): confirmar que o módulo responde exatamente estas quatro. Elas
 * vieram do briefing, não de um teste na plataforma — se alguma ainda não
 * funcionar, tire daqui em vez de deixar o site prometer.
 */
const aiQuestions = [
  "Qual vendedor está convertendo mais?",
  "Quais oportunidades têm maior chance de fechar?",
];

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
    // Cenário B também aqui: esta resposta ainda dizia "o cadastro leva cerca
    // de 10 minutos", que era o quinto ponto de auto-serviço da página e tinha
    // escapado da rodada anterior.
    a: "Não. A configuração leva cerca de 10 minutos e a gente faz junto com você: o funil já vem com etapas padrão que dá pra usar do jeito que está ou renomear arrastando, e conectar o WhatsApp é escanear um QR Code. A Landing Page e o Dashboard a gente configura antes de entregar.",
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
    audience: "Para quem já recebe lead e perde venda por demora",
    price: "R$197/mês",
    unit: "a partir de · 3 usuários incluídos",
    description:
      "Funil, WhatsApp e alerta de lead parado.",
    href: "/pricing#crm",
    cta: "Ver planos do CRM",
    recommended: true,
  },
  {
    icon: <GlobeIcon className="size-6" />,
    name: "Landing Page",
    audience: "Para quem não tem onde mandar o tráfego",
    price: "R$1.497",
    unit: "pagamento único",
    description:
      "Página conectada ao funil, pronta em poucos dias.",
    href: "/pricing",
    cta: "Ver opções",
  },
  {
    icon: <GaugeIcon className="size-6" />,
    name: "Dashboard",
    audience: "Para quem decide no achismo por falta de número",
    price: "R$397/mês",
    unit: "a partir de · avulso, sem precisar de CRM",
    description:
      "Vendas e atendimento em tempo real. Mais barato como add-on do CRM.",
    href: "/pricing",
    cta: "Ver opções",
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
            {/*
              Barra de confiança: quatro fatos verificáveis na primeira dobra,
              cada um respondendo a uma objeção de compra antes de ela ser
              feita. Só entra aqui o que a empresa sustenta hoje — nada de
              "líder de mercado" ou número de clientes.
            */}
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              {trustPoints.map((t) => (
                <li key={t} className="flex items-center gap-1.5">
                  <CheckIcon className="size-3.5 text-primary" />
                  {t}
                </li>
              ))}
            </ul>
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
            O funil na primeira dobra: é a tela onde o alerta de lead parado
            aparece, então ela prova o argumento do H1 em vez de só ilustrar.
            Some inteira enquanto productShots.funil.src for null.
          */}
          <BlurFade delay={0.7}>
            <ProductShot
              shot={productShots.funil}
              priority
              className="mt-16 max-w-5xl"
            />
          </BlurFade>
        </div>
      </section>

      {/* Dor — dita na voz de quem sente, não na terceira pessoa */}
      <section id="problema" className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <BlurFade>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance lg:text-5xl">
              Você já ouviu isso{" "}
              <span className="text-primary">na sua empresa</span>
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Se alguma dessas frases parece familiar, o problema não é falta
              de lead. É o que acontece depois que ele chega.
            </p>
          </BlurFade>

          {/*
            Aspas de cliente em vez de cards em terceira pessoa. A frase gera
            reconhecimento — "isso acontece aqui" — e a resposta logo abaixo
            mostra o que muda. As falas são o tipo de coisa que qualquer
            equipe comercial diz; não são depoimentos e não têm autoria, por
            isso não aparecem com nome nem empresa.
          */}
          <div className="mt-14 space-y-4">
            {pains.map((pain, i) => (
              <BlurFade key={pain.quote} delay={i * 0.08}>
                <div className="grid gap-4 rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur md:grid-cols-[1.1fr_1fr] md:items-center md:gap-10 md:p-8">
                  <p className="text-lg text-card-foreground text-pretty italic lg:text-xl">
                    “{pain.quote}”
                  </p>
                  <div className="border-t border-border/60 pt-4 md:border-t-0 md:border-l md:pt-0 md:pl-10">
                    <p className="font-semibold text-balance">{pain.title}</p>
                    <p className="mt-1.5 text-sm text-muted-foreground text-pretty">
                      {pain.answer}
                    </p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Do primeiro clique ao fechamento — a plataforma em cinco etapas */}
      <section id="jornada" className="relative border-y border-border/40 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-semibold tracking-tight text-balance lg:text-5xl">
              Do primeiro clique{" "}
              <span className="text-primary">ao fechamento</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground text-pretty">
              Captura, funil, alerta, dado e venda no mesmo lugar. Menos
              ferramenta desconectada, uma operação comercial inteira.
            </p>
          </BlurFade>
          <BlurFade delay={0.15}>
            <JourneyFlow className="mt-14" />
          </BlurFade>
        </div>
      </section>

      {/* Lead parado — o diferencial de marca, não uma funcionalidade */}
      <section id="lead-parado" className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <BlurFade>
            <span className="text-sm font-medium text-primary">
              O que nenhum CRM comum faz
            </span>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-balance lg:text-5xl">
              Seu lead não deveria{" "}
              <span className="text-primary">precisar lembrar de você</span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground text-pretty">
              Todo CRM registra o que já aconteceu. A mytek olha para o que
              parou de acontecer: quando uma oportunidade trava numa etapa, o
              responsável é avisado antes de ela esfriar.
            </p>
          </BlurFade>

          <BlurFade delay={0.15}>
            <LeadLifecycle className="mt-12" />
          </BlurFade>

          <BlurFade delay={0.3}>
            <p className="mt-8 text-sm text-muted-foreground">
              Sem o alerta, essa história termina na etapa 4.
            </p>
          </BlurFade>

          {/* O argumento vira painel: é assim que a informação chega ao time. */}
          <BlurFade delay={0.4}>
            <h3 className="mt-16 text-2xl font-semibold tracking-tight text-balance lg:text-3xl">
              Quantas oportunidades estão paradas agora?
            </h3>
            <StalledPanel className="mt-6" />
            <p className="mt-6 text-lg font-medium text-balance">
              Você não precisa lembrar.{" "}
              <span className="text-primary">A mytek lembra.</span>
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Diferenciais: cada funcionalidade dita como benefício */}
      <section id="recursos" className="relative border-y border-border/40 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance lg:text-4xl">
              O que você ganha, não o que a gente tem
            </h2>
          </BlurFade>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <BlurFade key={b.title} delay={i * 0.08}>
                <SpotlightCard className="h-full p-6">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {b.icon}
                  </span>
                  <h3 className="mt-4 text-base font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground text-pretty">
                    {b.body}
                  </p>
                </SpotlightCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/*
        A seção "Três produtos, uma plataforma só" foi removida: ela
        apresentava CRM/Landing Page/Dashboard em três cards e a seção
        seguinte apresentava os mesmos três de novo, com mais detalhe.
        Duas introduções seguidas para o mesmo assunto. A âncora
        #produtos, usada pelo menu, pelo hero e por três posts do blog,
        passou para a seção que sobreviveu.
      */}
      {/* Módulos: o que cada um faz, na prática */}
      <section id="produtos" className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <span className="text-sm font-medium text-primary">Produtos</span>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance lg:text-5xl">
              O que cada módulo faz, na prática
            </h2>
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

      {/* Landing Page como elo, não como produto avulso */}
      <section id="captura" className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <BlurFade>
            <span className="text-sm font-medium text-primary">Captura</span>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance lg:text-5xl">
              A landing page não é{" "}
              <span className="text-primary">um produto à parte</span>
            </h2>
            <p className="mt-5 max-w-2xl text-muted-foreground text-pretty">
              Ela é a porta de entrada da mesma máquina. Quem preenche o
              formulário já nasce como card no funil, com origem registrada —
              sem exportar planilha, sem alguém digitar de novo.
            </p>
          </BlurFade>

          {/* A cadeia inteira em cinco elos. Diagrama, não captura de tela. */}
          <BlurFade delay={0.15}>
            <ol className="mt-12 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
              {captureChain.map((step, i) => (
                <Fragment key={step}>
                  <li className="flex-1 rounded-xl border border-border/60 bg-card/60 px-4 py-3 text-center text-sm font-medium backdrop-blur">
                    {step}
                  </li>
                  {i < captureChain.length - 1 && (
                    <li
                      aria-hidden="true"
                      className="flex shrink-0 items-center justify-center text-muted-foreground"
                    >
                      <span className="sm:hidden">↓</span>
                      <span className="hidden sm:inline">→</span>
                    </li>
                  )}
                </Fragment>
              ))}
            </ol>
          </BlurFade>

          <BlurFade delay={0.3}>
            <p className="mt-8 text-sm text-muted-foreground">
              A gente cria a página, ou você usa o modelo essencial pronto.
              Nos dois casos o formulário já sai ligado no funil.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Todo lead, no mesmo funil */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <BlurFade direction="right">
            <div>
              <span className="text-sm font-medium text-primary">
                Uma fila só
              </span>
              {/*
                A versão anterior dizia "Todo canal, um lugar só" e listava
                redes sociais, telefone, agenda, e-mail e pagamento — nenhuma
                dessas integrações existe hoje. Promessa maior que o produto
                é a mesma família de problema dos números inventados, só que
                mais difícil de detectar. Agora a frase descreve o que a
                plataforma de fato faz: reunir no funil o lead que chega por
                WhatsApp, Instagram, site ou formulário.
              */}
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance lg:text-4xl">
                Todo lead,{" "}
                <span className="text-primary">no mesmo funil</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                WhatsApp, Instagram, formulário do site ou landing page: de
                onde o lead vier, ele entra na mesma fila, com a conversa e a
                ficha do negócio na mesma tela. Sem copiar e colar entre
                sistemas.
              </p>
              {/* Os três bullets que ficavam aqui parafraseavam o parágrafo
                  logo acima, palavra por palavra. Sobrou o que acrescenta. */}
              <ul className="mt-6 space-y-3 text-sm">
                {[
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

      {/*
        Atendimento e Dashboard, provados pela tela em vez de descritos.
        Cada bloco some inteiro enquanto a captura correspondente não existir
        em src/lib/site-config.ts — inclusive o título e o texto, para a
        página não ficar com uma seção órfã falando de uma imagem ausente.
      */}
      {productShots.inbox.src && (
        <section id="atendimento" className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <BlurFade>
              <span className="text-sm font-medium text-primary">
                Atendimento
              </span>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance lg:text-5xl">
                Converse com o lead{" "}
                <span className="text-primary">sem perder o contexto</span>
              </h2>
              <p className="mt-5 max-w-2xl text-muted-foreground text-pretty">
                A conversa do WhatsApp e a ficha do negócio na mesma tela:
                funil, etapa, valor e origem. Ninguém precisa perguntar “quem
                é essa pessoa mesmo?” antes de responder.
              </p>
            </BlurFade>
            <BlurFade delay={0.15}>
              <ProductShot shot={productShots.inbox} className="mt-12" />
            </BlurFade>
          </div>
        </section>
      )}

      {productShots.dashboard.src && (
        <section id="painel" className="relative border-y border-border/40 py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <BlurFade>
              <span className="text-sm font-medium text-primary">Dashboard</span>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance lg:text-5xl">
                O dia da sua operação{" "}
                <span className="text-primary">numa tela só</span>
              </h2>
              <p className="mt-5 max-w-2xl text-muted-foreground text-pretty">
                Leads do dia, taxa de resposta, conversão e o que a equipe
                acabou de fazer. Sem pedir relatório para ninguém e sem abrir
                planilha.
              </p>
            </BlurFade>
            <BlurFade delay={0.15}>
              <ProductShot shot={productShots.dashboard} className="mt-12" />
            </BlurFade>
          </div>
        </section>
      )}

      {/* IA — mostrada pelo que ela responde, não pela sigla */}
      <section id="ia" className="relative border-y border-border/40 py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <BlurFade>
            <span className="text-sm font-medium text-primary">
              Módulo Conhecimento · plano Plus
            </span>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance lg:text-5xl">
              Pergunte em português.{" "}
              <span className="text-primary">A resposta vem da sua base.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-muted-foreground text-pretty">
              Em vez de garimpar o funil atrás de um dado, você pergunta. A IA
              lê o histórico da sua própria empresa — clientes, negociações,
              atendimentos — e responde.
            </p>
          </BlurFade>

          {/*
            Perguntas concretas em vez da palavra "IA". Quem lê entende para
            que serve em cinco segundos; "módulo de inteligência artificial"
            não diz nada e soa a buzzword vindo de empresa nova.
          */}
          <BlurFade delay={0.15}>
            <AiAnswers className="mt-12" />
          </BlurFade>

          <BlurFade delay={0.25}>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {aiQuestions.map((q) => (
                <li
                  key={q}
                  className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card/60 p-4 text-sm backdrop-blur"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
                  >
                    <SparklesIcon className="size-3.5" />
                  </span>
                  <span className="text-card-foreground">“{q}”</span>
                </li>
              ))}
            </ul>
          </BlurFade>

          <BlurFade delay={0.3}>
            <p className="mt-6 text-xs text-muted-foreground">
              O plano Plus inclui uma sessão de treinamento antes de liberar o
              acesso: a qualidade da resposta depende de como a sua empresa
              organiza a informação.
            </p>
          </BlurFade>
        </div>
      </section>

      {/*
        A seção "Recursos" foi removida e o que sobreviveu dela virou benefício
        em #diferenciais. Ela tinha quatro cards — "Implantação rápida",
        "Interface intuitiva", "Controle de acesso", "Suporte no WhatsApp" —
        que cabem no site de qualquer software e não diferenciam nada. Os dois
        que dizem algo verificável (controle de acesso e o SLA do suporte)
        continuam na página; os outros dois já estavam ditos no hero e na FAQ.
        A âncora #recursos, usada pelo menu, passou para #diferenciais.
      */}
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
      {/* Prova social. Não renderiza nada enquanto src/lib/social-proof.ts
          estiver vazio — ver o comentário no topo daquele arquivo. */}
      <SocialProof />

      <FounderProgram className="relative py-24 lg:py-32" />

      {/* ROI — o custo de não acompanhar, antes de falar do preço */}
      <section id="roi" className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance lg:text-5xl">
              Quanto custa{" "}
              <span className="text-primary">perder um lead?</span>
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground text-pretty">
              Mexa nos números do seu negócio. A conta é sua — a gente só
              mostra o resultado.
            </p>
          </BlurFade>
          <BlurFade delay={0.15}>
            <RoiCalculator className="mt-12" />
          </BlurFade>
        </div>
      </section>

      {/* Pricing */}
      <section id="preco" className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-semibold tracking-tight text-balance lg:text-5xl">
              Um preço por produto.{" "}
              <span className="text-primary">Combine e economize.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Quanto mais módulos, menor o preço de cada um.
            </p>
          </BlurFade>

          <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-3">
            {pricingTeasers.map((p, i) => (
              <BlurFade key={p.name} delay={i * 0.1}>
                {/* Cada card leva ao checkout do seu plano. Antes eles eram
                    puramente informativos: o visitante lia o preço e não tinha
                    o que fazer com a informação sem sair procurando. */}
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-2xl border bg-card p-6",
                    p.recommended &&
                      "border-primary/40 shadow-xl shadow-primary/5"
                  )}
                >
                  {p.recommended && (
                    <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-0.5 text-[11px] font-semibold text-primary-foreground">
                      Comece por aqui
                    </span>
                  )}
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
                  {/* "Para quem é" antes da descrição: o visitante se
                      reconhece (ou se descarta) antes de ler funcionalidade. */}
                  <p className="mt-4 text-sm font-medium text-card-foreground text-pretty">
                    {p.audience}
                  </p>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">
                    {p.description}
                  </p>
                  <Button
                    variant={p.recommended ? "default" : "outline"}
                    className="mt-6 w-full rounded-full"
                    asChild
                  >
                    <a href={p.href}>{p.cta}</a>
                  </Button>
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
            {/*
              Este é o ponto de maior intenção da página, e até aqui ele
              mandava para /pricing — uma página de leitura. Agora converte,
              com o preço logo ao lado para quem ainda quer comparar.
            */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ShimmerButton href="/contact" className="h-14 px-10 text-base">
                <RocketIcon className="size-5" />
                Falar com o time →
              </ShimmerButton>
              <Button variant="ghost" size="lg" asChild>
                <a href="/pricing">Ver planos e valores</a>
              </Button>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Sem fidelidade · resposta no WhatsApp em até 4h úteis
            </p>
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
