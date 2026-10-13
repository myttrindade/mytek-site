"use client";

import { useRef, useState } from "react";
import { PlayIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Vídeo do MyHub com capítulos clicáveis. O tempo de cada capítulo é o do
 * arquivo `public/brand/hub/demo.mp4`: se o vídeo for trocado ou editado,
 * ajuste `chapters` junto.
 */
const chapters = [
  { t: 0, title: "Entrar", body: "Acesso com usuário e senha." },
  { t: 6, title: "Suas tarefas", body: "Quadro com A fazer, Em andamento, Concluído e Cancelada, e os indicadores no topo." },
  { t: 11, title: "Criar uma tarefa", body: "Nome, descrição, status, data, horário, repetição, responsáveis, checklist, anexos, comentários e horas." },
  { t: 18, title: "Tarefas no quadro", body: "Cada tarefa aparece na coluna certa, com o responsável e o andamento." },
  { t: 24, title: "Wiki da equipe", body: "Documentos e processos num lugar só, junto das tarefas." },
  { t: 27.5, title: "Mensagens", body: "Canais e mensagens diretas, sem sair do sistema." },
] as const;

const fmt = (s: number) =>
  `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

export function HubVideo({
  src,
  poster,
}: {
  src: string;
  poster?: string | null;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(0);

  const onTime = () => {
    const t = ref.current?.currentTime ?? 0;
    let idx = 0;
    chapters.forEach((c, i) => {
      if (t >= c.t - 0.3) idx = i;
    });
    setActive(idx);
  };

  const go = (i: number) => {
    const v = ref.current;
    if (!v) return;
    v.currentTime = chapters[i].t;
    void v.play();
    setActive(i);
  };

  return (
    <div className="grid items-start gap-6 lg:grid-cols-[1.7fr_1fr]">
      <figure>
        <div className="overflow-hidden rounded-2xl border border-white/12 bg-[#0F0819] shadow-[0_40px_100px_-30px_rgba(110,72,255,0.7)]">
          <video
            ref={ref}
            src={src}
            poster={poster ?? undefined}
            controls
            muted
            loop
            playsInline
            preload="metadata"
            onTimeUpdate={onTime}
            className="aspect-[16/10] w-full bg-black"
          />
        </div>
        <figcaption className="mt-3 text-center text-[11px] text-muted-foreground">
          Gravação do MyHub, com uma conta de demonstração.
        </figcaption>
      </figure>

      <ol className="grid gap-2" aria-label="Capítulos do vídeo">
        {chapters.map((c, i) => (
          <li key={c.title}>
            <button
              type="button"
              onClick={() => go(i)}
              aria-current={active === i}
              className={cn(
                "group flex w-full items-start gap-3 rounded-xl border p-3.5 text-left transition-colors",
                active === i
                  ? "border-lima/60 bg-lima/[0.08]"
                  : "border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]"
              )}
            >
              <span
                className={cn(
                  "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold",
                  active === i
                    ? "bg-lima text-lima-foreground"
                    : "bg-white/10 text-white group-hover:bg-white/20"
                )}
              >
                {active === i ? <PlayIcon className="size-3 translate-x-px" /> : i + 1}
              </span>
              <span className="min-w-0">
                <span className="flex items-baseline justify-between gap-3">
                  <span className="font-heading text-sm font-bold text-white">
                    {c.title}
                  </span>
                  <span className="font-mono text-[10px] text-white/50">
                    {fmt(c.t)}
                  </span>
                </span>
                <span className="mt-0.5 block text-xs text-white/65">{c.body}</span>
              </span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
