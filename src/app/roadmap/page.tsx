"use client";

import { PageHero } from "@/components/ui";
import { RoadmapBlock } from "@/components/sections";

export default function Page() {
  return (
    <>
      <PageHero
        badge="COOLING CURVE"
        title={{ en: "Android Roadmap", my: "Android လမ်းပြမြေပုံ" }}
        subtitle={{ en: "Six cryogenic phases from Kotlin fundamentals to on-device AI at -196°C.", my: "Kotlin အခြေခံမှ စက်တွင်း AI အထိ အဆင့် ခြောက်ဆင့်။" }}
      />
      <div className="mx-auto w-full max-w-7xl space-y-8 px-4 pb-20 sm:px-6">
        <RoadmapBlock />
      </div>
    </>
  );
}
