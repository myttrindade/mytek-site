import { HomeContent } from "@/components/pages/home-page";
import { pageMetadata } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

export const metadata = pageMetadata(
  "es",
  "/",
  { absolute: makeTitle() },
  siteConfig.description
);

function makeTitle() {
  return "mytek · Software e IA para negocios que venden por conversación";
}

export default function Home() {
  return <HomeContent lang="es" />;
}
