"use client";

import { PageHero } from "@/components/ui";
import { EmailsBlock } from "@/components/sections";

export default function Page() {
  return (
    <>
      <PageHero
        badge="CHANNELS"
        title={{ en: "Email Vault", my: "အီးမေးလ် သိုလှောင်ခန်း" }}
        subtitle={{ en: "Twenty routed inboxes — tap to copy any address instantly.", my: "အီးမေးလ် ၂၀ ခု — တစ်ချက်နှိပ်ရုံဖြင့် ကူးယူနိုင်သည်။" }}
      />
      <div className="mx-auto w-full max-w-7xl space-y-8 px-4 pb-20 sm:px-6">
        <EmailsBlock />
      </div>
    </>
  );
}
