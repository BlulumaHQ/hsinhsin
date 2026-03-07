import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";

const About = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <PageHero
        title={t("About HSIN HSIN", "關於欣欣")}
        subtitle={t("The Lin Family Legacy", "林氏家族傳承")}
      />
      <section className="py-16 md:py-24">
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
            <Link to="/founder" className="btn-primary">
              {t("Meet Our Founder", "認識創辦人")}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
