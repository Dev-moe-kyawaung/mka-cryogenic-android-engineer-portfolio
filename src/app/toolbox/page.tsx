"use client";

import { PageHero } from "@/components/ui";
import { ToolboxBlock } from "@/components/sections";

export default function Page() {
  return (
    <>
      <PageHero
        badge="INSTRUMENTS"
        title={{ en: "The Omni Toolbox", my: "Omni ကိရိယာတန်ဆာ" }}
        subtitle={{ en: "Editors, design tools, quality gates, ops dashboards and daily hardware.", my: "တည်းဖြတ်ကိရိယာများ၊ ဒီဇိုင်းကိရိယာများနှင့် နေ့စဉ်သုံး ဟာ့ဒ်ဝဲများ။" }}
      />
      <div className="mx-auto w-full max-w-7xl space-y-8 px-4 pb-20 sm:px-6">
        <ToolboxBlock />
      </div>
    </>
  );
}
