"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";

type Msg = { role: "user" | "assistant"; content: string };

const suggestions: Record<"en" | "my", string[]> = {
  en: ["What is his Android stack?", "Show performance metrics", "How to hire him?", "List the app collection"],
  my: ["Android stack ဘာတွေလဲ?", "စွမ်းဆောင်ရည် ကိန်းဂဏန်းပြပါ", "ဘယ်လိုငှားရမ်းရမလဲ?", "အက်ပ်စာရင်း ပြပါ"],
};

export function AiChat({ compact = false }: { compact?: boolean }) {
  const { lang, t } = useI18n();
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [sid] = useState(() => Math.random().toString(36).slice(2));
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMsgs([
      {
        role: "assistant",
        content:
          lang === "my"
            ? "မင်္ဂလာပါ ◈ ကျွန်တော်က Sphere AI ပါ။ မိုးကျော်အောင်၏ Android အတွေ့အကြုံ၊ ပရောဂျက်များ၊ စွမ်းဆောင်ရည်နှင့် ဆက်သွယ်ရန် အချက်အလက်များကို မေးမြန်းနိုင်ပါသည်။"
            : "Hello ◈ I'm Sphere AI — the holographic assistant of Moe Kyaw Aung. Ask me about his Android stack, projects, performance metrics, or how to hire him.",
      },
    ]);
  }, [lang]);

  useEffect(() => {
    boxRef.current?.scrollTo({ top: boxRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, busy]);

  async function send(text: string) {
    const q = text.trim();
    if (!q || busy) return;
    setInput("");
    const next = [...msgs, { role: "user" as const, content: q }];
    setMsgs(next);
    setBusy(true);
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: q, lang, sessionId: sid, history: next.slice(-6) }),
      });
      const data = (await res.json()) as { reply?: string };
      setMsgs((p) => [...p, { role: "assistant", content: data.reply ?? "…" }]);
    } catch {
      setMsgs((p) => [...p, { role: "assistant", content: lang === "my" ? "ချိတ်ဆက်မှု ပြတ်တောက်သွားပါသည် — ထပ်စမ်းကြည့်ပါ။" : "Projection lost. Try again." }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className={`glass ice-edge flex flex-col ${compact ? "h-[420px]" : "h-[560px]"}`}>
      <div className="flex items-center gap-2 border-b border-[color:var(--panel-brd)] px-4 py-3">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--mint)] opacity-70" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--mint)]" />
        </span>
        <span className="text-sm font-bold">SPHERE AI</span>
        <span className="ml-auto font-mono text-[10px] text-[color:var(--muted)]">HOLO-CORE · ONLINE</span>
      </div>

      <div ref={boxRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                m.role === "user"
                  ? "bg-[linear-gradient(120deg,rgba(76,111,255,.32),rgba(255,94,219,.24))] text-[color:var(--frost-text)]"
                  : "border border-[color:var(--panel-brd)] bg-[rgba(125,249,255,.06)] text-[color:var(--frost-text)]"
              } ${lang === "my" ? "mm" : ""}`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {busy && <div className="text-[12px] text-[color:var(--muted)]">◈ {t("thinking")}</div>}
      </div>

      <div className="flex flex-wrap gap-1.5 px-4 pb-2">
        {suggestions[lang].map((s) => (
          <button key={s} onClick={() => send(s)} className="chip cursor-pointer text-[11px]">
            {s}
          </button>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          void send(input);
        }}
        className="flex gap-2 border-t border-[color:var(--panel-brd)] p-3"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t("ask_ai")}
          className="min-w-0 flex-1 rounded-full border border-[color:var(--panel-brd)] bg-[rgba(2,12,20,.5)] px-4 py-2 text-[13px] outline-none focus:border-[color:var(--ice)]"
        />
        <button type="submit" className="frost-btn px-4 py-2 text-[13px]" disabled={busy}>
          {t("send")} ◈
        </button>
      </form>
    </div>
  );
}

export function FloatingAi() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen((p) => !p)}
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-[color:var(--panel-brd)] text-2xl backdrop-blur-xl transition hover:scale-110"
        style={{ background: "linear-gradient(140deg, rgba(76,111,255,.4), rgba(255,94,219,.32))", boxShadow: "0 0 34px rgba(125,249,255,.6)" }}
        aria-label="AI assistant"
      >
        {open ? "✕" : "🤖"}
      </button>
      <div
        className={`fixed bottom-24 right-5 z-40 w-[min(380px,calc(100vw-2.5rem))] transition-all duration-500 ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <AiChat compact />
      </div>
    </>
  );
}
