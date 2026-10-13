/**
 * Catálogo de soluções da mytek: fonte única da home (cartões), das páginas
 * /solucoes/[slug], do menu, do rodapé e do sitemap.
 *
 * Cada item abre pelo problema do cliente e só depois diz a tecnologia (regra
 * do brand book). Preço só aparece onde já é público (CRM); o resto é sob
 * orçamento. Nenhum número de resultado: a mytek está no primeiro ano e não
 * tem métrica de cliente para citar.
 *
 * TODO(conteúdo): textos escritos para o rascunho do rebrand. Revisar com o
 * time antes de publicar, principalmente prazos e o que está incluso.
 */
export type Solution = {
  slug: string;
  /** Produto pronto (assinatura) ou serviço sob medida. */
  kind: "produto" | "servico";
  /** Página própria do produto, quando existe (o CRM tem a /crm). */
  href: string;
  tag: string;
  title: string;
  /** Frase curta do cartão: o problema, na voz do cliente. */
  problem: string;
  /** Uma linha do que a mytek faz a respeito. */
  summary: string;
  /** Título da página interna. */
  headline: string;
  intro: string;
  includes: string[];
  steps: [string, string][];
  faq: { q: string; a: string }[];
  /** Aparece com destaque roxo e preço público. */
  highlight?: boolean;
};

