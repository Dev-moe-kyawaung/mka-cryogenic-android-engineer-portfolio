"use client";

import { useCallback, useEffect, useState } from "react";
import { Glass, PageHero, Reveal } from "@/components/ui";
import { useI18n } from "@/lib/i18n";

type Entry = { id: number; name: string; message: string; lang: string; frostLevel: number; createdAt: string };

export default function GuestbookPage() {
  const { lang, t } = useI18n();
  const [entries, setEntries] = useState<Entry[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [frost, setFrost] = useState(3);
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/guestbook", { cache: "no-store" });
      const data = (await res.json()) as { entries: Entry[] };
      setEntries(data.entries ?? []);
    } catch {
      setEntries([]);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setBusy(true);
    try {
      await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message, lang, frostLevel: frost }),
      });
      setName("");
      setMessage("");
      await load();
    } finally {
      setBusy(false);
    }
  }

  const field = "w-full rounded-xl border border-[color:var(--panel-brd)] bg-[rgba(2,12,20,.45)] px-4 py-3 text-[13px] outline-none focus:border-[color:var(--ice)]";

  return (
    <>
      <PageHero
        badge="NODE WALL"
        title={{ en: "Hologram Guestbook", my: "ဟိုလိုဂရမ် ဧည့်သည်စာအုပ်" }}
        subtitle={{
          en: "Pin a hologram node onto the sphere — stored permanently in PostgreSQL.",
          my: "စက်လုံးပေါ်တွင် မှတ်တမ်းတစ်ခု ချန်ထားခဲ့ပါ — PostgreSQL တွင် အမြဲသိမ်းဆည်းပါမည်။",
        }}
      />
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 pb-20 sm:px-6 lg:grid-cols-[.4fr_.6fr]">
        <Reveal>
          <Glass className="p-6">
            <form onSubmit={submit} className="space-y-4">
              <input className={field} placeholder={lang === "my" ? "အမည်" : "Name"} value={name} onChange={(e) => setName(e.target.value)} />
              <textarea className={field} rows={5} placeholder={lang === "my" ? "စာတိုလေး..." : "Leave a hologram note…"} value={message} onChange={(e) => setMessage(e.target.value)} />
              <div>
                <div className="mb-1 flex justify-between text-[12px]">
                  <span>{lang === "my" ? "အလင်းအားပြင်း" : "Glow level"}</span>
                  <span className="text-[color:var(--ice)]">{"◈".repeat(frost)}</span>
                </div>
                <input type="range" min={1} max={5} value={frost} onChange={(e) => setFrost(Number(e.target.value))} className="w-full accent-[color:var(--ice-deep)]" />
              </div>
              <button className="frost-btn" disabled={busy}>
                {busy ? "◈ transmitting…" : `${t("send")} ◈`}
              </button>
            </form>
          </Glass>
        </Reveal>

        <div className="space-y-3">
          {entries.length === 0 && (
            <Glass className="p-6 text-[13px] text-[color:var(--muted)]">
              {lang === "my" ? "စက်လုံးပေါ်တွင် မှတ်တမ်းမရှိသေးပါ — ပထမဆုံး ဖြစ်ပါစေ။" : "No nodes orbiting yet — be the first to pin one."}
            </Glass>
          )}
          {entries.map((en, i) => (
            <Reveal key={en.id} delay={(i % 8) * 50}>
              <Glass className="p-5">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[color:var(--ice)]">{en.name}</span>
                  <span className="text-[11px] text-[color:var(--muted)]">{new Date(en.createdAt).toLocaleString()}</span>
                  <span className="ml-auto text-[12px]">{"◈".repeat(en.frostLevel)}</span>
                </div>
                <p className={`mt-2 text-[13px] text-[color:var(--muted)] ${en.lang === "my" ? "mm" : ""}`}>{en.message}</p>
              </Glass>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
