"use client";

import { PageHero } from "@/components/ui";
import { VideosBlock } from "@/components/sections";

export default function Page() {
  return (
    <>
      <PageHero
        badge="MOTION REELS"
        title={{ en: "Cold Vapor Motion", my: "အခိုးအငွေ့ ရုပ်သံ" }}
        subtitle={{ en: "Eight cinematic loops used across the lab interface.", my: "ဓာတ်ခွဲခန်း interface တွင် အသုံးပြုသော ရုပ်သံ ၈ ခု။" }}
      />
      <div className="mx-auto w-full max-w-7xl space-y-8 px-4 pb-20 sm:px-6">
        <VideosBlock />
      </div>
    </>
  );
}
