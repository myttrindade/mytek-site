import { Fragment } from "react";
import {
  BellRingIcon,
  GaugeIcon,
  HandshakeIcon,
  KanbanIcon,
  MousePointerClickIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * "Do primeiro clique ao fechamento" — a plataforma inteira em cinco etapas.
 *
 * É um **diagrama**, não uma captura de tela. A distinção importa: o site não
 * tem nenhum ativo visual do produto real, e recriar interfaces convincentes
 * em HTML seria vender algo que o visitante não pode conferir. Um esquema
 * rotulado explica o caminho sem fingir ser o produto.
 *
 * Renderiza no servidor de propósito: é a resposta à pergunta "para que serve
 * a mytek?", e ela precisa existir no HTML exportado — para o buscador, para o
 * preview de link e para quem está com JS lento.
 *
 * Só a etapa "Ação" anima. É onde a mytek age, e é a única animação da página
 * que carrega significado em vez de enfeite.
 */

const stages = [
  {
    step: "Captura",
    icon: MousePointerClickIcon,
    title: "O lead chega",
    body: "Landing page, Instagram, WhatsApp ou formulário: todo canal entra pela mesma porta.",
  },
  {
    step: "Gestão",
    icon: KanbanIcon,
    title: "Entra no funil",
    body: "Cada oportunidade vira um card com responsável, valor e última interação.",
  },
  {
    step: "Ação",
    icon: BellRingIcon,
    title: "A mytek avisa",
    body: "Parou de andar? O time é notificado antes de a oportunidade esfriar.",
    highlight: true,
  },
  {
    step: "Inteligência",
    icon: GaugeIcon,
    title: "Você enxerga tudo",
    body: "Qual canal traz venda, qual etapa trava, qual vendedor converte.",
  },
  {
    step: "Resultado",
    icon: HandshakeIcon,
    title: "A venda fecha",
    body: "Menos oportunidade perdida por esquecimento, mais negócio acompanhado até o fim.",
  },
];

export function JourneyFlow({ className }: { className?: string }) {
  return (
    <ol
      className={cn(
        "flex flex-col items-stretch md:flex-row",
        className
      )}
    >
      {stages.map((stage, i) => (
        <Fragment key={stage.step}>
          <li className="md:flex-1">
            <div
              className={cn(
                "flex h-full flex-col rounded-2xl border p-5 backdrop-blur",
                stage.highlight
                  ? "border-primary/40 bg-primary/[0.04]"
                  : "border-border/60 bg-card/60"
              )}
            >
              <span
                className={cn(
                  "flex size-9 items-center justify-center rounded-xl",
                  stage.highlight
                    ? "animate-alert-pulse bg-primary text-primary-foreground"
                    : "bg-primary/10 text-primary"
                )}
              >
                <stage.icon className="size-4.5" />
              </span>
              <span className="mt-4 text-[11px] font-semibold tracking-wider text-primary uppercase">
                {stage.step}
              </span>
              <h3 className="mt-1 text-base font-semibold text-balance">
                {stage.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground text-pretty">
                {stage.body}
              </p>
            </div>
          </li>

          {i < stages.length - 1 && (
            <li
              aria-hidden="true"
              className="flex shrink-0 items-center justify-center self-center py-2 md:px-2 md:py-0"
            >
              {/* Vertical no celular, horizontal no desktop. */}
              <span className="h-6 w-px border-l-2 border-dashed border-border md:h-px md:w-6 md:border-t-2 md:border-l-0" />
            </li>
          )}
        </Fragment>
      ))}
    </ol>
  );
}
