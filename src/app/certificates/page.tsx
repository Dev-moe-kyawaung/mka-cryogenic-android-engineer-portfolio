"use client";

import { PageHero } from "@/components/ui";
import { CertsBlock } from "@/components/sections";

export default function Page() {
  return (
    <>
      <PageHero
        badge="CREDENTIALS"
        title={{ en: "82+ Certificates", my: "လက်မှတ် ၈၂ ခုကျော်" }}
        subtitle={{ en: "Nine categories of structured learning from Programming Hub and Google Launchpad.", my: "Programming Hub နှင့် Google Launchpad မှ ကဏ္ဍ ၉ ခု။" }}
      />
      <div className="mx-auto w-full max-w-7xl space-y-8 px-4 pb-20 sm:px-6">
        <CertsBlock />
      </div>
    </>
  );
}
