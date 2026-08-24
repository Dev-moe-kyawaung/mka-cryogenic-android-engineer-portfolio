"use client";

import { AiChat } from "@/components/ai-assistant";
import { Glass, PageHero, Reveal } from "@/components/ui";
import { useI18n } from "@/lib/i18n";

export default function AiPage() {
  const { lang } = useI18n();
  const caps = [
    { icon: "◈", en: "Bilingual answers (Burmese / English)", my: "မြန်မာ / အင်္ဂလိပ် နှစ်ဘာသာ အဖြေပေးနိုင်သည်" },
    { icon: "📊", en: "Knows every metric, repo and service price", my: "စွမ်းဆောင်ရည်၊ repo နှင့် ဈေးနှုန်းများ အားလုံး သိသည်" },
    { icon: "🗄️", en: "Every turn persisted to PostgreSQL via Drizzle", my: "စကားပြောတိုင်း PostgreSQL တွင် သိမ်းဆည်းသည်" },
    { icon: "🤖", en: "Auto-upgrades to Claude when an API key exists", my: "API key ရှိပါက Claude သို့ အလိုအလျောက် ချိတ်ဆက်သည်" },
    { icon: "🛰️", en: "Deterministic offline fallback — never blank", my: "အင်တာနက်မရှိလည်း အဖြေပေးနိုင်သည်" },
  ];
  return (
    <>
      <PageHero
        badge="SPHERE AI · HOLO-CORE"
        title={{ en: "Sphere AI Console", my: "AI လက်ထောက် ကွန်ဆိုး" }}
        subtitle={{
          en: "Ask anything about Moe Kyaw Aung's Android engineering, projects, metrics, availability or rates.",
          my: "မိုးကျော်အောင်၏ Android အတွေ့အကြုံ၊ ပရောဂျက်များ၊ စွမ်းဆောင်ရည်နှင့် နှုန်းထားများကို မေးမြန်းနိုင်ပါသည်။",
        }}
      />
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 pb-20 sm:px-6 lg:grid-cols-[.6fr_.4fr]">
        <Reveal>
          <AiChat />
        </Reveal>
        <Reveal delay={120}>
          <Glass className="h-full p-6">
            <div className="text-sm font-bold text-[color:var(--ice)]">{lang === "my" ? "စွမ်းဆောင်နိုင်မှုများ" : "Capabilities"}</div>
            <ul className="mt-4 space-y-3">
              {caps.map((c) => (
                <li key={c.en} className="flex gap-3 text-[13px] text-[color:var(--muted)]">
                  <span className="text-lg">{c.icon}</span>
                  <span className={lang === "my" ? "mm" : ""}>{lang === "my" ? c.my : c.en}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl border border-[color:var(--panel-brd)] bg-[rgba(2,12,20,.4)] p-4 font-mono text-[11px] leading-relaxed text-[color:var(--muted)]">
              <div>POST /api/ai</div>
              <div>{"{ message, lang, sessionId }"}</div>
              <div className="mt-2 text-[color:var(--mint)]">200 OK → {"{ reply }"}</div>
            </div>
          </Glass>
        </Reveal>
      </div>
    </>
  );
}
