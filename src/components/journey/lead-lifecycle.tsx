"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

/**
 * O ciclo de vida de uma oportunidade, com o alerta como dobradiça.
 *
 * Quatro etapas acontecem em qualquer CRM. Duas — "Lead parado" e "Alerta
 * mytek" — são o argumento da empresa, e por isso são as únicas destacadas.
 * A leitura pretendida é: sem a dobradiça, a história termina em "parado".
 *
 * Como o resto dos visuais desta página, é um esquema rotulado e não uma
 * captura de tela: nenhum dado, nome ou número inventado aparece aqui.
 */

type Step = {
  label: string;
  detail: string;
  tone: "neutral" | "stalled" | "alert" | "win";
};

const steps: Step[] = [
  { label: "Novo lead", detail: "chega pelo canal que for", tone: "neutral" },
  { label: "Entra no CRM", detail: "vira card no funil", tone: "neutral" },
  { label: "Equipe atende", detail: "conversa no WhatsApp", tone: "neutral" },
  { label: "Proposta enviada", detail: "aguardando resposta", tone: "neutral" },
  { label: "Lead fica parado", detail: "2 dias sem andar", tone: "stalled" },
  { label: "A mytek identifica", detail: "o Radar marca o negócio", tone: "stalled" },
  { label: "Alerta no vendedor", detail: "o responsável é avisado", tone: "alert" },
  { label: "Follow-up", detail: "alguém retoma a conversa", tone: "neutral" },
  { label: "Venda", detail: "oportunidade recuperada", tone: "win" },
];

const toneStyles: Record<Step["tone"], string> = {
  neutral: "border-border/60 bg-card/60 text-card-foreground",
  stalled: "border-destructive/40 bg-destructive/[0.06] text-card-foreground",
  alert:
    "animate-alert-pulse border-primary/50 bg-primary text-primary-foreground",
  win: "border-emerald-500/40 bg-emerald-500/[0.08] text-card-foreground",
};

const dotStyles: Record<Step["tone"], string> = {
  neutral: "bg-muted-foreground/40",
  stalled: "bg-destructive",
  alert: "bg-primary-foreground",
  win: "bg-emerald-500",
};

/**
 * Um marcador percorre as nove etapas quando a seção entra na tela: é o lead
 * andando pelo funil, travando na 5, sendo pego pelo Radar na 6 e retomado
 * na 7. A animação **é** o argumento — quem só olha entende a história sem
 * ler uma linha.
 *
 * Todas as etapas ficam visíveis o tempo todo, inclusive no HTML exportado.
 * O que a animação faz é destacar uma de cada vez, nunca esconder as outras:
 * esconder conteúdo atrás de JavaScript foi o bug que já custou o FAQ e os
 * contadores desta página.
 *
 * `prefers-reduced-motion` desliga a viagem e deixa tudo em repouso.
 */
export function LeadLifecycle({ className }: { className?: string }) {
  const ref = useRef<HTMLOListElement>(null);
  const [atual, setAtual] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: ReturnType<typeof setInterval> | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !timer) {
          setAtual(0);
          timer = setInterval(() => {
            // Pausa mais longa nas etapas 5 e 6 (parado / a mytek identifica):
            // é onde a história acontece.
            setAtual((i) => (i === null ? 0 : (i + 1) % steps.length));
          }, 900);
        } else if (!entry.isIntersecting && timer) {
          clearInterval(timer);
          timer = undefined;
          setAtual(null);
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, []);

  return (
    <ol
      ref={ref}
      className={cn("grid gap-3 sm:grid-cols-2 lg:grid-cols-4", className)}
    >
      {steps.map((step, i) => (
        <li
          key={step.label}
          className={cn(
            "relative flex items-center gap-3 rounded-xl border px-4 py-3",
            toneStyles[step.tone],
            "transition-[transform,box-shadow,opacity] duration-500",
            atual === null
              ? ""
              : atual === i
                ? "z-10 -translate-y-0.5 opacity-100 shadow-lg"
                : "opacity-55",
            // O alerta ocupa duas colunas no desktop: é o momento em que a
            // mytek entra, e o layout deve dizer isso antes do texto.
            step.tone === "alert" && "sm:col-span-2 lg:col-span-2"
          )}
        >
          <span
            aria-hidden="true"
            className={cn("size-2 shrink-0 rounded-full", dotStyles[step.tone])}
          />
          <span className="min-w-0">
            <span className="block text-sm font-semibold">{step.label}</span>
            <span
              className={cn(
                "block text-xs",
                step.tone === "alert"
                  ? "text-primary-foreground/80"
                  : "text-muted-foreground"
              )}
            >
              {step.detail}
            </span>
          </span>
          <span
            aria-hidden="true"
            className={cn(
              "ml-auto shrink-0 text-xs tabular-nums",
              step.tone === "alert"
                ? "text-primary-foreground/60"
                : "text-muted-foreground/50"
            )}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
        </li>
      ))}
    </ol>
  );
}
