"use client";

import { PageHero } from "@/components/ui";
import { ArchitectureBlock } from "@/components/sections";

export default function Page() {
  return (
    <>
      <PageHero
        badge="LAYER STACK"
        title={{ en: "Architecture Spheres", my: "ဗိသုကာ စက်လုံးများ" }}
        subtitle={{ en: "Five nested spheres: presentation, domain, data, core and platform — each orbit more stable than the last.", my: "စက်လုံးငါးလုံး — Presentation မှ Platform အထိ တစ်ခုထက်တစ်ခု ပိုတည်ငြိမ်သည်။" }}
      />
      <div className="mx-auto w-full max-w-7xl space-y-8 px-4 pb-20 sm:px-6">
        <ArchitectureBlock />
      </div>
    </>
  );
}
