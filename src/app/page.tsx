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
  StarIcon,
  ZapIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ActivityList } from "@/components/demo/activity-list";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroMockup } from "@/components/demo/hero-mockup";
import { FunnelPreview } from "@/components/demo/funnel-preview";
import { LandingPageMockup } from "@/components/demo/landing-page-mockup";
import { AnimatedGradientText } from "@/components/velora/animated-gradient-text";
import { AuroraBackground } from "@/components/velora/aurora-background";
import { AvatarCircles } from "@/components/velora/avatar-circles";
import { BlurFade } from "@/components/velora/blur-fade";
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

const logos = [
  "Nortec",
  "Vidraçaria Aurora",
  "Grupo Meridian",
  "Clínica Bellavie",
  "Estúdio Fora",
  "Construtora Vale",
  "Ateliê Lima",
  "Distribuidora Rota",
];

const stats = [
  { value: 18, suffix: "%", prefix: "", label: "Taxa de conversão" },
  { value: 96, suffix: "%", prefix: "", label: "Satisfação" },
  { value: 129, suffix: "/mês", prefix: "R$", label: "CRM a partir de" },
  { value: 10, suffix: " min", prefix: "", label: "Pra configurar" },
];

const products = [
  {
    id: "crm",
    icon: <FilterIcon className="size-6" />,
    name: "CRM",
    description:
      "Funil de vendas visual e uma automação que avisa quando um lead esfria no WhatsApp. Zero venda perdida por demora.",
  },
  {
    id: "landing-page",
    icon: <GlobeIcon className="size-6" />,
    name: "Landing Page",
    description:
      "Sua própria página, conectada ao mesmo funil — pronta pra converter visitante em lead sem depender de agência.",
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
    body: "Comece a usar em minutos, sem precisar de equipe técnica.",
  },
  {
    icon: <MousePointerClickIcon className="size-5" />,
    title: "Interface intuitiva",
    body: "Pensada para quem não é técnico, com curva de aprendizado curta.",
  },
  {
    icon: <ShieldIcon className="size-5" />,
    title: "Controle de acesso",
    body: "Defina o que cada administrador ou usuário pode ver e fazer.",
  },
  {
    icon: <MessageCircleIcon className="size-5" />,
    title: "Suporte próximo",
    body: "Atendimento direto pelo WhatsApp, sem burocracia.",
  },
];

const steps = [
  {
    num: "1",
    title: "Crie sua conta",
    body: "Cadastre seu negócio e escolha os módulos que fazem sentido pro seu momento.",
  },
  {
    num: "2",
    title: "Personalize",
    body: "Configure seu dashboard, sua landing page e seu funil de vendas do seu jeito.",
  },
  {
    num: "3",
    title: "Acompanhe os resultados",
    body: "Veja tudo em tempo real e ajuste sua estratégia com base em dados de verdade.",
  },
];

const testimonials = [
  {
    quote:
      "A gente perdia lead porque a mensagem no Instagram só era vista horas depois. Com a mytek, o alerta de lead parado mudou isso na primeira semana.",
    name: "Ana Ribeiro",
    role: "Sócia, Estúdio Fora",
  },
  {
    quote:
      "Configuração foi literalmente 10 minutos. O funil já veio pronto pro nosso jeito de trabalhar — não precisei montar nada do zero.",
    name: "Camila Duarte",
    role: "Gerente comercial, Nortec",
  },
  {
    quote:
      "Finalmente um dashboard que a equipe inteira entende sem explicação. É a métrica que eu realmente uso pra decidir.",
    name: "Patrícia Nunes",
    role: "Sócia, Vidraçaria Aurora",
  },
  {
    quote:
      "Minha equipe usa o CRM sozinha, sem treinamento de uma semana. Isso sozinho já pagou a assinatura.",
    name: "Rafael Souza",
    role: "Diretor comercial, Grupo Meridian",
  },
  {
    quote:
      "Publicamos a landing page em uma tarde e os leads já caíam direto no funil. Nenhuma agência resolveu isso tão rápido.",
    name: "Beatriz Lima",
    role: "Marketing, Distribuidora Rota",
  },
  {
    quote:
      "O programa fundador valeu muito a pena — condições especiais e o time realmente ouviu nosso feedback pra moldar o produto.",
    name: "Juliana Prado",
    role: "Sócia, Ateliê Lima",
  },
];

