import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";
import type { Company } from "@/data/companies";

interface CompanyCardProps {
  company: Company;
}

const CompanyCard = ({ company }: CompanyCardProps) => {
  const { t } = useLanguage();

  const to = company.customPath || `/companies/${company.id}`;

  return (
    <Link to={to}>
      <article className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full group">
        <div className="px-6 pt-5 pb-1">
          <p className="text-accent text-[11px] uppercase tracking-[0.2em] font-semibold">
            {t(company.categoryEn, company.categoryZh)}
          </p>
        </div>
        <div className="px-6 pb-2">
          <h3 className="font-display text-lg text-foreground leading-snug">
            {t(company.nameEn, company.nameZh)}
          </h3>
        </div>
        <div className="px-6 py-4 flex items-center justify-center">
          <img
            src={company.logo}
            alt={`${company.nameEn} logo`}
            className="max-w-full h-auto max-h-[140px] object-contain"
          />
        </div>
        <div className="px-6 pb-6 flex flex-col flex-1">
          <p className="text-muted-foreground text-sm leading-relaxed flex-1">
            {t(company.descEn, company.descZh)}
          </p>
          <div className="mt-4 flex items-center gap-1 text-accent text-sm font-medium group-hover:gap-2 transition-all">
            {company.ctaLabelEn ? (
              <>{t(company.ctaLabelEn, company.ctaLabelZh || company.ctaLabelEn)} <ArrowRight size={14} /></>
            ) : (
              <>{t("Learn More", "了解更多")} <ArrowRight size={14} /></>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CompanyCard;
