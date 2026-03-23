import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { Palette, GraduationCap, Users, Leaf, ArrowRight } from "lucide-react";

const Community = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Palette,
      titleEn: "Cultural Heritage",
      titleZh: "文化傳承",
      descEn: "Preserving artistic traditions and craftsmanship knowledge through dedicated practice, education, and the continued operation of heritage-rooted businesses.",
      descZh: "通過專注的實踐、教育和經營以傳承為根基的企業，保存藝術傳統和工藝知識。",
    },
    {
      icon: GraduationCap,
      titleEn: "Creative Education",
      titleZh: "創意教育",
      descEn: "Investing in accessible workshops, mentorship programs, and studio-based learning that nurture artistic skills and creative thinking for learners of all ages.",
      descZh: "投資於可及的工作坊、指導計劃和工作室學習，培養各年齡層學習者的藝術技能和創意思維。",
    },
    {
      icon: Users,
      titleEn: "Community Engagement",
      titleZh: "社區參與",
      descEn: "Building connections through cultural events, public programs, and collaborative initiatives that bring people together around shared creative and social goals.",
      descZh: "通過文化活動、公共項目和合作倡議，圍繞共同的創意和社會目標將人們聯繫在一起。",
    },
    {
      icon: Leaf,
      titleEn: "Responsible Lifestyle Choices",
      titleZh: "負責任的生活選擇",
      descEn: "Promoting wellness, quality, and thoughtful sourcing through lifestyle brands that reflect the group's values of care, authenticity, and long-term stewardship.",
      descZh: "通過反映集團關懷、真實性和長期管理價值觀的生活方式品牌，推廣健康、品質和用心採購。",
    },
  ];

  return (
    <Layout>
      <SEO
        title="Community & Culture | HSIN HSIN"
        description="Explore how HSIN HSIN supports cultural heritage, creative education, community engagement, and responsible lifestyle choices in Vancouver, Canada."
        path="/community"
      />

      <PageHero title={t("Community, Culture & Responsibility", "社區、文化與責任")} />

      <section className="py-24 md:py-36">
        <div className="section-container">
          <div className="max-w-3xl mb-20">
            <p className="label-accent mb-4">{t("Our Values", "我們的價值")}</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-[1.15] mb-8">
              {t("Making a Meaningful Difference", "創造有意義的改變")}
            </h2>
            <div className="divider-accent mb-8" />
            <p className="text-muted-foreground leading-[1.8] text-[15px]">
              {t(
                "HSIN HSIN believes that business value is not measured only by commercial success, but also by its contribution to health, culture, community, and responsible living. Across its divisions, the group supports cultural continuity, creative education, local partnerships, and value-driven choices that create a more thoughtful everyday life.",
                "欣欣企業相信，企業價值不僅來自商業成就，更來自對健康、文化、社區與責任生活方式的實際承諾。透過旗下各事業體，集團持續支持文化傳承、藝術教育、在地合作與更具價值導向的生活選擇。"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {pillars.map((pillar, i) => (
              <div key={i} className="bg-background p-10 md:p-14">
                <pillar.icon size={24} className="text-accent/60 mb-6" strokeWidth={1.5} />
                <h3 className="font-display text-xl md:text-2xl text-foreground mb-4">
                  {t(pillar.titleEn, pillar.titleZh)}
                </h3>
                <p className="text-muted-foreground text-sm leading-[1.8]">
                  {t(pillar.descEn, pillar.descZh)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap gap-8">
            <Link to="/founder" className="inline-flex items-center gap-2 text-accent text-[13px] font-medium tracking-[0.1em] uppercase hover:gap-3 transition-all">
              {t("Meet the Lin Family", "認識林氏家族")} <ArrowRight size={14} />
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 text-accent text-[13px] font-medium tracking-[0.1em] uppercase hover:gap-3 transition-all">
              {t("About HSIN HSIN", "關於欣欣")} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Community;