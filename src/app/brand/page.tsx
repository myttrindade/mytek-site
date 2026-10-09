import type { Metadata } from "next";

import { Me3D } from "@/components/brand/me-3d";
import { MePattern } from "@/components/brand/me-pattern";
import { MytekLogo } from "@/components/mytek-logo";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/velora/shimmer-button";

export const metadata: Metadata = {
  title: "Design system",
  robots: { index: false, follow: false },
};

const colors = [
  { name: "Roxo", hex: "#5E34F7", use: "identidade · tecnologia", cls: "bg-primary text-white" },
  { name: "Roxo escuro", hex: "#0F0819", use: "estrutura · profundidade", cls: "bg-[#0F0819] text-white ring-1 ring-border" },
  { name: "Lilás", hex: "#EDEBFF", use: "respiro · suavidade", cls: "bg-[#EDEBFF] text-[#0F0819]" },
  { name: "Lima", hex: "#C6FF00", use: "ação · número · status · IA", cls: "bg-lima text-lima-foreground" },
  { name: "Branco", hex: "#FFFFFF", use: "conteúdo · clareza", cls: "bg-white text-[#0F0819]" },
];

const scale = [
  ["H1", "text-5xl lg:text-7xl font-extrabold tracking-[-0.04em]", "Transformamos complexidade em sistema."],
  ["H2", "text-3xl lg:text-5xl font-extrabold tracking-[-0.035em]", "Cada peça tem uma função."],
  ["H3", "text-xl font-bold tracking-[-0.02em]", "Alerta de lead parado"],
  ["Corpo", "text-base", "Conversas e negociações ficam na plataforma, com controle de acesso por usuário."],
  ["Legenda", "font-mono text-xs uppercase tracking-[0.06em]", "dados de exemplo · radar · ativo"],
] as const;

function Label({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <span className="font-mono text-xs font-bold uppercase tracking-[0.06em] text-lima">
      {n} · {children}
    </span>
  );
}

export default function BrandPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl space-y-24 px-4 pt-36 pb-24 lg:px-8">
        <header className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 lg:p-14">
          <MePattern cols={20} rows={10} tone="#241848" highlight={[34, 131]} className="[mask-image:linear-gradient(to_left,black,transparent_70%)]" />
          <div className="relative max-w-2xl space-y-6">
            <Label n="00">Design system · rascunho v0.1</Label>
            <h1 className="font-heading text-5xl font-extrabold tracking-[-0.045em] lg:text-7xl">
              mytek<span className="text-lima">.</span> Ultravioleta
            </h1>
            <p className="text-lg text-muted-foreground">
              Tokens, tipografia, símbolo, pattern e componentes que o site
              usa. Um lugar só para decidir antes de aplicar nas páginas.
            </p>
          </div>
        </header>

        <section className="space-y-8">
          <Label n="01">Cores</Label>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {colors.map((c) => (
              <div key={c.hex} className={`flex min-h-44 flex-col justify-end rounded-2xl p-4 ${c.cls}`}>
                <b className="font-heading text-lg">{c.name}</b>
                <code className="font-mono text-xs opacity-85">{c.hex}</code>
                <span className="text-xs opacity-85">{c.use}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Proporção: roxo escuro 45%, roxo 30%, lilás 13%, branco 7%, lima 5%.
            O lima só aparece onde há ação, número importante, crescimento, status ativo ou IA.
          </p>
        </section>

        <section className="space-y-8">
          <Label n="02">Tipografia</Label>
          <div className="space-y-6 rounded-2xl border border-border bg-card p-6 lg:p-10">
            {scale.map(([name, cls, sample]) => (
              <div key={name} className="grid gap-2 border-t border-border pt-5 first:border-0 first:pt-0 lg:grid-cols-[110px_1fr]">
                <span className="font-mono text-xs text-muted-foreground">{name}</span>
                <p className={`font-heading ${cls}`}>{sample}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <Label n="03">Logo e símbolo</Label>
            <div className="flex min-h-56 flex-col items-center justify-center gap-8 rounded-2xl border border-border bg-card p-8">
              <MytekLogo className="text-6xl" />
              <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                assinatura · ponto sempre lima
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <Label n="04">Símbolo M/E em 3D</Label>
            <div className="flex min-h-56 items-center justify-center rounded-2xl border border-border bg-card p-8">
              <Me3D size={150} />
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <Label n="05">Pattern</Label>
          <div className="relative h-64 overflow-hidden rounded-2xl border border-border bg-card">
            <MePattern cols={24} rows={8} tone="#2A1D52" highlight={[30, 77, 121]} />
          </div>
          <p className="text-sm text-muted-foreground">
            O pattern nasce só da geometria do M/E, em roxo escuro, nunca
            competindo com o conteúdo. Um módulo lima marca o item ativo.
          </p>
        </section>

        <section className="space-y-6">
          <Label n="06">Componentes</Label>
          <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-card p-8">
            <ShimmerButton href="#">Falar com o time →</ShimmerButton>
            <Button size="lg">Primário roxo</Button>
            <Button size="lg" variant="outline">Contorno</Button>
            <Button size="lg" variant="ghost">Fantasma</Button>
            <span className="inline-flex items-center gap-2 rounded-full bg-background px-3 py-1.5 text-xs font-semibold ring-1 ring-border">
              <i className="size-2 rounded-full bg-lima shadow-[0_0_0_3px_rgba(198,255,0,.25)]" />
              Ativo
            </span>
            <span className="font-heading text-3xl font-extrabold tracking-tight">
              R$ <mark className="bg-lima px-1 text-lima-foreground">18.400</mark>
            </span>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
