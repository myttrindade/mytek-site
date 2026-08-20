"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { MytekLogo } from "@/components/mytek-logo";

interface AuthFormProps {
  mode: "login" | "signup";
}

/**
 * Frontend-only demo auth form. Wire it to your auth provider
 * (Auth.js, Clerk, Supabase…) when you ship.
 */
export function AuthForm({ mode }: AuthFormProps) {
  const [done, setDone] = useState(false);
  const isLogin = mode === "login";

  if (done) {
    return (
      <div className="flex flex-col items-center justify-center text-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-primary/15 text-primary">
          <CheckIcon className="size-6" />
        </span>
        <h2 className="mt-4 text-lg font-semibold">
          {isLogin ? "Bem-vinda de volta" : "Conta criada"}
        </h2>
        <p className="mt-2 max-w-xs text-sm text-muted-foreground">
          Este é um formulário de demonstração. Conecte seu provedor de
          autenticação pra ativar de verdade.
        </p>
        <Button variant="ghost" className="mt-6" onClick={() => setDone(false)}>
          Voltar ao formulário
        </Button>
      </div>
    );
  }

  return (
    <div>
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <MytekLogo />
        mytek
      </Link>
      <h1 className="mt-8 text-2xl font-semibold tracking-tight">
        {isLogin ? "Bem-vinda de volta" : "Crie sua conta"}
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {isLogin
          ? "Entre pra continuar no seu Pulse."
          : "Crie sua conta e comece a usar em poucos minutos."}
      </p>

      <Button variant="outline" size="lg" className="mt-8 w-full rounded-full">
        <svg viewBox="0 0 24 24" aria-hidden className="size-4">
          <path
            fill="currentColor"
            d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81"
          />
        </svg>
        Continuar com o Google
      </Button>

      <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
        <Separator className="flex-1" />
        ou continue com e-mail
        <Separator className="flex-1" />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setDone(true);
        }}
      >
        {!isLogin && (
          <div className="grid gap-2">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" name="name" placeholder="Ana Ribeiro" required />
          </div>
        )}
        <div className={isLogin ? "grid gap-2" : "mt-4 grid gap-2"}>
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="ana@suaclinica.com.br"
            required
          />
        </div>
        <div className="mt-4 grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Senha</Label>
            {isLogin && (
              <span className="cursor-pointer text-xs text-muted-foreground underline-offset-4 hover:underline">
                Esqueceu a senha?
              </span>
            )}
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            required
            minLength={8}
          />
        </div>
        <Button type="submit" size="lg" className="mt-6 w-full rounded-full">
          {isLogin ? "Entrar" : "Criar conta"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        {isLogin ? (
          <>
            Ainda não tem conta?{" "}
            <Link
              href="/signup"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Criar conta
            </Link>
          </>
        ) : (
          <>
            Já tem conta?{" "}
            <Link
              href="/login"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Entrar
            </Link>
          </>
        )}
      </p>
    </div>
  );
}
