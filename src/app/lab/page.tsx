"use client";

import { PageHero } from "@/components/ui";
import { LabBlock } from "@/components/sections";

export default function Page() {
  return (
    <>
      <PageHero
        badge="FACILITY"
        title={{ en: "Sphere Core Modules", my: "စက်လုံးအူတိုင် မော်ဂျူးများ" }}
        subtitle={{ en: "Live telemetry from every rotating core in the omni-sphere engine.", my: "စက်လုံးအူတိုင်တိုင်း၏ လက်ရှိအခြေအနေ။" }}
      />
      <div className="mx-auto w-full max-w-7xl space-y-8 px-4 pb-20 sm:px-6">
        <LabBlock />
      </div>
    </>
  );
}
