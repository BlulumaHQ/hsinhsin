import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { companies } from "@/data/companies";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { ArrowRight, ExternalLink } from "lucide-react";

import heroSlide1 from "@/assets/hero-slide-1-new.webp";
import heroSlide2 from "@/assets/hero-slide-2-new.webp";
import heroSlide3 from "@/assets/hero-slide-3-new.webp";
import sectionCraftsmanship from "@/assets/section-craftsmanship.webp";
import sectionCulture from "@/assets/section-culture.webp";
import sectionLifestyle from "@/assets/section-lifestyle.webp";
import sectionCreative from "@/assets/section-creative.webp";

const slides = [
  {
    img: heroSlide1,
    alt: "HSIN HSIN — a multi-sector platform integrating craftsmanship, culture, and lifestyle",
    kenburns: "animate-kenburns-1",
    category: "HSIN HSIN HOLDINGS LTD.",
    categoryZh: "欣欣控股有限公司",
    headline: "Building Platforms That Create Lasting Value",
    headlineZh: "打造能創造長期價值的商業平台",
    sub: "A multi-sector platform integrating craftsmanship, culture, brand strategy, and lifestyle businesses.",
    subZh: "一個融合工藝、文化、品牌策略與生活方式的多元整合平台。",
    btn1: "Partner With Us",
    btn1Zh: "合作發展",
    btn1Link: "/contact",
    btn2: "Our Ecosystem",
    btn2Zh: "我們的生態系統",
    btn2Link: "/companies",
  },
  {
    img: heroSlide2,
    alt: "Traditional custom picture framing workshop with heritage craftsmanship tools",
    kenburns: "animate-kenburns-2",
    category: "Craftsmanship Heritage",
    categoryZh: "工藝傳承",
    headline: "Craftsmanship Rooted in Heritage",
    headlineZh: "植根於傳承的工藝精神",
    sub: "Built on decades of material knowledge, presentation expertise, and dedication to quality, our craftsmanship continues to shape lasting value across generations.",
    subZh: "奠基於數十年的材料知識、呈現專業與對品質的執著，我們的工藝持續塑造跨世代的長久價值。",
    btn1: "Discover Our Heritage",
    btn1Zh: "探索我們的傳承",
    btn1Link: "/founder",
    btn2: "View Our Companies",
    btn2Zh: "查看旗下企業",
    btn2Link: "/companies",
  },
  {
    img: heroSlide3,
    alt: "Vancouver skyline with mountains at golden hour — rooted locally, connected globally",
    kenburns: "animate-kenburns-3",
    category: "Global Vision",
    categoryZh: "全球視野",
    headline: "Vancouver Rooted, Globally Connected",
    headlineZh: "根植溫哥華，連結世界",
    sub: "Founded in Vancouver in 1995, HSIN HSIN has grown from local craftsmanship roots into a multi-sector platform with international reach and lasting impact.",
    subZh: "欣欣於1995年在溫哥華創立，從本地工藝根基發展為具有國際影響力與長遠價值的多元平台。",
    btn1: "Our Story",
    btn1Zh: "我們的故事",
    btn1Link: "/about",
    btn2: "Our Ecosystem",
    btn2Zh: "生態系統",
    btn2Link: "/companies",
  },
];

const sectionImages: Record<string, string> = {
  "Craftsmanship": sectionCraftsmanship,
  "Culture": sectionCulture,
  "Lifestyle": sectionLifestyle,
  "Creative": sectionCreative,
};

