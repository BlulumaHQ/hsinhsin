import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const About = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <PageHero
        title={t("The Lin Family Legacy", "林氏家族傳承")}
        subtitle={t("About the Family", "關於家族")}
      />
      <section className="py-16 md:py-24">
        <div className="section-container max-w-3xl">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              {t(
                "The HSIN HSIN family enterprise traces its roots to a tradition of craftsmanship and entrepreneurship.",
                "欣欣家族企業的根源可以追溯到工藝和創業的傳統。"
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
        </div>
      </section>
    </Layout>
  );
};

export default About;
