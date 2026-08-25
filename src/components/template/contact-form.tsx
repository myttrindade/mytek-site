"use client";

import { useState } from "react";
import { CheckIcon, SendIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const maskPhone = (value: string) => {
  const digits = value.replace(/\D/g, "");
  if (digits.length <= 10) {
    return digits
      .replace(/(\d{0,2})/, "($1")
      .replace(/(\(\d{2})(\d{0,5})/, "$1) $2")
      .replace(/(\(\d{2}\) \d{5})(\d{0,4})/, "$1-$2");
  }
  return digits
    .replace(/(\d{0,2})/, "($1")
    .replace(/(\(\d{2})(\d{0,5})/, "$1) $2")
    .replace(/(\(\d{2}\) \d{5})(\d{0,4})/, "$1-$2")
    .substring(0, 15);
};

const maskEmail = (value: string) => {
  return value.toLowerCase();
};

/**
 * Envia o contato para o CRM através de `/api/contact` (Pages Function).
 *
 * O POST NÃO vai direto ao CRM de propósito: a URL do webhook é credencial e
 * ficaria legível no código da página. A função no servidor a guarda e ainda
 * devolve sucesso/erro de verdade — um POST direto exigiria `no-cors`, que
 * esconde a resposta e faria a tela agradecer mesmo com o envio falhando.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  if (sent) {
    return (
      <div className="flex h-full min-h-72 flex-col items-center justify-center rounded-2xl border bg-card p-8 text-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-primary/15 text-primary">
          <CheckIcon className="size-6" />
        </span>
        <h2 className="mt-4 text-lg font-semibold">Mensagem enviada</h2>
        <p className="mt-2 max-w-xs text-sm text-muted-foreground">
          Obrigado pelo contato. Respondemos em até um dia útil.
        </p>
        <Button
          variant="ghost"
          className="mt-6"
          onClick={() => setSent(false)}
        >
          Enviar outra mensagem
        </Button>
      </div>
    );
  }

  return (
    <form
      className="rounded-2xl border bg-card p-8"
      onSubmit={async (e) => {
        e.preventDefault();
        const dados = new FormData(e.currentTarget);
        setSending(true);
        setFailed(false);
        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              name: dados.get("name"),
              email: dados.get("email"),
              phone: dados.get("phone"),
              message: dados.get("message"),
            }),
          });
          if (!res.ok) throw new Error(String(res.status));
          setSent(true);
        } catch {
          // Só marca "enviada" quando o servidor confirmou. Falha vira aviso
          // com os dados PRESERVADOS no formulário — limpar o campo de quem
          // acabou de escrever é perder o contato de vez.
          setFailed(true);
        } finally {
          setSending(false);
        }
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">
            Nome <span className="text-red-500">*</span>
          </Label>
          <Input id="name" name="name" placeholder="Ana Ribeiro" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">
            E-mail <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="ana@suaclinica.com.br"
            value={email}
            onChange={(e) => setEmail(maskEmail(e.target.value))}
            required
          />
        </div>
      </div>
      <div className="mt-5 grid gap-2">
        <Label htmlFor="phone">
          Telefone <span className="text-red-500">*</span>
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="(11) 91234-5678"
          value={phone}
          onChange={(e) => setPhone(maskPhone(e.target.value))}
          required
        />
        <p className="text-xs text-muted-foreground">
          Com o número a gente responde pelo WhatsApp, que costuma ser bem mais
          rápido que o e-mail.
        </p>
      </div>
      <div className="mt-5 grid gap-2">
        <Label htmlFor="message">Mensagem</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Conte um pouco sobre sua clínica…"
          className="min-h-36"
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="mt-6 w-full rounded-full"
        disabled={sending}
      >
        <SendIcon className="size-4" />
        {sending ? "Enviando…" : "Enviar mensagem"}
      </Button>
      {failed ? (
        <p
          className="mt-4 text-center text-xs text-destructive"
          role="alert"
        >
          Não conseguimos enviar agora. Tente de novo em instantes — ou chame a
          gente no WhatsApp, ao lado.
        </p>
      ) : (
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Respondemos em até um dia útil.
        </p>
      )}
    </form>
  );
}
