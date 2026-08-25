# Chat Widget Setup - MyTek Site

## Overview

O chat widget está integrado no site e envia mensagens para o CRM MyTek via middleware seguro.

**Fluxo:**
1. Usuário preenche formulário (nome, email, telefone)
2. Widget envia para `POST /api/chat` (seu site)
3. Middleware autentica no CRM
4. CRM cria contato + logs a conversa
5. Resposta ao usuário

## Configuração

### 1. Variáveis de Ambiente

Adicione ao `.env.local` do site:

```bash
# CRM Integration
CRM_API_URL=https://crm.mytek.com.br/api/v1
CRM_SERVICE_EMAIL=seu-email@seu-dominio.com.br
CRM_SERVICE_PASSWORD=sua-senha-segura
SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 2. Criar Service Account no CRM

**No CRM (`crm.mytek.com.br`):**

1. Login como admin
2. Ir para **Configurações > Integrações > Serviço**
3. Criar novo usuário com email: `website-chat-service@mytek.com.br`
4. Role: `agent` (permissão mínima pra criar contatos)
5. Copiar email e senha → colocar em `.env.local`

### 3. Obter Supabase Service Key

**No Supabase Dashboard do CRM:**

1. Settings → API
2. Copiar **Service Role Secret** (com ⚠️ CUIDADO - acesso total)
3. Colar em `SUPABASE_SERVICE_KEY`

## Como Funciona

### Widget (`src/components/chat-widget.tsx`)

- Botão flutuante no canto inferior direito
- 3 Estados:
  1. **Fechado**: só mostra botão
  2. **Formulário**: coleta nome, email, telefone
  3. **Chat**: conversa simples

### Middleware (`src/app/api/chat/route.ts`)

```
POST /api/chat
├─ Validar entrada (email, nome, mensagem)
├─ Autenticar no CRM
├─ Criar contato: POST /api/v1/contacts
├─ Logar conversa (console por enquanto)
└─ Retornar resposta
```

**Graceful degradation:** se CRM falhar, widget ainda retorna mensagem de confirmação ao usuário.

## Customização

### Mudar cor do widget

Em `chat-widget.tsx`:
- `bg-blue-600` → sua cor preferida
- `focus:ring-blue-600` → cor do foco

### Mudar mensagens

Editar strings em:
- `messages.ts` (inicial)
- `handleFormSubmit()` (após form)
- `handleSendMessage()` (resposta)

### Adicionar campos extras

No formulário:
```tsx
const [formData, setFormData] = useState({ 
  name: '', email: '', phone: '',
  // ↓ Novo campo
  company: ''
});
```

E enviar pro CRM em `source_metadata`.

## Deploy

### Vercel / Cloudflare Pages

Adicione as env vars:

**Vercel Dashboard → Settings → Environment Variables:**
```
CRM_API_URL
CRM_SERVICE_EMAIL
CRM_SERVICE_PASSWORD
SUPABASE_SERVICE_KEY
```

### Auto-Deploy

Após fazer push:
```bash
git add .env.example  # Não commite .env.local!
git commit -m "Adiciona chat widget ao site"
git push origin main
```

O CI vai fazer build e deploy automático em ~3-5 min.

## Monitoring

### Logs

O middleware loga mensagens em:
- **Local**: `npm run dev` → console
- **Prod**: Vercel Logs → Deployment → Function Logs

Ver eventos:
```bash
vercel logs --follow
```

### Estatísticas

O CRM registra cada chat com:
- `source: 'website_chat'`
- `tags: ['website-chat', 'leads']`

No CRM, filtrar contatos por tag `website-chat` para ver todas as conversas.

## Troubleshooting

### Widget não aparece
- Verificar se `<ChatWidget />` foi adicionado em `layout.tsx`
- Recarregar com Ctrl+Shift+R (clear cache)

### "Serviço temporariamente indisponível"
- Verificar credenciais do CRM em `.env.local`
- Confirmar que o serviço account existe no CRM
- Verificar logs: `vercel logs`

### Contatos não aparecem no CRM
- Verificar se `SUPABASE_SERVICE_KEY` é válido
- Confirmar que service account tem role `agent` ou `admin`
- Checar se `CRM_API_URL` está correto

### Email rejeitado como inválido
- Widget valida regex `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Testar email em https://regex101.com com esse padrão

## Próximos Passos

- [ ] Adicionar rate limit (Redis/Upstash)
- [ ] Implementar banco de dados local pra persistir chats
- [ ] Dashboard de analytics (visualizar chats recebidos)
- [ ] Suporte a múltiplos idiomas
- [ ] Integração com IA (responder automaticamente)
- [ ] Notificações por email quando novo chat chegar

## Support

Problemas? Abra issue em `github.com/myttrindade/mytek-site` com:
- Erro exato (screenshot/console log)
- Passos pra reproduzir
- Versão do Node

