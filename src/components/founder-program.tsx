import { CheckIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/velora/blur-fade";

/**
 * Programa fundador — fonte única do texto e da contagem de vagas.
 *
 * Antes disto o número vivia como string solta em três lugares ("3 vagas
 * restantes" no eyebrow do hero, "2 das 5 vagas preenchidas" na home e "2 de
 * 5 vagas do programa fundador preenchidas" na /pricing). Na primeira venda
 * eles dessincronizariam, e uma página anunciando escassez com números que se
 * contradizem destrói justamente a credibilidade que o bloco existe para
 * construir.
 *
 * Para registrar uma venda do programa, mexa só em `FOUNDER_SLOTS_TAKEN`.
 */
export const FOUNDER_SLOTS_TOTAL = 5;
export const FOUNDER_SLOTS_TAKEN = 2;
export const FOUNDER_SLOTS_LEFT = FOUNDER_SLOTS_TOTAL - FOUNDER_SLOTS_TAKEN;

/**
 * Só entra aqui o que a mytek de fato entrega hoje a um fundador. Nada de
 * benefício aspiracional: cada linha é um compromisso que o time vai ter que
 * cumprir com cinco clientes reais.
 */
const benefits = [
  "Preço fundador travado enquanto você for cliente",
  "Acesso direto a quem constrói o produto",
  "Prioridade nas funcionalidades que você pedir",
  "Seu feedback entra no rumo do produto",
];

/** Texto do eyebrow do hero. Deriva do mesmo número da seção. */
export const founderEyebrow = `Programa fundador · ${FOUNDER_SLOTS_LEFT} ${
  FOUNDER_SLOTS_LEFT === 1 ? "vaga restante" : "vagas restantes"
}`;

/** Os pontinhos preenchidos/vazios, derivados da contagem. */
function SlotDots() {
  return (
    <span className="flex gap-1.5" aria-hidden="true">
      {Array.from({ length: FOUNDER_SLOTS_TOTAL }).map((_, i) => (
        <span
          key={i}
          className={
            i < FOUNDER_SLOTS_TAKEN
              ? "size-2.5 rounded-full bg-primary"
              : "size-2.5 rounded-full bg-muted"
          }
        />
      ))}
    </span>
  );
}

export function FounderProgram({ className }: { className?: string }) {
  return (
    <section id="fundador" className={className}>
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <BlurFade>
          <h2 className="text-3xl font-semibold tracking-tight text-balance lg:text-5xl">
            Somos novos.{" "}
            <span className="text-primary">Por isso o programa fundador.</span>
          </h2>
        </BlurFade>

        <BlurFade delay={0.15}>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            A mytek foi construída resolvendo um problema que a gente via todo
            dia: lead do Instagram e do WhatsApp esfriando porque ninguém tinha
            um lugar único pra acompanhar. Estamos abrindo{" "}
            <strong className="font-semibold text-foreground">
              {FOUNDER_SLOTS_TOTAL} vagas
            </strong>{" "}
            pra negócios que topem usar a plataforma de perto e dizer o que
            falta.
          </p>
        </BlurFade>

        {/* O que o fundador leva, item a item — antes isso era uma frase
            corrida no meio do parágrafo e a oferta passava batida. */}
        <BlurFade delay={0.25}>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <CheckIcon className="size-3" />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </BlurFade>

        <BlurFade delay={0.35}>
          <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <SlotDots />
              <p className="text-sm font-medium">
                {FOUNDER_SLOTS_LEFT} de {FOUNDER_SLOTS_TOTAL}{" "}
                {FOUNDER_SLOTS_LEFT === 1 ? "vaga restante" : "vagas restantes"}
              </p>
            </div>
            <Button size="lg" className="rounded-full" asChild>
              <a href="/contact">Quero ser fundador</a>
            </Button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
