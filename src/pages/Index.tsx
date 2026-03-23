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
    alt: "Premium trade show booth with strong visual branding and design elements",
    kenburns: "animate-kenburns-1",
    category: "Creative Enterprise",
    categoryZh: "創意企業",
    headline: "Design, Culture, and Brand in Motion",
    headlineZh: "設計、文化與品牌動態",
    sub: "From visual identity to experiential storytelling, HSIN HSIN connects creativity with business through thoughtful design, communication, and presentation.",
    subZh: "從視覺識別到體驗式敘事，欣欣透過精心設計、傳播與呈現，將創意與商業連結在一起。",
    btn1: "Explore Our Companies",
    btn1Zh: "探索旗下企業",
    btn1Link: "/companies",
    btn2: "Our Story",
    btn2Zh: "我們的故事",
    btn2Link: "/about",
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
    alt: "Art studio with abstract fluid painting and creative supplies",
    kenburns: "animate-kenburns-3",
    category: "Art Education & Legacy",
    categoryZh: "藝術教育與傳承",
    headline: "Creative Legacy Through Art",
    headlineZh: "透過藝術延續創意傳承",
    sub: "Through artistic practice, cultural teaching, and hands-on exploration, HSIN HSIN carries creative knowledge forward into the next generation.",
    subZh: "透過藝術實踐、文化教學與動手探索，欣欣將創意知識傳遞給下一代。",
    btn1: "Explore Community & Culture",
    btn1Zh: "探索文化社區",
    btn1Link: "/community",
    btn2: "Meet the Family Story",
    btn2Zh: "認識家族故事",
    btn2Link: "/founder",
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

      {/* ═══════════ ABOUT TEASER — SPLIT LAYOUT ═══════════ */}
      <section className="py-24 md:py-36">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="label-accent mb-4">{t("About HSIN HSIN", "關於欣欣")}</p>
              <h2 className="font-display text-3xl md:text-5xl text-foreground leading-[1.1] mb-8">
                {t("A Vancouver Family Enterprise", "溫哥華家族企業")}
              </h2>
              <div className="divider-accent mb-8" />
              <p className="text-muted-foreground leading-[1.8] text-[15px] mb-6">
                {t(
                  "Founded in Vancouver, Canada in 1995, HSIN HSIN is a diversified family enterprise group spanning art craftsmanship, cultural education, event planning, lifestyle retail, and digital brand strategy. Guided by the values of professionalism, innovation, and long-term stewardship, the group continues to evolve across generations while remaining rooted in community, culture, and quality.",
                  "欣欣企業成立於 1995 年加拿大溫哥華，是一個橫跨藝術工藝、文化教育、活動策劃、生活選品與品牌數位整合的家族企業集團。集團以「專業、創新、非凡」為核心精神，結合文化、美學、創意與永續價值，持續推動品牌升級、社區連結與世代傳承。"
                )}
              </p>
              <blockquote className="border-l-2 border-accent/40 pl-6 text-foreground/80 italic font-display text-xl md:text-2xl leading-snug">
                {t(
                  "Professional · Innovative · Extraordinary — Rooted in Value.",
                  "專業・創新・非凡，為價值而生。永續經營，世代傳承。"
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


      {/* ═══════════ CTA STRIP ═══════════ */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            {t("Explore Our Latest Insights", "探索我們的最新觀點")}
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto mb-8">
            {t(
              "Perspectives on craftsmanship, culture, enterprise, and modern brand building.",
              "關於工藝、文化、企業與現代品牌建設的觀點。"
            )}
          </p>
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-accent text-[13px] font-medium tracking-[0.1em] uppercase hover:gap-3 transition-all"
          >
            {t("Read Insights", "閱讀觀點")} <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;