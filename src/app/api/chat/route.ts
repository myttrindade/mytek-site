import { type NextRequest, NextResponse } from 'next/server';

interface ChatRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

interface CRMContactResponse {
  data?: { id: string; name?: string; email?: string };
  error?: { message: string };
}

export async function POST(req: NextRequest) {
  try {
    const body: ChatRequest = await req.json();

    // Validar entrada
    if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
      return NextResponse.json(
        { error: 'Nome, email e mensagem são obrigatórios' },
        { status: 400 }
      );
    }

    // Validar email básico
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Rate limit: máx 5 mensagens por email por hora (em prod, usar Redis)
    // TODO: implementar rate limit com Redis/Upstash

    // 1. Criar/atualizar contato no CRM
    const crmApiUrl = process.env.CRM_API_URL || 'https://crm.mytek.com.br/api/v1';
    const crmEmail = process.env.CRM_SERVICE_EMAIL;
    const crmPassword = process.env.CRM_SERVICE_PASSWORD;

    if (!crmEmail || !crmPassword) {
      console.error('CRM credentials not configured');
      return NextResponse.json(
        { error: 'Serviço temporariamente indisponível', response: 'Sua mensagem foi recebida. Entraremos em contato em breve!' },
        { status: 200 } // 200 mesmo com erro interno - não quer espantar o usuário
      );
    }

    // Autenticar no CRM (se necessário, ajuste conforme o fluxo real)
    // Por enquanto, vamos assumir que há um token de serviço disponível
    const authToken = await getCRMServiceToken(crmEmail, crmPassword);

    if (!authToken) {
      console.error('Failed to authenticate with CRM');
      return NextResponse.json(
        { error: 'Serviço temporariamente indisponível', response: 'Sua mensagem foi recebida. Entraremos em contato em breve!' },
        { status: 200 }
      );
    }

    // Criar contato
    const contactResponse = await fetch(`${crmApiUrl}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      },
      body: JSON.stringify({
        name: body.name.trim(),
        email: body.email.trim(),
        phone_number: body.phone ? formatPhoneNumber(body.phone) : undefined,
        source: 'website_chat',
        source_metadata: {
          initial_message: body.message.substring(0, 500),
          submitted_at: new Date().toISOString(),
        },
        tags: ['website-chat', 'leads'],
      }),
    });

    const contactData: CRMContactResponse = await contactResponse.json();

    if (!contactResponse.ok) {
      console.error('CRM contact creation failed:', contactData);
      // Mesmo que falhe no CRM, retorna sucesso ao cliente
      return NextResponse.json(
        { response: 'Sua mensagem foi recebida. Entraremos em contato em breve!' },
        { status: 200 }
      );
    }

    // 2. Log da conversa (em prod, salvaria em DB próprio)
    console.log('[CHAT_WIDGET]', {
      contact_id: contactData.data?.id,
      name: body.name,
      email: body.email,
      message: body.message.substring(0, 100),
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { response: 'Obrigado! Entraremos em contato em breve.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { response: 'Sua mensagem foi recebida. Entraremos em contato em breve!' },
      { status: 200 } // Retorna 200 mesmo com erro - graceful degradation
    );
  }
}

/**
 * Autentica no CRM usando credenciais de email/senha.
 * Faz login e obtém um session token válido.
 */
async function getCRMServiceToken(email: string, password: string): Promise<string | null> {
  try {
    const crmApiUrl = process.env.CRM_API_URL || 'https://crm.mytek.com.br/api/v1';
    const baseUrl = crmApiUrl.replace('/api/v1', '');

    // Tenta fazer login no CRM
    const loginResponse = await fetch(`${baseUrl}/auth/v1/token?grant_type=password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': process.env.SUPABASE_SERVICE_KEY || '',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!loginResponse.ok) {
      console.error('CRM login failed:', loginResponse.status);
      return null;
    }

    const loginData = await loginResponse.json();
    return loginData.access_token || loginData.session?.access_token;

  } catch (error) {
    console.error('CRM authentication error:', error);
    return null;
  }
}

/**
 * Formata telefone para E.164 (+5511999998888)
 */
function formatPhoneNumber(phone: string): string | undefined {
  // Remove tudo que não é número
  const cleaned = phone.replace(/\D/g, '');

  // Se tem 11 dígitos (brasileiro), adiciona +55
  if (cleaned.length === 11) {
    return `+55${cleaned}`;
  }

  // Se tem 10 dígitos (sem DDD completo), tenta adicionar
  if (cleaned.length === 10) {
    return `+55${cleaned}`;
  }

  // Se já tem +, retorna como está
  if (cleaned.length >= 12 && cleaned.startsWith('55')) {
    return `+${cleaned}`;
  }

  // Caso não consiga formatar, retorna undefined
  return undefined;
}
