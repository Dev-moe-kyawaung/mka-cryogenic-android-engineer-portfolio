"use client";

import { PageHero } from "@/components/ui";
import { SkillsBlock, SkillCloudBlock } from "@/components/sections";

export default function Page() {
  return (
    <>
      <PageHero
        badge="CAPABILITY INDEX"
        title={{ en: "Skills & Proficiency", my: "ကျွမ်းကျင်မှုများ" }}
        subtitle={{ en: "Measured proficiency across mobile, architecture, backend, AI and security domains.", my: "မိုဘိုင်း၊ ဗိသုကာ၊ backend၊ AI နှင့် လုံခြုံရေး နယ်ပယ်များတွင် ကျွမ်းကျင်မှု။" }}
      />
      <div className="mx-auto w-full max-w-7xl space-y-8 px-4 pb-20 sm:px-6">
        <SkillsBlock />
        <SkillCloudBlock />
      </div>
    </>
  );
}
