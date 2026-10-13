# Guia de continuação: rebrand do site da mytek

Este arquivo existe para quem abrir um chat novo (ou um novo colaborador) continuar o trabalho sem depender de histórico.

## Onde está tudo

- Repositório: https://github.com/myttrindade/mytek-site
- Branch do rebrand: `rebrand/ultravioleta` (a `main` NÃO foi alterada)
- Pull request (rascunho): https://github.com/myttrindade/mytek-site/pull/2
- Prévia online (Cloudflare Pages, atualiza a cada push na branch): https://rebrand-ultravioleta.mytek-site-5on.pages.dev
- Pasta local do clone: `C:\Users\maith\mytek-site-rebrand`
- O repositório é público: tudo o que entra na branch fica visível.

## Como rodar

```bash
cd C:\Users\maith\mytek-site-rebrand
pnpm install
pnpm dev --port 3100      # http://localhost:3100
pnpm exec tsc --noEmit    # checagem de tipos
pnpm build                # site estático (output: "export"), gera a pasta out/
```

- Next.js 16 e Tailwind v4. O `AGENTS.md` do repositório avisa que esta versão do Next tem diferenças: ler `node_modules/next/dist/docs/` antes de mexer em APIs do framework.
- O site é 100% estático. Rotas dinâmicas precisam de `generateStaticParams`.
- Para rever a abertura (ela roda uma vez por sessão): abrir `/?intro=1`.
- O `pnpm lint` tem 6 erros antigos em `termos/page.tsx` (aspas sem escape). Já existiam antes do rebrand.

## Identidade (brand book "Ultravioleta")

- Cores: roxo `#5E34F7`, roxo escuro `#0F0819`, lilás `#EDEBFF`, lima `#C6FF00`, branco. O lima só aparece em ação, número importante, status ativo e IA, nunca sobre fundo claro.
- Tokens em `src/app/globals.css`. O token `text-emphasis` é lima no escuro e roxo no claro. Fundo escuro de uma faixa: classe `dark` na seção.
- Fontes: Inter no corpo. Títulos em Plus Jakarta Sans, que é substituta da Satoshi (a Satoshi de verdade ainda precisa ser carregada).
- Logo: o símbolo do avatar do Instagram (duas asas espelhadas) mais o texto `mytek.` com ponto lima. No menu vai só o símbolo, sem quadrado. O quadrado roxo arredondado é só para app, foto de perfil e vídeos.
- Páginas claras alternam com faixas escuras. O topo (capa) é escuro.

## Regras que a usuária pediu (valem para todo texto novo)

- NUNCA usar travessão (— ou –) em texto escrito para ela (site, documentos, mensagens). Usar vírgula, ponto, "e" ou o separador "·".
- Nenhum rodapé "Co-authored-by" nem "Generated with Claude" em commits, PRs ou arquivos.
- Não inventar métricas de resultado. Números de exemplo precisam estar identificados como "dados de exemplo".
- Os cartões em 3D ficam retos em repouso e só viram no hover.
- Não usar luz que anda na borda nos cartões da capa nem nos "produtos prontos".

## Mapa do projeto

Páginas (em `src/app`):
- `/` home. `/crm` página do CRM. `/pricing` preços. `/solucoes/*` uma página por serviço.
- Páginas próprias (arquivo em `src/app/solucoes/<nome>/page.tsx`): sites, landing-pages, dashboards, agentes-de-ia, automacao-n8n, previsao-de-churn, sistemas-sob-medida.
- `src/app/solucoes/[slug]/page.tsx` atende só o MyHub e o MyCash. Ao criar uma página própria nova, incluir o slug na lista de exclusão do `generateStaticParams` desse arquivo.
- `/brand` mostra o design system (não indexado).

Dados e preços (fonte única):
- `src/lib/solutions-data.ts`: texto de cada solução (cartões da home, perguntas, itens).
- `src/lib/checkout.ts`: planos, preços e links do Mercado Pago. As páginas de preço, pagamento e landing page leem daqui.
- `src/lib/site-config.ts`: título e descrição do site e o caminho do vídeo do Hub.

