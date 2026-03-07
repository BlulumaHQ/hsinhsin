import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { companies } from "@/data/companies";
import { ArrowRight } from "lucide-react";

const Companies = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <PageHero
        title={t("Our Companies", "旗下企業")}
        subtitle={t("A diverse portfolio rooted in heritage and creativity", "植根於傳承和創意的多元化企業組合")}
      />
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="space-y-12">
            {companies.map((company, i) => {
              const content = (
                <div className="flex flex-col md:flex-row items-center gap-8 group">
                  <div className="w-full md:w-1/3 flex justify-center">
                    <div className="bg-secondary rounded-lg p-8 w-full flex items-center justify-center min-h-[160px]">
                      <img src={company.logo} alt={company.nameEn} className="max-h-24 max-w-[200px] object-contain" />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <p className="text-accent text-xs uppercase tracking-widest font-medium mb-1">
                      {t(company.industryEn, company.industryZh)}
                    </p>
                    <h3 className="font-display text-xl md:text-2xl text-foreground mb-3">
                      {t(company.nameEn, company.nameZh)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {t(company.descEn, company.descZh)}
                    </p>
                    {company.location && (
                      <p className="text-muted-foreground/60 text-sm mb-3">{company.location}</p>
                    )}
                    <span className="inline-flex items-center gap-1 text-accent text-sm font-medium group-hover:gap-2 transition-all">
                      {t("View Details", "查看詳情")} <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              );

              const wrapper = company.external ? (
                <a key={company.id} href={company.external} target="_blank" rel="noopener noreferrer" className="block border-b border-border pb-12 last:border-0">
                  {content}
                </a>
              ) : (
                <Link key={company.id} to={`/companies/${company.id}`} className="block border-b border-border pb-12 last:border-0">
                  {content}
                </Link>
              );

              return wrapper;
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Companies;
