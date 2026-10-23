import { AboutContent } from "@/components/pages/about-page";
import { pageMetadata } from "@/lib/i18n";

export const metadata = pageMetadata("es", "/about", "Sobre", "A mytek faz software e IA para empresas de qualquer segmento: produtos prontos, sites e projetos sob medida, com preço e prazo combinados antes de começar.");

export default function AboutPage() {
  return <AboutContent lang="es" />;
}
