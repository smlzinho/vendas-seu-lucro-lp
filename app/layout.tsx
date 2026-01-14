import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import FacebookPixel from "@/components/FacebookPixel";
import BackRedirect from "@/components/BackRedirect";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Domine o E-commerce com IA | Plataforma Tudo-em-Um",
  description: "A única plataforma que você precisa para criar, escalar e lucrar no e-commerce. Fornecedores, Criativos e Produtos Vencedores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          strategy="lazyOnload"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <FacebookPixel />
        <BackRedirect />
        {children}
      </body>
    </html>
  );
}
