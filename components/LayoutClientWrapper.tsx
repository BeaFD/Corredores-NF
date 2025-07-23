"use client";
import { usePathname } from "next/navigation";
import Header from "../components/Header";
import ScrollEffects from "../components/ScrollEffects";

export default function LayoutClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showHeader = !pathname.startsWith("/admin");
  return (
    <>
      {showHeader && <Header />}
      <ScrollEffects />
      {children}
    </>
  );
}
