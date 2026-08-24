"use client";

import { PageHero } from "@/components/ui";
import { AppsBlock } from "@/components/sections";

export default function Page() {
  return (
    <>
      <PageHero
        badge="PRODUCT LINE"
        title={{ en: "App Collection · 16", my: "အက်ပ်စုစည်းမှု · ၁၆ ခု" }}
        subtitle={{ en: "Sixteen flagship builds from Social Dashboard to the LEGEND experimental release.", my: "Social Dashboard မှ LEGEND အထိ အက်ပ် ၁၆ ခု။" }}
      />
      <div className="mx-auto w-full max-w-7xl space-y-8 px-4 pb-20 sm:px-6">
        <AppsBlock />
      </div>
    </>
  );
}
