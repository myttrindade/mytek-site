"use client";

import { useState } from "react";
import {
  ArrowRightIcon,
  CheckIcon,
  HashIcon,
  KanbanSquareIcon,
  MessagesSquareIcon,
  PlusIcon,
  SendIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Demonstração interativa do Mytek Hub, feita só com estado local: não chama
 * servidor, não guarda nada, e todos os nomes e tarefas são de exemplo. Existe
 * porque as telas internas do Hub exigem login e não temos gravação delas.
 */

type Col = "todo" | "doing" | "done";
type Task = { id: number; title: string; who: string; due: string; col: Col; asked?: boolean };

const PEOPLE = ["Ana", "Bruno", "Carla"] as const;
const COLS: { id: Col; label: string }[] = [
  { id: "todo", label: "A fazer" },
  { id: "doing", label: "Em andamento" },
  { id: "done", label: "Concluído" },
];

const INITIAL: Task[] = [
  { id: 1, title: "Revisar proposta do cliente", who: "Ana", due: "hoje", col: "doing" },
  { id: 2, title: "Atualizar o catálogo", who: "Bruno", due: "qui", col: "todo" },
  { id: 3, title: "Enviar contrato assinado", who: "Carla", due: "sex", col: "todo" },
  { id: 4, title: "Reunião de alinhamento", who: "Ana", due: "ontem", col: "done" },
];

const NEXT: Record<Col, Col | null> = { todo: "doing", doing: "done", done: null };

const CHANNELS = ["geral", "projetos", "financeiro"] as const;

const SEED_MSGS: Record<string, { who: string; text: string }[]> = {
  geral: [
    { who: "Ana", text: "Bom dia, pessoal! Proposta do cliente sai hoje." },
    { who: "Bruno", text: "Fechado. Subo o catálogo ainda hoje também." },
  ],
  projetos: [{ who: "Carla", text: "Contrato segue para assinatura amanhã." }],
  financeiro: [{ who: "Bruno", text: "Fatura de setembro conferida." }],
};

const avatar = (n: string) =>
  ({ Ana: "bg-[#7A57FF]", Bruno: "bg-[#2BB3C8]", Carla: "bg-[#E9559B]", Você: "bg-lima text-lima-foreground" })[n] ??
  "bg-white/20";

function Avatar({ name }: { name: string }) {
  return (
    <span
      className={cn(
        "flex size-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white",
        avatar(name)
      )}
    >
      {name[0]}
    </span>
  );
}

export function HubDemo() {
  const [tab, setTab] = useState<"tarefas" | "chat">("tarefas");
  const [tasks, setTasks] = useState<Task[]>(INITIAL);
  const [leader, setLeader] = useState(true);
  const [asking, setAsking] = useState(false);
  const [title, setTitle] = useState("");
  const [who, setWho] = useState<string>(PEOPLE[0]);
  const [channel, setChannel] = useState<string>("geral");
  const [msgs, setMsgs] = useState(SEED_MSGS);
  const [draft, setDraft] = useState("");

  const visible = leader ? tasks : tasks.filter((t) => t.who === "Ana");
  const done = visible.filter((t) => t.col === "done").length;
  const pct = visible.length ? Math.round((done / visible.length) * 100) : 0;

  const advance = (id: number) =>
    setTasks((ts) =>
      ts.map((t) => (t.id === id && NEXT[t.col] ? { ...t, col: NEXT[t.col]! } : t))
    );

  const request = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    setTasks((ts) => [
      ...ts,
      { id: Date.now(), title: title.trim(), who, due: "amanhã", col: "todo", asked: true },
    ]);
    setTitle("");
    setAsking(false);
  };

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draft.trim()) return;
    setMsgs((m) => ({ ...m, [channel]: [...m[channel], { who: "Você", text: draft.trim() }] }));
    setDraft("");
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-white/12 bg-[#0F0819] shadow-[0_40px_100px_-30px_rgba(110,72,255,0.7)]">
      {/* barra da janela */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-white/25" />
        <span className="size-2.5 rounded-full bg-white/25" />
        <span className="size-2.5 rounded-full bg-white/25" />
        <span className="ml-3 flex-1 rounded-md bg-white/[0.06] px-3 py-1 font-mono text-[10px] text-white/50">
          hub.suaempresa.com.br
        </span>
      </div>

      <div className="grid min-h-[430px] md:grid-cols-[170px_1fr]">
        {/* menu lateral */}
        <nav className="flex gap-1 border-b border-white/10 bg-white/[0.03] p-3 md:flex-col md:border-b-0 md:border-r">
          {[
            { id: "tarefas", label: "Tarefas", icon: KanbanSquareIcon },
            { id: "chat", label: "Chat", icon: MessagesSquareIcon },
          ].map((i) => (
            <button
              key={i.id}
              type="button"
              onClick={() => setTab(i.id as "tarefas" | "chat")}
              className={cn(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-colors",
                tab === i.id
                  ? "bg-[#5E34F7] text-white"
                  : "text-white/60 hover:bg-white/[0.06] hover:text-white"
              )}
            >
              <i.icon className="size-4" />
              {i.label}
            </button>
          ))}
        </nav>

        <div className="p-4 sm:p-5">
          {tab === "tarefas" ? (
            <>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex rounded-full border border-white/12 bg-white/[0.05] p-0.5 text-xs font-semibold">
                  {[
                    { v: true, l: "Visão do líder" },
                    { v: false, l: "Minhas tarefas" },
                  ].map((o) => (
                    <button
                      key={o.l}
                      type="button"
                      onClick={() => setLeader(o.v)}
                      className={cn(
                        "rounded-full px-3 py-1 transition-colors",
                        leader === o.v ? "bg-white text-[#0F0819]" : "text-white/60"
                      )}
                    >
                      {o.l}
                    </button>
                  ))}
                </div>
                {leader && (
                  <button
                    type="button"
                    onClick={() => setAsking((a) => !a)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-lima px-3.5 py-1.5 text-xs font-bold text-lima-foreground"
                  >
                    <PlusIcon className="size-3.5" />
                    Pedir tarefa
                  </button>
                )}
              </div>

              {asking && (
                <form
                  onSubmit={request}
                  className="mt-3 flex flex-wrap items-center gap-2 rounded-xl border border-lima/40 bg-lima/[0.07] p-3"
                >
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="O que precisa ser feito?"
                    className="min-w-[160px] flex-1 rounded-lg border border-white/15 bg-black/30 px-3 py-1.5 text-xs text-white outline-none placeholder:text-white/40 focus:border-lima"
                  />
                  <select
                    value={who}
                    onChange={(e) => setWho(e.target.value)}
                    className="rounded-lg border border-white/15 bg-black/30 px-2 py-1.5 text-xs text-white"
                  >
                    {PEOPLE.map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                  <button
                    type="submit"
                    className="rounded-lg bg-[#5E34F7] px-3 py-1.5 text-xs font-bold text-white"
                  >
                    Enviar pedido
                  </button>
                </form>
              )}

              <div className="mt-4 flex items-center gap-3">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#5E34F7] to-lima transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="font-mono text-[11px] font-bold text-white/70">
                  {pct}% concluído
                </span>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {COLS.map((c) => (
                  <div key={c.id} className="rounded-xl bg-white/[0.04] p-2.5">
                    <p className="mb-2 flex items-center justify-between px-1 font-mono text-[10px] font-bold uppercase tracking-[0.07em] text-white/55">
                      {c.label}
                      <span>{visible.filter((t) => t.col === c.id).length}</span>
                    </p>
                    <div className="space-y-2">
                      {visible
                        .filter((t) => t.col === c.id)
                        .map((t) => (
                          <div
                            key={t.id}
                            className="rounded-lg border border-white/10 bg-[#1b1030] p-3"
                          >
                            <p className="text-xs font-semibold text-white">{t.title}</p>
                            {t.asked && (
                              <span className="mt-1 inline-block rounded bg-lima/15 px-1.5 py-0.5 text-[9px] font-bold text-lima">
                                solicitada pelo líder
                              </span>
                            )}
                            <div className="mt-2.5 flex items-center justify-between">
                              <span className="flex items-center gap-1.5 text-[10px] text-white/55">
                                <Avatar name={t.who} />
                                {t.who} · {t.due}
                              </span>
                              {NEXT[t.col] ? (
                                <button
                                  type="button"
                                  onClick={() => advance(t.id)}
                                  aria-label={`Avançar tarefa ${t.title}`}
                                  className="flex size-6 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-lima hover:text-lima-foreground"
                                >
                                  <ArrowRightIcon className="size-3.5" />
                                </button>
                              ) : (
                                <CheckIcon className="size-4 text-lima" />
                              )}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="grid min-h-[360px] gap-4 sm:grid-cols-[140px_1fr]">
              <div className="space-y-1">
                <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.07em] text-white/55">
                  Canais
                </p>
                {CHANNELS.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setChannel(c)}
                    className={cn(
                      "flex w-full items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-left text-xs font-semibold transition-colors",
                      channel === c
                        ? "bg-white/12 text-white"
                        : "text-white/55 hover:bg-white/[0.06]"
                    )}
                  >
                    <HashIcon className="size-3.5" />
                    {c}
                  </button>
                ))}
                <p className="!mt-4 mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.07em] text-white/55">
                  Mensagens diretas
                </p>
                {PEOPLE.map((p) => (
                  <span
                    key={p}
                    className="flex items-center gap-2 px-2.5 py-1 text-xs text-white/55"
                  >
                    <Avatar name={p} />
                    {p}
                  </span>
                ))}
              </div>
              <div className="flex flex-col rounded-xl bg-white/[0.04] p-3">
                <p className="border-b border-white/10 pb-2 text-xs font-bold text-white">
                  # {channel}
                </p>
                <div className="flex-1 space-y-3 py-3">
                  {msgs[channel].map((m, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <Avatar name={m.who} />
                      <div>
                        <p className="text-[11px] font-bold text-white">{m.who}</p>
                        <p className="text-xs text-white/75">{m.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <form onSubmit={send} className="flex gap-2">
                  <input
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    placeholder={`Mensagem em #${channel}`}
                    className="flex-1 rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-xs text-white outline-none placeholder:text-white/40 focus:border-lima"
                  />
                  <button
                    type="submit"
                    aria-label="Enviar mensagem"
                    className="flex size-9 items-center justify-center rounded-lg bg-[#5E34F7] text-white"
                  >
                    <SendIcon className="size-4" />
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
