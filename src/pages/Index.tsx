import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { companies } from "@/data/companies";
import Layout from "@/components/Layout";
import { ArrowRight, ExternalLink } from "lucide-react";

import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  {
    img: heroSlide1,
    kenburns: "animate-kenburns-1",
    headline: "Design, Branding, and Modern Visibility",
    headlineZh: "設計、品牌與現代能見度",
    sub: "From digital presence to experiential storytelling, HSIN HSIN connects creative strategy with real-world brand expression.",
    subZh: "從數位形象到體驗式敘事，欣欣將創意策略與真實品牌表達連結在一起。",
  },
  {
    img: heroSlide2,
    kenburns: "animate-kenburns-2",
    headline: "Craftsmanship Rooted in Heritage",
    headlineZh: "植根於傳承的工藝精神",
    sub: "Built on decades of framing expertise, material knowledge, and aesthetic precision, our foundation begins with the art of making.",
    subZh: "奠基於數十年的裝裱專業、材料知識與美學精準，我們的根基始於創造的藝術。",
  },
  {
    img: heroSlide3,
    kenburns: "animate-kenburns-3",
    headline: "Teaching Creativity Across Generations",
    headlineZh: "跨世代的創意傳承",
    sub: "Through artistic mentorship and hands-on cultural learning, HSIN HSIN carries creative knowledge forward for the next generation.",
    subZh: "透過藝術指導與文化實踐學習，欣欣將創意知識傳遞給下一代。",
  },
];

const Index = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <Layout>
      {/* Hero Slider */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.img}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover ${slide.kenburns}`}
            />
          </div>
        ))}
        <div className="absolute inset-0 hero-slide-overlay" />
        <div className="relative z-10 px-6 sm:px-12 lg:px-20 max-w-3xl">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground font-bold tracking-tight leading-none drop-shadow-lg">
            HSIN HSIN
          </h1>
          <p className="text-accent text-xs md:text-sm uppercase tracking-[0.35em] mt-3 font-semibold drop-shadow">
            {t("Family Enterprise Group", "家族企業集團")}
          </p>

          {/* Slide-specific headline */}
          <h2 className="font-display text-xl md:text-2xl lg:text-3xl text-primary-foreground font-semibold mt-8 leading-snug drop-shadow-md transition-all duration-700">
            {t(slides[current].headline, slides[current].headlineZh)}
          </h2>
          <p className="text-primary-foreground/75 mt-3 text-sm md:text-base leading-relaxed max-w-xl drop-shadow transition-all duration-700">
            {t(slides[current].sub, slides[current].subZh)}
          </p>

          <p className="text-primary-foreground/60 mt-6 text-xs md:text-sm tracking-wider font-light drop-shadow">
            {t(
              "Professional · Innovative · Extraordinary — Rooted in Value",
              "專業・創新・非凡——為價值而生"
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 mt-8">
            <button onClick={() => { navigate("/companies"); window.scrollTo(0, 0); }} className="btn-primary">
              {t("Explore Our Companies", "探索旗下企業")}
            </button>
            <button onClick={() => { navigate("/about"); window.scrollTo(0, 0); }} className="btn-accent !text-primary-foreground !border-primary-foreground/40 hover:!bg-primary-foreground/10">
              {t("Our Story", "我們的故事")}
            </button>
          </div>
        </div>
        {/* Slide indicators */}
        <div className="absolute bottom-8 left-6 sm:left-12 lg:left-20 z-10 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current ? "bg-accent w-8" : "bg-primary-foreground/40"
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Overview */}
      <section className="py-16 md:py-24">
        <div className="section-container max-w-3xl text-center">
          <p className="text-accent text-xs uppercase tracking-widest font-medium mb-3">
            {t("About HSIN HSIN", "關於欣欣")}
          </p>
          <h2 className="font-display text-2xl md:text-4xl text-foreground mb-6">
            {t("About HSIN HSIN", "關於欣欣")}
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-8" />
          <p className="text-muted-foreground leading-relaxed mb-8">
            {t(
              "Founded in Vancouver in 1995, HSIN HSIN is a diversified family enterprise group spanning art craftsmanship, cultural education, event planning, lifestyle retail, and digital brand strategy. Guided by the values of professionalism, innovation, and long-term stewardship, the group continues to evolve across generations while remaining rooted in community, culture, and quality.",
              "欣欣企業成立於 1995 年加拿大溫哥華，是一個橫跨藝術工藝、文化教育、活動策劃、生活選品與品牌數位整合的家族企業集團。集團以「專業、創新、非凡」為核心精神，結合文化、美學、創意與永續價值，持續推動品牌升級、社區連結與世代傳承。"
            )}
          </p>
          <blockquote className="border-l-2 border-accent pl-6 text-foreground italic font-display text-lg md:text-xl">
            {t(
              "Professional · Innovative · Extraordinary — Rooted in Value.",
              "專業・創新・非凡，為價值而生。永續經營，世代傳承。"
            )}
          </blockquote>
        </div>
      </section>

      {/* Our Ecosystem Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="section-container">
          {/* Ecosystem Intro */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-accent text-xs uppercase tracking-widest font-medium mb-3">
              {t("Our Portfolio", "企業版圖")}
            </p>
            <h2 className="font-display text-2xl md:text-4xl text-foreground mb-6">
              {t("Our Ecosystem", "我們的生態系統")}
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t(
                "HSIN HSIN is a multi-generational family enterprise connecting craftsmanship, culture, lifestyle, creative industries, and digital innovation.",
                "欣欣是一家多代家族企業，連結工藝、文化、生活、創意產業與數位創新。"
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t(
                "Through a portfolio of specialized companies, the group brings together heritage craftsmanship, cultural education, curated experiences, and modern brand development.",
                "透過一系列專業公司，集團匯聚傳統工藝、文化教育、策劃體驗與現代品牌發展。"
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                "Each company operates independently while contributing to a shared ecosystem rooted in quality, creativity, and long-term value.",
                "每家公司獨立運營，同時為一個植根於品質、創意和長期價值的共享生態系統做出貢獻。"
              )}
            </p>
          </div>

          {/* Company Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company) => {
              const inner = (
                <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full group">
                  {/* Category */}
                  <div className="px-8 pt-6">
                    <p className="text-accent text-[11px] uppercase tracking-[0.2em] font-semibold">
                      {t(company.categoryEn, company.categoryZh)}
                    </p>
                  </div>
                  {/* Company Name */}
                  <div className="px-8 pt-2 pb-1">
                    <h3 className="font-display text-lg text-foreground">
                      {t(company.nameEn, company.nameZh)}
                    </h3>
                  </div>
                  {/* Logo Container - premium brand panel */}
                  <div className="h-[180px] flex items-center justify-center pt-[18px] pb-[18px] px-[12px]">
                    <img
                      src={company.logo}
                      alt={company.nameEn}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Content */}
                  <div className="px-8 pb-8 flex flex-col flex-1">
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {t(company.descEn, company.descZh)}
                    </p>
                    <div className="mt-5 flex items-center gap-1 text-accent text-sm font-medium group-hover:gap-2 transition-all">
                      {company.external ? (
                        <>
                          {t("Visit Website", "訪問網站")} <ExternalLink size={14} />
                        </>
                      ) : (
                        <>
                          {t("Learn More", "了解更多")} <ArrowRight size={14} />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );

              if (company.external) {
                return (
                  <a key={company.id} href={company.external} target="_blank" rel="noopener noreferrer">
                    {inner}
                  </a>
                );
              }
              return (
                <Link key={company.id} to={`/companies/${company.id}`}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
