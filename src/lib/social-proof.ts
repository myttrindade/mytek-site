/**
 * Prova social — fonte única, e hoje deliberadamente vazia.
 *
 * A mytek está no primeiro ano, com 2 clientes fundadores. Não há logo,
 * depoimento, case ou número agregado que possa ser publicado. As listas
 * abaixo existem para receber esses dados quando existirem: enquanto
 * estiverem vazias, **as seções correspondentes não renderizam** — nem
 * título, nem moldura, nem "em breve".
 *
 * Foi assim que o site chegou a anunciar "180+ negócios" e seis depoimentos
 * com avatar gerado por IA. Publicidade enganosa (CDC art. 37), e a limpeza
 * custou duas rodadas de trabalho. Preencher com placeholder verossímil aqui
 * é reintroduzir o mesmo problema.
 *
 * Regra para preencher `testimonials`: só com cliente real e consentimento
 * por escrito. Se o cliente não quiser expor a marca, anonimize a EMPRESA,
 * nunca a pessoa e nunca a métrica.
 */

export type Testimonial = {
  /** A frase, como o cliente disse. Não reescreva para soar melhor. */
  quote: string;
  name: string;
  role: string;
  /** Empresa · setor, cidade. */
  company: string;
  /** Caminho em /public. Só com autorização de uso de marca. */
  logo?: string;
};

export type ClientLogo = {
  name: string;
  /** Caminho em /public/brand/clientes/. */
  src: string;
  width: number;
  height: number;
};

/**
 * TODO(prova social): um depoimento real vale mais que os seis inventados que
 * removemos. São 2 clientes fundadores — peça a um deles.
 */
export const testimonials: Testimonial[] = [];

/** TODO(prova social): logos, só com autorização de uso de marca. */
export const clientLogos: ClientLogo[] = [];

/**
 * TODO(prova social): números agregados — leads processados, oportunidades
 * recuperadas, tempo médio de resposta. Só publique o que for extraível do
 * banco do CRM e conferível. Nada de estimativa arredondada para cima.
 */
export const aggregateStats: Array<{ value: string; label: string }> = [];

export const hasSocialProof =
  testimonials.length > 0 || clientLogos.length > 0 || aggregateStats.length > 0;
