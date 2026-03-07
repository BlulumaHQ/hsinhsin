import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { companies } from "@/data/companies";
import { ArrowRight, ExternalLink } from "lucide-react";

const Companies = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <PageHero
        title={t("Our Companies", "旗下企業")}
        subtitle={t("A diversified ecosystem rooted in heritage, creativity, and community", "植根於傳承、創意和社區的多元化生態系統")}
      />
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="space-y-16">
            {companies.map((company) => {
              const content = (
                <div className="flex flex-col md:flex-row items-center gap-10 group">
                  <div className="w-full md:w-1/3 flex justify-center">
                    <div className="bg-secondary rounded-lg p-10 w-full flex items-center justify-center min-h-[240px]">
                      <img src={company.logo} alt={company.nameEn} className="max-h-44 max-w-[320px] w-auto object-contain" />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <p className="text-accent text-xs uppercase tracking-widest font-medium mb-1">
                      {t(company.taglineEn, company.taglineZh)}
                    </p>
                    <h3 className="font-display text-xl md:text-2xl text-foreground mb-2">
                      {t(company.nameEn, company.nameZh)}
                    </h3>
                    <p className="text-muted-foreground/60 text-sm mb-3">
                      {t(company.industryEn, company.industryZh)}
                      {company.location && ` · ${company.location}`}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-5">
                      {t(company.descEn, company.descZh)}
                    </p>
                    <span className="inline-flex items-center gap-1 text-accent text-sm font-medium group-hover:gap-2 transition-all">
                      {company.external ? (
                        <>
                          {t("Visit Website", "訪問網站")} <ExternalLink size={14} />
                        </>
                      ) : (
                        <>
                          {t("Learn More", "了解更多")} <ArrowRight size={14} />
                        </>
                      )}
                    </span>
                  </div>
                </div>
              );

              return company.external ? (
                <a key={company.id} href={company.external} target="_blank" rel="noopener noreferrer" className="block border-b border-border pb-16 last:border-0">
                  {content}
                </a>
              ) : (
                <Link key={company.id} to={`/companies/${company.id}`} className="block border-b border-border pb-16 last:border-0">
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Companies;
