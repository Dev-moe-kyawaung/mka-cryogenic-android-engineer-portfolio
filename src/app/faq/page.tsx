"use client";

import { PageHero } from "@/components/ui";
import { FaqBlock } from "@/components/sections";

export default function Page() {
  return (
    <>
      <PageHero
        badge="ANSWERS"
        title={{ en: "Frequently Asked", my: "မေးလေ့ရှိသော မေးခွန်းများ" }}
        subtitle={{ en: "Working style, stack choices, languages and how a project starts.", my: "လုပ်ငန်းပုံစံ၊ နည်းပညာရွေးချယ်မှုနှင့် စတင်ပုံ။" }}
      />
      <div className="mx-auto w-full max-w-7xl space-y-8 px-4 pb-20 sm:px-6">
        <FaqBlock />
      </div>
    </>
  );
}
