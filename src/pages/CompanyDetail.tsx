import { useParams, Navigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { companies } from "@/data/companies";

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
      <PageHero
        title={t(company.nameEn, company.nameZh)}
        subtitle={t(company.industryEn, company.industryZh)}
      />
      <section className="py-16 md:py-24">
        <div className="section-container max-w-4xl">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <div className="bg-secondary rounded-lg p-8 flex items-center justify-center">
                <img src={company.logo} alt={company.nameEn} className="max-h-24 max-w-[200px] object-contain" />
              </div>
              <div className="mt-6 space-y-3">
                <div>
                  <p className="text-xs uppercase tracking-widest text-accent font-medium">{t("Industry", "產業")}</p>
                  <p className="text-foreground text-sm mt-1">{t(company.industryEn, company.industryZh)}</p>
                </div>
                {company.location && (
                  <div>
                    <p className="text-xs uppercase tracking-widest text-accent font-medium">{t("Location", "地點")}</p>
                    <p className="text-foreground text-sm mt-1">{company.location}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="md:w-2/3 space-y-5">
              {(t(company.detailEn.join("||"), company.detailZh.join("||"))).split("||").map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CompanyDetail;
