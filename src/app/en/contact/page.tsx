import { ContactContent } from "@/components/pages/contact-page";
import { pageMetadata } from "@/lib/i18n";

export const metadata = pageMetadata("en", "/contact", "Contato", "Dúvidas sobre a mytek, um produto pronto ou um projeto sob medida? Fale com a gente pelo WhatsApp, e-mail ou formulário.");

export default function ContactPage() {
  return <ContactContent lang="en" />;
}