const faqs = [
  {
    q: "CRM, Landing Page e Dashboard são vendidos separados?",
    a: "Sim. Cada módulo tem seu próprio preço e pode ser contratado sozinho. Quando você combina CRM e Dashboard, o preço de cada um já sai menor — é o incentivo pra usar os módulos juntos.",
  },
  {
    q: "A mytek é feita só pra um tipo de negócio?",
    a: "Não. CRM, Landing Page e Dashboard servem pra qualquer negócio que precise de funil, página ou métrica em tempo real — comércio, serviço, indústria, o que for. Você escolhe os módulos que fazem sentido pro seu momento.",
  },
  {
    q: "Preciso de equipe técnica pra configurar?",
    a: "Não. A implantação leva minutos e a interface foi pensada pra quem não é técnico. Se usar WhatsApp, ajudamos na conexão do seu número comercial durante a configuração.",
  },
  {
    q: "Existe algum benefício gratuito?",
    a: "Sim. Landing Page e Dashboard incluem 1 mês de manutenção e ajustes gratuitos (até 5 solicitações). Depois desse período, dá pra migrar pro Dashboard com suporte ou contratar manutenção avulsa.",
  },
];

const pricingTeasers = [
  {
    name: "CRM",
    price: "R$129/mês",
    unit: "a partir de · 3 usuários incluídos",
    description:
      "Funil de vendas visual, atendimento via WhatsApp e automação de lead parado.",
  },
  {
    name: "Landing Page",
    price: "R$899",
    unit: "pagamento único",
    description:
      "Página conectada ao funil, pronta em poucos dias após aprovação do conteúdo.",
  },
  {
    name: "Dashboard",
    price: "R$199/mês",
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
              <span className="font-medium">
                Novo · Módulo Conhecimento com IA
              </span>
            </span>
          </BlurFade>

          <BlurFade delay={0.15}>
            <h1 className="mx-auto mt-8 max-w-3xl text-5xl font-semibold tracking-tight text-balance lg:text-7xl">
              Dashboards, landing pages e{" "}
              <AnimatedGradientText>CRM</AnimatedGradientText> numa
              plataforma só
            </h1>
          </BlurFade>

          <BlurFade delay={0.35}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
              mytek reúne as ferramentas que seu negócio precisa pra atrair
              cliente, acompanhar resultado e organizar venda — tudo num só
              lugar, sem complicação.
            </p>
          </BlurFade>

          <BlurFade delay={0.5}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <ShimmerButton href="/pricing">
                <RocketIcon className="size-4" />
                Começar agora
              </ShimmerButton>
              <Button variant="ghost" size="lg" asChild>
                <a href="#produtos">Ver produtos</a>
              </Button>
            </div>
          </BlurFade>

          <BlurFade delay={0.6}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <AvatarCircles
                people={[
                  "Ana Ribeiro",
                  "Camila Duarte",
                  "Patrícia Nunes",
                  "Rafael Souza",
                  "Beatriz Lima",
                ]}
                extra={180}
              />
              <div className="flex flex-col items-center gap-0.5 sm:items-start">
                <span className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="size-4 fill-current" />
                  ))}
                </span>
                <span className="text-sm text-muted-foreground">
                  Usado por 180+ negócios em todo o Brasil
                </span>
              </div>
            </div>
          </BlurFade>

          {/* Stats */}
          <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <BlurFade key={stat.label} delay={i * 0.1}>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-4xl font-semibold tracking-tight">
                    <NumberTicker
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Dor */}
      <section id="problema" className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <span className="text-sm font-medium text-primary">
              O problema
            </span>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance lg:text-5xl">
              Seus leads estão esfriando antes de virar venda
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
              <BlurFade key={pain.num} delay={i * 0.1}>
                <div className="rounded-2xl border bg-card p-7">
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
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Logo marquee */}
      <section className="border-y border-border/40 py-12">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <p className="mb-8 text-center text-sm text-muted-foreground">
            Negócios que confiam na mytek
          </p>
          <Marquee pauseOnHover className="[--duration:30s]">
            {logos.map((logo) => (
              <span
                key={logo}
                className="mx-8 text-xl font-semibold tracking-tight text-muted-foreground/60 transition-colors hover:text-foreground"
              >
                {logo}
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Produtos — visão geral */}
      <section id="produtos" className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-semibold tracking-tight text-balance lg:text-5xl">
              Três produtos,{" "}
              <span className="text-primary">uma plataforma só</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              CRM, Landing Page e Dashboard — trabalham juntos ou de forma
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

      {/* Módulos — o que cada um faz, na prática */}
      <section id="modulos" className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <span className="text-sm font-medium text-primary">Produtos</span>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance lg:text-5xl">
              O que cada módulo faz, na prática
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Três soluções pensadas para trabalhar juntas — ou de forma
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
                  Organize sua base e nunca mais perca uma venda
                </h3>
                <p className="mt-4 text-muted-foreground">
                  Do primeiro contato ao pós-venda: funil visual em Kanban,
                  atendimento via WhatsApp direto na plataforma, e histórico
                  completo de cada cliente — ninguém precisa "lembrar" de
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
                  Criamos a página do zero — ou você escolhe o modelo
                  essencial pronto — com foco em captar contato. Cada lead
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
              visuais que qualquer pessoa da equipe entende — sem planilha,
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
                fechado — um feed ao vivo do que está acontecendo na
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
                <div className="h-full rounded-2xl border bg-card p-6">
                  <div className="mb-4 w-fit rounded-xl bg-primary/10 p-2.5 text-primary">
                    {f.icon}
                  </div>
                  <h3 className="text-base font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {f.body}
                  </p>
                </div>
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

      {/* Testimonials */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-semibold tracking-tight text-balance lg:text-5xl">
              Negócios <span className="text-primary">confiam</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Passe o mouse nos cards — eles inclinam em 3D.
            </p>
          </BlurFade>
          <div className="mt-16 columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6">
            {testimonials.map((t, i) => (
              <BlurFade key={t.name} delay={(i % 3) * 0.1} className="break-inside-avoid">
                <TiltCard>
                  <figure className="rounded-2xl border bg-card p-6">
                    <span className="flex gap-0.5 text-amber-400">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <StarIcon key={s} className="size-3.5 fill-current" />
                      ))}
                    </span>
                    <blockquote className="mt-4 text-sm text-card-foreground">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-4 flex items-center gap-3">
                      <AvatarCircles people={[t.name]} className="[&>span]:size-8 [&>span]:text-[10px]" />
                      <div>
                        <p className="text-sm font-medium">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </figcaption>
                  </figure>
                </TiltCard>
              </BlurFade>
            ))}
          </div>
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
              CRM, Landing Page e Dashboard podem ser contratados separados
              ou juntos — quanto mais módulos, menor o preço de cada um.
            </p>
          </BlurFade>

          <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-3">
            {pricingTeasers.map((p, i) => (
              <BlurFade key={p.name} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-2xl border bg-card p-6">
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
                  CRM + Dashboard a partir de R$228/mês.
                </strong>{" "}
                Combine os módulos e o preço já sai com o desconto aplicado.
              </p>
              <Button className="shrink-0 rounded-full" asChild>
                <a href="/pricing">Ver todos os planos e valores →</a>
              </Button>
            </div>
          </BlurFade>

          <BlurFade delay={0.1}>
            <div
              id="fundador"
              className="mx-auto mt-16 max-w-2xl rounded-2xl border bg-card p-10 text-center"
            >
              <span className="text-xs font-semibold tracking-wide text-primary uppercase">
                Programa fundador
              </span>
              <p className="mx-auto mt-4 max-w-lg text-lg text-card-foreground italic">
                "Estamos abrindo o programa fundador pros primeiros clientes
                — condições especiais em troca do seu feedback direto pra
                moldar o produto."
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
              <Button variant="outline" size="lg" className="mt-6 rounded-full">
                Falar com o time fundador
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 lg:py-32">
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
