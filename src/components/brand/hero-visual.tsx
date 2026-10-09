import { BellRingIcon, SparklesIcon, WorkflowIcon } from "lucide-react";

import { Me3D } from "@/components/brand/me-3d";
import { cn } from "@/lib/utils";

/**
 * Composição da capa: cartões de interface flutuando em volta do símbolo 3D,
 * um por frente de trabalho da mytek (CRM, IA, churn, automação).
 *
 * Todos os números são de demonstração e a legenda abaixo diz isso: nada aqui
 * pode ser lido como resultado de cliente.
 */
const glass =
  "rounded-2xl border border-white/10 bg-[#170E2A]/85 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)] backdrop-blur-md";

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
    <div className={cn("absolute", `hero-float-${float}`, className)}>
      <div className={cn(glass, "h-full")}>{children}</div>
    </div>
  );
}

export function HeroVisual() {
  return (
    <div className="hero-vis mx-auto">
      <div className="hero-vis-in relative">
        {/* brilho e anéis atrás do símbolo */}
        <div
          aria-hidden
          className="absolute left-1/2 top-[44%] size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(94,52,247,0.55),transparent_68%)]"
        />
        <div
          aria-hidden
          className="absolute left-1/2 top-[44%] size-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/15"
        />
        <div
          aria-hidden
          className="absolute left-1/2 top-[44%] size-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
        />
        <Me3D
          size={170}
          className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2"
        />

        {/* Agente de IA */}
        <Card float="a" className="left-0 top-2 w-[250px]">
          <div className="space-y-2 p-4">
            <div className="flex items-center justify-between">
              <span className={cn(mono, "text-white/60")}>Agente de IA</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 px-2 py-0.5 text-[10px] font-semibold text-white">
                <SparklesIcon className="size-3 text-lima" />
                respondendo
              </span>
            </div>
            <p className="max-w-[85%] rounded-xl rounded-bl-sm bg-white/10 px-3 py-2 text-xs text-white">
              Vocês atendem sábado?
            </p>
            <p className="ml-auto max-w-[90%] rounded-xl rounded-br-sm bg-[#5E34F7] px-3 py-2 text-xs text-white">
              Atendemos sim, das 9h às 13h. Quer reservar às 10h?
            </p>
          </div>
        </Card>

        {/* Radar: lead parado */}
        <Card float="b" className="right-0 top-[70px] w-[250px]">
          <div className="space-y-3 p-4">
            <div className="flex items-center justify-between">
              <span className={cn(mono, "text-white/60")}>Radar · CRM</span>
              <BellRingIcon className="size-4 text-lima" />
            </div>
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
            <div className="rounded-lg bg-white/[0.06] px-3 py-2 text-[11px] text-white/80">
              <span className="font-semibold text-white">Alerta enviado</span>{" "}
              para Carla · 2 dias sem andar
            </div>
          </div>
        </Card>

        {/* Previsão de churn */}
        <Card float="c" className="bottom-0 right-3 w-[270px]">
          <div className="space-y-2 p-4">
            <div className="flex items-center justify-between">
              <span className={cn(mono, "text-white/60")}>Previsão de churn</span>
              <span className="rounded-full bg-lima px-2 py-0.5 text-[10px] font-bold text-lima-foreground">
                14 em risco
              </span>
            </div>
            <svg viewBox="0 0 240 80" className="h-20 w-full" aria-hidden>
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

        {/* Automação n8n */}
        <Card float="d" className="bottom-[34px] left-2 w-[230px]">
          <div className="space-y-3 p-4">
            <div className="flex items-center justify-between">
              <span className={cn(mono, "text-white/60")}>Automação</span>
              <WorkflowIcon className="size-4 text-white/70" />
            </div>
            <div className="flex items-center">
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
                    <span className="hero-dash relative mx-1 h-px w-4 bg-white/40" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Card>

        <p className="absolute -bottom-6 left-0 right-0 text-center text-[11px] text-white/45">
          Interfaces ilustrativas, com dados de exemplo.
        </p>
      </div>
    </div>
  );
}
