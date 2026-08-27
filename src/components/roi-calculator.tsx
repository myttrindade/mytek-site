"use client";

import { useId, useState } from "react";

import { cn } from "@/lib/utils";

/**
 * "Quanto custa perder um lead?"
 *
 * A conta é feita inteiramente sobre números que o visitante digita. Nenhum
 * benchmark, média de mercado ou resultado de cliente entra aqui — a mytek não
 * tem base para afirmar nada disso, e um número inventado nesta seção
 * envenenaria justamente o argumento que ela existe para fazer.
 *
 * O que a calculadora mostra é aritmética simples e verificável:
 *
 *   leads que ficam sem follow-up  =  leads no mês × % sem follow-up
 *   receita exposta                =  esses leads × taxa de conversão × ticket
 *
 * "Exposta" e não "perdida": nem todo lead sem follow-up viraria venda, e
 * prometer que a mytek recupera esse valor inteiro seria mentira. O texto ao
 * lado do resultado diz isso explicitamente.
 */

const BRL = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

/** Faixas amplas o suficiente para PME de qualquer porte, sem sugerir um "normal". */
const fields = [
  {
    key: "leads",
    label: "Leads por mês",
    min: 10,
    max: 1000,
    step: 10,
    initial: 120,
    format: (v: number) => String(v),
  },
  {
    key: "ticket",
    label: "Ticket médio",
    min: 100,
    max: 20000,
    step: 100,
    initial: 1500,
    format: (v: number) => BRL.format(v),
  },
  {
    key: "conversao",
    label: "Taxa de conversão",
    min: 1,
    max: 50,
    step: 1,
    initial: 10,
    format: (v: number) => `${v}%`,
  },
  {
    key: "semFollowUp",
    label: "Leads sem follow-up",
    min: 0,
    max: 80,
    step: 5,
    initial: 25,
    format: (v: number) => `${v}%`,
  },
] as const;

type Campo = (typeof fields)[number]["key"];

export function RoiCalculator({ className }: { className?: string }) {
  const id = useId();
  const [valores, setValores] = useState<Record<Campo, number>>(() =>
    Object.fromEntries(fields.map((f) => [f.key, f.initial])) as Record<
      Campo,
      number
    >
  );

  const leadsSemFollowUp = Math.round(
    (valores.leads * valores.semFollowUp) / 100
  );
  const receitaExposta = Math.round(
    leadsSemFollowUp * (valores.conversao / 100) * valores.ticket
  );

  return (
    <div
      className={cn(
        "grid gap-8 rounded-3xl border bg-card/60 p-6 backdrop-blur sm:p-8 lg:grid-cols-2 lg:gap-12",
        className
      )}
    >
      <div className="space-y-6">
        {fields.map((f) => (
          <div key={f.key}>
            <div className="flex items-baseline justify-between gap-4">
              <label
                htmlFor={`${id}-${f.key}`}
                className="text-sm font-medium"
              >
                {f.label}
              </label>
              <output
                htmlFor={`${id}-${f.key}`}
                className="text-sm font-semibold tabular-nums text-primary"
              >
                {f.format(valores[f.key])}
              </output>
            </div>
            <input
              id={`${id}-${f.key}`}
              type="range"
              min={f.min}
              max={f.max}
              step={f.step}
              value={valores[f.key]}
              onChange={(e) =>
                setValores((v) => ({ ...v, [f.key]: Number(e.target.value) }))
              }
              // h-2 em vez de h-1.5: no celular a trilha é o alvo do dedo, e
              // 6px é fino demais para acertar sem tentar duas vezes.
              className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-muted accent-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center rounded-2xl border border-primary/25 bg-primary/[0.04] p-6 text-center sm:p-8">
        <span className="text-sm text-muted-foreground">
          {leadsSemFollowUp} leads por mês ficam sem follow-up
        </span>
        <span className="mt-3 text-4xl font-semibold tracking-tight tabular-nums lg:text-5xl">
          {BRL.format(receitaExposta)}
        </span>
        <span className="mt-2 text-sm font-medium">
          em receita exposta por mês
        </span>
        <p className="mt-5 text-xs leading-relaxed text-muted-foreground text-pretty">
          É a sua própria conta: leads sem follow-up × sua conversão × seu
          ticket. Nem todo lead viraria venda, e a mytek não recupera esse
          valor inteiro — mas hoje ninguém sabe qual parte dele foi embora por
          esquecimento.
        </p>
      </div>
    </div>
  );
}
