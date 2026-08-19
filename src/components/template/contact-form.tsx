"use client";

import { useState } from "react";
import { CheckIcon, SendIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

/**
 * Frontend-only demo form — swap the submit handler for your API route
 * or form service when you ship.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex h-full min-h-72 flex-col items-center justify-center rounded-2xl border bg-card p-8 text-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-primary/15 text-primary">
          <CheckIcon className="size-6" />
        </span>
        <h2 className="mt-4 text-lg font-semibold">Mensagem enviada</h2>
        <p className="mt-2 max-w-xs text-sm text-muted-foreground">
          Obrigado pelo contato — respondemos em até um dia útil.
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
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" name="name" placeholder="Ana Ribeiro" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="ana@suaclinica.com.br"
            required
          />
        </div>
      </div>
      <div className="mt-5 grid gap-2">
        <Label htmlFor="message">Mensagem</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Conte um pouco sobre sua clínica…"
          className="min-h-36"
          required
        />
      </div>
      <Button type="submit" size="lg" className="mt-6 w-full rounded-full">
        <SendIcon className="size-4" />
        Enviar mensagem
      </Button>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Formulário de demonstração — nenhum dado sai do seu navegador.
      </p>
    </form>
  );
}
