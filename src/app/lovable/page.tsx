"use client";

import { PageHero } from "@/components/ui";
import { LovableBlock } from "@/components/sections";

export default function Page() {
  return (
    <>
      <PageHero
        badge="PWA LABS"
        title={{ en: "Lovable PWA Builds", my: "Lovable PWA များ" }}
        subtitle={{ en: "Thirty-one installable PWA experiments — CV builders, bios, galleries and more.", my: "Install လုပ်နိုင်သော PWA စမ်းသပ်မှု ၃၁ ခု။" }}
      />
      <div className="mx-auto w-full max-w-7xl space-y-8 px-4 pb-20 sm:px-6">
        <LovableBlock />
      </div>
    </>
  );
}
