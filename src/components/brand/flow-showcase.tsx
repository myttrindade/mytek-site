"use client";

import { useEffect, useState } from "react";
import {
  BellRingIcon,
  CalendarCheckIcon,
  CheckIcon,
  ClipboardCheckIcon,
  FolderPlusIcon,
  FormInputIcon,
  MessageCircleIcon,
  PackageIcon,
  ReceiptIcon,
  ShoppingCartIcon,
  FileTextIcon,
  UsersIcon,
  WalletIcon,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Editor de fluxo de exemplo que alterna entre segmentos, para mostrar que a
 * automação é sob medida e serve a qualquer negócio. Tudo ilustrativo: sem
 * números e sem promessa de resultado.
 */
type Node = { icon: LucideIcon; label: string };
type Flow = { id: string; tab: string; name: string; trigger: Node; a: Node; b: Node; c: Node };

const FLOWS: Flow[] = [
  {
    id: "loja",
    tab: "Loja",
    name: "fluxo · pedido novo",
    trigger: { icon: ShoppingCartIcon, label: "Novo pedido" },
    a: { icon: MessageCircleIcon, label: "Avisar o cliente no WhatsApp" },
    b: { icon: PackageIcon, label: "Atualizar o estoque" },
    c: { icon: ReceiptIcon, label: "Emitir a nota fiscal" },
  },
  {
    id: "clinica",
    tab: "Clínica",
    name: "fluxo · consulta marcada",
    trigger: { icon: CalendarCheckIcon, label: "Consulta marcada" },
    a: { icon: BellRingIcon, label: "Lembrete 24h antes" },
    b: { icon: MessageCircleIcon, label: "Pedir confirmação" },
    c: { icon: ClipboardCheckIcon, label: "Atualizar a agenda" },
  },
  {
    id: "escritorio",
    tab: "Escritório",
    name: "fluxo · contrato assinado",
    trigger: { icon: FileTextIcon, label: "Contrato assinado" },
    a: { icon: FolderPlusIcon, label: "Criar a pasta do cliente" },
    b: { icon: UsersIcon, label: "Avisar a equipe" },
    c: { icon: WalletIcon, label: "Gerar a cobrança" },
  },
  {
    id: "vendas",
    tab: "Vendas",
    name: "fluxo · novo lead",
    trigger: { icon: FormInputIcon, label: "Novo lead" },
    a: { icon: MessageCircleIcon, label: "Mensagem no WhatsApp" },
    b: { icon: UsersIcon, label: "Card no funil do CRM" },
    c: { icon: BellRingIcon, label: "Avisar o vendedor" },
  },
];

/** Coordenadas dos nós (px) e das ligações, no espaço 540x380. */
const POS = {
  trigger: { x: 14, y: 150 },
  a: { x: 330, y: 22 },
  b: { x: 330, y: 150 },
  c: { x: 330, y: 278 },
};
const PATHS = [
  "M194 182 C262 182 262 54 330 54",
  "M194 182 C262 182 262 182 330 182",
  "M194 182 C262 182 262 310 330 310",
];

function NodeCard({
  node,
  kind,
  x,
  y,
  delay,
}: {
  node: Node;
  kind: "trigger" | "action";
  x: number;
  y: number;
  delay: number;
}) {
  const trigger = kind === "trigger";
  return (
    <div
      className="flow-node absolute flex w-[180px] items-center gap-3 rounded-2xl border bg-gradient-to-br from-[#2a1855] to-[#150b2b] p-3 shadow-[0_24px_50px_-18px_rgba(0,0,0,0.8)]"
      style={{
        left: x,
        top: y,
        animationDelay: `${delay}s`,
        borderColor: trigger ? "rgba(198,255,0,0.6)" : "rgba(255,255,255,0.14)",
        boxShadow: trigger
          ? "0 0 0 1px rgba(198,255,0,0.15), 0 0 36px -6px rgba(198,255,0,0.35), 0 24px 50px -18px rgba(0,0,0,0.8)"
          : undefined,
      }}
    >
      <span
        className={cn(
          "flex size-10 shrink-0 items-center justify-center rounded-xl",
          trigger
            ? "bg-lima text-lima-foreground shadow-[0_8px_20px_-6px_rgba(198,255,0,0.6)]"
            : "bg-gradient-to-br from-[#7A57FF] to-[#4A22D6] text-white shadow-[0_8px_20px_-6px_rgba(94,52,247,0.7)]"
        )}
      >
        <node.icon className="size-5" />
      </span>
      <div className="min-w-0 leading-tight">
        <p
          className={cn(
            "font-mono text-[9px] font-bold uppercase tracking-[0.08em]",
            trigger ? "text-lima" : "text-white/45"
          )}
        >
          {trigger ? "Gatilho" : "Ação"}
        </p>
        <p className="mt-0.5 text-[12.5px] font-semibold text-white">{node.label}</p>
      </div>
      {!trigger && (
        <span className="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-lima text-lima-foreground shadow-[0_0_14px_rgba(198,255,0,0.6)]">
          <CheckIcon className="size-3" />
        </span>
      )}
    </div>
  );
}

export function FlowShowcase() {
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setI((v) => (v + 1) % FLOWS.length), 5200);
    return () => clearInterval(t);
  }, [auto]);

  const f = FLOWS[i];

  return (
    <div className="mx-auto w-full max-w-[560px] pb-8 pt-4">
      <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0F0819] shadow-[0_30px_90px_-20px_rgba(110,72,255,0.75)]">
        {/* topo: abas por segmento */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-2.5">
          <span className="size-2.5 rounded-full bg-white/25" />
          <span className="size-2.5 rounded-full bg-white/25" />
          <span className="size-2.5 rounded-full bg-white/25" />
          <div className="ml-2 flex flex-wrap gap-1.5" role="tablist" aria-label="Exemplos por segmento">
            {FLOWS.map((x, idx) => (
              <button
                key={x.id}
                type="button"
                role="tab"
                aria-selected={idx === i}
                onClick={() => {
                  setAuto(false);
                  setI(idx);
                }}
                className={cn(
                  "rounded-full px-3 py-1 text-[11px] font-bold transition-colors",
                  idx === i
                    ? "bg-lima text-lima-foreground"
                    : "bg-white/[0.07] text-white/65 hover:bg-white/15 hover:text-white"
                )}
              >
                {x.tab}
              </button>
            ))}
          </div>
          <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] font-bold text-lima">
            <span className="size-1.5 animate-pulse rounded-full bg-lima" />
            ativo
          </span>
        </div>

        {/* tela do editor */}
        <div className="relative h-[380px] bg-[radial-gradient(circle_at_28%_30%,#33196f,#0F0819_72%)]">
          <div
            aria-hidden
            className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:22px_22px]"
          />
          <p className="absolute left-4 top-3 font-mono text-[10px] text-white/45">{f.name}</p>

          <div key={f.id} className="absolute inset-0">
            <svg viewBox="0 0 540 380" className="absolute inset-0 size-full" fill="none" aria-hidden>
              <defs>
                <filter id="flow-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" />
                </filter>
              </defs>
              {PATHS.map((d) => (
                <g key={d}>
                  <path d={d} stroke="#8D6BFF" strokeWidth="5" opacity="0.35" filter="url(#flow-glow)" />
                  <path d={d} stroke="#A98BFF" strokeWidth="2" strokeLinecap="round" className="flow-dash" />
                  <circle r="4" fill="#C6FF00" style={{ filter: "drop-shadow(0 0 6px #C6FF00)" }}>
                    <animateMotion dur="2.4s" repeatCount="indefinite" path={d} />
                  </circle>
                </g>
              ))}
            </svg>
            <NodeCard node={f.trigger} kind="trigger" x={POS.trigger.x} y={POS.trigger.y} delay={0} />
            <NodeCard node={f.a} kind="action" x={POS.a.x} y={POS.a.y} delay={0.12} />
            <NodeCard node={f.b} kind="action" x={POS.b.x} y={POS.b.y} delay={0.22} />
            <NodeCard node={f.c} kind="action" x={POS.c.x} y={POS.c.y} delay={0.32} />
          </div>

          <p className="absolute bottom-2 left-4 text-[10px] text-white/35">
            Fluxos de exemplo. O seu é desenhado sob medida.
          </p>
        </div>
      </div>
    </div>
  );
}
