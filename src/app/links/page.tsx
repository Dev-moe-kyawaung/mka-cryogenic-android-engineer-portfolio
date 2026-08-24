"use client";

import { useMemo, useState } from "react";
import { Glass, LinkCard, PageHero, Reveal } from "@/components/ui";
import { DirectoryBlock } from "@/components/sections";
import { githubSites, lovableApps, socials, emails, repos, profile } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

type Item = { url: string; label: string; group: string; icon: string };

export default function LinksPage() {
  const { lang } = useI18n();
  const [q, setQ] = useState("");
  const [group, setGroup] = useState("All");

  const all = useMemo<Item[]>(
    () => [
      { url: profile.github, label: "Dev-moe-kyawaung", group: "Profile", icon: "🐙" },
      { url: profile.gravatar, label: "Gravatar 2026", group: "Profile", icon: "🌐" },
      { url: profile.gravatarAlt, label: "Gravatar 13721", group: "Profile", icon: "◈" },
      ...repos.map((r) => ({ url: r.url, label: r.name, group: "Repos", icon: r.icon })),
      ...githubSites.map((u) => ({ url: u, label: u.replace("https://", "").replace(".github.io/", ""), group: "Pages", icon: "🐙" })),
      ...lovableApps.map((u) => ({ url: u, label: u.replace("https://", "").replace(".lovable.app", ""), group: "PWA", icon: "⚡" })),
      ...socials.map((s) => ({ url: s.url, label: s.label, group: "Social", icon: s.icon })),
      ...emails.map((e) => ({ url: `mailto:${e}`, label: e, group: "Email", icon: "✉️" })),
    ],
    [],
  );

  const groups = ["All", "Profile", "Repos", "Pages", "PWA", "Social", "Email"];
  const list = all.filter((i) => (group === "All" || i.group === group) && (i.label + i.url).toLowerCase().includes(q.toLowerCase()));

  return (
    <>
      <PageHero
        badge={`LINK HUB · ${all.length}`}
        title={{ en: "Universal Link Hub", my: "လင့်ခ် စုစည်းရာဌာန" }}
        subtitle={{
          en: "Every repository, deployment, PWA, social profile and inbox in one frozen index.",
          my: "repository၊ ဆိုက်၊ PWA၊ လူမှုကွန်ရက်နှင့် အီးမေးလ် အားလုံးကို တစ်နေရာတည်းတွင်။",
        }}
      />
      <div className="mx-auto w-full max-w-7xl space-y-6 px-4 pb-20 sm:px-6">
        <Reveal>
          <Glass className="flex flex-wrap items-center gap-2 p-4">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={lang === "my" ? "လင့်ခ် ရှာရန်…" : "Search all links…"}
              className="min-w-[200px] flex-1 rounded-full border border-[color:var(--panel-brd)] bg-[rgba(2,12,20,.45)] px-4 py-2 text-[13px] outline-none focus:border-[color:var(--ice)]"
            />
            {groups.map((g) => (
              <button
                key={g}
                onClick={() => setGroup(g)}
                className="chip cursor-pointer"
                style={group === g ? { background: "rgba(158,241,255,.22)", borderColor: "var(--ice)" } : undefined}
              >
                {g}
              </button>
            ))}
            <span className="chip font-mono text-[11px]">{list.length}</span>
          </Glass>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((i, idx) => (
            <Reveal key={i.url + idx} delay={(idx % 9) * 30}>
              <LinkCard href={i.url} icon={i.icon} title={i.label} sub={i.group} />
            </Reveal>
          ))}
        </div>

        <div className="pt-6">
          <div className="mb-4 text-[11px] uppercase tracking-[0.3em] text-[color:var(--ice)]">
            {lang === "my" ? "ဆိုက်အတွင်း စာမျက်နှာများ" : "Internal pages"}
          </div>
          <DirectoryBlock />
        </div>
      </div>
    </>
  );
}
