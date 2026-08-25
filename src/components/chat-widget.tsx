"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

/**
 * Chat do site, ligado ao canal `webchat` do CRM.
 *
 * Fala DIRETO com o CRM, sem passar por uma função no meio. Não é atalho: o
 * site é `output: "export"` (estático puro), então uma rota de API do App
 * Router simplesmente não existe em produção — era esse o motivo de o widget
 * anterior responder "tive um problema" para todo visitante. Um proxy em
 * `functions/` resolveria o 404, mas cada poll de 3s viraria uma invocação
 * paga, e o token do webchat não é segredo: quem autoriza é a lista de origens
 * declarada no CRM (`allowed_origins`), do mesmo jeito que qualquer widget de
 * chat de mercado.
 *
 * A sessão vive em `sessionStorage` para o F5 não jogar a conversa fora — o
 * histórico verdadeiro está no CRM, e é de lá que ele é relido.
 */

const CRM_URL = process.env.NEXT_PUBLIC_CRM_URL ?? "";
const WEBCHAT_TOKEN = process.env.NEXT_PUBLIC_WEBCHAT_TOKEN ?? "";
const STORAGE_KEY = "mytek_webchat_session";
const POLL_MS = 3000;

interface Mensagem {
  id: string;
  autor: "visitante" | "atendimento";
  texto: string;
  em: string;
}

interface RespostaSessao {
  data?: { session_token: string; conversation_id: string };
  error?: { code: string; message: string };
}

interface RespostaMensagens {
  data?: { messages: { id: string; body: string | null; sent_at: string }[] };
  error?: { code: string; message: string };
}

const SAUDACAO: Mensagem = {
  id: "saudacao",
  autor: "atendimento",
  texto: "Olá! 👋 Como posso ajudar?",
  em: "",
};

