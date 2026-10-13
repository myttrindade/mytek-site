import type { Metadata } from "next";
import { MailIcon, MessageCircleIcon } from "lucide-react";

import { GlowArc } from "@/components/brand/glow";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { eyebrow } from "@/components/solutions-grid";
import { BlurFade } from "@/components/velora/blur-fade";
import { GridPattern } from "@/components/velora/grid-pattern";
import { ContactForm } from "@/components/template/contact-form";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Dúvidas sobre a mytek, um produto pronto ou um projeto sob medida? Fale com a gente pelo WhatsApp, e-mail ou formulário.",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    icon: <MessageCircleIcon className="size-6" />,
    title: "WhatsApp",
    body: "Pra dúvidas rápidas sobre os produtos ou sobre o seu projeto.",
    detail: "(11) 91454-3016",
    href: "https://wa.me/5511914543016",
  },
  {
    icon: <MailIcon className="size-6" />,
    title: "E-mail",
    body: "Pra propostas comerciais e parcerias.",
    detail: "contato@mytek.com.br",
    href: "mailto:contato@mytek.com.br",
  },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* 1 · Capa */}
        <section className="dark relative overflow-hidden bg-background pt-28 pb-16 text-foreground lg:pt-36 lg:pb-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(94,52,247,0.45),transparent_70%)]"
          />
          <GridPattern
            width={56}
            height={56}
            className="fill-transparent stroke-white/[0.06] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_20%,black,transparent)]"
          />
          <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
            <BlurFade delay={0.05}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.06em]">
                <span className="size-2 rounded-full bg-lima shadow-[0_0_0_4px_rgba(198,255,0,0.2)]" />
                Contato
              </span>
            </BlurFade>
            <BlurFade delay={0.12}>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
                Fale com o <span className="text-lima">nosso time.</span>
              </h1>
            </BlurFade>
            <BlurFade delay={0.2}>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground text-pretty">
                Conte o que a sua empresa precisa: um produto pronto, um site,
                uma automação ou um projeto sob medida. A gente lê tudo e
                responde no WhatsApp em até 4h úteis.
              </p>
            </BlurFade>
          </div>
          <GlowArc direction="down" className="absolute inset-x-0 bottom-0 h-[70px]" />
        </section>

        {/* 2 · Canais e formulário */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:px-8">
            <BlurFade direction="right">
              <span className={eyebrow}>Onde nos encontrar</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-4xl">
                Escolha o canal
                <span className="text-emphasis">.</span>
              </h2>
              <div className="mt-8 space-y-4">
                {channels.map((channel) => (
                  <a
                    key={channel.title}
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 rounded-3xl border border-primary/20 bg-gradient-to-b from-white to-[#EFEAFF] p-6 shadow-[0_24px_46px_-24px_rgba(94,52,247,0.45)] transition-transform hover:-translate-y-0.5"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7A57FF] to-[#4A22D6] text-white shadow-[0_12px_26px_-10px_rgba(94,52,247,0.8)]">
                      {channel.icon}
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-extrabold">
                        {channel.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {channel.body}
                      </p>
                      <span className="mt-2 inline-block text-sm font-semibold text-primary group-hover:underline">
                        {channel.detail}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </BlurFade>
            <BlurFade direction="left" delay={0.12}>
              <ContactForm />
            </BlurFade>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
