/**
 * Identidade jurídica da empresa — o que vai no rodapé e no JSON-LD
 * `Organization`. Fonte única: não repita nenhum destes valores solto em
 * componente ou página.
 *
 * Os campos marcados com TODO ainda são placeholders. Enquanto qualquer um
 * deles continuar com o valor abaixo, o bloco jurídico do rodapé **não é
 * renderizado** e os campos correspondentes ficam fora do JSON-LD — publicar
 * "CNPJ 00.000.000/0001-00" é pior do que não publicar CNPJ nenhum.
 */

/** Sentinela dos campos que ainda não foram preenchidos. */
const TODO = "__TODO__" as const;

export const company = {
  // TODO(jurídico): razão social registrada na Receita.
  legalName: TODO as string,

  // TODO(jurídico): CNPJ no formato 00.000.000/0001-00.
  cnpj: TODO as string,

  // TODO(jurídico): logradouro, número, complemento, bairro e CEP.
  addressStreet: TODO as string,

  // TODO(jurídico): telefone comercial no formato (13) 0000-0000.
  phone: TODO as string,

  addressLocality: "Santos",
  addressRegion: "SP",
  addressCountry: "BR",

  email: "contato@mytek.com.br",
  businessHours: "Atendimento seg–sex, 9h–18h",

  /**
   * Confirmado pelo time em 26/08/2026: os dados dos clientes ficam em
   * servidores no Brasil. Se isso mudar, remova a linha de LGPD do rodapé e
   * a frase correspondente na FAQ da home — a afirmação é verificável e não
   * pode sobreviver a uma migração de infraestrutura.
   */
  dataHostedInBrazil: true,
} as const;

/** `true` quando o valor já foi preenchido de verdade. */
export const isFilled = (value: string) => value !== TODO;

/** O rodapé só mostra o bloco jurídico quando há algo verdadeiro a mostrar. */
export const hasLegalIdentity =
  isFilled(company.legalName) || isFilled(company.cnpj);