export const solutions: Solution[] = [
  {
    slug: "sites",
    kind: "servico",
    href: "/solucoes/sites",
    tag: "Presença",
    title: "Sites",
    problem: "Seu site não passa confiança nem explica o que você vende.",
    summary:
      "Sites institucionais rápidos, bons no celular e no Google, com a cara da sua marca. A partir de R$1.500.",
    headline: "Um site que explica o que você vende e leva o visitante a chamar.",
    intro:
      "Muita empresa tem site só porque precisa ter. A gente parte do que o seu cliente quer saber antes de comprar e organiza o site em torno disso, com identidade visual própria e carregamento rápido.",
    includes: [
      "Estrutura e textos pensados para o seu tipo de cliente",
      "Design sob medida, sem modelo pronto repetido",
      "Otimizado para celular e para aparecer no Google",
      "Botão de WhatsApp e formulário ligados à sua operação",
      "Hospedagem e domínio configurados na entrega",
    ],
    steps: [
      ["Conversa", "Entendemos o negócio, o público e o que o site precisa resolver."],
      ["Desenho", "Você aprova a estrutura e o visual antes de qualquer desenvolvimento."],
      ["Entrega", "Site no ar, com acompanhamento nas primeiras semanas."],
    ],
    faq: [
      {
        q: "Em quanto tempo fica pronto?",
        a: "Depende do tamanho do site e de quão rápido o conteúdo chega. O prazo fica combinado no escopo, antes de começar.",
      },
      {
        q: "Quanto custa um site?",
        a: "A partir de R$1.500. O valor final depende do tamanho do site e do que ele precisa fazer, e fica combinado na proposta antes de começar.",
      },
      {
        q: "Posso editar o site depois?",
        a: "Sim. Combinamos na proposta se você edita sozinho ou se pede ajustes ao nosso time.",
      },
    ],
  },
  {
    slug: "landing-pages",
    kind: "servico",
    href: "/solucoes/landing-pages",
    tag: "Captura",
    title: "Landing pages",
    problem: "O visitante chega, olha e vai embora sem deixar contato.",
    summary:
      "Páginas feitas para converter, com formulário ligado direto ao seu funil de vendas. A partir de R$999, pagamento único.",
    headline: "Uma página com um objetivo só: transformar visitante em contato.",
    intro:
      "A landing page é a porta de entrada da sua operação comercial. Quem preenche o formulário já nasce como lead no funil, com a origem registrada, sem planilha no meio do caminho.",
    includes: [
      "Página criada do zero, ou modelo essencial pronto",
      "Formulário conectado automaticamente ao CRM",
      "Carregamento rápido no celular",
      "Texto e estrutura focados em uma única ação",
      "Primeiro mês de manutenção incluso",
    ],
    steps: [
      ["Briefing", "Definimos oferta, público e a ação que a página precisa gerar."],
      ["Criação", "Você aprova o conteúdo e a página é desenvolvida."],
      ["No ar", "Publicamos, ligamos ao funil e acompanhamos os primeiros contatos."],
    ],
    faq: [
      {
        q: "Preciso ter o CRM da mytek?",
        a: "Não. A página pode mandar o contato para o CRM da mytek ou para a ferramenta que você já usa. Com o nosso CRM, a integração já vem pronta.",
      },
      {
        q: "Quanto custa e é cobrado por mês?",
        a: "São dois planos em pagamento único, sem mensalidade: Essencial por R$999 e Sob Medida por R$1.797. Manutenção contínua, se quiser, é combinada à parte.",
      },
      {
        q: "Em quanto tempo fica pronta?",
        a: "A Essencial é entregue em até 7 dias úteis, e a Sob Medida em até 15 dias úteis.",
      },
    ],
  },
  {
    slug: "crm",
    kind: "produto",
    href: "/crm",
    tag: "Produto",
    title: "CRM com WhatsApp",
    problem: "O lead respondeu e ninguém voltou.",
    summary:
      "Funil, atendimento no WhatsApp e alerta de lead parado. A partir de R$99/mês, sem fidelidade.",
    headline: "",
    intro: "",
    includes: [],
    steps: [],
    faq: [],
    highlight: true,
  },
  {
    slug: "mytek-hub",
    kind: "produto",
    href: "/solucoes/mytek-hub",
    tag: "Produto",
    title: "Mytek Hub",
    problem: "Cada um cuida das tarefas num lugar e ninguém sabe o que está andando.",
    summary:
      "Sistema de organização do time: tarefas com prazo, progresso visível e conversa no mesmo lugar.",
    headline: "A equipe inteira organizada num lugar só: tarefas, prazos e conversa.",
    intro:
      "O Mytek Hub é o sistema que a própria mytek usa para organizar o trabalho. Cada pessoa vê o que precisa fazer e em que pé está; o líder enxerga o conjunto e pede tarefas direto pelo sistema; e o time conversa ali mesmo, sem trocar de aplicativo.",
    includes: [
      "Agendamento de tarefas, com responsável e prazo",
      "Quadro de progresso (a fazer, em andamento, concluído) atualizado em tempo real",
      "Visão da equipe e visão do líder sobre o andamento",
      "O líder solicita tarefas para qualquer pessoa do time pelo próprio sistema",
      "Chat da equipe com canais e mensagens diretas, no estilo do Discord",
      "Base de conhecimento (wiki) da equipe, no mesmo login",
    ],
    steps: [
      ["Configuração", "Criamos o espaço da sua empresa, com as pessoas e os times."],
      ["Adoção", "O time passa a registrar e acompanhar o trabalho ali, com a nossa ajuda nos primeiros dias."],
      ["Rotina", "O líder acompanha o progresso, pede tarefas e a conversa fica junto do trabalho."],
    ],
    faq: [
      {
        q: "É um chat como o Discord?",
        a: "Tem canais e mensagens diretas para o time conversar, no mesmo login das tarefas. A diferença é que a conversa fica junto do trabalho, não solta em outro aplicativo.",
      },
      {
        q: "O líder consegue acompanhar tudo?",
        a: "Sim. O líder tem a visão do conjunto de tarefas da equipe e pode solicitar uma tarefa a alguém pelo próprio sistema.",
      },
      {
        q: "Quanto custa?",
        a: "Falamos de valores depois de entender o tamanho do seu time. Peça uma demonstração e a gente responde no WhatsApp.",
      },
    ],
  },
  {
    slug: "mycash",
    kind: "produto",
    href: "/solucoes/mycash",
    tag: "Produto",
    title: "MyCash",
    problem: "Você não sabe quanto a empresa tem em caixa de verdade.",
    summary:
      "O financeiro da empresa num só lugar: contas, cartões, orçamento e metas, com IA para consultar e lançar.",
    headline: "O financeiro da empresa organizado, sem planilha e sem susto no fim do mês.",
    intro:
      "O MyCash organiza o dinheiro do seu negócio: o que entra, o que sai, o que está parcelado no cartão e o que ainda vai vencer. Você vê o caixa do mês num painel claro, define orçamento e metas por categoria e ainda pergunta e lança pelo Claude ou pelo ChatGPT.",
    includes: [
      "Todas as entradas e saídas, por conta e por categoria",
      "Cartões com faturas e parcelas, para saber o que ainda vai cair",
      "Orçamento e metas por categoria, com acompanhamento",
      "Contas recorrentes e agenda de vencimentos, sem esquecer pagamento",
      "Importe o extrato do banco e ele já vem categorizado",
      "Painel com os totais do mês e gráficos fáceis de ler",
      "Pergunte e lance pelo Claude ou pelo ChatGPT, conversando",
    ],
    steps: [
      ["Configuração", "Cadastramos contas, cartões e categorias do jeito da sua empresa."],
      ["Lançamentos", "A equipe registra, ou você importa o extrato e o sistema categoriza."],
      ["Visão do caixa", "Acompanhe entradas, saídas, orçamento e metas, e pergunte à IA quando quiser."],
    ],
    faq: [
      {
        q: "Como funciona a IA no MyCash?",
        a: "Você conecta o MyCash ao Claude ou ao ChatGPT e passa a perguntar sobre o financeiro e lançar movimentações por conversa, em vez de abrir o sistema.",
      },
      {
        q: "Consigo trazer o que já tenho?",
        a: "Sim. Dá para importar o extrato do banco, e os lançamentos entram já categorizados.",
      },
      {
        q: "Substitui o meu contador?",
        a: "Não. O MyCash organiza o financeiro do dia a dia. A contabilidade formal continua com o seu contador.",
      },
      {
        q: "Quanto custa?",
        a: "Peça uma demonstração e a gente responde no WhatsApp com os valores.",
      },
    ],
  },
  {
    slug: "dashboards",
    kind: "servico",
    href: "/solucoes/dashboards",
    tag: "Dados",
    title: "Dashboards",
    problem: "Você descobre o resultado do mês só no fim do mês.",
    summary:
      "Painéis de vendas, atendimento e operação que a equipe entende sem pedir relatório.",
    headline: "Os números do seu negócio num lugar só, sem montar planilha.",
    intro:
      "Dashboard bom responde pergunta, não enfeita. A gente conecta as suas fontes de dados e monta painéis que qualquer pessoa da equipe entende, do dono ao vendedor.",
    includes: [
      "Painéis de vendas, atendimento, financeiro ou operação",
      "Conexão com planilhas, CRM, bancos de dados e outras fontes",
      "Indicadores definidos junto com você, não genéricos",
      "Atualização automática dos dados",
      "Primeiro mês de manutenção incluso",
    ],
    steps: [
      ["Perguntas", "Levantamos o que você precisa decidir e quais dados respondem isso."],
      ["Conexão", "Ligamos as fontes e tratamos os dados."],
      ["Painel", "Entregamos o dashboard e ensinamos a equipe a usar."],
    ],
    faq: [
      {
        q: "Funciona com os dados que eu já tenho?",
        a: "Na maioria dos casos sim. Planilhas, sistemas com exportação e bancos de dados costumam ser ligados sem trocar nada do que você usa.",
      },
      {
        q: "Qual ferramenta é usada?",
        a: "Escolhemos conforme o caso, entre painéis web e ferramentas como o Power BI. Explicamos a escolha na proposta.",
      },
    ],
  },
  {
    slug: "agentes-de-ia",
    kind: "servico",
    href: "/solucoes/agentes-de-ia",
    tag: "IA",
    title: "Agentes de IA",
    problem: "O cliente chama fora do horário e fica sem resposta.",
    summary:
      "Agentes que atendem, qualificam e agendam, com a sua base como fonte e a sua equipe no controle.",
    headline: "Atendimento que responde na hora, com a sua equipe no controle.",
    intro:
      "Um agente de IA responde as perguntas que se repetem todo dia, qualifica o contato e passa para uma pessoa quando precisa. Ele aprende com o conteúdo da sua empresa, não com respostas genéricas da internet.",
    includes: [
      "Atendimento no WhatsApp e no site",
      "Respostas baseadas nos documentos e nas regras da sua empresa",
      "Qualificação do contato e agendamento",
      "Passagem para atendimento humano quando necessário",
      "Histórico das conversas para a equipe revisar",
    ],
    steps: [
      ["Mapeamento", "Listamos as perguntas e os processos que o agente vai cobrir."],
      ["Treino e teste", "Ele é alimentado com o seu conteúdo e testado com casos reais."],
      ["Operação", "Entra no ar com acompanhamento e ajustes pelo uso."],
    ],
    faq: [
      {
        q: "O agente pode errar?",
        a: "Pode, como qualquer atendente. Por isso ele responde só dentro do que foi cadastrado, passa para uma pessoa quando não sabe, e as conversas ficam registradas para revisão.",
      },
      {
        q: "Substitui minha equipe?",
        a: "A ideia é tirar o trabalho repetitivo e deixar a equipe nas conversas que exigem uma pessoa.",
      },
    ],
  },
  {
    slug: "automacao-n8n",
    kind: "servico",
    href: "/solucoes/automacao-n8n",
    tag: "Automação",
    title: "Automação com n8n",
    problem: "Sua equipe copia dado de um sistema para o outro todo dia.",
    summary:
      "Fluxos que ligam as suas ferramentas e tiram do time o trabalho repetitivo.",
    headline: "Suas ferramentas conversando entre si, sem ninguém no meio.",
    intro:
      "O n8n liga sistemas por fluxos visuais: quando algo acontece em um lugar, outra coisa acontece no outro. A gente desenha esses fluxos para o seu processo e mantém tudo funcionando.",
    includes: [
      "Levantamento dos processos manuais que mais consomem tempo",
      "Fluxos entre WhatsApp, CRM, planilhas, e-mail e outros sistemas",
      "Avisos automáticos quando algo falha",
      "Documentação de cada fluxo",
      "Suporte e ajustes depois da entrega",
    ],
    steps: [
      ["Diagnóstico", "Acompanhamos o processo atual e achamos o que pode ser automático."],
      ["Fluxos", "Desenhamos, construímos e testamos cada automação."],
      ["Monitoramento", "Acompanhamos a execução e corrigimos o que precisar."],
    ],
    faq: [
      {
        q: "Preciso trocar minhas ferramentas?",
        a: "Não. A automação liga o que você já usa. Só sugerimos trocar algo quando a ferramenta atual não permite integração.",
      },
      {
        q: "Onde os fluxos rodam?",
        a: "Definimos na proposta: em servidor próprio ou na nuvem, conforme a sua necessidade de controle e de dados.",
      },
    ],
  },
  {
    slug: "previsao-de-churn",
    kind: "servico",
    href: "/solucoes/previsao-de-churn",
    tag: "Machine learning",
    title: "Previsão de churn",
    problem: "O cliente cancela e você só fica sabendo depois.",
    summary:
      "Modelo treinado com o seu histórico que aponta quem tem risco de sair, a tempo de agir.",
    headline: "Saiba quais clientes têm risco de sair antes que eles saiam.",
    intro:
      "Usamos o histórico de clientes da sua empresa para treinar um modelo de machine learning que estima o risco de cancelamento de cada um. A equipe passa a agir antes, com a lista de quem priorizar.",
    includes: [
      "Análise e preparação do seu histórico de clientes",
      "Modelo treinado e avaliado com os seus dados",
      "Lista priorizada de clientes em risco",
      "Entrega em dashboard ou ligada ao seu CRM",
      "Reavaliação do modelo conforme entram dados novos",
    ],
    steps: [
      ["Dados", "Reunimos e validamos o histórico de clientes e de cancelamentos."],
      ["Modelo", "Treinamos e avaliamos o modelo, e explicamos o que pesa no risco."],
      ["Uso", "Colocamos a lista na rotina da equipe e acompanhamos o resultado."],
    ],
    faq: [
      {
        q: "Preciso de muitos dados?",
        a: "Precisa de histórico suficiente de clientes que ficaram e que saíram. Avaliamos o seu caso antes de propor, e dizemos se os dados atuais ainda não bastam.",
      },
      {
        q: "O modelo garante quem vai sair?",
        a: "Não. Ele estima probabilidade e ajuda a priorizar a ação. É uma ferramenta de decisão, não uma garantia.",
      },
    ],
  },
  {
    slug: "sistemas-sob-medida",
    kind: "servico",
    href: "/solucoes/sistemas-sob-medida",
    tag: "Software",
    title: "Sistemas sob medida",
    problem: "Nenhuma ferramenta pronta encaixa no seu processo.",
    summary:
      "Software feito para a sua operação, do desenho à entrega, com acompanhamento depois.",
    headline: "Software feito para o jeito que a sua empresa trabalha.",
    intro:
      "Quando planilha e ferramenta pronta não dão conta, a gente constrói o sistema: do desenho do fluxo à entrega, em etapas, para você ver funcionando desde cedo.",
    includes: [
      "Levantamento do processo e desenho da solução",
      "Desenvolvimento em etapas, com entregas que você testa",
      "Integração com WhatsApp, CRM e sistemas que você já usa",
      "Controle de acesso por usuário",
      "Suporte e evolução depois do lançamento",
    ],
    steps: [
      ["Escopo", "Mapeamos o processo e combinamos o que entra, o prazo e o preço."],
      ["Construção", "Entregamos por etapas e ajustamos com o seu retorno."],
      ["Evolução", "Seguimos junto depois do lançamento, conforme o uso."],
    ],
    faq: [
      {
        q: "Como é cobrado?",
        a: "Por projeto, com escopo, prazo e valor combinados antes de começar. Sem surpresa no meio do caminho.",
      },
      {
        q: "O código é meu?",
        a: "Combinamos isso por contrato antes de começar, para não haver dúvida.",
      },
    ],
  },
];

export const products = solutions.filter((s) => s.kind === "produto");
export const services = solutions.filter((s) => s.kind === "servico");

export const detailSolutions = solutions.filter((s) => s.slug !== "crm");

export function getSolution(slug: string) {
  return detailSolutions.find((s) => s.slug === slug);
}
