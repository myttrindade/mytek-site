import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { company, isFilled } from "@/lib/company";
import { siteConfig } from "@/lib/site-config";
import { ChatWidget } from "@/components/chat-widget";
import { IntroSplash } from "@/components/brand/intro-splash";

// Corpo: Inter. Títulos: Satoshi no brand book; Plus Jakarta Sans é o
// substituto do rascunho porque a Satoshi não está no Google Fonts.
// Para trocar, self-hospede a Satoshi com next/font/local e aponte --font-display.
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

const mono = JetBrains_Mono({
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
  logo: `${siteConfig.url}/brand/symbol.svg`,
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
      suppressHydrationWarning
      className={`${inter.variable} ${display.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Abertura uma vez por sessão: marca no <html> antes da primeira pintura. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var q=location.search,m=q.match(/[?&]luz=(\\d)/),n=q.match(/[?&]nome=(\\w+)/);if(m)document.documentElement.dataset.luz=m[1];if(n)document.documentElement.dataset.nome=n[1];if(/[?&]teste=1/.test(q))document.documentElement.dataset.teste='1';if(/[?&]intro=1/.test(q))sessionStorage.removeItem('mytek-intro');if(sessionStorage.getItem('mytek-intro'))document.documentElement.classList.add('intro-seen');else sessionStorage.setItem('mytek-intro','1')}catch(e){}",
          }}
        />
        <IntroSplash />
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
