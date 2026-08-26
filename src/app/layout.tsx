import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { company, isFilled } from "@/lib/company";
import { siteConfig } from "@/lib/site-config";
import { ChatWidget } from "@/components/chat-widget";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} · ${siteConfig.tagline}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  // `keywords` foi removido de propósito: nenhum buscador relevante lê
  // <meta name="keywords"> há mais de uma década. Não readicione.
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} · ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} · ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

/**
 * Um único bloco Organization para o site inteiro. Os campos jurídicos só
 * entram depois de preenchidos em src/lib/company.ts — declarar
 * `"cnpj": "00.000.000/0001-00"` para o Google é pior que omitir.
 */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/brand/logo.png`,
  description: siteConfig.description,
  email: company.email,
  sameAs: [siteConfig.github],
  ...(isFilled(company.legalName) && { legalName: company.legalName }),
  ...(isFilled(company.cnpj) && { taxID: company.cnpj }),
  ...(isFilled(company.phone) && { telephone: company.phone }),
  ...(isFilled(company.addressStreet) && {
    address: {
      "@type": "PostalAddress",
      streetAddress: company.addressStreet,
      addressLocality: company.addressLocality,
      addressRegion: company.addressRegion,
      addressCountry: company.addressCountry,
    },
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
