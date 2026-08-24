/**
 * POST /api/contact — ponte entre o formulário do site e o CRM.
 *
 * Por que existe (e não um fetch direto do navegador): a URL do webhook do CRM
 * é a credencial. No navegador ela ficaria legível no código da página, e
 * qualquer um poderia despejar lead falso no funil. Aqui ela vive em
 * `CRM_WEBHOOK_URL`, variável de ambiente do projeto no Cloudflare, e o
 * navegador só conhece `/api/contact`.
 *
 * De brinde, o navegador passa a SABER se deu certo: um POST direto ao CRM
 * precisaria de `mode: "no-cors"` (o CRM não publica CORS), e no-cors esconde a
 * resposta — o formulário diria "enviado" mesmo com o CRM fora do ar.
 *
 * Roda como Cloudflare Pages Function; o site em si continua 100% estático
 * (`output: "export"` no next.config), então esta é a única peça com servidor.
 *
 * Os tipos são os do lib "dom" de propósito: `PagesFunction` viria de
 * @cloudflare/workers-types, que não é dependência do projeto — e o tsconfig
 * inclui `**\/*.ts`, então um tipo inexistente quebraria o `next build`.
 */

interface Env {
  /** URL completa do webhook de captação do CRM, token incluído. */
  CRM_WEBHOOK_URL?: string;
}

interface Ctx {
  request: Request;
  env: Env;
}

function json(corpo: unknown, status: number): Response {
  return new Response(JSON.stringify(corpo), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

function texto(valor: unknown, limite: number): string {
  return typeof valor === "string" ? valor.trim().slice(0, limite) : "";
}

export async function onRequestPost({ request, env }: Ctx): Promise<Response> {
  const webhook = env.CRM_WEBHOOK_URL;
  // Falha ALTA e explícita: sem a variável configurada, devolver 200 faria o
  // site agradecer pelo contato e jogar o lead fora. Melhor o formulário
  // mostrar erro e a pessoa tentar outro canal (o WhatsApp está na mesma tela).
  if (!webhook) return json({ erro: "webhook_nao_configurado" }, 500);

  let corpo: Record<string, unknown>;
  try {
    corpo = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ erro: "json_invalido" }, 400);
  }

  const nome = texto(corpo.name, 200);
  const email = texto(corpo.email, 200);
  const telefone = texto(corpo.phone, 40);
  const mensagem = texto(corpo.message, 2000);

  if (!nome || !email) return json({ erro: "nome_e_email_obrigatorios" }, 400);

  const params = new URLSearchParams({
    name: nome,
    email,
    message: mensagem,
    // Idempotência: se a pessoa clicar duas vezes ou a rede reenviar, o CRM
    // reconhece o mesmo envio e devolve o lead existente em vez de duplicar.
    external_id: crypto.randomUUID(),
  });

  // Telefone é opcional no formulário; só vai ao CRM quando preenchido. Mandar
  // vazio poderia apagar um número já cadastrado para o mesmo contato.
  if (telefone) params.set("phone", telefone);

  let resposta: Response;
  try {
    resposta = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });
  } catch {
    return json({ erro: "crm_inalcancavel" }, 502);
  }

  if (!resposta.ok) return json({ erro: "crm_recusou", status: resposta.status }, 502);

  return json({ ok: true }, 200);
}
