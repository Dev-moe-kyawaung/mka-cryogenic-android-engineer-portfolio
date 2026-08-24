"use client";

import { PageHero } from "@/components/ui";
import { GithubSitesBlock } from "@/components/sections";

export default function Page() {
  return (
    <>
      <PageHero
        badge="DEPLOYED"
        title={{ en: "GitHub Pages Network", my: "GitHub Pages ကွန်ရက်" }}
        subtitle={{ en: "Thirty-three live GitHub Pages deployments across every experiment account.", my: "GitHub Pages ဆိုက် ၃၃ ခု တိုက်ရိုက်လွှင့်ထားသည်။" }}
      />
      <div className="mx-auto w-full max-w-7xl space-y-8 px-4 pb-20 sm:px-6">
        <GithubSitesBlock />
      </div>
    </>
  );
}
