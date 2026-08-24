"use client";

import { PageHero } from "@/components/ui";
import { PerformanceBlock } from "@/components/sections";

export default function Page() {
  return (
    <>
      <PageHero
        badge="TELEMETRY"
        title={{ en: "Performance Hologram Metrics", my: "စွမ်းဆောင်ရည် ဟိုလိုဂရမ်" }}
        subtitle={{ en: "Cold start, frame time, jank, APK size and crash-free rate from real releases.", my: "Cold start၊ frame time၊ jank၊ APK အရွယ်နှင့် crash-free နှုန်းများ။" }}
      />
      <div className="mx-auto w-full max-w-7xl space-y-8 px-4 pb-20 sm:px-6">
        <PerformanceBlock />
      </div>
    </>
  );
}
