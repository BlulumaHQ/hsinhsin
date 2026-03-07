import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const Founder = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <PageHero
        title={t("Emily Lin", "林女士")}
        subtitle={t("Founder", "創辦人")}
      />
      <section className="py-16 md:py-24">
        <div className="section-container max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
          <p>
            {t(
              "Emily Lin is a Vancouver-based entrepreneur and business leader focused on connecting craftsmanship heritage with modern entrepreneurship.",
              "Emily Lin 是一位位於溫哥華的企業家和商業領袖，專注於將工藝傳承與現代創業精神相連結。"
            )}
          </p>
          <p>
            {t(
              "Her work spans multiple industries including craftsmanship manufacturing, creative education, cultural events, hospitality, and digital brand development.",
              "她的工作跨越多個行業，包括工藝製造、創意教育、文化活動、餐旅和數位品牌發展。"
            )}
          </p>
          <p>
            {t(
              "Through her leadership, the HSIN HSIN family enterprise has grown into a platform supporting creativity, culture, and community engagement.",
              "在她的領導下，欣欣家族企業已成長為一個支持創意、文化和社區參與的平台。"
            )}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Founder;
