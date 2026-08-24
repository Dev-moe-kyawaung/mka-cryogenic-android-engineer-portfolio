"use client";

import { PageHero } from "@/components/ui";
import { ComposeBlock } from "@/components/sections";

export default function Page() {
  return (
    <>
      <PageHero
        badge="LIVE SAMPLES"
        title={{ en: "Compose Holograms", my: "Compose ဟိုလိုဂရမ်" }}
        subtitle={{ en: "Production Jetpack Compose patterns: holo cards, particle canvas, depth transitions.", my: "Production Compose ပုံစံများ — ဟိုလိုကတ်၊ canvas နှင့် depth transition များ။" }}
      />
      <div className="mx-auto w-full max-w-7xl space-y-8 px-4 pb-20 sm:px-6">
        <ComposeBlock />
      </div>
    </>
  );
}
