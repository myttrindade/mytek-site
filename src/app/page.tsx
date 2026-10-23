import { HomeContent } from "@/components/pages/home-page";
import { pageMetadata } from "@/lib/i18n";

export const metadata = pageMetadata("pt", "/", null, null);

export default function Home() {
  return <HomeContent lang="pt" />;
}
