"use client";

import { PageHero } from "@/components/ui";
import { BlogBlock } from "@/components/sections";

export default function Page() {
  return (
    <>
      <PageHero
        badge="FIELD NOTES"
        title={{ en: "Engineering Blog", my: "အင်ဂျင်နီယာ ဆောင်းပါးများ" }}
        subtitle={{ en: "Deep dives on Compose performance, clean architecture, Burmese typography and on-device AI.", my: "Compose စွမ်းဆောင်ရည်၊ ဗိသုကာနှင့် မြန်မာစာလုံးအကြောင်း ဆောင်းပါးများ။" }}
      />
      <div className="mx-auto w-full max-w-7xl space-y-8 px-4 pb-20 sm:px-6">
        <BlogBlock />
      </div>
    </>
  );
}
