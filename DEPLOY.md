# Como o site vai ao ar

Push na `main` → o **Cloudflare Pages** faz o build sozinho e publica em
<https://mytek.com.br>. Não há GitHub Action de deploy, e não deve haver.

Projeto: `mytek-site`, conta `contatomytek@gmail.com`
(`ff459b1c4bd0109bb9e2956ac0426aee`), conectado ao repositório pela integração
Git nativa da Cloudflare.

## Não adicione um segundo pipeline

Até 26/08/2026 existia também um `.github/workflows/deploy.yml` que rodava
`pnpm build` no Actions e subia o `out/` por `wrangler pages deploy`. Como o
projeto já era conectado ao Git, **cada push gerava dois deployments de
produção do mesmo commit** — um de cada pipeline, disputando o mesmo alias.

No dia 26/08 isso derrubou uma publicação: quatro deployments do commit
`fb96636`, todos marcados *Production* no painel, todos com o conteúdo certo, e
o site continuou servindo o commit anterior por mais de vinte minutos.

O sintoma engana, porque parece cache. O teste que separa os dois:

```bash
# um arquivo que só existe no build novo
curl -o /dev/null -w "%{http_code}\n" https://mytek.com.br/_next/static/chunks/<chunk-novo>.js
curl -o /dev/null -w "%{http_code}\n" https://<id>.mytek-site-5on.pages.dev/_next/static/chunks/<chunk-novo>.js
```

Cache não apaga arquivo. **404 no domínio e 200 na URL imutável do deployment
significa alias apontando para o deployment velho**, não conteúdo cacheado. Se
os dois derem 200 e mesmo assim o HTML estiver velho, aí sim é cache — e nesse
caso vale lembrar que o `*.pages.dev` cacheia HTML de forma agressiva e não é
invalidado por "Purge Everything" da zona.

## Variáveis de ambiente

As `NEXT_PUBLIC_*` são embutidas **no bundle durante o build**, não lidas em
runtime. Como quem builda é a Cloudflare, elas têm que estar em **Settings →
Environment variables** do projeto Pages, no ambiente Production:

```
NEXT_PUBLIC_CRM_URL        # https://crm.mytek.com.br
NEXT_PUBLIC_WEBCHAT_TOKEN  # token público do canal webchat
CRM_WEBHOOK_URL            # usado pela Pages Function, esse sim é secreto
```

Se `NEXT_PUBLIC_WEBCHAT_TOKEN` faltar, `src/components/chat-widget.tsx` cai em
string vazia sem fallback: o widget de chat **some da página sem erro nenhum** e
o deploy passa como sucesso. Depois de mexer nessas variáveis, refaça o deploy —
mudar a variável não republica sozinho.

As mesmas variáveis existem como *repository variables* no GitHub, herdadas do
pipeline antigo. Ficaram inofensivas e podem ser removidas.

## Verificar o que está no ar

```bash
curl -s "https://mytek.com.br/?v=$(date +%s)" | grep -o '<title>[^<]*</title>'
```

Para ver o que um deployment específico tem, sem cache nenhum no caminho, use a
URL imutável dele (`https://<id>.mytek-site-5on.pages.dev`), que aparece em
`npx wrangler pages deployment list --project-name=mytek-site`.
