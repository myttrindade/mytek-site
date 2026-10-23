import { HomeContent } from "@/components/pages/home-page";
import { pageMetadata } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

export const metadata = pageMetadata(
  "en",
  "/",
  { absolute: makeTitle() },
  siteConfig.description
);

function makeTitle() {
  return "mytek · Software and AI for businesses that sell through conversation";
}

export default function Home() {
  return <HomeContent lang="en" />;
}
