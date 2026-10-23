import { CrmContent } from "@/components/pages/crm-page";
import { pageMetadata } from "@/lib/i18n";
import { mostrarValores } from "@/lib/site-config";

export const metadata = pageMetadata(
  "pt",
  "/crm",
  "CRM com WhatsApp e alerta de lead parado",
  "O CRM da mytek avisa quando um lead para de andar no funil, centraliza o atendimento no WhatsApp e mostra o que virou venda." + (mostrarValores ? " A partir de R$137/mês, mais implantação de R$247, sem fidelidade." : "")
);

export default function CrmPage() {
  return <CrmContent lang="pt" />;
}