const Index = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);

  useEffect(() => {
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, [next]);

  const slide = slides[current];

  return (
    <Layout>
      <SEO
        title="HSIN HSIN | Vancouver Family Enterprise Group"
        description="HSIN HSIN is a Vancouver-based family enterprise connecting craftsmanship, art education, cultural events, lifestyle brands, and digital design through a multi-generational business ecosystem."
        path="/"
      />
      <StructuredData />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative h-screen min-h-[600px] max-h-[1000px] flex items-center overflow-hidden">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={s.img}
              alt={s.alt}
              className={`absolute inset-0 w-full h-full object-cover ${s.kenburns}`}
            />
          </div>
        ))}
        <div className="absolute inset-0 hero-slide-overlay" />

        {/* Text block */}
        <div className="relative z-10 section-container w-full">
          <div className="max-w-2xl">
            <p className="label-accent text-accent/80 mb-4 drop-shadow">
              {t(slide.category, slide.categoryZh)}
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground font-medium leading-[1.05] tracking-tight drop-shadow-lg transition-all duration-700">
              {t(slide.headline, slide.headlineZh)}
            </h1>
            <p className="text-primary-foreground/60 mt-6 text-sm md:text-[15px] leading-relaxed max-w-lg font-light drop-shadow transition-all duration-700">
              {t(slide.sub, slide.subZh)}
            </p>
            <div className="flex items-center gap-4 mt-10">
              <button
                onClick={() => { navigate(slide.btn1Link); window.scrollTo(0, 0); }}
                className="btn-primary bg-accent text-accent-foreground hover:bg-warm-dark"
              >
                {t(slide.btn1, slide.btn1Zh)}
              </button>
              <button
                onClick={() => { navigate(slide.btn2Link); window.scrollTo(0, 0); }}
                className="btn-outline text-primary-foreground/70 border-primary-foreground/20 hover:text-primary-foreground hover:border-primary-foreground/40"
              >
                {t(slide.btn2, slide.btn2Zh)}
              </button>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-10 left-0 right-0 z-10">
          <div className="section-container flex items-center gap-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-500 ${
                  i === current
                    ? "w-12 h-[2px] bg-accent"
                    : "w-6 h-[1px] bg-primary-foreground/25 hover:bg-primary-foreground/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
            <span className="text-primary-foreground/20 text-[11px] tracking-widest font-light ml-auto">
              {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════ BRAND POSITIONING ═══════════ */}
      <section className="py-24 md:py-36">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-5">
              <p className="label-accent mb-4">{t("Brand Positioning", "品牌定位")}</p>
              <h2 className="font-display text-3xl md:text-5xl text-foreground leading-[1.1] mb-6">
                {t("Professional · Innovative · Exceptional", "專業・創新・非凡")}
              </h2>
              <p className="font-display text-xl md:text-2xl text-accent italic mb-8">
                {t("Born for Value", "為價值而生")}
              </p>
              <div className="divider-accent mb-8" />
            </div>
            <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-[1.9] text-[15px]">
              <p>
                {t(
                  "Founded in 1995, HSIN HSIN HOLDINGS LTD. has evolved into a multi-sector platform integrating craftsmanship, culture, brand strategy, and lifestyle businesses.",
                  "自 1995 年創立以來，欣欣控股已發展為一個融合工藝、文化、品牌策略與生活方式的多元整合平台。"
                )}
              </p>
              <div className="border-l-2 border-accent/40 pl-6 space-y-2 text-foreground/80">
                <p className="font-display text-lg md:text-xl leading-snug">
                  {t("We are not a single-industry company.", "我們不是單一產業公司。")}
                </p>
                <p className="font-display text-lg md:text-xl leading-snug">
                  {t(
                    "What we are building is a sustainable value system and platform architecture.",
                    "我們在建立的是：一個可持續運作的「價值系統」與「平台架構」。"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CORE PHILOSOPHY ═══════════ */}
      <section className="bg-secondary py-24 md:py-36">
        <div className="section-container">
          <div className="max-w-3xl mb-16">
            <p className="label-accent mb-4">{t("Core Philosophy", "核心理念")}</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground leading-[1.1] mb-8">
              {t(
                "Business is not only about scale — but about long-term value creation.",
                "企業的本質，不只是成長，而是能否創造長期價值與社會影響力。"
              )}
            </h2>
            <div className="divider-accent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {[
              { en: "Professionalism builds trust", zh: "專業建立信任" },
              { en: "Brand amplifies value", zh: "品牌放大價值" },
              { en: "Structure determines scale", zh: "結構決定規模" },
            ].map((item, i) => (
              <div key={i} className="bg-secondary p-10">
                <p className="text-accent font-display text-3xl mb-4">0{i + 1}</p>
                <p className="font-display text-xl text-foreground leading-snug">{t(item.en, item.zh)}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            <p className="font-display text-2xl md:text-3xl text-foreground italic">
              {t("Structure creates scale.", "結構決定規模。")}
            </p>
            <p className="font-display text-2xl md:text-3xl text-foreground italic">
              {t("Trust creates longevity.", "信任成就永續。")}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ ABOUT TEASER — SPLIT LAYOUT ═══════════ */}
      <section className="py-24 md:py-36">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="label-accent mb-4">{t("About HSIN HSIN", "關於欣欣")}</p>
              <h2 className="font-display text-3xl md:text-5xl text-foreground leading-[1.1] mb-8">
                {t("A Vancouver Family Enterprise Platform", "溫哥華家族企業平台")}
              </h2>
              <div className="divider-accent mb-8" />
              <p className="text-muted-foreground leading-[1.8] text-[15px] mb-6">
                {t(
                  "Founded in Vancouver in 1995, HSIN HSIN has evolved from a craftsmanship studio into a multi-layered platform integrating craftsmanship, culture, capital, brand systems, and the lifestyle economy. We don't build projects — we build platforms that scale.",
                  "欣欣於 1995 年在溫哥華創立，從工藝工作室發展為融合工藝、文化、資本、品牌系統與生活方式經濟的多層次平台。我們不做單一項目，我們打造可持續放大的平台。"
                )}
              </p>
              <blockquote className="border-l-2 border-accent/40 pl-6 text-foreground/80 italic font-display text-xl md:text-2xl leading-snug">
                {t(
                  "Professional · Innovative · Extraordinary — Rooted in Value.",
                  "專業・創新・非凡，為價值而生。"
                )}
              </blockquote>
              <div className="mt-10">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-accent text-[13px] font-medium tracking-[0.1em] uppercase hover:gap-3 transition-all"
                >
                  {t("Learn more about us", "了解更多")} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={sectionCraftsmanship}
                  alt="Heritage craftsmanship frames and materials"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-28 h-28 border-2 border-accent/20 hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ ECOSYSTEM SECTION ═══════════ */}
      <section className="bg-primary text-primary-foreground py-24 md:py-36">
        <div className="section-container">
          <div className="max-w-2xl mb-20">
            <p className="label-accent text-accent/70 mb-4">{t("Our Portfolio", "企業版圖")}</p>
            <h2 className="font-display text-3xl md:text-5xl text-primary-foreground leading-[1.1] mb-8">
              {t("Our Ecosystem", "我們的生態系統")}
            </h2>
            <div className="w-12 h-[1.5px] bg-accent/50 mb-8" />
            <p className="text-primary-foreground/50 leading-[1.8] text-[15px]">
              {t(
                "HSIN HSIN is a multi-generational family enterprise connecting craftsmanship, culture, lifestyle, creative industries, and digital innovation. Each company operates independently while contributing to a shared ecosystem rooted in quality, creativity, and long-term value.",
                "欣欣是一家多代家族企業，連結工藝、文化、生活、創意產業與數位創新。每家公司獨立運營，同時為一個植根於品質、創意和長期價值的共享生態系統做出貢獻。"
              )}
            </p>
          </div>

          {/* Company grid — staggered */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-primary-foreground/5">
            {companies.map((company, i) => {
              const sectionImg = sectionImages[company.categoryEn];
              
              const card = (
                <article
                  key={company.id}
                  className="bg-primary p-8 md:p-10 group hover:bg-earth-light/30 transition-colors duration-500 flex flex-col h-full"
                >
                  <p className="text-accent/60 text-[10px] uppercase tracking-[0.3em] font-sans font-semibold mb-3">
                    {t(company.categoryEn, company.categoryZh)}
                  </p>
                  <h3 className="font-display text-xl md:text-2xl text-primary-foreground mb-6 leading-snug">
                    {t(company.nameEn, company.nameZh)}
                  </h3>

                  {/* Logo panel */}
                  <div className="bg-primary-foreground/5 w-full h-[180px] flex items-center justify-center mb-6 overflow-hidden">
                    <img
                      src={company.logo}
                      alt={`${company.nameEn} logo`}
                      className="w-[88%] h-[80%] object-contain"
                    />
                  </div>

                  <p className="text-primary-foreground/40 text-sm leading-relaxed flex-1 mb-6">
                    {t(company.descEn, company.descZh)}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-accent/70 text-[12px] font-medium tracking-[0.1em] uppercase group-hover:gap-2.5 group-hover:text-accent transition-all">
                    {company.external ? (
                      <>{t("Visit Website", "訪問網站")} <ExternalLink size={12} /></>
                    ) : (
                      <>{t("Learn More", "了解更多")} <ArrowRight size={12} /></>
                    )}
                  </span>
                </article>
              );

              if (company.external) {
                return (
                  <a key={company.id} href={company.external} target="_blank" rel="noopener noreferrer">
                    {card}
                  </a>
                );
              }
              return (
                <Link key={company.id} to={`/companies/${company.id}`}>
                  {card}
                </Link>
              );
            })}
          </div>
        </div>
      </section>


      {/* ═══════════ STRATEGIC POSITIONING ═══════════ */}
      <section className="py-24 md:py-36 bg-secondary">
        <div className="section-container">
          <div className="max-w-3xl mb-16">
            <p className="label-accent mb-4">{t("Strategic Positioning", "策略定位")}</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground leading-[1.1] mb-8">
              {t(
                "HSIN HSIN is not a traditional company — we are a multi-layered platform.",
                "欣欣不是一家傳統公司——我們是一個多層次的整合平台。"
              )}
            </h2>
            <div className="divider-accent" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border mb-16">
            {[
              { en: "Craftsmanship", zh: "工藝" },
              { en: "Culture", zh: "文化" },
              { en: "Capital", zh: "資本" },
              { en: "Brand Systems", zh: "品牌系統" },
              { en: "Lifestyle Economy", zh: "生活方式經濟" },
            ].map((p, i) => (
              <div key={i} className="bg-secondary p-8 text-center">
                <p className="text-accent font-display text-2xl mb-3">0{i + 1}</p>
                <p className="font-display text-base md:text-lg text-foreground leading-snug">{t(p.en, p.zh)}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl">
            <p className="font-display text-3xl md:text-4xl text-foreground leading-tight mb-3">
              {t("We don't build projects.", "我們不做單一項目。")}
            </p>
            <p className="font-display text-3xl md:text-4xl text-accent italic leading-tight">
              {t("We build platforms that scale.", "我們打造可持續放大的平台。")}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ CEO TEASER ═══════════ */}
      <section className="bg-primary text-primary-foreground py-24 md:py-36">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <p className="label-accent text-accent/70 mb-4">{t("CEO Profile", "執行長")}</p>
              <h2 className="font-display text-4xl md:text-5xl text-primary-foreground leading-[1.05] mb-4">
                Emily Lin
              </h2>
              <p className="font-display text-2xl text-accent/80 italic mb-6">林欣怡</p>
              <p className="text-primary-foreground/60 text-sm uppercase tracking-[0.2em] font-medium mb-8">
                {t(
                  "Building Platforms that Connect Culture, Business and Legacy",
                  "連結文化、商業與傳承的平台建構者"
                )}
              </p>
              <div className="w-12 h-[1.5px] bg-accent/50 mb-8" />
              <ul className="space-y-2 text-primary-foreground/50 text-sm">
                <li>● {t("CEO · HSIN HSIN HOLDINGS", "執行長 · 欣欣控股")}</li>
                <li>● {t("President · HH Nexus Capital", "總裁 · 衡寰國際資本")}</li>
              </ul>
            </div>
            <div className="lg:col-span-7 space-y-5 text-primary-foreground/55 leading-[1.9] text-[15px]">
              <p>
                {t(
                  "A cross-disciplinary value architect with a background spanning luxury brands — Maison Birks, Van Cleef & Arpels, and Tiffany & Co. — high-end client relationship management, and the long-term cultivation of brand trust.",
                  "跨界時代的價值建築者，背景橫跨國際精品品牌——Maison Birks、梵克雅寶與 Tiffany & Co.——高端客戶關係管理與品牌長期信任的建立。"
                )}
              </p>
              <blockquote className="border-l-2 border-accent/50 pl-6 font-display italic text-xl md:text-2xl text-primary-foreground/90 leading-snug">
                {t(
                  "“Success only matters when it is transformed into lasting value.”",
                  "「成功，只有轉化為長期價值，才有意義。」"
                )}
              </blockquote>
              <div className="pt-4">
                <Link
                  to="/founder"
                  className="inline-flex items-center gap-2 text-accent text-[13px] font-medium tracking-[0.1em] uppercase hover:gap-3 transition-all"
                >
                  {t("Read full biography", "閱讀完整簡介")} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ IMPACT & VISION ═══════════ */}
      <section className="py-24 md:py-36">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <p className="label-accent mb-4">{t("Impact & Vision", "影響力與願景")}</p>
              <h2 className="font-display text-3xl md:text-5xl text-foreground leading-[1.1] mb-8">
                {t("A platform validated by time", "一個能被時間驗證的價值系統")}
              </h2>
              <div className="divider-accent mb-8" />
              <p className="text-muted-foreground leading-[1.9] text-[15px]">
                {t(
                  "We aim to build not just a company, but a value system that endures — measured not by quarters, but by generations.",
                  "我們希望建立的不只是企業，而是一個能被時間驗證的價值系統——不以季度衡量，而以世代為單位。"
                )}
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-px bg-border">
                {[
                  { en: "Connects business and culture", zh: "連結商業與文化" },
                  { en: "Elevates lifestyle standards", zh: "提升生活方式標準" },
                  { en: "Creates long-term brand equity", zh: "創造長期品牌價值" },
                  { en: "Generates sustainable social impact", zh: "產生永續的社會影響力" },
                ].map((v, i) => (
                  <li key={i} className="bg-background flex items-start gap-6 py-6 px-2">
                    <span className="text-accent font-display text-xl w-10 flex-shrink-0">0{i + 1}</span>
                    <span className="font-display text-xl md:text-2xl text-foreground leading-snug">
                      {t(v.en, v.zh)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ BRAND STATEMENT ═══════════ */}
      <section className="bg-primary text-primary-foreground py-28 md:py-40">
        <div className="section-container text-center max-w-4xl mx-auto">
          <p className="label-accent text-accent/70 mb-8">{t("Brand Statement", "品牌宣言")}</p>
          <p className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground leading-[1.15] mb-6">
            {t(
              "A platform where craftsmanship meets culture, and business becomes lasting value.",
              "在工藝與文化之間，讓商業成為可以被時間留下的價值。"
            )}
          </p>
        </div>
      </section>

      {/* ═══════════ CTA STRIP ═══════════ */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            {t("Partner With Us", "合作發展")}
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto mb-8">
            {t(
              "Explore collaboration, investment, and strategic partnership opportunities across our platform.",
              "探索跨平台的合作、投資與策略夥伴關係機會。"
            )}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-accent text-[13px] font-medium tracking-[0.1em] uppercase hover:gap-3 transition-all"
          >
            {t("Get in touch", "聯絡我們")} <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;