import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";
import { Atmosphere, ScrollFrost } from "@/components/atmosphere";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { FloatingAi } from "@/components/ai-assistant";

export const metadata: Metadata = {
  title: "Omni-Sphere · Moe Kyaw Aung — Senior Android Developer",
  description:
    "Holographic omni-sphere portfolio of Moe Kyaw Aung (မိုးကျော်အောင်) — Senior Android Developer. Rotating 3D spheres, volumetric light, project galaxy. Kotlin, Jetpack Compose, on-device AI. Burmese & English.",
  keywords: ["Moe Kyaw Aung", "Android Developer", "Kotlin", "Jetpack Compose", "Myanmar", "Bangkok", "Portfolio"],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Myanmar:wght@400;600;700&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Space Grotesk', ui-sans-serif, system-ui, sans-serif" }}>
        <LangProvider>
          <ScrollFrost />
          <Atmosphere />
          <SiteNav />
          <main className="relative z-10">{children}</main>
          <SiteFooter />
          <FloatingAi />
        </LangProvider>
      </body>
    </html>
  );
}
