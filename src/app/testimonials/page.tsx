"use client";

import { PageHero } from "@/components/ui";
import { TestimonialsBlock } from "@/components/sections";

export default function Page() {
  return (
    <>
      <PageHero
        badge="SIGNALS"
        title={{ en: "Client Testimonials", my: "ဖောက်သည် ထောက်ခံချက်" }}
        subtitle={{ en: "What CTOs, product leads and founders say after shipping together.", my: "အတူတကွ လုပ်ဆောင်ခဲ့သူများ၏ အမြင်များ။" }}
      />
      <div className="mx-auto w-full max-w-7xl space-y-8 px-4 pb-20 sm:px-6">
        <TestimonialsBlock />
      </div>
    </>
  );
}
