import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const articles = [
  {
    titleEn: "The Enduring Value of Craftsmanship in a Digital Age",
    titleZh: "數位時代工藝的持久價值",
    contentEn: "In a world increasingly shaped by automation and mass production, craftsmanship remains a vital connection to heritage and quality. Handmade processes carry a depth of knowledge and skill that cannot be replicated by machines. For businesses rooted in craft, the challenge is to preserve this legacy while embracing modern tools that enhance—without replacing—the human touch.",
    contentZh: "在一個日益被自動化和大規模生產塑造的世界裡，工藝仍然是與傳承和品質的重要聯繫。手工製作的過程承載著機器無法複製的深度知識和技能。對於植根於工藝的企業，挑戰在於在擁抱現代工具的同時保持這一傳統——增強而非取代人的觸感。",
    category: "Craftsmanship",
  },
  {
    titleEn: "Why Creative Education Matters for Community Growth",
    titleZh: "為什麼創意教育對社區發展至關重要",
    contentEn: "Art education is more than technique—it is a gateway to critical thinking, cultural understanding, and personal expression. Communities that invest in creative learning build stronger social bonds and foster innovation across industries. By creating accessible spaces for artistic exploration, we can nurture the next generation of makers, thinkers, and leaders.",
    contentZh: "藝術教育不僅僅是技巧——它是通往批判性思維、文化理解和個人表達的大門。投資於創意學習的社區建立了更強的社會紐帶，並在各行業中促進創新。通過創造可及的藝術探索空間，我們可以培養下一代的製作者、思想家和領導者。",
    category: "Education",
  },
  {
    titleEn: "Entrepreneurship as a Family Legacy",
    titleZh: "創業作為家族傳承",
    contentEn: "Family enterprises carry a unique perspective on business—one that balances short-term performance with multi-generational thinking. The values passed down through families, including integrity, resilience, and community responsibility, often become the foundation for sustainable business practices. When entrepreneurship is viewed as stewardship, businesses can create lasting impact beyond profit.",
    contentZh: "家族企業對商業有著獨特的視角——在短期業績和多代思維之間取得平衡。通過家族傳承的價值觀，包括正直、韌性和社區責任，往往成為可持續商業實踐的基礎。當創業被視為管理時，企業可以創造超越利潤的持久影響。",
    category: "Entrepreneurship",
  },
  {
    titleEn: "Building Culture Through Hospitality and Gathering",
    titleZh: "通過待客之道和聚會建設文化",
    contentEn: "The spaces where people gather shape the culture of a community. Cafés, studios, and event venues are more than commercial spaces—they are places where ideas are exchanged, relationships are formed, and creative energy flows. Thoughtful hospitality creates environments that inspire connection and belonging, strengthening the fabric of community life.",
    contentZh: "人們聚集的空間塑造了社區的文化。咖啡館、工作室和活動場地不僅僅是商業空間——它們是交流思想、建立關係和創意能量流動的地方。深思熟慮的待客之道創造了激發聯繫和歸屬感的環境，加強了社區生活的結構。",
    category: "Community",
  },
];

const Insights = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <PageHero
        title={t("Insights", "觀點")}
        subtitle={t("Perspectives on craft, culture, and enterprise", "關於工藝、文化和企業的觀點")}
      />
      <section className="py-16 md:py-24">
        <div className="section-container max-w-4xl space-y-12">
          {articles.map((article, i) => (
            <article key={i} className="border-b border-border pb-10 last:border-0">
              <p className="text-accent text-xs uppercase tracking-widest font-medium mb-2">{article.category}</p>
              <h2 className="font-display text-xl md:text-2xl text-foreground mb-4">
                {t(article.titleEn, article.titleZh)}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t(article.contentEn, article.contentZh)}
              </p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
