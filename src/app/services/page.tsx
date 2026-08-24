"use client";

import { PageHero } from "@/components/ui";
import { ServicesBlock } from "@/components/sections";

export default function Page() {
  return (
    <>
      <PageHero
        badge="ENGAGEMENTS"
        title={{ en: "Services & Rates", my: "ဝန်ဆောင်မှုနှင့် နှုန်းထား" }}
        subtitle={{ en: "App builds, Compose systems, performance audits, AI features and Burmese mentorship.", my: "အက်ပ်တည်ဆောက်ခြင်း၊ စွမ်းဆောင်ရည်စစ်ဆေးခြင်းနှင့် မြန်မာဘာသာဖြင့် သင်ကြားပေးခြင်း။" }}
      />
      <div className="mx-auto w-full max-w-7xl space-y-8 px-4 pb-20 sm:px-6">
        <ServicesBlock />
      </div>
    </>
  );
}
