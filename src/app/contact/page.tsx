"use client";

import { useState } from "react";
import { Glass, PageHero, Reveal, CopyChip } from "@/components/ui";
import { useI18n } from "@/lib/i18n";
import { profile, emails, socials } from "@/lib/data";

export default function ContactPage() {
  const { lang, t } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", subject: "Android Project", message: "" });
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as { ok: boolean };
      if (data.ok) {
        setState("done");
        setForm({ name: "", email: "", subject: "Android Project", message: "" });
      } else setState("error");
    } catch {
      setState("error");
    }
  }

  const field = "w-full rounded-xl border border-[color:var(--panel-brd)] bg-[rgba(2,12,20,.45)] px-4 py-3 text-[13px] outline-none transition focus:border-[color:var(--ice)]";

  return (
    <>
      <PageHero
        badge="TRANSMISSION"
        title={{ en: "Contact the Lab", my: "ဓာတ်ခွဲခန်းသို့ ဆက်သွယ်ရန်" }}
        subtitle={{
          en: "Messages are stored in PostgreSQL and answered within 24 hours. Burmese or English welcome.",
          my: "စာများကို PostgreSQL တွင် သိမ်းဆည်းပြီး ၂၄ နာရီအတွင်း ပြန်ကြားပါမည်။ မြန်မာ သို့မဟုတ် အင်္ဂလိပ် ရေးနိုင်ပါသည်။",
        }}
      />
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 pb-20 sm:px-6 lg:grid-cols-[.58fr_.42fr]">
        <Reveal>
          <Glass className="p-6">
            <form onSubmit={submit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input required placeholder={lang === "my" ? "အမည်" : "Your name"} className={field} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <input required type="email" placeholder="you@email.com" className={field} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <select className={field} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}>
                {["Android Project", "Compose UI System", "Performance Audit", "AI Integration", "Security Hardening", "Mentorship", "Other"].map((s) => (
                  <option key={s} value={s} className="bg-[#04121d]">
                    {s}
                  </option>
                ))}
              </select>
              <textarea
                required
                rows={6}
                placeholder={lang === "my" ? "မက်ဆေ့ချ်..." : "Tell me about your project…"}
                className={field}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <button type="submit" className="frost-btn" disabled={state === "sending"}>
                {state === "sending" ? "◈ transmitting…" : `${t("send")} ◈`}
              </button>
              {state === "done" && (
                <div className="rounded-xl border border-[color:var(--mint)] bg-[rgba(127,251,224,.08)] px-4 py-3 text-[13px]">
                  {lang === "my" ? "✅ စာရောက်ရှိပါပြီ — ကျေးဇူးတင်ပါသည်။" : "✅ Signal received in the sphere core — thank you!"}
                </div>
              )}
              {state === "error" && (
                <div className="rounded-xl border border-[#ff7a7a] bg-[rgba(255,122,122,.08)] px-4 py-3 text-[13px]">
                  {lang === "my" ? "⚠️ စာပို့မရပါ — ထပ်စမ်းကြည့်ပါ။" : "⚠️ Transmission failed — please retry."}
                </div>
              )}
            </form>
          </Glass>
        </Reveal>

        <Reveal delay={140}>
          <div className="space-y-4">
            <Glass className="p-6">
              <div className="text-sm font-bold text-[color:var(--ice)]">{lang === "my" ? "တိုက်ရိုက် ဆက်သွယ်ရန်" : "Direct channels"}</div>
              <div className="mt-3 space-y-3 text-[13px]">
                {profile.phones.map((p) => (
                  <div key={p} className="flex items-center justify-between gap-2">
                    <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-[color:var(--ice)]">
                      📞 {p}
                    </a>
                    <CopyChip value={p} />
                  </div>
                ))}
                {emails.slice(0, 4).map((e) => (
                  <div key={e} className="flex items-center justify-between gap-2">
                    <a href={`mailto:${e}`} className="truncate hover:text-[color:var(--ice)]">
                      ✉️ {e}
                    </a>
                    <CopyChip value={e} />
                  </div>
                ))}
              </div>
            </Glass>
            <Glass className="p-6">
              <div className="text-sm font-bold text-[color:var(--ice)]">{lang === "my" ? "လူမှုကွန်ရက်" : "Social"}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a key={s.label + s.url} href={s.url} target="_blank" rel="noreferrer" className="chip">
                    {s.icon} {s.label}
                  </a>
                ))}
              </div>
            </Glass>
            <Glass className="p-6 font-mono text-[12px] text-[color:var(--muted)]">
              <div>LOCATION · {profile.location}</div>
              <div className="mt-1">TIMEZONE · GMT+6:30 / GMT+7</div>
              <div className="mt-1">STATUS · 🟢 OPEN TO WORK</div>
            </Glass>
          </div>
        </Reveal>
      </div>
    </>
  );
}
