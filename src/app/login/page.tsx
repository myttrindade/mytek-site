import { redirect } from "next/navigation";

/**
 * O site não tem área de cliente: a entrada é sempre pelo time. A tela que
 * existia aqui era do template e fingia sucesso sem autenticar nada, então
 * quem chega por link antigo vai direto para o contato.
 */
export default function Page() {
  redirect("/contact");
}
