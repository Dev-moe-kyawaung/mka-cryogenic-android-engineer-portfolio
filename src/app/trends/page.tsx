"use client";

import { PageHero } from "@/components/ui";
import { TrendsBlock } from "@/components/sections";

export default function Page() {
  return (
    <>
      <PageHero
        badge="FORECAST"
        title={{ en: "2026 → 2030 Aesthetics", my: "၂၀၂၆ → ၂၀၃၀ ဒီဇိုင်း" }}
        subtitle={{ en: "Liquid glass, spatial Android, agentic apps, zero-UI and self-optimising builds.", my: "Liquid glass မှ ကိုယ်တိုင်ချိန်ညှိသော build များအထိ။" }}
      />
      <div className="mx-auto w-full max-w-7xl space-y-8 px-4 pb-20 sm:px-6">
        <TrendsBlock />
      </div>
    </>
  );
}
