import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { companies } from "@/data/companies";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-craftsmanship.jpg";
import { ArrowRight, ExternalLink } from "lucide-react";

const Index = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Craftsmanship heritage" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground font-bold tracking-tight leading-tight">
            HSIN HSIN
          </h1>
          <p className="text-accent text-sm md:text-base uppercase tracking-[0.3em] mt-3 font-medium">
            {t("Family Enterprise Group", "家族企業集團")}
          </p>
          <p className="text-primary-foreground/70 mt-5 text-sm md:text-base font-light tracking-wider">
            {t(
              "Professional · Innovative · Extraordinary — Rooted in Value",
              "專業・創新・非凡——為價值而生"
            )}
          </p>
          <p className="text-primary-foreground/60 mt-6 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            {t(
              "HSIN HSIN is a Vancouver-based family enterprise group spanning craftsmanship, art education, events and public relations, lifestyle retail, and digital brand development. Rooted in heritage and guided by long-term stewardship, the group brings together creativity, quality, and community through a diversified ecosystem of businesses.",
              "欣欣是一家位於溫哥華的家族企業集團，橫跨工藝、藝術教育、活動與公共關係、生活零售及數位品牌發展。植根於傳承並以長期管理為導向，集團通過多元化的企業生態系統，將創意、品質和社區連結在一起。"
            )}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link to="/companies" className="btn-primary">
              {t("Explore Our Companies", "探索旗下企業")}
            </Link>
            <Link to="/about" className="btn-accent">
              {t("Our Story", "我們的故事")}
            </Link>
          </div>
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
                  {/* Logo Container */}
                  <div className="h-[180px] flex items-center justify-center p-2">
                    <img src={company.logo} alt={company.nameEn} className="max-h-full w-full object-contain" />
                  </div>
                  {/* Content */}
                  <div className="px-8 pb-8 flex flex-col flex-1">
                    <p className="text-accent text-[11px] uppercase tracking-[0.2em] font-semibold mb-2">
                      {t(company.categoryEn, company.categoryZh)}
                    </p>
                    <h3 className="font-display text-lg text-foreground mb-1">
                      {t(company.nameEn, company.nameZh)}
                    </h3>
                    <p className="text-muted-foreground/50 text-xs mb-3 italic">
                      {t(company.taglineEn, company.taglineZh)}
                    </p>
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
