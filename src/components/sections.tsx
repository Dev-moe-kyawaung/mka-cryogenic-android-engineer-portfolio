"use client";

import Link from "next/link";
import { useState } from "react";
import {
  profile,
  focusMap,
  images,
  repos,
  appCollection,
  githubSites,
  lovableApps,
  emails,
  socials,
  skillGroups,
  skillChips,
  roadmap,
  composeSnippets,
  architecturePanels,
  freezeMetrics,
  timeline,
  certCategories,
  services,
  testimonials,
  faqs,
  posts,
  toolbox,
  experience,
  labModules,
  trends2030,
} from "@/lib/data";
import { navGroups, useI18n } from "@/lib/i18n";
import { Bar, Code, CopyChip, Glass, InternalCard, LinkCard, Marquee, Reveal, Stat, Typing } from "./ui";
import { VaporStrip } from "./atmosphere";
import { MiniSphere, OmniSphere, OrbitNodes, PointGlobe, Tilt } from "./sphere";

/* ---------------- 01 HERO ---------------- */
export function HeroBlock() {
  const { b, t, lang } = useI18n();
  return (
    <section id="hero" className="relative mx-auto flex min-h-[92vh] w-full max-w-7xl flex-col justify-center px-4 pb-16 pt-32 sm:px-6">
      <VaporStrip />
      <div className="pointer-events-none absolute -right-40 top-10 hidden opacity-25 lg:block" aria-hidden>
        <OmniSphere size={620} meridians={16} parallels={9} nodes={12} speed={60} />
      </div>
      <div className="grid items-center gap-10 md:grid-cols-[1.15fr_.85fr]">
        <Reveal>
          <div className="chip mb-5 w-fit font-mono text-[11px] tracking-[0.25em]">◈ OMNI-SPHERE · HOLO-RENDER · 2026</div>
          <h1 className="text-4xl font-black leading-[1.05] sm:text-6xl md:text-7xl">
            <span className="ice-text block">{profile.nameMy}</span>
            <span className="aurora-text glitch block" data-text={profile.name}>
              {profile.name}
            </span>
          </h1>
          <p className={`mt-4 text-lg font-semibold text-[color:var(--frost-text)] ${lang === "my" ? "mm" : ""}`}>{b(profile.role)}</p>
          <p className="mt-1 text-sm text-[color:var(--muted)]">{profile.location}</p>
          <div className="mt-4 text-sm">
            <span className="text-[color:var(--muted)]">$ </span>
            <Typing
              phrases={[
                "Kotlin · Jetpack Compose · MVVM",
                "Clean Architecture · Coroutines · Flow",
                "Claude API · TFLite · On-Device ML",
                "မြန်မာဘာသာဖြင့် ဆော့ဖ်ဝဲရေးသားခြင်း",
                "Ethical Hacking · Kali · Hardening",
              ]}
            />
          </div>
          <p className={`mt-5 max-w-xl text-[13px] leading-relaxed text-[color:var(--muted)] ${lang === "my" ? "mm" : ""}`}>
            {lang === "my"
              ? "သုံးဖက်မြင် ဟိုလိုဂရမ် အတွေ့အကြုံများဖြင့် Android အက်ပ်များကို တည်ဆောက်ပေးနေပါသည် — ခိုင်မာသောဗိသုကာ၊ ချောမွေ့သော frame နှင့် နှစ်ဘာသာ ပံ့ပိုးမှု။"
              : "Passionate and self-motivated engineer rendering responsive, modern, user-friendly mobile experiences — orbit-stable architecture, volumetric UI depth, bilingual by design."}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/projects" className="frost-btn">
              {t("cta_projects")} →
            </Link>
            <Link href="/contact" className="frost-btn" style={{ background: "rgba(158,241,255,.08)" }}>
              {t("cta_contact")} ✉
            </Link>
            <Link href="/resume" className="frost-btn" style={{ background: "rgba(167,139,250,.16)" }}>
              {t("cta_resume")} ⬇
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {profile.stats.map((s) => (
              <Stat key={s.n + s.l.en} n={s.n} l={b(s.l)} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <Glass className="relative p-5">
            <div className="crack" />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-60">
              <OmniSphere size={300} meridians={10} parallels={5} nodes={6} speed={34} />
            </div>
            <div className="relative">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="aspect-square w-full rounded-full border border-[color:var(--panel-brd)] object-cover"
                style={{ boxShadow: "0 0 60px -10px rgba(125,249,255,.55), inset 0 0 40px rgba(76,111,255,.4)" }}
              />
              <div className="pointer-events-none absolute inset-0 rounded-full" style={{ background: "linear-gradient(180deg, rgba(125,249,255,.14), transparent 45%, rgba(7,3,31,.6))" }} />
              <span className="absolute left-1 top-1 chip font-mono text-[10px]">HOLO-ID · MKA-2026</span>
            </div>
            <div className="mt-4 space-y-2 text-[12px]">
              {[
                ["Currently", profile.currentlyBuilding],
                ["Certs", profile.certifications],
                ["Languages", profile.languages.join(" · ")],
                ["Phone", profile.phones[0]],
              ].map(([k, v]) => (
                <div key={k} className="flex items-start justify-between gap-3 border-b border-[color:var(--panel-brd)] pb-1.5">
                  <span className="text-[color:var(--muted)]">{k}</span>
                  <span className="text-right font-medium">{v}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              <a href={profile.gravatar} target="_blank" rel="noreferrer" className="frost-btn flex-1 justify-center text-[12px]">
                Gravatar
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="frost-btn flex-1 justify-center text-[12px]">
                GitHub
              </a>
            </div>
          </Glass>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- STATUS MARQUEE ---------------- */
export function StatusBlock() {
  return (
    <Glass className="px-2">
      <Marquee
        items={[
          "OPEN TO WORK 🟢",
          "OMNI-SPHERE RENDER v3",
          "Kotlin 2.x",
          "Jetpack Compose",
          "Clean Architecture",
          "Baseline Profiles",
          "Claude API",
          "TFLite",
          "Firebase",
          "Room + Paging",
          "မြန်မာဘာသာ ပံ့ပိုးမှု",
          "GMT+6:30 / +7",
          "82+ Certificates",
          "VOLUMETRIC UI",
        ]}
      />
    </Glass>
  );
}

/* ---------------- ABOUT ---------------- */
export function AboutBlock() {
  const { lang } = useI18n();
  const info: [string, string][] = [
    ["Full Name", `${profile.nameMy} · ${profile.name}`],
    ["GitHub", "Dev-moe-kyawaung"],
    ["Certificates", "82+ (Programming Hub)"],
    ["Focus", "Senior Android · Full-Stack"],
    ["Base", "Tachileik ↔ Bangkok"],
    ["Status", "Open to Work 🟢"],
  ];
  return (
    <div className="grid gap-6 md:grid-cols-[1.25fr_.75fr]">
      <Reveal>
        <Glass className="space-y-4 p-6">
          <p className={`text-sm leading-relaxed text-[color:var(--muted)] ${lang === "my" ? "mm" : ""}`}>
            {lang === "my"
              ? "ကျွန်တော်သည် စဉ်ဆက်မပြတ် သင်ယူမှုကို ယုံကြည်သော Android ဆော့ဖ်ဝဲရေးဆွဲသူတစ်ဦးဖြစ်ပါသည်။ ဝဘ်မှ မိုဘိုင်း၊ ဒေတာဘေ့စ်မှ AI အထိ နည်းပညာနယ်ပယ် ကျယ်ပြန့်စွာ လေ့လာလျက်ရှိပါသည်။"
              : "I am a passionate and self-motivated developer who believes in continuous learning and growth. From web development to mobile apps, databases to AI — I consistently expand my skill set across the full technology spectrum."}
          </p>
          <p className={`text-sm leading-relaxed text-[color:var(--muted)] ${lang === "my" ? "mm" : ""}`}>
            {lang === "my"
              ? "Programming Hub မှ လက်မှတ် ၈၂ ခုကျော်သည် ကဏ္ဍကြီး ၉ ခုတွင် လက်တွေ့ကျသော သင်ယူမှုကို ဖော်ပြပါသည်။"
              : "My certification portfolio demonstrates practical, structured learning across 9 major domains and over 82 technical subjects — from programming languages and web frameworks to machine learning, blockchain, and cybersecurity."}
          </p>
          <p className={`text-sm leading-relaxed text-[color:var(--muted)] ${lang === "my" ? "mm" : ""}`}>
            {lang === "my" ? "ရည်ရွယ်ချက်ရှိရှိ တည်ဆောက်သည် — သန့်ရှင်းသောကုဒ်၊ ခေတ်မီနည်းလမ်းများ။" : "I build with intention: clean code, modern practices, and a genuine love for problem-solving."}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {["Kotlin", "Compose", "MVVM", "Hilt", "Room", "Firebase", "Claude API", "Kali Linux"].map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </Glass>
      </Reveal>
      <Reveal delay={140}>
        <Glass className="p-6">
          {info.map(([k, v]) => (
            <div key={k} className="flex items-center justify-between gap-3 border-b border-[color:var(--panel-brd)] py-2.5 text-[13px] last:border-0">
              <span className="text-[color:var(--muted)]">{k}</span>
              <span className="text-right font-semibold">{v}</span>
            </div>
          ))}
        </Glass>
      </Reveal>
    </div>
  );
}

/* ---------------- FOCUS ---------------- */
export function FocusBlock() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {focusMap.map((f, i) => (
        <Reveal key={f.k} delay={i * 90}>
          <Tilt>
            <Glass className="h-full p-5">
              <div className="flex items-center gap-3">
                <MiniSphere size={54} color={sphereHues[i % sphereHues.length]} speed={12 + i * 3} />
                <span className="text-3xl">{f.icon}</span>
              </div>
              <div className="mt-3 text-sm font-bold" style={{ color: sphereHues[i % sphereHues.length] }}>
                {f.k}
              </div>
              <div className="mt-1 text-[12px] leading-relaxed text-[color:var(--muted)]">{f.v}</div>
            </Glass>
          </Tilt>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- SKILLS ---------------- */
export function SkillsBlock() {
  const { b } = useI18n();
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((g, i) => (
        <Reveal key={g.title.en} delay={i * 80}>
          <Glass className="h-full space-y-3 p-5">
            <div className="flex items-center gap-2">
              <span className="text-xl">{g.icon}</span>
              <span className="text-sm font-bold">{b(g.title)}</span>
            </div>
            {g.items.map((it) => (
              <Bar key={it.name} label={it.name} pct={it.level} />
            ))}
          </Glass>
        </Reveal>
      ))}
    </div>
  );
}

export function SkillCloudBlock() {
  return (
    <Reveal>
      <Glass className="flex flex-wrap gap-2 p-6">
        {skillChips.map((s) => (
          <span key={s} className="chip">
            {s}
          </span>
        ))}
      </Glass>
    </Reveal>
  );
}

/* ---------------- ROADMAP ---------------- */
export function RoadmapBlock() {
  const { b } = useI18n();
  return (
    <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {roadmap.map((r, i) => (
        <Reveal key={r.phase} delay={i * 90}>
          <Glass className="h-full p-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-3xl font-black text-[rgba(158,241,255,.25)]">{r.phase}</span>
              <span className="chip font-mono text-[10px]">{r.temp}</span>
            </div>
            <div className="mt-2 text-base font-bold text-[color:var(--ice)]">{b(r.title)}</div>
            <ul className="mt-3 space-y-1.5">
              {r.items.map((it) => (
                <li key={it} className="flex items-start gap-2 text-[12.5px] text-[color:var(--muted)]">
                  <span className="text-[color:var(--mint)]">◆</span>
                  {it}
                </li>
              ))}
            </ul>
            <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-[rgba(158,241,255,.12)]">
              <div className="h-full rounded-full" style={{ width: `${100 - i * 8}%`, background: "linear-gradient(90deg,var(--ice-deep),var(--mint))" }} />
            </div>
          </Glass>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- COMPOSE SHOWCASE ---------------- */
export function ComposeBlock() {
  const { b } = useI18n();
  const [active, setActive] = useState(0);
  return (
    <div className="grid gap-5 lg:grid-cols-[.42fr_.58fr]">
      <Reveal>
        <div className="space-y-3">
          {composeSnippets.map((s, i) => (
            <button key={s.title} onClick={() => setActive(i)} className="block w-full text-left">
              <Glass className={`p-4 transition ${active === i ? "border-[color:var(--ice)]" : ""}`}>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] text-[color:var(--mint)]">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-sm font-bold">{s.title}</span>
                  {active === i && <span className="ml-auto text-[color:var(--ice)]">❄</span>}
                </div>
                <div className="mt-1 text-[12px] text-[color:var(--muted)]">{b(s.desc)}</div>
              </Glass>
            </button>
          ))}
        </div>
      </Reveal>
      <Reveal delay={120}>
        <Glass className="relative overflow-hidden p-4">
          <div className="pointer-events-none absolute -right-16 -top-16 opacity-40">
            <OmniSphere size={220} meridians={9} parallels={4} nodes={5} speed={30} hue="var(--magenta)" />
          </div>
          <div className="relative mb-3 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5edb]" />
            <span className="h-3 w-3 rounded-full bg-[#ffc46b]" />
            <span className="h-3 w-3 rounded-full bg-[#9dff6a]" />
            <span className="ml-2 font-mono text-[11px] text-[color:var(--muted)]">
              ◈ HOLOGRAM · {composeSnippets[active].title}
            </span>
          </div>
          <div className="relative">
            <Code code={composeSnippets[active].code} />
          </div>
          <div className="relative mt-3 flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-[color:var(--holo)]">
            <span className="scan-line h-px flex-1" /> PROJECTION STABLE
          </div>
        </Glass>
      </Reveal>
    </div>
  );
}

/* ---------------- ARCHITECTURE SPHERES ---------------- */
const sphereHues = ["var(--holo)", "var(--magenta)", "var(--violet)", "var(--lime)", "var(--amber)"];

export function ArchitectureBlock() {
  const { b } = useI18n();
  return (
    <div className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {architecturePanels.map((p, i) => (
          <Reveal key={p.layer} delay={i * 90}>
            <Tilt>
              <Glass className="relative h-full overflow-hidden p-6 text-center">
                <div className="mx-auto flex h-[150px] items-center justify-center">
                  <OmniSphere
                    size={140 - i * 6}
                    meridians={8 + i}
                    parallels={4}
                    nodes={4 + i}
                    speed={20 + i * 4}
                    hue={sphereHues[i % sphereHues.length]}
                  />
                </div>
                <div className="mt-4 font-mono text-[11px] text-[color:var(--muted)]">
                  LAYER {String(i + 1).padStart(2, "0")} · R={p.temp.replace("-", "").replace("°C", "")}
                </div>
                <div className="mt-1 text-base font-bold" style={{ color: sphereHues[i % sphereHues.length] }}>
                  {p.layer}
                </div>
                <p className="mt-2 text-[12.5px] text-[color:var(--muted)]">{b(p.desc)}</p>
                <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                  {p.parts.map((x) => (
                    <span key={x} className="chip text-[10.5px]">
                      {x}
                    </span>
                  ))}
                </div>
              </Glass>
            </Tilt>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <Glass className="p-6">
          <div className="mb-3 font-mono text-[11px] tracking-[0.3em] text-[color:var(--holo)]">◈ DEPENDENCY ORBIT</div>
          <div className="flex flex-wrap items-center gap-2 text-[12.5px] text-[color:var(--muted)]">
            {architecturePanels.map((p, i) => (
              <span key={p.layer} className="flex items-center gap-2">
                <span className="chip">{p.layer}</span>
                {i < architecturePanels.length - 1 && <span className="text-[color:var(--holo)]">→</span>}
              </span>
            ))}
          </div>
        </Glass>
      </Reveal>
    </div>
  );
}

/* ---------------- PROJECT GALAXY ---------------- */
export function GalaxyBlock() {
  const { b, lang } = useI18n();
  const [active, setActive] = useState(0);
  const nodes = repos.slice(0, 10).map((r) => ({ label: r.name, icon: r.icon, url: r.url }));
  const cur = repos[active];

  return (
    <div className="space-y-6">
      <Reveal>
        <Glass className="relative overflow-hidden p-4">
          <VaporStrip />
          <div className="relative grid items-center gap-4 lg:grid-cols-[.55fr_.45fr]">
            <PointGlobe
              height={360}
              labels={["PROJECT GALAXY", "18 REPOSITORIES", "33 DEPLOYED SITES", "31 PWA BUILDS", "16 FLAGSHIP APPS"]}
            />
            <div className="hidden justify-center lg:flex">
              <OrbitNodes items={nodes} radius={175} size={400} />
            </div>
          </div>
        </Glass>
      </Reveal>

      <div className="grid gap-4 lg:grid-cols-[.34fr_.66fr]">
        <Reveal>
          <Glass className="max-h-[420px] overflow-y-auto p-3">
            {repos.map((r, i) => (
              <button
                key={r.name}
                onClick={() => setActive(i)}
                className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-[12.5px] transition"
                style={active === i ? { background: "rgba(125,249,255,.14)", color: "var(--holo)" } : undefined}
              >
                <span>{r.icon}</span>
                <span className="truncate">{r.name}</span>
                {active === i && <span className="ml-auto">◈</span>}
              </button>
            ))}
          </Glass>
        </Reveal>
        <Reveal delay={120}>
          <Glass className="flex h-full flex-col p-6">
            <div className="flex items-start gap-4">
              <MiniSphere size={72} color="var(--holo)" />
              <div>
                <div className="text-xl font-black">
                  {cur.icon} {cur.name}
                </div>
                <p className={`mt-2 text-[13px] text-[color:var(--muted)] ${lang === "my" ? "mm" : ""}`}>{b(cur.desc)}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {cur.tags.map((tg) => (
                <span key={tg} className="chip text-[11px]">
                  {tg}
                </span>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 font-mono text-[11px] text-[color:var(--muted)]">
              <div>
                <div className="text-[color:var(--holo)]">NODE</div>
                <div>{String(active + 1).padStart(2, "0")}/{repos.length}</div>
              </div>
              <div>
                <div className="text-[color:var(--magenta)]">ORBIT</div>
                <div>{(active * 37) % 360}°</div>
              </div>
              <div>
                <div className="text-[color:var(--lime)]">STATUS</div>
                <div>LIVE</div>
              </div>
            </div>
            <a href={cur.url} target="_blank" rel="noreferrer" className="frost-btn mt-auto w-fit">
              Enter node ↗
            </a>
          </Glass>
        </Reveal>
      </div>
    </div>
  );
}

/* ---------------- PERFORMANCE (holo gauges) ---------------- */
function Gauge({ pct, color }: { pct: number; color: string }) {
  const r = 34;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 90 90" className="h-24 w-24 -rotate-90">
      <circle cx="45" cy="45" r={r} fill="none" stroke="rgba(125,249,255,.12)" strokeWidth="6" />
      <circle
        cx="45"
        cy="45"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c - (c * pct) / 100}
        style={{ filter: `drop-shadow(0 0 6px ${color})`, transition: "stroke-dashoffset 1.6s cubic-bezier(.16,1,.3,1)" }}
      />
    </svg>
  );
}

export function PerformanceBlock() {
  const { b } = useI18n();
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {freezeMetrics.map((m, i) => (
        <Reveal key={m.label.en} delay={i * 80}>
          <Tilt>
            <Glass className="flex items-center gap-4 p-5">
              <div className="relative shrink-0">
                <Gauge pct={m.pct} color={sphereHues[i % sphereHues.length]} />
                <span className="absolute inset-0 flex items-center justify-center font-mono text-[13px] font-bold">{m.pct}</span>
              </div>
              <div className="min-w-0">
                <div className="truncate text-[11px] uppercase tracking-widest text-[color:var(--muted)]">{b(m.label)}</div>
                <div className="ice-text mt-1 text-2xl font-black">{m.value}</div>
                <span className="chip mt-2 text-[11px]" style={{ color: "var(--lime)" }}>
                  {m.delta}
                </span>
              </div>
            </Glass>
          </Tilt>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- PROJECTS ---------------- */
export function ProjectsBlock({ limit }: { limit?: number }) {
  const { b } = useI18n();
  const list = limit ? repos.slice(0, limit) : repos;
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((r, i) => (
        <Reveal key={r.name} delay={(i % 6) * 70}>
          <a href={r.url} target="_blank" rel="noreferrer" className="group block h-full">
            <Glass className="flex h-full flex-col p-5">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{r.icon}</span>
                <span className="truncate text-sm font-bold">{r.name}</span>
              </div>
              <p className="mt-2 flex-1 text-[12.5px] leading-relaxed text-[color:var(--muted)]">{b(r.desc)}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {r.tags.map((tg) => (
                  <span key={tg} className="chip text-[10.5px]">
                    {tg}
                  </span>
                ))}
              </div>
              <div className="mt-3 text-[11px] uppercase tracking-widest text-[color:var(--ice)] opacity-70 transition group-hover:opacity-100">
                view source ↗
              </div>
            </Glass>
          </a>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- APP COLLECTION ---------------- */
export function AppsBlock() {
  const { b } = useI18n();
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {appCollection.map((a, i) => (
        <Reveal key={a.i} delay={(i % 8) * 60}>
          <Glass className="relative h-full p-5">
            {a.badge && (
              <span className="absolute right-3 top-3 rounded-full bg-[linear-gradient(120deg,#38bdf8,#a78bfa)] px-2 py-0.5 text-[10px] font-bold text-white">
                {a.badge}
              </span>
            )}
            <div className="text-3xl">{a.icon}</div>
            <div className="mt-2 text-[11px] font-mono text-[color:var(--muted)]">#{String(a.i).padStart(2, "0")}</div>
            <div className="text-sm font-bold">{a.name}</div>
            <div className="mt-1 text-[12px] text-[color:var(--muted)]">{b(a.blurb)}</div>
          </Glass>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- LINK GRIDS ---------------- */
export function GithubSitesBlock({ limit }: { limit?: number }) {
  const list = limit ? githubSites.slice(0, limit) : githubSites;
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((u, i) => (
        <Reveal key={u + i} delay={(i % 9) * 40}>
          <LinkCard href={u} icon="🐙" title={u.replace("https://", "").replace(".github.io/", "")} sub={u.replace("https://", "")} />
        </Reveal>
      ))}
    </div>
  );
}

export function LovableBlock({ limit }: { limit?: number }) {
  const list = limit ? lovableApps.slice(0, limit) : lovableApps;
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((u, i) => (
        <Reveal key={u + i} delay={(i % 9) * 40}>
          <LinkCard href={u} icon="⚡" title={u.replace("https://", "").replace(".lovable.app", "").replace("/", "")} sub={u.replace("https://", "")} />
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- GALLERY ---------------- */
export function GalleryBlock({ limit }: { limit?: number }) {
  const list = limit ? images.gallery.slice(0, limit) : images.gallery;
  return (
    <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
      {list.map((src, i) => (
        <Reveal key={src} delay={(i % 8) * 50}>
          <Glass className="group overflow-hidden p-1.5">
            <img
              src={src}
              alt={`Cryo lab visual ${i + 1}`}
              loading="lazy"
              className="w-full rounded-xl object-cover transition duration-700 group-hover:scale-[1.04] group-hover:saturate-150"
              style={{ filter: "saturate(.85) contrast(1.05)" }}
            />
          </Glass>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- VIDEOS ---------------- */
export function VideosBlock({ limit }: { limit?: number }) {
  const list = limit ? images.videos.slice(0, limit) : images.videos;
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((src, i) => (
        <Reveal key={src} delay={(i % 6) * 70}>
          <Glass className="overflow-hidden p-1.5">
            <video
              src={src}
              poster={images.poster}
              muted
              loop
              playsInline
              controls
              preload="none"
              className="aspect-video w-full rounded-xl object-cover"
            />
            <div className="px-3 py-2 font-mono text-[11px] text-[color:var(--muted)]">MOTION-REEL-{String(i + 1).padStart(2, "0")}</div>
          </Glass>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- CERTS ---------------- */
export function CertsBlock() {
  const { b } = useI18n();
  const [q, setQ] = useState("");
  const list = certCategories.filter((c) => (b(c.name) + c.name.en).toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="space-y-5">
      <Reveal>
        <Glass className="flex items-center gap-2 px-4 py-2">
          <span>🔍</span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search certificates…"
            className="w-full bg-transparent py-2 text-sm outline-none"
          />
          <span className="chip font-mono text-[11px]">82+</span>
        </Glass>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((c, i) => (
          <Reveal key={c.name.en} delay={(i % 6) * 70}>
            <Glass className="flex items-center gap-4 p-5">
              <span className="text-3xl">{c.icon}</span>
              <div className="flex-1">
                <div className="text-sm font-bold">{b(c.name)}</div>
                <div className="text-[12px] text-[color:var(--muted)]">{c.count} certificates</div>
              </div>
              <span className="ice-text text-2xl font-black">{c.count}</span>
            </Glass>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/* ---------------- EXPERIENCE ---------------- */
export function ExperienceBlock() {
  const { b } = useI18n();
  return (
    <div className="space-y-5">
      {experience.map((e, i) => (
        <Reveal key={e.org} delay={i * 90}>
          <Glass className="p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <div className="text-base font-bold text-[color:var(--ice)]">{b(e.role)}</div>
                <div className="text-[12.5px] text-[color:var(--muted)]">{e.org}</div>
              </div>
              <span className="chip font-mono text-[11px]">{e.period}</span>
            </div>
            <ul className="mt-3 space-y-1.5">
              {e.points.map((p, j) => (
                <li key={j} className="flex gap-2 text-[13px] text-[color:var(--muted)]">
                  <span className="text-[color:var(--mint)]">❄</span>
                  {b(p)}
                </li>
              ))}
            </ul>
          </Glass>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- TIMELINE ---------------- */
export function TimelineBlock() {
  const { b } = useI18n();
  return (
    <div className="relative border-l border-[color:var(--panel-brd)] pl-6">
      {timeline.map((tl, i) => (
        <Reveal key={tl.year} delay={i * 80}>
          <div className="relative mb-6">
            <span className="absolute -left-[31px] top-3 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[color:var(--ice)]" style={{ boxShadow: "0 0 14px rgba(126,231,255,.9)" }} />
            <Glass className="p-5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-lg font-black text-[color:var(--ice)]">{tl.year}</span>
                <span className="text-sm font-bold">{b(tl.title)}</span>
              </div>
              <p className="mt-2 text-[13px] text-[color:var(--muted)]">{b(tl.body)}</p>
            </Glass>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- SERVICES ---------------- */
export function ServicesBlock() {
  const { b } = useI18n();
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => (
        <Reveal key={s.title.en} delay={(i % 6) * 80}>
          <Glass className="flex h-full flex-col p-5">
            <div className="text-3xl">{s.icon}</div>
            <div className="mt-2 text-sm font-bold">{b(s.title)}</div>
            <p className="mt-1 flex-1 text-[12.5px] text-[color:var(--muted)]">{b(s.body)}</p>
            <div className="mt-3 font-mono text-[12px] text-[color:var(--mint)]">{s.price}</div>
          </Glass>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
export function TestimonialsBlock() {
  const { b } = useI18n();
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {testimonials.map((t2, i) => (
        <Reveal key={t2.name} delay={i * 90}>
          <Glass className="p-6">
            <div className="text-4xl leading-none text-[rgba(158,241,255,.35)]">“</div>
            <p className="text-[13.5px] leading-relaxed">{b(t2.quote)}</p>
            <div className="mt-4 text-[12px] font-bold text-[color:var(--ice)]">{t2.name}</div>
            <div className="text-[11px] text-[color:var(--muted)]">{t2.role}</div>
          </Glass>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- TOOLBOX ---------------- */
export function ToolboxBlock() {
  const { b } = useI18n();
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {toolbox.map((g, i) => (
        <Reveal key={g.group.en} delay={i * 70}>
          <Glass className="h-full p-5">
            <div className="text-sm font-bold text-[color:var(--ice)]">{b(g.group)}</div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {g.items.map((x) => (
                <span key={x} className="chip text-[11px]">
                  {x}
                </span>
              ))}
            </div>
          </Glass>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- LAB MODULES ---------------- */
export function LabBlock() {
  const { b } = useI18n();
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {labModules.map((m, i) => (
        <Reveal key={m.code} delay={i * 70}>
          <Glass className="relative overflow-hidden p-5">
            <VaporStrip />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-[color:var(--muted)]">{m.code}</span>
                <span className="chip font-mono text-[10px]" style={{ color: "var(--lime)" }}>
                  {m.status}
                </span>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <MiniSphere size={58} color={sphereHues[i % sphereHues.length]} speed={10 + i * 2} />
                <div>
                  <div className="text-sm font-bold">{b(m.name)}</div>
                  <div className="ice-text mt-1 font-mono text-xl font-black">{m.temp}</div>
                </div>
              </div>
            </div>
          </Glass>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- TRENDS ---------------- */
export function TrendsBlock() {
  const { b } = useI18n();
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {trends2030.map((t3, i) => (
        <Reveal key={t3.year} delay={i * 80}>
          <Glass className="h-full p-5">
            <div className="ice-text font-mono text-xl font-black">{t3.year}</div>
            <div className="mt-2 text-[13px] font-bold">{b(t3.title)}</div>
            <p className="mt-1 text-[12px] text-[color:var(--muted)]">{b(t3.body)}</p>
          </Glass>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- BLOG ---------------- */
export function BlogBlock({ limit }: { limit?: number }) {
  const { b } = useI18n();
  const list = limit ? posts.slice(0, limit) : posts;
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {list.map((p, i) => (
        <Reveal key={p.slug} delay={i * 80}>
          <Link href={`/blog/${p.slug}`} className="group block h-full">
            <Glass className="flex h-full flex-col p-5">
              <div className="flex items-center gap-2 text-[11px] text-[color:var(--muted)]">
                <span className="chip text-[10px]">{p.tag}</span>
                <span>{p.date}</span>
              </div>
              <div className="mt-2 text-base font-bold">{b(p.title)}</div>
              <p className="mt-2 flex-1 text-[12.5px] text-[color:var(--muted)]">{b(p.excerpt)}</p>
              <div className="mt-3 text-[11px] uppercase tracking-widest text-[color:var(--ice)] opacity-70 transition group-hover:opacity-100">read →</div>
            </Glass>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- FAQ ---------------- */
export function FaqBlock() {
  const { b } = useI18n();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {faqs.map((f, i) => (
        <Reveal key={f.q.en} delay={i * 60}>
          <Glass className="overflow-hidden">
            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center gap-3 px-5 py-4 text-left">
              <span className="text-[color:var(--ice)]">{open === i ? "❆" : "❄"}</span>
              <span className="flex-1 text-[13.5px] font-semibold">{b(f.q)}</span>
              <span className="text-[color:var(--muted)]">{open === i ? "−" : "+"}</span>
            </button>
            <div className={`grid transition-all duration-500 ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <p className="px-5 pb-4 text-[13px] text-[color:var(--muted)]">{b(f.a)}</p>
              </div>
            </div>
          </Glass>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- EMAILS ---------------- */
export function EmailsBlock() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {emails.map((e, i) => (
        <Reveal key={e} delay={(i % 9) * 40}>
          <Glass className="flex items-center gap-3 p-4">
            <span className="text-lg">✉️</span>
            <a href={`mailto:${e}`} className="min-w-0 flex-1 truncate text-[12.5px] hover:text-[color:var(--ice)]">
              {e}
            </a>
            <CopyChip value={e} />
          </Glass>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- SOCIAL ---------------- */
export function SocialBlock() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {socials.map((s, i) => (
        <Reveal key={s.label + i} delay={(i % 9) * 40}>
          <LinkCard href={s.url} icon={s.icon} title={s.label} sub={s.url.replace("https://", "")} />
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- DIRECTORY ---------------- */
export function DirectoryBlock() {
  const { t, b } = useI18n();
  return (
    <div className="space-y-6">
      {navGroups.map((g) => (
        <div key={g.label.en}>
          <div className="mb-3 text-[11px] uppercase tracking-[0.3em] text-[color:var(--ice)]">{b(g.label)}</div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {g.links.map((l, i) => (
              <Reveal key={l.href} delay={i * 40}>
                <InternalCard href={l.href} icon="◈" title={t(l.key)} sub={l.href} />
              </Reveal>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
