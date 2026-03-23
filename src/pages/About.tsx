import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { ArrowRight } from "lucide-react";
import aboutImg from "@/assets/about-us-hero.webp";

const timelineItems = [
  { year: "1995", en: "Family enterprise established in Vancouver, Canada", zh: "家族企業在加拿大溫哥華成立" },
  { year: "2005", en: "Cambridge Art Center founded to support artistic education", zh: "劍橋藝術中心成立，支持藝術教育" },
  { year: "2015", en: "Cultural programs and community events expanded", zh: "文化項目與社區活動擴展" },
  { year: "2020", en: "Bluluma Design launched for digital brand strategy", zh: "Bluluma Design 成立，專注數位品牌策略" },
  { year: "2024", en: "HH Nexus Capital platform established", zh: "衡寰國際資本平台成立" },
];

const About = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <Layout>
      <SEO
        title="About HSIN HSIN | Vancouver Family Enterprise"
        description="Learn about HSIN HSIN, a Vancouver-based family enterprise group founded in 1995, spanning craftsmanship, art education, cultural events, lifestyle brands, and digital design."
        path="/about"
      />

      <PageHero
        title={t("About HSIN HSIN", "關於欣欣")}
        subtitle={t("The Lin Family Legacy", "林氏家族傳承")}
      />

      {/* Editorial Image + Text — Asymmetric */}
      <section className="py-24 md:py-36">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <div className="overflow-hidden">
                <img
                  src={aboutImg}
                  alt={t("HSIN HSIN family enterprise team and brand presentation", "欣欣家族企業團隊與品牌展示")}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-5 lg:pt-12">
              <p className="label-accent mb-4">{t("Our Foundation", "我們的根基")}</p>
              <h2 className="font-display text-2xl md:text-4xl text-foreground leading-[1.15] mb-8">
                {t("Heritage, Vision, and Purpose", "傳承、願景與使命")}
              </h2>
              <div className="divider-accent mb-8" />
              <div className="space-y-5 text-muted-foreground leading-[1.8] text-[15px]">
                <p>
                  {t(
                    "Founded in Vancouver, Canada in 1995, HSIN HSIN is a diversified family enterprise group spanning art craftsmanship, cultural education, event planning, lifestyle retail, and digital brand strategy. Guided by the values of professionalism, innovation, and long-term stewardship, the group continues to evolve across generations while remaining rooted in community, culture, and quality.",
                    "欣欣企業成立於 1995 年加拿大溫哥華，是一個橫跨藝術工藝、文化教育、活動策劃、生活選品與品牌數位整合的家族企業集團。集團以「專業、創新、非凡」為核心精神，結合文化、美學、創意與永續價值，持續推動品牌升級、社區連結與世代傳承。"
                  )}
                </p>
                <p>
                  {t(
                    "Over the decades the family has developed a portfolio of businesses spanning craftsmanship manufacturing, creative education, cultural events, hospitality, and digital brand development.",
                    "幾十年來，家族發展了涵蓋工藝製造、創意教育、文化活動、餐旅和數位品牌發展的企業組合。"
                  )}
                </p>
                <p>
                  {t(
                    "Through responsible leadership and continuous innovation, these businesses have evolved into a connected ecosystem supporting creativity, culture, and community.",
                    "透過負責任的領導和持續創新，這些企業已發展成為一個支持創意、文化和社區的互聯生態系統。"
                  )}
                </p>
              </div>
              <blockquote className="border-l-2 border-accent/40 pl-6 mt-10 text-foreground/80 italic font-display text-xl leading-snug">
                {t(
                  "Professional · Innovative · Extraordinary — Rooted in Value.",
                  "專業・創新・非凡，為價值而生。永續經營，世代傳承。"
                )}
              </blockquote>
              <div className="mt-10 flex flex-wrap gap-5">
                <button onClick={() => { navigate("/founder"); window.scrollTo(0, 0); }} className="btn-primary">
                  {t("Our Story", "我們的故事")}
                </button>
                <Link to="/companies" className="inline-flex items-center gap-2 text-accent text-[13px] font-medium tracking-[0.1em] uppercase hover:gap-3 transition-all mt-3">
                  {t("Explore Our Companies", "探索旗下企業")} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-primary text-primary-foreground py-24 md:py-36">
        <div className="section-container">
          <div className="max-w-2xl mb-16">
            <p className="label-accent text-accent/70 mb-4">{t("Our History", "我們的歷史")}</p>
            <h2 className="font-display text-3xl md:text-5xl text-primary-foreground leading-[1.1] mb-4">
              {t("HSIN HSIN Timeline", "欣欣大事記")}
            </h2>
            <div className="w-12 h-[1.5px] bg-accent/50" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
            {timelineItems.map((item, i) => (
              <div key={i} className="border-l md:border-l-0 md:border-t border-primary-foreground/10 pl-6 md:pl-0 md:pt-8 pb-8 md:pb-0 md:pr-8">
                <p className="text-accent text-2xl md:text-3xl font-display mb-3">{item.year}</p>
                <p className="text-primary-foreground/45 text-sm leading-relaxed">{t(item.en, item.zh)}</p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Link to="/insights" className="inline-flex items-center gap-2 text-accent/70 text-[13px] font-medium tracking-[0.1em] uppercase hover:gap-3 hover:text-accent transition-all">
              {t("Read our insights on craftsmanship and culture", "閱讀工藝與文化觀點")} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;