import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { companies, type Company } from "@/data/companies";
import { ArrowRight, MapPin, Building2, Layers } from "lucide-react";

const DESCRIPTION_OVERRIDE: Record<string, { en: string; zh: string }> = {
  "cloud-nine-college": {
    en: "Providing UK University Pathways, Online MBA programs, language education, and international academic opportunities.",
    zh: "提供英國大學銜接、線上 MBA 課程、語言教育及國際學術機會。",
  },
};

const FILTERS: { en: string; zh: string; value: string }[] = [
  { en: "All", zh: "全部", value: "all" },
  { en: "Education", zh: "教育", value: "Education" },
  { en: "Craftsmanship", zh: "工藝", value: "Craftsmanship" },
  { en: "Culture", zh: "文化", value: "Culture" },
  { en: "Creative", zh: "創意", value: "Creative" },
  { en: "Lifestyle", zh: "生活", value: "Lifestyle" },
  { en: "Digital", zh: "數位", value: "Digital" },
];

const PortfolioCard = ({ company }: { company: Company }) => {
  const { t } = useLanguage();
  const to = company.customPath || `/companies/${company.id}`;
  const status = STATUS_MAP[company.id] ?? "active";
  const desc = DESCRIPTION_OVERRIDE[company.id]
    ? t(DESCRIPTION_OVERRIDE[company.id].en, DESCRIPTION_OVERRIDE[company.id].zh)
    : t(company.descEn, company.descZh);

  return (
    <Link
      to={to}
      className="group relative flex flex-col bg-background border border-border/60 hover:border-accent/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_hsl(var(--foreground)/0.25)]"
    >
      <div className="px-8 pt-8 pb-6 flex items-center justify-between border-b border-border/40">
        <p className="label-accent">{t(company.categoryEn, company.categoryZh)}</p>
        <StatusBadge status={status} />
      </div>

      <div className="px-8 py-10 bg-secondary/40 flex items-center justify-center h-[180px]">
        <img
          src={company.logo}
          alt={`${company.nameEn} logo`}
          className="max-h-[110px] max-w-[70%] object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="px-8 pt-8 pb-8 flex-1 flex flex-col">
        <h3 className="font-display text-2xl text-foreground leading-tight mb-2">
          {t(company.nameEn, company.nameZh)}
        </h3>
        <p className="text-[12px] tracking-[0.08em] uppercase text-muted-foreground/70 mb-5">
          {t(company.industryEn, company.industryZh)}
        </p>
        <p className="text-muted-foreground leading-[1.75] text-[14px] mb-8 flex-1">
          {desc}
        </p>

        <div className="flex items-center justify-between pt-6 border-t border-border/40">
          <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground/70">
            <MapPin size={11} /> {company.location}
          </span>
          <span className="inline-flex items-center gap-1.5 text-accent text-[11px] font-medium tracking-[0.12em] uppercase group-hover:gap-3 transition-all">
            {t("Learn More", "了解更多")} <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  );
};

const Companies = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<string>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return companies;
    return companies.filter((c) => c.categoryEn === filter);
  }, [filter]);

  const stats = [
    { icon: Building2, value: `${companies.length}`, label: t("Independent Ventures", "獨立企業") },
    { icon: Layers, value: t("Multiple", "多元"), label: t("Industries", "產業領域") },
    { icon: MapPin, value: t("Vancouver", "溫哥華"), label: t("Canada", "加拿大") },
  ];

  return (
    <Layout>
      <SEO
        title="Portfolio | HSIN HSIN Family Office"
        description="A collection of independent brands, ventures, and long-term projects across education, investment, design, culture, and lifestyle — operated by HSIN HSIN Family Office."
        path="/companies"
      />

      {/* Hero */}
      <section className="pt-36 md:pt-44 pb-20 md:pb-28 border-b border-border/40">
        <div className="section-container">
          <p className="label-accent mb-8">{t("Family Office Portfolio", "家族辦公室投資組合")}</p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] text-foreground leading-[1.02] tracking-tight">
                {t("Our Portfolio", "我們的投資組合")}
              </h1>
            </div>
            <div className="lg:col-span-4">
              <div className="divider-accent mb-6" />
              <p className="text-muted-foreground leading-[1.8] text-[15px]">
                {t(
                  "A collection of independent brands, ventures, and long-term projects across education, investment, design, culture, and lifestyle.",
                  "一系列獨立品牌、企業與長期項目，橫跨教育、投資、設計、文化與生活方式領域。"
                )}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/60 mt-20 border border-border/60">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <div key={i} className="bg-background px-8 py-10 flex items-center gap-5">
                <Icon size={22} className="text-accent shrink-0" strokeWidth={1.25} />
                <div>
                  <div className="font-display text-3xl text-foreground leading-none mb-1.5">{value}</div>
                  <div className="text-[11px] tracking-[0.14em] uppercase text-muted-foreground">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[72px] z-20 bg-background/95 backdrop-blur border-b border-border/40">
        <div className="section-container py-5">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-none">
            <span className="text-[11px] tracking-[0.14em] uppercase text-muted-foreground/70 mr-3 shrink-0">
              {t("Filter", "篩選")}
            </span>
            {FILTERS.map((f) => {
              const active = filter === f.value;
              return (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  className={`shrink-0 px-4 py-2 text-[12px] tracking-[0.08em] uppercase transition-all border ${
                    active
                      ? "bg-foreground text-background border-foreground"
                      : "bg-transparent text-muted-foreground border-border/60 hover:border-foreground/40 hover:text-foreground"
                  }`}
                >
                  {t(f.en, f.zh)}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-20">
              {t("No ventures in this category yet.", "此類別暫無企業。")}
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((company) => (
                <PortfolioCard key={company.id} company={company} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom statement */}
      <section className="border-t border-border/40 py-24 md:py-32">
        <div className="section-container max-w-3xl">
          <p className="label-accent mb-6">{t("Long-Term Stewardship", "長期經營")}</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground leading-[1.2] mb-8">
            {t(
              "Building enduring ventures across generations.",
              "建立跨世代的永續企業。"
            )}
          </h2>
          <p className="text-muted-foreground leading-[1.85] text-[15px] mb-10">
            {t(
              "HSIN HSIN Family Office develops, invests in, and operates a diversified portfolio of independent businesses. Each venture is built to stand on its own — guided by craftsmanship, cultural depth, and a long-term horizon.",
              "欣欣家族辦公室發展、投資並經營多元化的獨立企業組合。每一項事業皆能獨立運營 — 以工藝、文化深度與長期視野為指引。"
            )}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-accent text-[12px] font-medium tracking-[0.14em] uppercase hover:gap-3 transition-all"
          >
            {t("Partner with HSIN HSIN", "與欣欣合作")} <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Companies;
