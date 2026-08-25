import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Saiba como a mytek protege seus dados pessoais.",
  alternates: { canonical: "/politica-privacidade" },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          eyebrow="Privacidade"
          title="Política de Privacidade"
          description="Entenda como coletamos, usamos e protegemos seus dados."
        />

        <div className="mx-auto max-w-3xl px-4 pb-24 lg:px-8">
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <h2>1. Informações que Coletamos</h2>
            <p>
              Coletamos informações que você nos fornece diretamente, como nome,
              e-mail, telefone e dados da empresa ao criar uma conta ou entrar
              em contato. Se você usar o CRM ou Dashboard, também coletamos
              dados sobre leads, transações e interações que você registra na
              plataforma.
            </p>

            <h2>2. Como Usamos Seus Dados</h2>
            <p>Usamos essas informações para:</p>
            <ul>
              <li>Fornecer e melhorar nossos serviços</li>
              <li>Processar pagamentos e cobranças</li>
              <li>Enviar atualizações e comunicações importantes</li>
              <li>Responder suas dúvidas e requisições</li>
              <li>Cumprir obrigações legais</li>
              <li>Análise de uso (de forma anônima)</li>
            </ul>

            <h2>3. Proteção de Dados</h2>
            <p>
              Seus dados são transmitidos via HTTPS criptografado. Não
              armazenamos números de cartão — os pagamentos são processados
              diretamente pelo Mercado Pago. Implementamos medidas técnicas e
              organizacionais para proteger contra acesso não autorizado,
              alteração ou destruição de dados.
            </p>

            <h2>4. Compartilhamento de Dados</h2>
            <p>
              Não vendemos ou compartilhamos seus dados com terceiros para
              marketing. Compartilhamos apenas com:
            </p>
            <ul>
              <li>Mercado Pago (processamento de pagamentos)</li>
              <li>Provedores de infraestrutura (hospedagem, e-mail)</li>
              <li>
                Autoridades legais, quando exigido por lei ou ordem judicial
              </li>
            </ul>

            <h2>5. Seus Direitos (LGPD)</h2>
            <p>Conforme a Lei Geral de Proteção de Dados (LGPD), você tem direito a:</p>
            <ul>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incorretos</li>
              <li>Solicitar exclusão (direito ao esquecimento)</li>
              <li>Portar seus dados para outro serviço</li>
              <li>Revogar consentimento a qualquer momento</li>
            </ul>
            <p>
              Para exercer qualquer desses direitos, entre em contato conosco
              pelo e-mail ou formulário de contato.
            </p>

            <h2>6. Cookies</h2>
            <p>
              Usamos cookies apenas para funcionalidades essenciais (autenticação
              e sessão). Não rastreamos você com análiticos invasivos. O site
              não coleta dados de comportamento sem seu consentimento.
            </p>

            <h2>7. Retenção de Dados</h2>
            <p>
              Mantemos seus dados enquanto sua conta estiver ativa. Após
              cancelamento, deletamos a maioria dos dados em 30 dias, exceto
              quando obrigados a manter por lei (registros de impostos,
              compliance). Dados anônimos para análise podem ser mantidos
              indefinidamente.
            </p>

            <h2>8. Dados dos Seus Clientes</h2>
            <p>
              Se você usar o CRM ou Dashboard, você é responsável pelos dados
              dos seus clientes que registra na plataforma. Você deve garantir
              que tem consentimento deles. A mytek não usa esses dados para
              nenhum propósito além de fornecer o serviço.
            </p>

            <h2>9. Mudanças Nesta Política</h2>
            <p>
              Podemos atualizar esta política ocasionalmente. Notificaremos você
              por e-mail sobre mudanças significativas. Seu uso contínuo da
              plataforma significa aceitar as mudanças.
            </p>

            <h2>10. Contato</h2>
            <p>
              Dúvidas sobre privacidade? Entre em contato pelo formulário em
              /contact ou envie um e-mail para contato@mytek.com.br.
            </p>

            <p className="mt-8 text-sm text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
