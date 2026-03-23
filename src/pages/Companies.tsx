import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { companies } from "@/data/companies";
import { ArrowRight, ExternalLink } from "lucide-react";

const ecosystemCategories = [
  { en: "Craftsmanship", zh: "工藝" },
  { en: "Culture", zh: "文化" },
  { en: "Creative", zh: "創意" },
  { en: "Lifestyle", zh: "生活" },
  { en: "Digital", zh: "數位" },
];

const Companies = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <SEO
        title="Our Companies | HSIN HSIN Business Ecosystem"
        description="Explore the HSIN HSIN business ecosystem — a diversified portfolio of companies spanning craftsmanship, art education, cultural events, lifestyle brands, and digital design in Vancouver, Canada."
        path="/companies"
      />

      <PageHero
        title={t("Our Companies", "旗下企業")}
        subtitle={t(
          "A diversified ecosystem rooted in heritage, creativity, and community",
          "植根於傳承、創意和社區的多元化生態系統"
        )}
      />

      {/* Intro */}
      <section className="py-24 md:py-32">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="label-accent mb-4">{t("Brand Architecture", "品牌架構")}</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground leading-[1.1] mb-8">
              {t("Our Ecosystem", "我們的生態系統")}
            </h2>
            <div className="divider-accent mb-8" />
            <div className="space-y-4 text-muted-foreground leading-[1.8] text-[15px]">
              <p>
                {t(
                  "HSIN HSIN is a multi-generational family enterprise connecting craftsmanship, culture, lifestyle, creative industries, and digital innovation.",
                  "欣欣是一家多代家族企業，連結工藝、文化、生活、創意產業與數位創新。"
                )}
              </p>
              <p>
                {t(
                  "Through a portfolio of specialized companies, the group brings together heritage craftsmanship, cultural education, curated experiences, and modern brand development.",
                  "透過一系列專業公司，集團匯聚傳統工藝、文化教育、策劃體驗與現代品牌發展。"
                )}
              </p>
              <p>
                {t(
                  "Each company operates independently while contributing to a shared ecosystem rooted in quality, creativity, and long-term value.",
                  "每家公司獨立運營，同時為一個植根於品質、創意和長期價值的共享生態系統做出貢獻。"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Companies by Category */}
      <section className="pb-24 md:pb-36">
        <div className="section-container">
          {ecosystemCategories.map((category) => {
            const categoryCompanies = companies.filter(
              (c) => c.categoryEn === category.en
            );
            if (categoryCompanies.length === 0) return null;

            return (
              <div key={category.en} className="mb-24 last:mb-0">
                <div className="flex items-center gap-6 mb-12">
                  <h3 className="font-display text-2xl md:text-3xl text-foreground whitespace-nowrap">
                    {t(category.en, category.zh)}
                  </h3>
                  <div className="flex-1 h-px bg-border" />
                </div>

                {categoryCompanies.map((company) => {
                  const content = (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center group">
                      <div className="lg:col-span-4">
                        <div className="bg-secondary w-full h-[220px] flex items-center justify-center overflow-hidden">
                          <img
                            src={company.logo}
                            alt={`${company.nameEn} logo`}
                            className="w-[85%] h-[75%] object-contain"
                          />
                        </div>
                      </div>
                      <div className="lg:col-span-8">
                        <p className="label-accent mb-2">
                          {t(company.categoryEn, company.categoryZh)}
                        </p>
                        <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2 leading-snug">
                          {t(company.nameEn, company.nameZh)}
                        </h3>
                        <p className="text-muted-foreground/40 text-xs mb-4 italic font-display text-lg">
                          {t(company.taglineEn, company.taglineZh)}
                        </p>
                        <p className="text-muted-foreground leading-[1.8] text-[15px] mb-6 max-w-xl">
                          {t(company.descEn, company.descZh)}
                        </p>
                        <span className="inline-flex items-center gap-1.5 text-accent text-[12px] font-medium tracking-[0.1em] uppercase group-hover:gap-3 transition-all">
                          {company.external ? (
                            <>{t("Visit Website", "訪問網站")} <ExternalLink size={13} /></>
                          ) : (
                            <>{t("Learn More", "了解更多")} <ArrowRight size={13} /></>
                          )}
                        </span>
                      </div>
                    </div>
                  );

                  return company.external ? (
                    <a
                      key={company.id}
                      href={company.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block border-b border-border/50 pb-12 mb-12 last:border-0 last:pb-0 last:mb-0"
                    >
                      {content}
                    </a>
                  ) : (
                    <Link
                      key={company.id}
                      to={`/companies/${company.id}`}
                      className="block border-b border-border/50 pb-12 mb-12 last:border-0 last:pb-0 last:mb-0"
                    >
                      {content}
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-20">
        <div className="section-container text-center">
          <Link to="/insights" className="inline-flex items-center gap-2 text-accent text-[13px] font-medium tracking-[0.1em] uppercase hover:gap-3 transition-all">
            {t("Read insights on craftsmanship and enterprise", "閱讀工藝與企業觀點")} <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Companies;