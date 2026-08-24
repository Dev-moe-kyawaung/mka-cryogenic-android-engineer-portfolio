"use client";

import Link from "next/link";
import { Section, Glass, Reveal } from "@/components/ui";
import { AiChat } from "@/components/ai-assistant";
import {
  HeroBlock,
  StatusBlock,
  AboutBlock,
  FocusBlock,
  SkillsBlock,
  SkillCloudBlock,
  RoadmapBlock,
  ComposeBlock,
  ArchitectureBlock,
  PerformanceBlock,
  ProjectsBlock,
  GalaxyBlock,
  AppsBlock,
  GithubSitesBlock,
  LovableBlock,
  GalleryBlock,
  VideosBlock,
  CertsBlock,
  ExperienceBlock,
  TimelineBlock,
  ServicesBlock,
  TestimonialsBlock,
  ToolboxBlock,
  LabBlock,
  TrendsBlock,
  BlogBlock,
  FaqBlock,
  EmailsBlock,
  SocialBlock,
  DirectoryBlock,
} from "@/components/sections";
import { useI18n } from "@/lib/i18n";

export default function Home() {
  const { lang } = useI18n();
  return (
    <>
      {/* 01 */}
      <HeroBlock />

      {/* 02 */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <StatusBlock />
      </div>

      {/* 03 */}
      <Section id="about" index={3} kicker={{ en: "Specimen File", my: "ကိုယ်ရေးမှတ်တမ်း" }} title={{ en: "About the Engineer", my: "အင်ဂျင်နီယာအကြောင်း" }}>
        <AboutBlock />
      </Section>

      {/* 04 */}
      <Section id="focus" index={4} kicker={{ en: "Focus Map", my: "အာရုံစိုက်မှု" }} title={{ en: "Four Frozen Domains", my: "အဓိက နယ်ပယ်လေးခု" }}>
        <FocusBlock />
      </Section>

      {/* 05 */}
      <Section id="skills" index={5} kicker={{ en: "Capability Index", my: "စွမ်းရည်ညွှန်းကိန်း" }} title={{ en: "Skills & Proficiency", my: "ကျွမ်းကျင်မှုများ" }}>
        <SkillsBlock />
      </Section>

      {/* 06 */}
      <Section id="stack" index={6} kicker={{ en: "Tech Stack", my: "နည်းပညာများ" }} title={{ en: "Frozen Tech Cloud", my: "နည်းပညာ တိမ်တိုက်" }}>
        <SkillCloudBlock />
      </Section>

      {/* 07 */}
      <Section id="roadmap" index={7} kicker={{ en: "Cooling Curve", my: "အအေးခံမှုမျဉ်း" }} title={{ en: "Android Roadmap", my: "Android လမ်းပြမြေပုံ" }}>
        <RoadmapBlock />
      </Section>

      {/* 08 */}
      <Section id="compose" index={8} kicker={{ en: "Live Samples", my: "နမူနာကုဒ်" }} title={{ en: "Compose Holograms", my: "Compose ဟိုလိုဂရမ်" }}>
        <ComposeBlock />
      </Section>

      {/* 09 */}
      <Section id="architecture" index={9} kicker={{ en: "Layer Stack", my: "အလွှာဖွဲ့စည်းပုံ" }} title={{ en: "Architecture Spheres", my: "ဗိသုကာ စက်လုံးများ" }}>
        <ArchitectureBlock />
      </Section>

      {/* 10 */}
      <Section id="performance" index={10} kicker={{ en: "Telemetry", my: "တိုင်းတာချက်" }} title={{ en: "Performance Hologram Metrics", my: "စွမ်းဆောင်ရည် ဟိုလိုဂရမ်" }}>
        <PerformanceBlock />
      </Section>

      {/* 11 */}
      <Section id="projects" index={11} kicker={{ en: "Repositories", my: "ကုဒ်သိုလှောင်မှု" }} title={{ en: "Project Galaxy", my: "ပရောဂျက် ဂလက်ဆီ" }}>
        <GalaxyBlock />
        <div className="mt-6">
          <ProjectsBlock limit={6} />
        </div>
        <Reveal>
          <div className="mt-6 text-center">
            <Link href="/projects" className="frost-btn">
              All 18 repositories →
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* 12 */}
      <Section id="apps" index={12} kicker={{ en: "Product Line", my: "ထုတ်ကုန်များ" }} title={{ en: "App Collection · 16", my: "အက်ပ်စုစည်းမှု · ၁၆ ခု" }}>
        <AppsBlock />
      </Section>

      {/* 13 */}
      <Section id="github" index={13} kicker={{ en: "Deployed", my: "တင်ပြီး" }} title={{ en: "GitHub Pages Network", my: "GitHub Pages ကွန်ရက်" }}>
        <GithubSitesBlock limit={12} />
        <Reveal>
          <div className="mt-6 text-center">
            <Link href="/github" className="frost-btn">
              All 33 sites →
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* 14 */}
      <Section id="pwa" index={14} kicker={{ en: "PWA Labs", my: "PWA ဓာတ်ခွဲခန်း" }} title={{ en: "Lovable PWA Builds", my: "Lovable PWA များ" }}>
        <LovableBlock limit={12} />
        <Reveal>
          <div className="mt-6 text-center">
            <Link href="/lovable" className="frost-btn">
              All 31 builds →
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* 15 */}
      <Section id="gallery" index={15} kicker={{ en: "Visual Vault", my: "ပုံရိပ်သိုလှောင်ခန်း" }} title={{ en: "Hologram Gallery", my: "ဟိုလိုဂရမ် ပြခန်း" }}>
        <GalleryBlock limit={12} />
      </Section>

      {/* 16 */}
      <Section id="motion" index={16} kicker={{ en: "Motion Reels", my: "ရုပ်ရှင်တိုများ" }} title={{ en: "Cold Vapor Motion", my: "အခိုးအငွေ့ ရုပ်သံ" }}>
        <VideosBlock limit={3} />
      </Section>

      {/* 17 */}
      <Section id="certificates" index={17} kicker={{ en: "Credentials", my: "အထောက်အထား" }} title={{ en: "82+ Certificates", my: "လက်မှတ် ၈၂ ခုကျော်" }}>
        <CertsBlock />
      </Section>

      {/* 18 */}
      <Section id="experience" index={18} kicker={{ en: "Field Log", my: "လုပ်ငန်းမှတ်တမ်း" }} title={{ en: "Professional Experience", my: "အလုပ်အတွေ့အကြုံ" }}>
        <ExperienceBlock />
      </Section>

      {/* 19 */}
      <Section id="timeline" index={19} kicker={{ en: "Orbit Log", my: "လမ်းကြောင်းမှတ်တမ်း" }} title={{ en: "Career Timeline", my: "အသက်မွေးဝမ်းကြောင်း အချိန်ဇယား" }}>
        <TimelineBlock />
      </Section>

      {/* 20 */}
      <Section id="services" index={20} kicker={{ en: "Engagements", my: "ဝန်ဆောင်မှုများ" }} title={{ en: "Services & Rates", my: "ဝန်ဆောင်မှုနှင့် နှုန်းထား" }}>
        <ServicesBlock />
      </Section>

      {/* 21 */}
      <Section id="testimonials" index={21} kicker={{ en: "Signals", my: "အသံများ" }} title={{ en: "Client Testimonials", my: "ဖောက်သည် ထောက်ခံချက်" }}>
        <TestimonialsBlock />
      </Section>

      {/* 22 */}
      <Section id="toolbox" index={22} kicker={{ en: "Instruments", my: "ကိရိယာများ" }} title={{ en: "The Omni Toolbox", my: "Omni ကိရိယာတန်ဆာ" }}>
        <ToolboxBlock />
      </Section>

      {/* 23 */}
      <Section id="lab" index={23} kicker={{ en: "Facility", my: "ဓာတ်ခွဲခန်း" }} title={{ en: "Sphere Core Modules", my: "စက်လုံးအူတိုင် မော်ဂျူးများ" }}>
        <LabBlock />
      </Section>

      {/* 24 */}
      <Section id="trends" index={24} kicker={{ en: "Forecast", my: "ခန့်မှန်းချက်" }} title={{ en: "2026 → 2030 Aesthetics", my: "၂၀၂၆ → ၂၀၃၀ ဒီဇိုင်းလမ်းကြောင်း" }}>
        <TrendsBlock />
      </Section>

      {/* 25 */}
      <Section id="blog" index={25} kicker={{ en: "Field Notes", my: "မှတ်စုများ" }} title={{ en: "Engineering Blog", my: "အင်ဂျင်နီယာ ဆောင်းပါးများ" }}>
        <BlogBlock limit={4} />
      </Section>

      {/* 26 */}
      <Section id="faq" index={26} kicker={{ en: "Answers", my: "အဖြေများ" }} title={{ en: "Frequently Asked", my: "မေးလေ့ရှိသော မေးခွန်းများ" }}>
        <FaqBlock />
      </Section>

      {/* 27 */}
      <Section id="emails" index={27} kicker={{ en: "Channels", my: "ဆက်သွယ်ရေးလမ်းကြောင်း" }} title={{ en: "Email Vault", my: "အီးမေးလ် သိုလှောင်ခန်း" }}>
        <EmailsBlock />
      </Section>

      {/* 28 */}
      <Section id="social" index={28} kicker={{ en: "Network", my: "ကွန်ရက်" }} title={{ en: "Social Accounts", my: "လူမှုကွန်ရက် အကောင့်များ" }}>
        <SocialBlock />
      </Section>

      {/* 29 */}
      <Section id="ai" index={29} kicker={{ en: "Assistant", my: "လက်ထောက်" }} title={{ en: "Sphere AI Assistant", my: "Sphere AI လက်ထောက်" }}>
        <div className="grid gap-5 lg:grid-cols-[.55fr_.45fr]">
          <AiChat />
          <Reveal delay={120}>
            <Glass className="h-full p-6">
              <div className="text-sm font-bold text-[color:var(--ice)]">
                {lang === "my" ? "AI လက်ထောက်အကြောင်း" : "About this assistant"}
              </div>
              <p className={`mt-3 text-[13px] leading-relaxed text-[color:var(--muted)] ${lang === "my" ? "mm" : ""}`}>
                {lang === "my"
                  ? "Sphere AI သည် ဤပရိုဖိုင်၏ အချက်အလက်များအပေါ် အခြေခံပြီး မြန်မာနှင့် အင်္ဂလိပ် နှစ်ဘာသာဖြင့် အဖြေပေးပါသည်။ ANTHROPIC_API_KEY ထည့်ထားပါက Claude မော်ဒယ်ဖြင့် အလိုအလျောက် ချိတ်ဆက်အဖြေပေးမည်ဖြစ်သည်။"
                  : "Sphere AI answers from this portfolio's knowledge base in Burmese and English. When an ANTHROPIC_API_KEY is present it upgrades automatically to Claude for free-form conversation. All turns are logged to PostgreSQL via Drizzle."}
              </p>
              <div className="mt-4 space-y-2 font-mono text-[11px] text-[color:var(--muted)]">
                <div>▸ knowledge base · 10 frozen records</div>
                <div>▸ bilingual output · MY / EN</div>
                <div>▸ persistence · drizzle + postgres</div>
                <div>▸ fallback · deterministic, offline-safe</div>
              </div>
              <Link href="/ai" className="frost-btn mt-5">
                Open full console →
              </Link>
            </Glass>
          </Reveal>
        </div>
      </Section>

      {/* 30 */}
      <Section id="directory" index={30} kicker={{ en: "Site Map", my: "ဆိုက်မြေပုံ" }} title={{ en: "All 30 Pages", my: "စာမျက်နှာ ၃၀ လုံး" }}>
        <DirectoryBlock />
      </Section>
    </>
  );
}
