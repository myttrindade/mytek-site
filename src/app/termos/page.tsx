import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Termos de Serviço",
  description: "Termos e condições de uso da plataforma mytek.",
  alternates: { canonical: "/termos" },
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          eyebrow="Termos"
          title="Termos de Serviço"
          description="Leia as condições para usar a plataforma mytek."
        />

        <div className="mx-auto max-w-3xl px-4 pb-24 lg:px-8">
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <h2>1. Aceitação dos Termos</h2>
            <p>
              Ao usar a plataforma mytek, você concorda com estes termos. Se não
              concorda, não use o serviço. Podemos alterar estes termos a
              qualquer momento. Notificaremos mudanças significativas por e-mail.
            </p>

            <h2>2. Descrição do Serviço</h2>
            <p>
              A mytek é uma plataforma SaaS que oferece CRM, Dashboard e
              Landing Page para pequenas e médias empresas. Fornecemos o
              serviço "como está", sem garantias de que será perfeito,
              ininterrupto ou sem erros.
            </p>

            <h2>3. Elegibilidade</h2>
            <p>
              Você deve ter 18 anos ou mais e ser capaz de celebrar contratos
              legais para usar este serviço. Empresas menores de idade devem
              ter autorização de responsáveis legais.
            </p>

            <h2>4. Conta e Responsabilidade</h2>
            <p>
              Você é responsável por manter a confidencialidade da sua senha e
              por todas as atividades da sua conta. Notifique-nos
              imediatamente sobre acesso não autorizado. Não permitimos contas
              falsas, fraudulentas ou ilegais.
            </p>

            <h2>5. Uso Aceitável</h2>
            <p>Você concorda em NÃO:</p>
            <ul>
              <li>Usar a plataforma para atividades ilegais ou prejudiciais</li>
              <li>
                Interferir, sobrecarregar ou danificar a infraestrutura da
                mytek
              </li>
              <li>
                Tentar acessar dados ou áreas não autorizadas da plataforma
              </li>
              <li>Enviar spam, malware ou código malicioso</li>
              <li>
                Usar a plataforma para atacar ou prejudicar terceiros
              </li>
              <li>Violar propriedade intelectual da mytek ou de terceiros</li>
              <li>Fazer scraping de dados da plataforma sem autorização</li>
            </ul>

            <h2>6. Assinaturas e Pagamentos</h2>
            <ul>
              <li>Assinaturas são mensais e renovadas automaticamente</li>
              <li>Você pode cancelar a qualquer momento, sem fidelidade</li>
              <li>
                O cancelamento vale a partir do próximo ciclo — você ainda tem
                acesso até o fim do mês
              </li>
              <li>
                Pagamentos são processados pelo Mercado Pago — veja os termos
                deles também
              </li>
              <li>Se houver falha no pagamento, entraremos em contato</li>
              <li>Preços podem mudar com 30 dias de aviso</li>
            </ul>

            <h2>7. Dados e Conteúdo Seu</h2>
            <p>
              Você mantém a propriedade de todos os dados, contatos e conteúdo
              que registra na plataforma. Você concede à mytek licença para
              usar esses dados apenas para fornecer o serviço. Você é
              responsável por garantir que tem direito de usar os dados que
              insere (especialmente dados de clientes).
            </p>

            <h2>8. Backup e Perda de Dados</h2>
            <p>
              Fazemos backup de seus dados regularmente. Porém, você é
              responsável por manter backup externo de dados críticos. A mytek
              não é responsável por perda de dados causada por sua falha em
              fazer backup, exceto por negligência grosseira da mytek.
            </p>

            <h2>9. Limitação de Responsabilidade</h2>
            <p>
              NA MÁXIMA EXTENSÃO PERMITIDA POR LEI, A MYTEK NÃO É RESPONSÁVEL
              POR DANOS INDIRETOS, INCIDENTAIS, ESPECIAIS OU CONSEQUENTES,
              INCLUSIVE PERDA DE LUCROS OU DADOS, MESMO SE AVISADA DA
              POSSIBILIDADE DE TAIS DANOS.
            </p>
            <p>
              A responsabilidade total da mytek não excede o valor que você
              pagou nos últimos 12 meses.
            </p>

            <h2>10. Garantia Limitada</h2>
            <p>
              Fornecemos o serviço "como está". Não garantimos que será sem
              erros, seguro ou adequado para fins específicos. Tentamos
              manter o serviço disponível, mas não garantimos 99.9% de uptime
              (embora nos esforcemos).
            </p>

            <h2>11. Suspensão e Encerramento</h2>
            <p>Podemos suspender ou encerrar sua conta se:</p>
            <ul>
              <li>Você violar estes termos</li>
              <li>Você usar a plataforma para atividades ilegais</li>
              <li>Você não pagar a assinatura por 30 dias</li>
              <li>
                Você enviar spam ou prejudicar outros usuários ou a plataforma
              </li>
            </ul>
            <p>
              Notificaremos sobre suspensão. Você pode exportar seus dados
              antes do encerramento (exceto em casos graves).
            </p>

            <h2>12. Propriedade Intelectual</h2>
            <p>
              Você concorda que qualquer feedback, sugestão ou melhoria que nos
              forneça pode ser usada livremente pela mytek, sem compensação.
            </p>

            <h2>13. Marcas Registradas</h2>
            <p>
              "mytek", logos e marcas são propriedade da mytek. Você não pode
              usar sem permissão explícita.
            </p>

            <h2>14. Lei Aplicável</h2>
            <p>
              Estes termos são regidos pelas leis da República Federativa do
              Brasil. Qualquer disputa será resolvida nos tribunais de
              Brasília, DF.
            </p>

            <h2>15. Contato</h2>
            <p>
              Dúvidas sobre estes termos? Entre em contato pelo formulário em
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
