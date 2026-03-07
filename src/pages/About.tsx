import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { useNavigate } from "react-router-dom";
import aboutImg from "@/assets/about-us-hero.jpg";

const About = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <Layout>
      <PageHero
        title={t("About HSIN HSIN", "關於欣欣")}
        subtitle={t("The Lin Family Legacy", "林氏家族傳承")}
      />

      {/* Editorial About Image */}
      <section className="py-0">
        <div className="section-container max-w-5xl">
          <div className="relative -mt-8 mb-12 rounded-lg overflow-hidden shadow-xl">
            <img
              src={aboutImg}
              alt={t("HSIN HSIN — Professional · Innovative · Extraordinary", "欣欣企業——專業・創新・非凡")}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="section-container max-w-3xl">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              {t(
                "Founded in Vancouver in 1995, HSIN HSIN is a diversified family enterprise group spanning art craftsmanship, cultural education, event planning, lifestyle retail, and digital brand strategy. Guided by the values of professionalism, innovation, and long-term stewardship, the group continues to evolve across generations while remaining rooted in community, culture, and quality.",
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
          <blockquote className="border-l-2 border-accent pl-6 mt-10 text-foreground italic font-display text-lg md:text-xl">
            {t(
              "Professional · Innovative · Extraordinary — Rooted in Value.",
              "專業・創新・非凡，為價值而生。永續經營，世代傳承。"
            )}
          </blockquote>
          <div className="mt-10">
            <button onClick={() => { navigate("/founder"); window.scrollTo(0, 0); }} className="btn-primary">
              {t("Our Story", "我們的故事")}
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
