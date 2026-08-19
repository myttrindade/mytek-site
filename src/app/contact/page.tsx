import type { Metadata } from "next";
import { MailIcon, MessageCircleIcon, UsersIcon } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { BlurFade } from "@/components/velora/blur-fade";
import { ContactForm } from "@/components/template/contact-form";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Dúvidas sobre a mytek, o programa fundador ou o plano padrão? Fale com a gente.",
};

const channels = [
  {
    icon: <MessageCircleIcon className="size-5" />,
    title: "WhatsApp",
    body: "Pra dúvidas rápidas sobre o produto ou a configuração.",
    detail: "(11) 90000-0000",
  },
  {
    icon: <MailIcon className="size-5" />,
    title: "E-mail",
    body: "Pra propostas comerciais e parcerias.",
    detail: "contato@mytek.app",
  },
  {
    icon: <UsersIcon className="size-5" />,
    title: "Programa fundador",
    body: "Ainda restam vagas com preço especial nos 3 primeiros meses.",
    detail: "2 de 5 vagas preenchidas",
  },
];

export default function ContactPage() {
  return (
    <main className="relative">
      <SiteHeader />

      <PageHeader
        eyebrow="Contato"
        title={
          <>
            Fale com um <span className="text-primary">humano</span>
          </>
        }
        description="Dúvidas sobre o funil, a automação ou o programa fundador? Manda uma mensagem — a gente lê tudo."
      />

      <section className="pb-28">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:px-8">
          <BlurFade direction="right">
            <div className="space-y-4">
              {channels.map((channel) => (
                <div
                  key={channel.title}
                  className="flex items-start gap-4 rounded-2xl border bg-card p-6"
                >
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {channel.icon}
                  </span>
                  <div>
                    <h2 className="font-semibold">{channel.title}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {channel.body}
                    </p>
                    <p className="mt-2 text-sm font-medium text-primary">
                      {channel.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </BlurFade>
          <BlurFade direction="left" delay={0.12}>
            <ContactForm />
          </BlurFade>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
