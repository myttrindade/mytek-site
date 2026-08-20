import type { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { BlurFade } from "@/components/velora/blur-fade";
import { ThemePicker } from "@/components/template/theme-picker";

export const metadata: Metadata = {
  title: "Themes",
  description:
    "Seis paletas de marca prontas pro kit de componentes da mytek. Pré-visualize ao vivo, copie sete variáveis CSS.",
};

export default function ThemesPage() {
  return (
    <main className="relative">
      <SiteHeader />

      <PageHeader
        eyebrow="Themes"
        title={
          <>
            Rebranding em <span className="text-primary">sete variáveis</span>
          </>
        }
        description="Os componentes nunca têm cor fixa no código: eles leem a paleta de marca a partir de tokens CSS. Escolha um preset, veja cada efeito seguir, depois copie o bloco pro globals.css."
      />

      <section className="pb-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <ThemePicker />
          </BlurFade>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
