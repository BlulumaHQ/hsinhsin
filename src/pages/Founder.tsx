import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { ArrowRight } from "lucide-react";
import foundersImg from "@/assets/founders-portrait.webp";
import founderHeritageImg from "@/assets/founder-heritage.webp";
import ceoImg from "@/assets/founder-portrait-new.webp";

const Founder = () => {
  const { t } = useLanguage();

  const roles = [
    { en: "Vice President of the Canadian Women's Association", zh: "加拿大婦女聯合會副會長" },
    { en: "Standing Director of the United Chinese Community Enrichment Services Society of Canada", zh: "加拿大華人聯合總會常務理事" },
    { en: "Director of the Canadian Entrepreneurs Association", zh: "加拿大企業家協會理事" },
    { en: "Permanent Member of the Canadian Construction Renovation Association", zh: "加拿大建築裝修協會永久會員" },
    { en: "Advisor to the World Chinese Business Women's Association", zh: "世界華人工商婦女企管協會顧問" },
  ];

  const milestones = [
    { year: "1995", en: "HSIN HSIN Family Enterprise founded in Vancouver", zh: "欣欣家族企業在溫哥華成立" },
    { year: "", en: "North America Million Dollar Writer — Seven consecutive years at Maison Birks", zh: "連續七屆榮獲 Maison Birks「North America Million Dollar Writer」殊榮" },
    { year: "", en: "Brand Ambassador for Van Cleef & Arpels, Graff, and Maison Birks", zh: "擔任梵克雅寶、格拉夫及 Maison Birks 品牌大使" },
    { year: "", en: "Founded HH Nexus Capital — expanded group structure", zh: "成立衡寰國際資本——擴展集團架構" },
    { year: "", en: "Fundraising Chair, Canadian Liver Foundation — raised over CAD $2 million", zh: "加拿大肝臟基金會募款主席——成功募得超過兩百萬加元" },
    { year: "2023", en: "Outstanding Woman of Vancouver Award", zh: "獲頒「溫哥華傑出女士」榮譽獎項" },
  ];

  return (
    <Layout>
      <SEO
        title="Founder Story | The Lin Family Legacy"
        description="Discover the story of the Lin family and their journey building HSIN HSIN, a multi-generational family enterprise in Vancouver, Canada spanning craftsmanship, culture, and creative business."
        path="/founder"
      />

      <PageHero
        title={t("The Lin Family Legacy", "林氏家族傳承")}
        subtitle={t("Heritage, Craftsmanship & Stewardship", "傳承・工藝・永續經營")}
      />

      {/* Founders — Horizontal editorial */}
      <section className="py-24 md:py-36">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="overflow-hidden">
                <img src={foundersImg} alt={t("The Lin Family founders of HSIN HSIN enterprise", "欣欣企業林氏家族創辦人")} className="w-full h-auto object-cover" />
              </div>
              <div className="overflow-hidden">
                <img src={founderHeritageImg} alt={t("Hsin Framing early craftsmanship workshop", "欣欣畫框早期工藝工作坊")} className="w-full h-auto object-cover" />
              </div>
            </div>
            <div className="lg:col-span-7 lg:pt-8">
              <p className="label-accent mb-4">{t("The Beginning", "起源")}</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground leading-[1.15] mb-8">
                {t("The Lin Family Legacy", "林氏家族傳承")}
              </h2>
              <div className="divider-accent mb-8" />
              <div className="space-y-5 text-muted-foreground leading-[1.8] text-[15px]">
                <p>{t("The story of HSIN HSIN begins with the founding generation of the Lin family, who established the business in Vancouver, Canada in 1995 with a commitment to craftsmanship, integrity, and long-term relationships.", "欣欣的故事始於林氏家族的創始一代，他們於 1995 年在溫哥華創立了這家企業，秉持工藝精神、誠信經營與長期關係的承諾。")}</p>
                <p>{t("What began as a small family operation rooted in traditional craftsmanship gradually evolved into a diversified enterprise connecting art, culture, education, and lifestyle businesses.", "最初只是一個植根於傳統工藝的小型家族事業，逐步發展成為一個連結藝術、文化、教育與生活方式的多元化企業。")}</p>
                <p>{t("From the earliest days, the family believed that craftsmanship was not only about making objects, but about preserving beauty, culture, and meaning.", "從創業之初，家族便深信工藝不僅在於製作物品，更在於保存美感、文化與意義。")}</p>
                <p>{t("Today HSIN HSIN represents a new generation of family enterprise—blending heritage craftsmanship with contemporary entrepreneurship and cultural engagement.", "如今，欣欣代表著新一代家族企業——將傳統工藝與當代創業精神及文化參與融為一體。")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section — Dark */}
      <section className="bg-primary text-primary-foreground py-24 md:py-36">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="overflow-hidden mb-6">
                <img src={ceoImg} alt="Emily Lin, CEO of HH Nexus Capital" className="w-full h-auto object-cover" />
              </div>
              <h2 className="font-display text-3xl text-primary-foreground">Emily Lin</h2>
              <p className="text-accent/70 text-[11px] uppercase tracking-[0.2em] font-sans font-semibold mt-2">
                {t("CEO · HH Nexus Capital", "CEO · 衡寰國際資本")}
              </p>
              <p className="text-primary-foreground/30 text-xs mt-1.5">Vancouver, BC, Canada</p>
            </div>
            <div className="lg:col-span-8 space-y-5 text-primary-foreground/55 leading-[1.9] text-[15px]">
              <h3 className="font-display text-2xl text-primary-foreground mb-2">{t("Emily Lin 林欣怡", "Emily Lin 林欣怡")}</h3>
              <p className="text-accent/80 italic font-display text-lg mb-4">
                {t(
                  "A value architect for the cross-disciplinary era — building platforms that connect culture, business and legacy.",
                  "跨界時代的價值建築者——建構連結文化、商業與傳承的平台。"
                )}
              </p>
              <p>{t("Emily Lin is the CEO of HSIN HSIN HOLDINGS LTD. and President of HH Nexus Capital, recognized for a leadership approach centered on platform development and long-term value integration.", "Emily Lin 為欣欣控股有限公司（HSIN HSIN HOLDINGS LTD.）執行長，同時擔任 HH Nexus Capital 總裁，為一位專注於平台建構與長期價值整合的企業領導者。")}</p>
              <p>{t("With a cross-disciplinary background spanning family enterprise governance, brand strategy, luxury client relations, and cultural programming, Emily specializes in transforming fragmented resources into structured, scalable business systems.", "其專業橫跨家族企業治理、品牌策略、精品客戶經營及文化活動整合，擅長將分散資源轉化為具結構性的商業系統，並透過平台化思維推動企業的可持續成長與跨領域連結。")}</p>
              <p>{t("Her early career includes extensive experience in the luxury retail and fine jewelry sector, where she developed expertise in brand development, client relationship management, and market expansion, with professional experience across brands such as Maison Birks, Van Cleef & Arpels, and Tiffany & Co.", "在職涯發展中，Emily 曾於國際精品與高端零售體系中累積豐富經驗，涵蓋品牌經營、客戶關係管理與市場拓展，並於 Maison Birks、Van Cleef & Arpels、Tiffany & Co. 等品牌體系中建立卓越業績與長期客戶關係。")}</p>
              <p>{t("She is known not only for commercial performance, but for her ability to convert individual transactions into long-term trust, and further into sustainable brand and relationship ecosystems.", "其專業優勢不僅在於商業成果，更在於將「一次交易」轉化為「長期信任」，並進一步轉化為可持續放大的品牌與資源網絡。")}</p>
              <p>{t("In recent years, Emily has led the strategic integration of multiple business units under HSIN HSIN HOLDINGS LTD., expanding the organization from its craftsmanship roots into a diversified platform across culture, branding, events, and lifestyle sectors.", "近年來，Emily 回歸家族企業，整合工藝、文化、品牌、活動與生活方式事業，帶領欣欣控股由傳統產業基礎，升級為多元整合的企業平台。")}</p>
              <p>{t("Her strategic focus lies in building business structures that are scalable, replicable, and enduring, positioning the organization for long-term growth and cross-industry impact.", "其核心策略在於建立「可延展、可複製、可放大」的商業結構，使企業具備長期競爭力與跨產業影響力。")}</p>
              <p>{t("Beyond business, she is actively engaged in community and philanthropic initiatives, advocating for the alignment of commercial success with social contribution and cultural connectivity.", "除商業領域外，Emily 長期參與社區與公益事務，致力於將企業影響力轉化為社會價值，推動文化連結、社區發展與多元合作。")}</p>
              <blockquote className="border-l-2 border-accent/50 pl-6 font-display italic text-xl text-primary-foreground/90 leading-snug mt-6">
                {t(
                  "Success only matters when it creates lasting value.",
                  "成功，只有轉化為長期價值，才有意義。"
                )}
              </blockquote>
            </div>
          </div>

          {/* Roles + Milestones */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20 pt-16 border-t border-primary-foreground/5">
            <div>
              <h3 className="font-display text-xl text-primary-foreground mb-8">{t("Current Positions", "現任職務")}</h3>
              <ul className="space-y-3">
                {roles.map((role, i) => (
                  <li key={i} className="flex items-start gap-3 text-primary-foreground/40 text-sm leading-relaxed">
                    <span className="w-1 h-1 bg-accent/50 rounded-full mt-2 flex-shrink-0" />
                    {t(role.en, role.zh)}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xl text-primary-foreground mb-8">{t("Selected Achievements", "精選成就")}</h3>
              <div className="space-y-5">
                {milestones.map((m, i) => (
                  <div key={i} className="border-l border-primary-foreground/10 pl-5">
                    {m.year && <p className="text-accent/60 text-xs uppercase tracking-widest font-medium mb-1">{m.year}</p>}
                    <p className="text-primary-foreground/40 text-sm leading-relaxed">{t(m.en, m.zh)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="mt-16 flex flex-wrap gap-8">
            <Link to="/community" className="inline-flex items-center gap-2 text-accent/70 text-[13px] font-medium tracking-[0.1em] uppercase hover:gap-3 hover:text-accent transition-all">
              {t("Explore Community & Culture", "探索文化社區")} <ArrowRight size={14} />
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 text-accent/70 text-[13px] font-medium tracking-[0.1em] uppercase hover:gap-3 hover:text-accent transition-all">
              {t("About HSIN HSIN", "關於欣欣")} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Founder;