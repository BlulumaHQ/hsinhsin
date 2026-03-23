import { useParams, Navigate, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { companies } from "@/data/companies";
import { ArrowLeft, CheckCircle } from "lucide-react";

const CompanyDetail = () => {
  const { id } = useParams();
  const { t } = useLanguage();
  const company = companies.find((c) => c.id === id);

  if (!company) return <Navigate to="/companies" replace />;
  if (company.external) {
    window.location.href = company.external;
    return null;
  }

  return (
    <Layout>
      <SEO
        title={`${company.nameEn} | HSIN HSIN`}
        description={company.descEn}
        path={`/companies/${company.id}`}
      />

      <PageHero
        title={t(company.nameEn, company.nameZh)}
        subtitle={t(company.taglineEn, company.taglineZh)}
      />

      <section className="py-24 md:py-36">
        <div className="section-container">
          <Link to="/companies" className="inline-flex items-center gap-2 text-accent text-[12px] font-medium tracking-[0.1em] uppercase mb-12 hover:gap-3 transition-all">
            <ArrowLeft size={13} /> {t("Back to Our Companies", "返回旗下企業")}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="bg-secondary p-10 flex items-center justify-center mb-8">
                <img src={company.logo} alt={`${company.nameEn} logo`} className="max-h-24 max-w-[200px] w-auto object-contain" />
              </div>
              <div className="space-y-5">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-accent/60 font-medium">{t("Industry", "產業")}</p>
                  <p className="text-foreground text-sm mt-1.5">{t(company.industryEn, company.industryZh)}</p>
                </div>
                {company.location && (
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-accent/60 font-medium">{t("Location", "地點")}</p>
                    <p className="text-foreground text-sm mt-1.5">{company.location}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Main */}
            <div className="lg:col-span-8 space-y-10">
              <div>
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-5">{t("Overview", "概述")}</h2>
                <div className="divider-accent mb-6" />
                <p className="text-muted-foreground leading-[1.8] text-[15px]">
                  {t(company.overviewEn, company.overviewZh)}
                </p>
              </div>

              <div className="space-y-4">
                {company.detailEn.map((_, i) => (
                  <p key={i} className="text-muted-foreground leading-[1.8] text-[15px]">
                    {t(company.detailEn[i], company.detailZh[i])}
                  </p>
                ))}
              </div>

              {company.servicesEn.length > 0 && (
                <div>
                  <h3 className="font-display text-xl text-foreground mb-5">{t("Key Services", "主要服務")}</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {company.servicesEn.map((_, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-muted-foreground text-sm leading-relaxed">
                        <CheckCircle size={14} className="text-accent/50 mt-0.5 flex-shrink-0" />
                        {t(company.servicesEn[i], company.servicesZh[i])}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-primary text-primary-foreground p-10 mt-12">
                <h3 className="font-display text-xl text-primary-foreground mb-3">
                  {t("Interested in working together?", "有興趣合作嗎？")}
                </h3>
                <p className="text-primary-foreground/45 text-sm mb-6">
                  {t(
                    "Reach out to learn more about our services and how we can support your needs.",
                    "聯繫我們，了解更多關於我們的服務及如何支持您的需求。"
                  )}
                </p>
                <Link to="/contact" className="btn-primary bg-accent text-accent-foreground hover:bg-warm-dark">
                  {t("Contact Us", "聯繫我們")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CompanyDetail;