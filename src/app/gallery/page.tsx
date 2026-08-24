"use client";

import { PageHero } from "@/components/ui";
import { GalleryBlock } from "@/components/sections";

export default function Page() {
  return (
    <>
      <PageHero
        badge="VISUAL VAULT"
        title={{ en: "Hologram Gallery", my: "ဟိုလိုဂရမ် ပြခန်း" }}
        subtitle={{ en: "Twenty-two projected frames from the omni-sphere visual archive.", my: "Omni-sphere ပုံရိပ်များ ၂၂ ခု။" }}
      />
      <div className="mx-auto w-full max-w-7xl space-y-8 px-4 pb-20 sm:px-6">
        <GalleryBlock />
      </div>
    </>
  );
}
