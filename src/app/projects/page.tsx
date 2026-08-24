"use client";

import { PageHero } from "@/components/ui";
import { GalaxyBlock } from "@/components/sections";

export default function Page() {
  return (
    <>
      <PageHero
        badge="PROJECT GALAXY · 18 NODES"
        title={{ en: "Project Galaxy", my: "ပရောဂျက် ဂလက်ဆီ" }}
        subtitle={{ en: "Eighteen orbiting hologram nodes — POS suites, media players, games and ML lenses. Click a node to inspect it.", my: "POS၊ မီဒီယာပလေယာ၊ ဂိမ်းနှင့် ML lens အပါအဝင် repository ၁၈ ခု။" }}
      />
      <div className="mx-auto w-full max-w-7xl space-y-8 px-4 pb-20 sm:px-6">
        <GalaxyBlock />
      </div>
    </>
  );
}
