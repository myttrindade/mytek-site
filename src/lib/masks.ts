/**
 * Máscaras de entrada compartilhadas pelo formulário de contato e pelo chat.
 *
 * Viviam soltas dentro de `contact-form.tsx`. Ao precisarem existir também no
 * widget, copiá-las levaria junto um defeito: a versão antiga do telefone
 * aplicava o padrão de celular a qualquer número, e um fixo de 10 dígitos saía
 * `(11) 33334-444` — dígito no lugar errado e hífen fora de posição.
 *
 * Regra geral aqui: máscara **conforma**, não rejeita. Ela nunca apaga o que a
 * pessoa digitou a ponto de impedir a correção; quem barra envio é a validação,
 * que é decisão separada.
 */

/**
 * Nome: só letras (com acento), espaço, apóstrofo e hífen.
 *
 * `\p{L}` com flag `u` em vez de `[a-zA-Z]` porque os nomes daqui têm acento —
 * "João" viraria "Joo". Apóstrofo e hífen ficam porque "D'Ávila" e
 * "Maria-Clara" são nomes, não sujeira.
 */
export function mascaraNome(valor: string): string {
  return valor
    .replace(/[^\p{L}\s'-]/gu, "")
    // Espaço duplo só acontece por engano de digitação; colapsar evita que o
    // nome chegue ao CRM com buraco no meio.
    .replace(/\s{2,}/g, " ")
    .trimStart();
}

/**
 * E-mail: minúsculas e sem espaço.
 *
 * Deliberadamente leve. Filtrar caracteres "inválidos" enquanto se digita
 * atrapalha mais do que ajuda (o `+` de `nome+tag@` é legítimo e some em
 * máscaras agressivas); o formato quem cobra é `emailValido`, no envio.
 */
export function mascaraEmail(valor: string): string {
  return valor.toLowerCase().replace(/\s/g, "");
}

/**
 * Telefone BR progressivo: `(11) 3333-4444` para fixo, `(11) 99999-8888` para
 * celular. O formato acompanha a quantidade de dígitos em vez de assumir
 * celular sempre — era esse o defeito da versão anterior.
 */
export function mascaraTelefone(valor: string): string {
  const d = valor.replace(/\D/g, "").slice(0, 11);
  if (d.length === 0) return "";
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export function emailValido(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/** Fixo (10) ou celular (11) com DDD. Vazio é válido: o campo é opcional. */
export function telefoneValido(telefone: string): boolean {
  const d = telefone.replace(/\D/g, "");
  return d.length === 0 || d.length === 10 || d.length === 11;
}
