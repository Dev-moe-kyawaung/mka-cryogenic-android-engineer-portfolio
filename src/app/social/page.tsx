"use client";

import { PageHero } from "@/components/ui";
import { SocialBlock } from "@/components/sections";

export default function Page() {
  return (
    <>
      <PageHero
        badge="NETWORK"
        title={{ en: "Social Accounts", my: "လူမှုကွန်ရက် အကောင့်များ" }}
        subtitle={{ en: "All 18 verified profiles synced from Gravatar — GitHub, LinkedIn, YouTube, Bluesky and more.", my: "Gravatar မှ အတည်ပြုထားသော အကောင့် ၁၈ ခု။" }}
      />
      <div className="mx-auto w-full max-w-7xl space-y-8 px-4 pb-20 sm:px-6">
        <SocialBlock />
      </div>
    </>
  );
}
