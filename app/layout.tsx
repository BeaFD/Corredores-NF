import type { Metadata } from "next";
import { Questrial } from "next/font/google";
import "./globals.css";
import LayoutClientWrapper from "../components/LayoutClientWrapper";

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-questrial",
});

export const metadata: Metadata = {
  title: "NF Corredores | Corredora de Seguros en Concepción | Seguros Personales y Empresariales",
  description: "NF Corredores - Corredora de seguros líder en Concepción. Ofrecemos seguros personales, automotrices, para empresas y más. Protege lo que más valoras con nuestros seguros en Concepción.",
  keywords: "seguros, corredora de seguros, seguros Concepción, seguros personales, seguros empresariales, seguros automotrices, NF Corredores, corredores de seguros Concepción, seguros para empresas, seguros en Concepción",
  authors: [{ name: "NF Corredores" }],
  creator: "NF Corredores",
  publisher: "NF Corredores",
  category: "Insurance",
  classification: "Business",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "NF Corredores | Corredora de Seguros en Concepción",
    description: "Corredora de seguros líder en Concepción. Seguros personales, automotrices y empresariales. Protege lo que más valoras.",
    url: "https://www.nfcorredores.cl",
    siteName: "NF Corredores",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "NF Corredores - Corredora de Seguros Concepción",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NF Corredores | Corredora de Seguros en Concepción",
    description: "Corredora de seguros líder en Concepción. Seguros personales, automotrices y empresariales.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#dc2626" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="NF Corredores" />
        <link rel="canonical" href="https://www.nfcorredores.cl" />
      </head>
      <body className={`${questrial.variable} ${questrial.className} antialiased`}>
        <LayoutClientWrapper>
          {children}
        </LayoutClientWrapper>
      </body>
    </html>
  );
}