export function ChatWidget() {
  const [aberto, setAberto] = useState(false);
  const [sessao, setSessao] = useState<string | null>(null);
  const [mensagens, setMensagens] = useState<Mensagem[]>([SAUDACAO]);
  const [entrada, setEntrada] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const fimRef = useRef<HTMLDivElement>(null);
  // Cursor do polling. Em ref e não em state: mudá-lo não deve re-renderizar,
  // e o intervalo precisa enxergar sempre o valor mais recente.
  const desdeRef = useRef<string | null>(null);

  useEffect(() => {
    const salva = sessionStorage.getItem(STORAGE_KEY);
    if (salva) setSessao(salva);
  }, []);

  useEffect(() => {
    fimRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensagens]);

  const configurado = CRM_URL !== "" && WEBCHAT_TOKEN !== "";
  const base = `${CRM_URL}/api/v1/webchat/${WEBCHAT_TOKEN}`;

  /** Puxa as respostas do atendimento (ou da IA) publicadas desde o último poll. */
  const puxarRespostas = useCallback(async (token: string) => {
    const qs = desdeRef.current ? `?since=${encodeURIComponent(desdeRef.current)}` : "";
    const res = await fetch(`${base}/messages${qs}`, {
      headers: { "X-Webchat-Session": token },
    });
    if (!res.ok) {
      // 401 = sessão expirou. Limpa para o visitante recomeçar pelo formulário
      // em vez de digitar num chat que não vai a lugar nenhum.
      if (res.status === 401) {
        sessionStorage.removeItem(STORAGE_KEY);
        setSessao(null);
        setErro("Sua sessão expirou. Preencha os dados de novo para continuar.");
      }
      return;
    }
    const json = (await res.json()) as RespostaMensagens;
    const novas = json.data?.messages ?? [];
    if (novas.length === 0) return;

    desdeRef.current = novas[novas.length - 1]!.sent_at;
    setMensagens((atual) => {
      const conhecidos = new Set(atual.map((m) => m.id));
      const acrescentar = novas
        .filter((m) => !conhecidos.has(m.id) && m.body)
        .map<Mensagem>((m) => ({
          id: m.id,
          autor: "atendimento",
          texto: m.body!,
          em: m.sent_at,
        }));
      return acrescentar.length > 0 ? [...atual, ...acrescentar] : atual;
    });
  }, [base]);

  useEffect(() => {
    if (!aberto || !sessao) return;
    void puxarRespostas(sessao);
    const t = setInterval(() => void puxarRespostas(sessao), POLL_MS);
    return () => clearInterval(t);
  }, [aberto, sessao, puxarRespostas]);

  async function abrirConversa(e: React.FormEvent) {
    e.preventDefault();
    setErro(null);
    setEnviando(true);
    try {
      const res = await fetch(`${base}/session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = (await res.json()) as RespostaSessao;
      if (!res.ok || !json.data) {
        throw new Error(json.error?.message ?? "falha ao abrir a conversa");
      }
      sessionStorage.setItem(STORAGE_KEY, json.data.session_token);
      setSessao(json.data.session_token);
      setMensagens([
        {
          id: "inicio",
          autor: "atendimento",
          texto: `Prazer, ${form.name.split(" ")[0]}! Me conta: como posso ajudar?`,
          em: "",
        },
      ]);
    } catch {
      setErro("Não consegui abrir a conversa agora. Tente de novo em instantes.");
    } finally {
      setEnviando(false);
    }
  }

  async function enviarMensagem(e: React.FormEvent) {
    e.preventDefault();
    const texto = entrada.trim();
    if (!texto || !sessao) return;

    setEntrada("");
    setErro(null);
    // Otimista: o texto aparece na hora. Se o POST falhar, ele é retirado e o
    // campo devolve o que a pessoa escreveu — some com a mensagem seria pior.
    const idLocal = `local-${Date.now()}`;
    setMensagens((atual) => [
      ...atual,
      { id: idLocal, autor: "visitante", texto, em: new Date().toISOString() },
    ]);
    setEnviando(true);

    try {
      const res = await fetch(`${base}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Webchat-Session": sessao },
        body: JSON.stringify({ body: texto }),
      });
      if (!res.ok) throw new Error(String(res.status));
      void puxarRespostas(sessao);
    } catch {
      setMensagens((atual) => atual.filter((m) => m.id !== idLocal));
      setEntrada(texto);
      setErro("A mensagem não foi enviada. Tente de novo.");
    } finally {
      setEnviando(false);
    }
  }

  if (!configurado) return null;

  if (!aberto) {
    return (
      <button
        onClick={() => setAberto(true)}
        className="fixed bottom-6 right-6 size-14 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center z-50"
        aria-label="Abrir chat"
      >
        <MessageCircle className="size-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-3rem)] bg-white rounded-2xl shadow-2xl flex flex-col z-50">
      <div className="bg-blue-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
        <div>
          <h3 className="font-semibold">Suporte mytek</h3>
          <p className="text-xs opacity-90">Respondemos em minutos</p>
        </div>
        <button
          onClick={() => setAberto(false)}
          className="hover:bg-blue-700 p-1 rounded transition-colors"
          aria-label="Fechar chat"
        >
          <X className="size-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {mensagens.map((m) => (
          <div key={m.id} className={`flex ${m.autor === "visitante" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                m.autor === "visitante" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
              }`}
            >
              {m.texto}
            </div>
          </div>
        ))}
        {enviando && sessao && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg">
              <Loader2 className="size-4 animate-spin" />
            </div>
          </div>
        )}
        <div ref={fimRef} />
      </div>

      {erro && (
        <p className="px-4 pb-2 text-xs text-red-600" role="alert">
          {erro}
        </p>
      )}

      {!sessao ? (
        <form onSubmit={abrirConversa} className="border-t p-4 space-y-3">
          <input
            type="text"
            placeholder="Seu nome"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <input
            type="email"
            placeholder="Seu email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <input
            type="tel"
            placeholder="Seu telefone (opcional)"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            disabled={enviando}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400"
          >
            {enviando ? "Abrindo…" : "Começar conversa"}
          </button>
        </form>
      ) : (
        <form onSubmit={enviarMensagem} className="border-t p-4 flex gap-2">
          <input
            type="text"
            placeholder="Escreva sua mensagem..."
            value={entrada}
            onChange={(e) => setEntrada(e.target.value)}
            className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            disabled={enviando || !entrada.trim()}
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
            aria-label="Enviar mensagem"
          >
            <Send className="size-5" />
          </button>
        </form>
      )}
    </div>
  );
}
