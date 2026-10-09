import {
  BellRingIcon,
  CheckIcon,
  SparklesIcon,
  WorkflowIcon,
} from "lucide-react";

import { Me3D } from "@/components/brand/me-3d";
import { cn } from "@/lib/utils";

/**
 * Composição da capa: quatro cartões de interface, um por frente de trabalho
 * da mytek (IA, CRM, churn, automação), em grade simétrica de 2x2, com o
 * símbolo 3D no centro exato da faixa entre as duas fileiras.
 *
 * Todos os números são de demonstração e a legenda abaixo diz isso: nada aqui
 * pode ser lido como resultado de cliente.
 */
const glass =
  "flex h-full flex-col rounded-2xl border border-white/10 bg-[#170E2A]/90 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)] backdrop-blur-md";

const mono = "font-mono text-[10px] font-bold uppercase tracking-[0.08em]";

function Card({
  className,
  float,
  children,
}: {
  className?: string;
  float: "a" | "b" | "c" | "d";
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "absolute h-[172px] w-[270px]",
        `hero-float-${float}`,
        className
      )}
    >
      <div className={glass}>{children}</div>
    </div>
  );
}

function Header({
  label,
  children,
}: {
  label: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className={cn(mono, "text-white/60")}>{label}</span>
      {children}
    </div>
  );
}

export function HeroVisual() {
  return (
    <div className="hero-vis mx-auto">
      <div className="hero-vis-in relative">
        {/* brilho e anéis centrados na faixa do meio (x 280, y 256) */}
        <div
          aria-hidden
          className="absolute left-1/2 top-[256px] size-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(94,52,247,0.55),transparent_68%)]"
        />
        <div
          aria-hidden
          className="absolute left-1/2 top-[256px] size-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/15"
        />
        <div
          aria-hidden
          className="absolute left-1/2 top-[256px] size-[212px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
        />
        <Me3D
          size={150}
          className="absolute left-1/2 top-[256px] -translate-x-1/2 -translate-y-1/2"
        />

        {/* fileira de cima */}
        <Card float="a" className="left-0 top-0">
          <div className="flex h-full flex-col gap-2.5 p-4">
            <Header label="Agente de IA">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 px-2 py-0.5 text-[10px] font-semibold text-white">
                <SparklesIcon className="size-3 text-lima" />
                respondendo
              </span>
            </Header>
            <p className="max-w-[88%] rounded-xl rounded-bl-sm bg-white/10 px-3 py-2 text-xs text-white">
              Vocês atendem sábado?
            </p>
            <p className="ml-auto max-w-[92%] rounded-xl rounded-br-sm bg-[#5E34F7] px-3 py-2 text-xs text-white">
              Atendemos sim, das 9h às 13h. Quer reservar às 10h?
            </p>
          </div>
        </Card>

        <Card float="b" className="right-0 top-0">
          <div className="flex h-full flex-col gap-3 p-4">
            <Header label="Radar · CRM">
              <BellRingIcon className="size-4 text-lima" />
            </Header>
            <div className="flex items-end gap-3">
              <span className="font-heading text-5xl font-extrabold leading-none tracking-[-0.05em] text-lima">
                12
              </span>
              <span className="pb-1 text-xs text-white/70">
                leads parados
                <br />
                <b className="text-white">R$ 18.400</b> em jogo
              </span>
            </div>
            <div className="mt-auto rounded-lg bg-white/[0.06] px-3 py-2 text-[11px] text-white/80">
              <span className="font-semibold text-white">Alerta enviado</span>{" "}
              para Carla · 2 dias sem andar
            </div>
          </div>
        </Card>

        {/* fileira de baixo */}
        <Card float="c" className="bottom-[32px] left-0">
          <div className="flex h-full flex-col gap-3 p-4">
            <Header label="Automação">
              <WorkflowIcon className="size-4 text-white/70" />
            </Header>
            <div className="flex items-center justify-between">
              {["Formulário", "WhatsApp", "CRM"].map((n, i) => (
                <div key={n} className="flex items-center">
                  <span
                    className={cn(
                      "rounded-lg border px-2 py-1.5 text-[10px] font-semibold",
                      i === 2
                        ? "border-lima/60 bg-lima/15 text-lima"
                        : "border-white/15 bg-white/[0.06] text-white"
                    )}
                  >
                    {n}
                  </span>
                  {i < 2 && (
                    <span className="hero-dash relative mx-1.5 h-px w-5 bg-white/40" />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-auto flex items-center gap-2 rounded-lg bg-white/[0.06] px-3 py-2 text-[11px] text-white/80">
              <CheckIcon className="size-3.5 text-lima" />
              Lead novo vira card no funil, sem planilha
            </div>
          </div>
        </Card>

        <Card float="d" className="bottom-[32px] right-0">
          <div className="flex h-full flex-col gap-2 p-4">
            <Header label="Previsão de churn">
              <span className="rounded-full bg-lima px-2 py-0.5 text-[10px] font-bold text-lima-foreground">
                14 em risco
              </span>
            </Header>
            <svg viewBox="0 0 240 80" className="h-[84px] w-full" aria-hidden>
              <defs>
                <linearGradient id="hv-fill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#6E48FF" stopOpacity="0.5" />
                  <stop offset="1" stopColor="#6E48FF" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 58 L30 52 L60 55 L90 40 L120 44 L150 30 L150 80 L0 80Z"
                fill="url(#hv-fill)"
              />
              <path
                d="M0 58 L30 52 L60 55 L90 40 L120 44 L150 30"
                fill="none"
                stroke="#8D6BFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M150 30 L180 22 L210 12 L240 8"
                fill="none"
                stroke="#C6FF00"
                strokeWidth="2.5"
                strokeDasharray="5 5"
                strokeLinecap="round"
              />
              <circle cx="150" cy="30" r="4" fill="#C6FF00" />
            </svg>
            <p className="text-[11px] text-white/60">
              tracejado = previsão do modelo
            </p>
          </div>
        </Card>

        <p className="absolute bottom-0 left-0 right-0 text-center text-[11px] text-white/45">
          Interfaces ilustrativas, com dados de exemplo.
        </p>
      </div>
    </div>
  );
}
