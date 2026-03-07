import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { companies } from "@/data/companies";
import PageHero from "@/components/PageHero";
import Layout from "@/components/Layout";
import skylineImg from "@/assets/vancouver-skyline.jpg";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <img src={skylineImg} alt="Vancouver skyline" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground font-bold tracking-tight leading-tight">
            HSIN HSIN
          </h1>
          <p className="text-accent text-sm md:text-base uppercase tracking-[0.3em] mt-3 font-medium">
            {t("Family Enterprise Group", "家族企業集團")}
          </p>
          <p className="text-primary-foreground/70 mt-6 text-base md:text-lg font-light italic">
            {t(
              "Craftsmanship, Culture, and Entrepreneurship Across Generations",
              "跨世代的工藝、文化與創業精神"
            )}
          </p>
          <p className="text-primary-foreground/60 mt-6 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            {t(
              "HSIN HSIN is a Vancouver-based family enterprise connecting craftsmanship, creative industries, and entrepreneurial platforms. From traditional craftsmanship to cultural education, lifestyle hospitality, and digital brand development, the group supports a diverse ecosystem of companies rooted in heritage, creativity, and long-term stewardship.",
              "欣欣是一家位於溫哥華的家族企業，連結工藝、創意產業和創業平台。從傳統工藝到文化教育、生活方式餐旅和數位品牌發展，集團支持一個植根於傳承、創意和長期管理的多元企業生態系統。"
            )}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link to="/companies" className="btn-primary">
              {t("Explore Our Companies", "探索旗下企業")}
            </Link>
            <Link to="/about" className="btn-accent">
              {t("Learn Our Story", "了解我們的故事")}
            </Link>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="section-container">
          <h2 className="font-display text-2xl md:text-4xl text-center text-foreground mb-3">
            {t("Our Companies", "旗下企業")}
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company) => {
              const inner = (
                <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full group">
                  <div className="h-20 flex items-center justify-center mb-5">
                    <img src={company.logo} alt={company.nameEn} className="max-h-16 max-w-[160px] object-contain" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">
                    {t(company.nameEn, company.nameZh)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {t(company.descEn, company.descZh)}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-accent text-sm font-medium group-hover:gap-2 transition-all">
                    {t("Learn More", "了解更多")} <ArrowRight size={14} />
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

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="section-container text-center max-w-3xl">
          <h2 className="font-display text-2xl md:text-4xl text-foreground mb-3">
            {t("Heritage. Creativity. Stewardship.", "傳承。創意。管理。")}
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-8" />
          <p className="text-muted-foreground leading-relaxed">
            {t(
              "Through responsible leadership and continuous innovation, HSIN HSIN has evolved into a connected ecosystem supporting creativity, culture, and community across Vancouver and beyond.",
              "透過負責任的領導和持續創新，欣欣已發展成為一個支持溫哥華及更廣泛地區創意、文化和社區的互聯生態系統。"
            )}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