Componentes de marca (`src/components/brand`):
- `intro-splash.tsx` abertura. `hero-visual.tsx` cartões flutuantes da capa. `me-3d.tsx` símbolo em 3D.
- `card-3d.tsx` cartão que vira em 3D. `glow.tsx` arcos de luz e o símbolo grande (`BrandGlyph`).
- `flow-showcase.tsx` editor de fluxo da automação. `hub-video.tsx` vídeo do Hub com capítulos.
- `solutions-grid.tsx` e `solutions-compare.tsx` (em `src/components`) grade de soluções e quadro "landing page ou site".

Vídeos e imagens de exemplo (`public/brand`): `hub/` (vídeo do MyHub), `dashboards/` (vídeo do dashboard em Power BI), `churn/` (imagem do app de previsão de churn). Os dois vídeos foram regravados quadro a quadro com o logo atual: scripts em `tools/relogo-hub.py` e `tools/relogo-dashboard.py` (caminhos fixos da máquina da usuária).

## Preços atuais (produtos prontos têm preço fixo; o que é sob medida é combinado por fora)

- CRM Normal R$99/mês. CRM Plus R$297/mês (inclui IA e previsão de churn). 3 usuários.
- Dashboard avulso R$397/mês, com suporte R$697/mês. Add-on para cliente do CRM: +R$197 ou +R$347.
- Combos CRM + Dashboard: R$296, R$446, R$494 e R$644 por mês.
- Landing page: Essencial R$999, Sob Medida R$1.797 (pagamento único). Cliente ativo tem 20% de desconto (R$799,20 e R$1.437,60).
- Sites a partir de R$1.500.
- Previsão de churn avulsa R$397/mês mais R$497 de implantação (uma vez). Incluída no CRM Plus.
- Sob medida, sem preço público: agentes de IA, automação com n8n, sistemas sob medida. MyHub e MyCash são "sob demonstração".

## Pendências conhecidas

1. Links de pagamento do Mercado Pago: estão VAZIOS (`url: ""` em `checkout.ts`) para CRM Normal, CRM Plus, Landing Page (os dois planos), previsão de churn e os 4 combos, porque os links antigos cobrariam o valor antigo. Criar os novos no painel do Mercado Pago e preencher. Enquanto vazio, o botão leva ao contato.
2. Assistente de IA do repositório `mytek-chat`: o documento `docs/politica-mytek-agente-ia.pdf` ainda tem os preços antigos (CRM R$197). O widget do site conversa com ele. Atualizar o documento e refazer o índice.
3. Páginas ainda no visual antigo ou sem revisão: Changelog. O blog foi removido de propósito (não haverá blog). Login e cadastro viraram redirecionamento para o contato.
4. Conferir tudo no celular (a maior parte foi testada só em tela larga).
5. Carregar a fonte Satoshi de verdade (hoje há a substituta).
6. Confirmar com a usuária se o Dashboard (R$397/R$697) mudou de preço. Ela não passou alteração.
7. Textos das páginas de serviço, do MyCash e do Hub foram escritos no rascunho e precisam de revisão dela.
8. O MyCash ainda não tem vídeo ou imagem. O Hub usa a gravação do portfólio.
9. Depois de aprovado, tirar o PR de rascunho e fazer o merge na `main` (a `main` é o site que está no ar).

## Armadilhas técnicas já encontradas

- CSS sem camada (arquivo `globals.css`) vence classes utilitárias do Tailwind. Uma regra `.me3d {position: relative}` já anulou um `absolute` e deslocou o símbolo.
- Os efeitos de entrada (`BlurFade`) deixam a captura de tela vazia por alguns segundos no servidor de desenvolvimento. Esperar uns 10 segundos antes de olhar.
- A abertura usa `sessionStorage` e um script no `layout.tsx` que adiciona `intro-seen` ao `<html>`.
- Em `solucoes/[slug]/page.tsx`, a lista de slugs com página própria precisa bater com as pastas em `src/app/solucoes`.
