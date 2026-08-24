"use client";

import { Glass, PageHero, Reveal } from "@/components/ui";
import { useI18n } from "@/lib/i18n";
import { profile, emails, experience, skillGroups, certCategories, focusMap } from "@/lib/data";

export default function ResumePage() {
  const { b, lang } = useI18n();
  return (
    <>
      <PageHero
        badge="CV · 2026"
        title={{ en: "Resume / Curriculum Vitae", my: "ကိုယ်ရေးမှတ်တမ်း" }}
        subtitle={{
          en: "Print or save as PDF — the layout is print-optimised for A4.",
          my: "ပရင့်ထုတ်ရန် သို့မဟုတ် PDF အဖြစ် သိမ်းရန် — A4 အတွက် ပြင်ဆင်ထားသည်။",
        }}
      />
      <div className="mx-auto w-full max-w-4xl px-4 pb-20 sm:px-6">
        <Reveal>
          <div className="mb-5 flex flex-wrap gap-3">
            <button onClick={() => window.print()} className="frost-btn">
              ⬇ {lang === "my" ? "PDF အဖြစ် သိမ်းရန်" : "Download as PDF"}
            </button>
            <a href={profile.github} target="_blank" rel="noreferrer" className="frost-btn">
              GitHub ↗
            </a>
            <a href={profile.gravatar} target="_blank" rel="noreferrer" className="frost-btn">
              Gravatar ↗
            </a>
          </div>
        </Reveal>

        <Glass className="space-y-6 p-7">
          <header className="flex flex-wrap items-center gap-4 border-b border-[color:var(--panel-brd)] pb-5">
            <img src={profile.avatar} alt={profile.name} className="h-20 w-20 rounded-2xl object-cover" />
            <div>
              <h2 className="ice-text text-2xl font-black">
                {profile.nameMy} · {profile.name}
              </h2>
              <div className="text-sm text-[color:var(--muted)]">{b(profile.role)}</div>
              <div className="text-[12px] text-[color:var(--muted)]">{profile.location}</div>
            </div>
            <div className="ml-auto text-right text-[12px] text-[color:var(--muted)]">
              <div>{profile.phones[0]}</div>
              <div>{profile.phones[1]}</div>
              <div>{emails[0]}</div>
            </div>
          </header>

          <section>
            <h3 className="mb-2 text-[11px] uppercase tracking-[0.3em] text-[color:var(--ice)]">Profile</h3>
            <p className={`text-[13px] leading-relaxed text-[color:var(--muted)] ${lang === "my" ? "mm" : ""}`}>
              {lang === "my"
                ? "Kotlin၊ Jetpack Compose နှင့် Clean Architecture ကို အခြေခံသော Android အက်ပ်များ တည်ဆောက်ရာတွင် ၆ နှစ်ကျော် အတွေ့အကြုံရှိသည်။ စက်တွင်း AI နှင့် စွမ်းဆောင်ရည် ချိန်ညှိမှုတွင် အထူးကျွမ်းကျင်သည်။"
                : "Senior Android engineer with 6+ years building production Kotlin apps using Jetpack Compose, MVVM and Clean Architecture. Specialised in performance tuning, offline-first data layers and on-device AI. Bilingual delivery (Burmese / English)."}
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-[11px] uppercase tracking-[0.3em] text-[color:var(--ice)]">Core Focus</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {focusMap.map((f) => (
                <div key={f.k} className="text-[12.5px]">
                  <span className="font-semibold">{f.icon} {f.k}:</span> <span className="text-[color:var(--muted)]">{f.v}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="mb-2 text-[11px] uppercase tracking-[0.3em] text-[color:var(--ice)]">Experience</h3>
            <div className="space-y-4">
              {experience.map((e) => (
                <div key={e.org}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="text-[13.5px] font-bold">{b(e.role)} — {e.org}</span>
                    <span className="font-mono text-[11px] text-[color:var(--muted)]">{e.period}</span>
                  </div>
                  <ul className="mt-1 list-disc space-y-0.5 pl-5 text-[12.5px] text-[color:var(--muted)]">
                    {e.points.map((p, i) => (
                      <li key={i}>{b(p)}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="mb-2 text-[11px] uppercase tracking-[0.3em] text-[color:var(--ice)]">Technical Skills</h3>
            <div className="space-y-1.5">
              {skillGroups.map((g) => (
                <div key={g.title.en} className="text-[12.5px]">
                  <span className="font-semibold">{g.icon} {b(g.title)}:</span>{" "}
                  <span className="text-[color:var(--muted)]">{g.items.map((i) => i.name).join(" · ")}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="mb-2 text-[11px] uppercase tracking-[0.3em] text-[color:var(--ice)]">Certifications</h3>
            <div className="flex flex-wrap gap-1.5">
              {certCategories.map((c) => (
                <span key={c.name.en} className="chip text-[11px]">
                  {c.icon} {b(c.name)} · {c.count}
                </span>
              ))}
            </div>
            <p className="mt-2 text-[12px] text-[color:var(--muted)]">{profile.certifications}</p>
          </section>

          <section>
            <h3 className="mb-2 text-[11px] uppercase tracking-[0.3em] text-[color:var(--ice)]">Languages</h3>
            <p className="text-[12.5px] text-[color:var(--muted)]">{profile.languages.join(" · ")}</p>
          </section>
        </Glass>
      </div>
    </>
  );
}
