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
  title: "NF Corredores",
  description: "Website by Beatriz Rodriguez, Spring Blooming 2025",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${questrial.variable} ${questrial.className} antialiased`}>
        <LayoutClientWrapper>
          {children}
        </LayoutClientWrapper>
      </body>
    </html>
  );
}