import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const Community = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <PageHero
        title={t("Culture & Community", "文化與社區")}
      />
      <section className="py-16 md:py-24">
        <div className="section-container max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
          <p>
            {t(
              "HSIN HSIN believes that businesses should contribute to cultural and community development.",
              "欣欣相信企業應該為文化和社區發展做出貢獻。"
            )}
          </p>
          <p>
            {t(
              "Through educational programs, cultural events, and community initiatives, the enterprise supports creativity, artistic expression, and meaningful social engagement.",
              "通過教育計劃、文化活動和社區倡議，企業支持創意、藝術表達和有意義的社會參與。"
            )}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Community;
