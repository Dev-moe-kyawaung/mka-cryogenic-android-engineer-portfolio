"use client";

import { PageHero } from "@/components/ui";
import { ExperienceBlock } from "@/components/sections";

export default function Page() {
  return (
    <>
      <PageHero
        badge="FIELD LOG"
        title={{ en: "Professional Experience", my: "အလုပ်အတွေ့အကြုံ" }}
        subtitle={{ en: "Six years shipping production Android software for retail, media and fintech clients.", my: "လက်လီရောင်းဝယ်ရေး၊ မီဒီယာနှင့် fintech အတွက် Android ဆော့ဖ်ဝဲများ ထုတ်လုပ်ခဲ့သည်။" }}
      />
      <div className="mx-auto w-full max-w-7xl space-y-8 px-4 pb-20 sm:px-6">
        <ExperienceBlock />
      </div>
    </>
  );
}
