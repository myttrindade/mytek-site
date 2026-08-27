import { SparklesIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * A IA mostrada pela resposta, não pela pergunta.
 *
 * A versão anterior listava quatro perguntas e parava aí — meia demonstração.
 * Quem lê "Quais leads estão parados há mais de 24 horas?" ainda não sabe o
 * que recebe de volta. Aqui a resposta aparece, com a forma que ela tem:
 * números somados, ranking, distribuição por canal.
 *
 * Os valores são **demonstrativos** e a legenda diz isso. É a mesma regra das
 * capturas de tela: o produto é real, os dados dentro dele não são de
 * ninguém.
 */

type Answer =
  | { kind: "resumo"; lines: string[]; highlight: string }
  | { kind: "ranking"; rows: Array<{ name: string; value: string; pct: number }> };

const exchanges: Array<{ question: string; answer: Answer }> = [
  {
    question: "Quais leads estão parados há mais de 24 horas?",
    answer: {
      kind: "resumo",
      lines: [
        "Encontrei 12 oportunidades.",
        "5 estão em proposta.",
        "4 aguardam resposta.",
        "3 estão sem contato há mais de 48h.",
      ],
      highlight: "Valor potencial: R$ 18.400",
    },
  },
  {
    question: "Qual canal trouxe mais vendas este mês?",
    answer: {
      kind: "ranking",
      rows: [
        { name: "WhatsApp", value: "R$ 62.400", pct: 100 },
        { name: "Instagram", value: "R$ 38.900", pct: 62 },
        { name: "Landing page", value: "R$ 21.300", pct: 34 },
        { name: "Indicação", value: "R$ 9.700", pct: 16 },
      ],
    },
  },
];

function AnswerBody({ answer }: { answer: Answer }) {
  if (answer.kind === "resumo") {
    return (
      <>
        {answer.lines.map((l) => (
          <p key={l} className="text-sm text-card-foreground">
            {l}
          </p>
        ))}
        <p className="mt-3 text-lg font-semibold tracking-tight tabular-nums">
          {answer.highlight}
        </p>
      </>
    );
  }

  return (
    <ul className="space-y-2.5">
      {answer.rows.map((r) => (
        <li key={r.name}>
          <div className="flex items-baseline justify-between gap-4 text-sm">
            <span className="text-card-foreground">{r.name}</span>
            <span className="font-semibold tabular-nums">{r.value}</span>
          </div>
          <div
            aria-hidden="true"
            className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted"
          >
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${r.pct}%` }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export function AiAnswers({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-5 lg:grid-cols-2", className)}>
      {exchanges.map((ex) => (
        <figure
          key={ex.question}
          className="flex flex-col rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur sm:p-6"
        >
          {/* Pergunta: alinhada à direita, como mensagem de quem pergunta. */}
          <p className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-muted px-4 py-2.5 text-sm text-card-foreground">
            {ex.question}
          </p>

          {/* Resposta: alinhada à esquerda, marcada como da IA. */}
          <div className="mt-4 max-w-[92%] rounded-2xl rounded-bl-md border border-primary/20 bg-primary/[0.04] px-4 py-3.5">
            <span className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wider text-primary uppercase">
              <SparklesIcon className="size-3" />
              mytek IA
            </span>
            <div className="mt-2.5 space-y-1">
              <AnswerBody answer={ex.answer} />
            </div>
          </div>

          <figcaption className="mt-4 text-[11px] text-muted-foreground">
            Resposta demonstrativa, com dados de exemplo.
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
