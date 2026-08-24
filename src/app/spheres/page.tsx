"use client";

import { useState } from "react";
import { Glass, PageHero, Reveal } from "@/components/ui";
import { MiniSphere, OmniSphere, OrbitNodes, PointGlobe, Tilt } from "@/components/sphere";
import { useI18n } from "@/lib/i18n";
import { skillGroups, focusMap, labModules } from "@/lib/data";

export default function SpheresPage() {
  const { lang, b } = useI18n();
  const [meridians, setMeridians] = useState(12);
  const [parallels, setParallels] = useState(7);
  const [speed, setSpeed] = useState(26);
  const [hue, setHue] = useState("var(--holo)");

  const hues = [
    ["Holo", "var(--holo)"],
    ["Magenta", "var(--magenta)"],
    ["Violet", "var(--violet)"],
    ["Lime", "var(--lime)"],
    ["Amber", "var(--amber)"],
  ];

  return (
    <>
      <PageHero
        badge="3D ENGINE · CSS + CANVAS"
        title={{ en: "The Omni-Sphere Engine", my: "Omni-Sphere အင်ဂျင်" }}
        subtitle={{
          en: "Every sphere on this site is real 3D geometry — CSS transformed meridians plus a canvas point-cloud globe. Tune the projection live.",
          my: "ဤဆိုက်ရှိ စက်လုံးတိုင်းသည် တကယ့် သုံးဖက်မြင် ဂျီသြမေတြီဖြစ်သည် — CSS meridian များနှင့် canvas အမှတ်တိမ်တိုက်။ တိုက်ရိုက် ချိန်ညှိကြည့်ပါ။",
        }}
      />

      <div className="mx-auto w-full max-w-7xl space-y-8 px-4 pb-20 sm:px-6">
        <Reveal>
          <div className="grid gap-5 lg:grid-cols-[.55fr_.45fr]">
            <Glass className="flex items-center justify-center p-6">
              <OmniSphere size={330} meridians={meridians} parallels={parallels} speed={speed} hue={hue} nodes={8} />
            </Glass>
            <Glass className="space-y-5 p-6">
              <div className="font-mono text-[11px] tracking-[0.3em] text-[color:var(--holo)]">◈ PROJECTION CONTROLS</div>
              {[
                { label: lang === "my" ? "မီရီဒီယန်" : "Meridians", v: meridians, set: setMeridians, min: 4, max: 24 },
                { label: lang === "my" ? "အလျားလိုက် အကွင်း" : "Parallels", v: parallels, set: setParallels, min: 2, max: 14 },
                { label: lang === "my" ? "လှည့်နှုန်း (စက္ကန့်)" : "Rotation (s)", v: speed, set: setSpeed, min: 6, max: 60 },
              ].map((c) => (
                <div key={c.label}>
                  <div className="mb-1 flex justify-between text-[12px]">
                    <span>{c.label}</span>
                    <span className="font-mono text-[color:var(--holo)]">{c.v}</span>
                  </div>
                  <input
                    type="range"
                    min={c.min}
                    max={c.max}
                    value={c.v}
                    onChange={(e) => c.set(Number(e.target.value))}
                    className="w-full accent-[color:var(--holo-deep)]"
                  />
                </div>
              ))}
              <div>
                <div className="mb-2 text-[12px]">{lang === "my" ? "အရောင်" : "Emission"}</div>
                <div className="flex flex-wrap gap-2">
                  {hues.map(([n, v]) => (
                    <button key={n} onClick={() => setHue(v)} className="chip cursor-pointer" style={hue === v ? { borderColor: v, color: v } : undefined}>
                      <span className="h-2.5 w-2.5 rounded-full" style={{ background: v }} /> {n}
                    </button>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-[color:var(--panel-brd)] bg-[rgba(3,0,20,.5)] p-3 font-mono text-[11px] text-[color:var(--muted)]">
                {`<OmniSphere meridians={${meridians}} parallels={${parallels}} speed={${speed}} />`}
              </div>
            </Glass>
          </div>
        </Reveal>

        <Reveal>
          <Glass className="p-4">
            <div className="mb-2 px-2 font-mono text-[11px] tracking-[0.3em] text-[color:var(--magenta)]">◈ CANVAS POINT-CLOUD GLOBE · 520 NODES</div>
            <PointGlobe height={400} points={620} labels={["FIBONACCI SPHERE", "DEPTH-SORTED RENDER", "POINTER PARALLAX", "60 FPS CANVAS"]} />
          </Glass>
        </Reveal>

        <Reveal>
          <Glass className="p-6">
            <div className="mb-4 font-mono text-[11px] tracking-[0.3em] text-[color:var(--lime)]">◈ ORBIT NODE SYSTEM · SKILL DOMAINS</div>
            <OrbitNodes
              items={[
                ...focusMap.map((f) => ({ label: f.k, icon: f.icon })),
                ...skillGroups.slice(0, 4).map((s) => ({ label: b(s.title), icon: s.icon })),
              ]}
              radius={180}
              size={420}
            />
          </Glass>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {labModules.map((m, i) => (
            <Reveal key={m.code} delay={i * 70}>
              <Tilt>
                <Glass className="flex items-center gap-4 p-5">
                  <MiniSphere size={64} color={["var(--holo)", "var(--magenta)", "var(--violet)", "var(--lime)", "var(--amber)"][i % 5]} speed={9 + i * 2} />
                  <div>
                    <div className="font-mono text-[11px] text-[color:var(--muted)]">{m.code}</div>
                    <div className="text-sm font-bold">{b(m.name)}</div>
                    <div className="font-mono text-[11px] text-[color:var(--lime)]">{m.status}</div>
                  </div>
                </Glass>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
