import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const articles = [
  {
    titleEn: "The Value of Craftsmanship in Modern Life",
    titleZh: "現代生活中工藝的價值",
    contentEn: "In an era of mass production and disposable goods, craftsmanship represents something more enduring. It is the convergence of material knowledge, practiced skill, and aesthetic sensitivity. For families and businesses rooted in craft traditions, the challenge lies in preserving these qualities while adapting to contemporary expectations. Quality framing, hand-finished details, and conservation-minded presentation are not relics of the past — they are increasingly sought by collectors, designers, and institutions that understand the irreplaceable value of the handmade touch.",
    contentZh: "在大規模生產和一次性商品的時代，工藝代表著更持久的事物。它是材料知識、實踐技能和美學敏感度的匯聚。對於植根於工藝傳統的家庭和企業，挑戰在於在適應當代期望的同時保存這些品質。優質裱框、手工精加工細節和保護性展示不是過去的遺物——它們越來越受到理解手工觸感不可替代價值的收藏家、設計師和機構的追捧。",
    category: "Craftsmanship",
  },
  {
    titleEn: "Why Heritage Businesses Still Matter",
    titleZh: "為什麼傳統企業仍然重要",
    contentEn: "Heritage businesses carry a perspective that younger companies rarely possess — a deep understanding of cycles, a commitment to relationships over transactions, and a willingness to invest in quality even when short-term returns are uncertain. In a family enterprise context, this long-term orientation becomes a strategic advantage. It allows for patient brand building, careful market positioning, and the kind of trust that only develops over years of consistent service and genuine community engagement.",
    contentZh: "傳統企業擁有年輕公司很少具備的視角——對週期的深刻理解、對關係而非交易的承諾，以及即使短期回報不確定時也願意投資於品質。在家族企業的背景下，這種長期導向成為一種策略優勢。它允許耐心的品牌建設、謹慎的市場定位，以及只有通過多年持續服務和真誠社區參與才能發展的信任。",
    category: "Enterprise",
  },
  {
    titleEn: "Culture, Creativity, and Community as Long-Term Value",
    titleZh: "文化、創意和社區作為長期價值",
    contentEn: "The most resilient businesses are those that contribute more than products or services — they contribute to the cultural and social fabric of their communities. By investing in art education, cultural programming, and community-building events, enterprises create relationships that sustain them across economic cycles. These investments may not show immediate financial returns, but they build the kind of goodwill, loyalty, and brand equity that compound over generations.",
    contentZh: "最具韌性的企業是那些不僅提供產品或服務，還為社區的文化和社會結構做出貢獻的企業。通過投資藝術教育、文化項目和社區建設活動，企業創建跨越經濟週期的關係。這些投資可能不會顯示即時的財務回報，但它們建立的善意、忠誠度和品牌資產會隨著世代而增長。",
    category: "Community",
  },
  {
    titleEn: "How Lifestyle Choices Reflect Brand Values",
    titleZh: "生活方式選擇如何反映品牌價值",
    contentEn: "Today's consumers are increasingly drawn to brands whose values align with their own. A carefully sourced cup of specialty coffee, a thoughtfully curated wellness tea, or a sustainably harvested mushroom product — each reflects a deeper set of choices about quality, health, and environmental responsibility. Lifestyle brands that communicate these values authentically build communities around shared beliefs, creating a deeper connection between product and purpose.",
    contentZh: "當今消費者越來越被與自身價值觀一致的品牌所吸引。一杯精心採購的精品咖啡、一款用心策劃的養生茶，或一份可持續採收的菇類產品——每一項都反映了對品質、健康和環境責任的更深層選擇。真誠傳達這些價值的生活方式品牌會圍繞共同信念建立社區，在產品與目的之間創造更深層的連結。",
    category: "Lifestyle",
  },
  {
    titleEn: "The Role of Integrated Branding in Modern Family Enterprises",
    titleZh: "整合品牌在現代家族企業中的角色",
    contentEn: "As family enterprises evolve, so too must their approach to brand identity. An integrated branding strategy — one that connects visual identity, digital presence, event experiences, and storytelling — can unify diverse business units under a coherent group narrative. For multi-division family groups, this means each subsidiary carries its own identity while contributing to a larger, recognizable brand ecosystem. The result is a structure that is both flexible and cohesive, modern and heritage-connected.",
    contentZh: "隨著家族企業的發展，其品牌識別方法也必須與時俱進。整合品牌策略——將視覺識別、數位存在、活動體驗和故事敘述連結起來——可以在一個連貫的集團敘事下統一多元化的事業單位。對於多事業部的家族集團，這意味著每個子公司在保有自身識別的同時，也為更大的、可辨識的品牌生態系統做出貢獻。結果是一個既靈活又具凝聚力、既現代又與傳承相連的結構。",
    category: "Branding",
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
