"use client";

import { PageHero } from "@/components/ui";
import { TimelineBlock } from "@/components/sections";

export default function Page() {
  return (
    <>
      <PageHero
        badge="ICE CORE"
        title={{ en: "Career Timeline", my: "အသက်မွေးဝမ်းကြောင်း အချိန်ဇယား" }}
        subtitle={{ en: "Trace the orbit log: every ring marks a year of engineering growth.", my: "လမ်းကြောင်းအကွင်းတိုင်းသည် တိုးတက်မှုတစ်နှစ်စီကို ကိုယ်စားပြုသည်။" }}
      />
      <div className="mx-auto w-full max-w-7xl space-y-8 px-4 pb-20 sm:px-6">
        <TimelineBlock />
      </div>
    </>
  );
}
