"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Glass, PageHero, Reveal } from "@/components/ui";
import { posts } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

export default function BlogPostPage() {
  const params = useParams<{ slug: string }>();
  const { b, lang } = useI18n();
  const post = posts.find((p) => p.slug === params?.slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-4 pb-20 pt-36 sm:px-6">
        <Glass className="p-8 text-center">
          <div className="text-4xl">◈</div>
          <div className="mt-3 text-sm">This projection is offline.</div>
          <Link href="/blog" className="frost-btn mt-5">
            Back to blog
          </Link>
        </Glass>
      </div>
    );
  }

  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageHero badge={`${post.tag.toUpperCase()} · ${post.date}`} title={post.title} subtitle={post.excerpt} />
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 pb-20 sm:px-6 lg:grid-cols-[.68fr_.32fr]">
        <Reveal>
          <Glass className="p-7">
            <article className={`space-y-4 text-[14px] leading-[1.9] text-[color:var(--muted)] ${lang === "my" ? "mm" : ""}`}>
              {b(post.body)
                .split(". ")
                .reduce<string[][]>((acc, s, i) => {
                  const idx = Math.floor(i / 2);
                  acc[idx] = acc[idx] ? [...acc[idx], s] : [s];
                  return acc;
                }, [])
                .map((chunk, i) => (
                  <p key={i}>{chunk.join(". ")}</p>
                ))}
            </article>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="chip">#{post.tag}</span>
              <span className="chip">#Android</span>
              <span className="chip">#Kotlin</span>
              <span className="chip">#OmniSphere</span>
            </div>
          </Glass>
        </Reveal>
        <div className="space-y-3">
          <div className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--ice)]">More field notes</div>
          {others.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <Link href={`/blog/${p.slug}`} className="block">
                <Glass className="p-4">
                  <div className="text-[12px] text-[color:var(--muted)]">{p.date} · {p.tag}</div>
                  <div className="mt-1 text-[13.5px] font-bold">{b(p.title)}</div>
                </Glass>
              </Link>
            </Reveal>
          ))}
          <Link href="/blog" className="frost-btn">
            ← All posts
          </Link>
        </div>
      </div>
    </>
  );
}
