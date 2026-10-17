import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, BriefcaseBusiness, BookOpen, Laptop, MessagesSquare, ChevronDown, Check, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MBA_LINKS, MBA_REFERENCE_DOCUMENTS } from "@/data/mba-links";
import heroImg from "@/assets/cnc-mba-editorial.webp";
import "./cloud-nine-college.css";

const CloudNineCollege = () => {
  const { lang, t } = useLanguage();
  const benefits = [
    { icon: BriefcaseBusiness, en: "Designed for working professionals", zh: "為在職專業人士而設", descEn: "Explore postgraduate study options that may fit around your professional commitments.", descZh: "探索能配合工作規劃的研究所層級進修選擇。" },
    { icon: BookOpen, en: "Develop business knowledge", zh: "深化商業與管理知識", descEn: "Explore advanced management, strategy, leadership and business-related subjects.", descZh: "了解高階管理、策略、領導力與商業相關的學習領域。" },
    { icon: Laptop, en: "A flexible learning pathway", zh: "探索彈性學習途徑", descEn: "Review available online study structures, schedules and progression requirements.", descZh: "了解線上學習安排、課程時間與各階段的銜接要求。" },
    { icon: MessagesSquare, en: "Personalized application guidance", zh: "貼合背景的申請諮詢", descEn: "Get support from HSIN HSIN when reviewing requirements and preparing your application.", descZh: "由欣欣協助了解課程要求，並整理適合自身背景的申請準備方向。" },
  ];
  const pathway = [
    ["Explore entry requirements", "了解入學要求", "Review the qualifications and experience required for your selected pathway.", "了解所選進修途徑對學歷與工作經驗的要求。"],
    ["Postgraduate study", "研究所層級學習", "Complete the relevant postgraduate academic stage, where applicable.", "依所選途徑，完成適用的研究所層級學習階段。"],
    ["University MBA top-up", "大學 MBA 銜接階段", "Where offered, progress to an MBA top-up, subject to admission and academic requirements.", "如該途徑提供 MBA 銜接課程，須符合相關入學及學術要求，才能繼續修讀。"],
    ["Degree completion", "完成學位要求", "Meet the awarding university’s requirements for the final MBA degree.", "完成學位授予大學規定的各項要求，取得最終 MBA 學位。"],
  ];
  const support = [
    ["Explore your options", "探索進修選擇", "Understand the program structure and available study pathways.", "了解課程架構與可選的進修途徑，釐清學習方向。"],
    ["Prepare your application", "準備申請資料", "Review the documents and requirements relevant to your application.", "確認申請所需文件與相關要求，逐步準備資料。"],
    ["Move toward enrollment", "掌握入學下一步", "Receive guidance on next steps. Admission decisions remain with the educational institution.", "獲得後續步驟的指引；最終錄取決定由教育機構作出。"],
  ];
  const faqs = [
    ["What is the UK Online MBA pathway?", "什麼是英國線上 MBA 進修途徑？", "It is a route toward postgraduate business study that may include a postgraduate stage followed by a university MBA top-up. Available routes and progression requirements must be confirmed for your application. A Level 7 Diploma is not itself an MBA.", "這是一種商業管理研究所層級的進修途徑，可能包含研究生階段與後續的大學 MBA 銜接階段。實際可選途徑與銜接要求，須於申請時確認。Level 7 文憑本身並不等同 MBA 學位。"],
    ["Can I study while working?", "可以一邊工作、一邊進修嗎？", "Online study may offer flexibility, but lecture schedules, workload and attendance expectations vary. Review the current program arrangements before deciding how study fits your work commitments.", "線上學習可提供時間安排上的彈性，但授課時間、學習量與出席要求會因課程而異。建議先確認最新安排，再評估是否符合工作與生活規劃。"],
    ["What are the entry requirements?", "入學資格有哪些要求？", "Requirements depend on the selected academic pathway and institution. Request an eligibility review based on your qualifications, professional experience and English-language background. Your occupation alone does not establish eligibility.", "入學要求取決於所選途徑與教育機構。可依您的學歷、工作經驗及英語背景申請資格評估；職業身分本身並不代表已符合入學資格。"],
    ["How much does the program cost?", "課程費用是多少？", "Request the current tuition and fee information for your selected pathway. Confirm the applicable costs and terms before submitting an application; older brochures may no longer reflect current fees.", "請查詢所選途徑的最新學費與相關費用，並在申請前確認適用條款。舊版簡介中的費用資訊不一定仍然適用。"],
    ["How do I begin my application?", "如何開始申請？", "Start by exploring the MBA website and requesting an eligibility review or consultation. HSIN HSIN can help you understand the next steps and prepare relevant documents; admission is decided by the institution.", "可先瀏覽 MBA 專屬網站，申請資格評估或預約諮詢。欣欣可協助您了解後續步驟與所需文件；是否錄取由教育機構決定。"],
  ];
  const action = (href: string, en: string, zh: string, outline = false, dark = false) => (
    <Button asChild variant={outline ? "outline" : dark ? "secondary" : "default"} className={`cnc-action ${outline && dark ? "cnc-dark-outline" : ""}`}>
      <a href={href}>{t(en, zh)}<ArrowUpRight aria-hidden="true" /></a>
    </Button>
  );
  const textLink = (href: string, en: string, zh: string) => <a className="cnc-text-link" href={href}>{t(en, zh)}<ArrowRight size={16} aria-hidden="true" /></a>;

  return (
    <Layout>
      <SEO title={t("Cloud Nine College UK Online MBA | HSIN HSIN Education", "Cloud Nine College 英國線上 MBA | 欣欣教育")}
        description={t("Explore UK Online MBA pathways with Cloud Nine College and personalized application guidance from HSIN HSIN Education. Review study options and next steps on our dedicated MBA website.", "透過 Cloud Nine College 探索英國線上 MBA 進修途徑，由欣欣教育提供課程資訊與申請諮詢。了解學習選擇，前往 MBA 專屬網站查詢最新入學資訊。")}
        path="/cloud-nine-college" />
      <div className="cnc-page" lang={lang === "en" ? "en" : "zh-Hant"}>
        <section className="relative min-h-[640px] md:min-h-[700px] flex items-center overflow-hidden bg-primary text-primary-foreground">
          <img src={heroImg} alt={t("Adult professionals studying together in a university library — illustrative image", "在大學圖書館共同研讀的成年專業人士 — 情境示意圖")} width={1920} height={1088} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[65%_center]" />
          <div className="absolute inset-0 cnc-hero-overlay" />
          <div className="section-container relative w-full py-20 md:py-24">
            <div className="max-w-[620px]">
              <p className="cnc-eyebrow text-accent mb-7">{t("CLOUD NINE COLLEGE × HSIN HSIN EDUCATION", "CLOUD NINE COLLEGE × 欣欣教育")}</p>
              <h1 className={`font-display leading-[1.08] ${lang === "en" ? "text-[44px] md:text-[68px]" : "text-[36px] md:text-[54px] leading-[1.3]"}`}>{t("Take the Next Step Toward Your UK Online MBA", "開啟你的英國線上 MBA 進修之路")}</h1>
              <p className="cnc-on-dark-muted max-w-lg text-base md:text-lg leading-relaxed mt-7">{t("Explore flexible postgraduate business education pathways with personalized application guidance from HSIN HSIN.", "探索適合在職人士的英國線上 MBA 進修途徑，由欣欣企業提供課程資訊與申請諮詢服務。")}</p>
              <div className="flex flex-col sm:flex-row gap-3 mt-9">
                {action(MBA_LINKS.website, "Explore MBA Programs", "探索 MBA 課程", false, true)}
                {action(MBA_LINKS.eligibility, "Check Your Eligibility", "免費入學資格評估", true, true)}
              </div>
            </div>
            <a href="#mba-introduction" aria-label={t("Continue to MBA introduction", "閱讀 MBA 介紹")} className="inline-flex items-center gap-3 mt-14 text-sm cnc-on-dark-muted"><ChevronDown size={18} aria-hidden="true" />{t("Discover your pathway", "探索進修途徑")}</a>
          </div>
        </section>

        <section id="mba-introduction" className="py-20 md:py-28 scroll-mt-24">
          <div className="section-container grid lg:grid-cols-12 gap-8 lg:gap-20">
            <div className="lg:col-span-5"><p className="cnc-eyebrow text-muted-foreground mb-5">{t("A NEW CHAPTER", "開啟新的學習篇章")}</p><h2 className="cnc-heading font-display">{t("Your MBA Journey Starts Here", "你的 MBA 進修旅程，從這裡開始")}</h2></div>
            <div className="lg:col-span-7 pt-1"><p className="text-lg leading-relaxed mb-5">{t("Cloud Nine College — UK Online MBA Pathways, presented by HSIN HSIN Education, connects prospective students with information about postgraduate business education.", "Cloud Nine College 英國線上 MBA 進修途徑，由欣欣教育提供課程介紹，協助有意深造的學生了解商業管理研究所層級的學習選擇。")}</p><p className="text-muted-foreground leading-relaxed mb-7">{t("Whether you are balancing a career with study or considering your next academic step, HSIN HSIN helps you understand your options, review requirements and navigate the application process. Explore the dedicated MBA website for current program information.", "無論您希望兼顧工作與進修，或正在規劃下一個學習階段，欣欣都能協助您釐清選擇、了解要求與申請流程。完整及最新的課程資訊，請參閱 MBA 專屬網站。")}</p>{textLink(MBA_LINKS.program, "Learn More About the MBA Pathway", "深入了解 MBA 進修途徑")}</div>
          </div>
          <div className="section-container mt-16 md:mt-20"><h3 className="font-display text-3xl mb-8">{t("Why consider an online MBA?", "為什麼考慮線上 MBA？")}</h3><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {benefits.map(({ icon: Icon, en, zh, descEn, descZh }) => <article key={en} className="border-t border-border pt-7"><Icon size={25} strokeWidth={1.5} className="text-primary mb-5" aria-hidden="true" /><h4 className="font-sans font-medium text-lg leading-snug mb-3">{t(en, zh)}</h4><p className="text-sm text-muted-foreground leading-relaxed">{t(descEn, descZh)}</p></article>)}
          </div></div>
        </section>

        <section className="bg-primary text-primary-foreground py-20 md:py-28">
          <div className="section-container"><p className="cnc-eyebrow text-accent mb-5">{t("THE ACADEMIC PATHWAY", "學習與學位銜接")}</p><h2 className="cnc-heading font-display max-w-2xl">{t("Understanding the MBA Pathway", "了解 MBA 進修途徑")}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-14 md:mt-16">{pathway.map(([en, zh, descEn, descZh], i) => <article key={en} className="border-t border-primary-foreground/25 pt-6"><div className="flex justify-between items-center mb-6"><span className="font-display text-4xl text-accent">0{i + 1}</span>{i < 3 && <ArrowRight size={20} className="cnc-on-dark-muted" aria-hidden="true" />}</div><h3 className="text-2xl font-display leading-snug mb-4">{t(en, zh)}</h3><p className="text-sm leading-relaxed cnc-on-dark-muted">{t(descEn, descZh)}</p></article>)}</div>
            <div className="border-t border-primary-foreground/20 mt-12 pt-7 flex flex-col lg:flex-row gap-7 lg:items-start lg:justify-between"><p className="cnc-on-dark-muted text-sm leading-relaxed max-w-2xl"><strong className="text-primary-foreground font-medium">{t("Important clarification: ", "重要說明：")}</strong>{t("A Level 7 Diploma is not itself an MBA degree. Progression and degree awards are subject to the applicable institution’s requirements.", "Level 7 文憑本身並不等同 MBA 學位。是否能銜接後續課程及取得學位，均須符合相關教育機構的要求。")}</p>{textLink(MBA_LINKS.program, "View Full MBA Pathway Details", "查看完整 MBA 進修途徑")}</div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-secondary">
          <div className="section-container grid lg:grid-cols-2 gap-14 lg:gap-24"><div><p className="cnc-eyebrow text-muted-foreground mb-5">{t("YOUR NEXT CHAPTER", "規劃下一個學習階段")}</p><h2 className="cnc-heading font-display mb-6">{t("Who Should Explore This Program?", "誰適合進一步了解？")}</h2><p className="text-muted-foreground leading-relaxed mb-8">{t("For people considering a deeper understanding of business and management alongside their professional life.", "適合希望在職涯之外，進一步深化商業與管理知識的人士。")}</p>{action(MBA_LINKS.eligibility, "Check My Eligibility", "評估我的入學資格")}</div><div className="space-y-5">{[
            ["Working professionals", "在職專業人士", "Explore study alongside your existing commitments.", "探索配合現有工作安排的進修選擇。"],
            ["Business owners & entrepreneurs", "企業經營者與創業者", "Consider structured postgraduate business learning.", "透過有系統的研究所層級學習，拓展商業思維。"],
            ["Managers & team leaders", "管理者與團隊領導者", "Explore management, strategy and leadership subjects.", "進一步了解管理、策略與領導相關的學習領域。"],
            ["Professionals planning further study", "規劃深造的專業人士", "Understand the available academic pathways.", "了解可選的學術途徑，規劃下一個進修階段。"],
          ].map(([en, zh, descEn, descZh]) => <article key={en} className="flex gap-4 border-b border-border pb-5"><Check size={18} className="shrink-0 mt-1" aria-hidden="true" /><div><h3 className="font-sans text-lg font-medium mb-1">{t(en, zh)}</h3><p className="text-sm text-muted-foreground leading-relaxed">{t(descEn, descZh)}</p></div></article>)}<p className="text-xs text-muted-foreground leading-relaxed">{t("These profiles are a starting point, not confirmation of eligibility. Admission depends on the selected pathway’s requirements.", "以上為參考對象，並不代表已符合入學資格；實際資格須依所選途徑的要求評估。")}</p></div></div>
        </section>

        <section className="py-20 md:py-28"><div className="section-container"><div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-10"><div><p className="cnc-eyebrow text-muted-foreground mb-5">{t("MAKE AN INFORMED DECISION", "充分了解，再做選擇")}</p><h2 className="cnc-heading font-display">{t("Program Information, At a Glance", "課程資訊一覽")}</h2></div><p className="text-sm text-muted-foreground leading-relaxed max-w-md">{t("Confirm current terms for your chosen pathway before applying. Historical materials do not establish current offers.", "申請前，請確認所選途徑的最新安排與條款。過往文件不代表目前適用的課程條件。")}</p></div><dl className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-border">{[
          ["Study mode & schedule", "學習方式與時間", "Review current online study arrangements", "查看最新線上學習安排", MBA_LINKS.program],
          ["Duration", "修讀時間", "Confirm your pathway’s study timeline", "確認所選途徑的修讀時間", MBA_LINKS.program],
          ["Academic pathway", "學術進修途徑", "Explore stages and progression requirements", "了解各階段與銜接要求", MBA_LINKS.program],
          ["Admission requirements", "入學要求", "Request an individual eligibility review", "申請個別入學資格評估", MBA_LINKS.eligibility],
          ["Tuition & fees", "學費與相關費用", "Request current tuition information", "查詢最新學費資訊", MBA_LINKS.tuition],
          ["Awarding institution", "學位授予機構", "Confirm the institution for your pathway", "確認所選途徑的學位授予機構", MBA_LINKS.program],
        ].map(([en, zh, descEn, descZh, href]) => <div key={en} className="py-7 pr-6 border-b border-border"><dt className="text-sm text-muted-foreground mb-3">{t(en, zh)}</dt><dd>{textLink(href, descEn, descZh)}</dd></div>)}</dl><div className="flex flex-col sm:flex-row gap-3 mt-9">{action(MBA_LINKS.program, "View Program Details", "查看課程詳情")}{action(MBA_LINKS.tuition, "Tuition & Fees", "學費與費用資訊", true)}</div></div></section>

        <section className="bg-muted py-20 md:py-28"><div className="section-container"><div className="max-w-3xl"><p className="cnc-eyebrow text-muted-foreground mb-5">{t("HSIN HSIN EDUCATION", "欣欣教育")}</p><h2 className="cnc-heading font-display">{t("Your Education Journey, With Guidance Along the Way", "你的進修旅程，一路有專業指引")}</h2></div><div className="grid md:grid-cols-3 gap-10 mt-12">{support.map(([en, zh, descEn, descZh], i) => <article key={en}><p className="text-muted-foreground text-sm mb-4">0{i + 1}</p><h3 className="text-2xl font-display mb-4">{t(en, zh)}</h3><p className="text-muted-foreground text-sm leading-relaxed">{t(descEn, descZh)}</p></article>)}</div></div></section>

        <section className="py-20 md:py-28"><div className="section-container grid lg:grid-cols-12 gap-10 lg:gap-20"><div className="lg:col-span-4"><p className="cnc-eyebrow text-muted-foreground mb-5">{t("A FEW QUESTIONS, ANSWERED", "常見問題")}</p><h2 className="cnc-heading font-display mb-6">{t("Before You Begin", "開始之前，你可能想知道")}</h2>{textLink(MBA_LINKS.faq, "View All MBA FAQs", "查看完整 MBA 常見問題")}</div><Accordion type="single" collapsible className="lg:col-span-8">{faqs.map(([en, zh, descEn, descZh], i) => <AccordionItem value={`faq-${i}`} key={en}><AccordionTrigger className="text-base text-left gap-5 py-6">{t(en, zh)}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed text-base pr-6">{t(descEn, descZh)}</AccordionContent></AccordionItem>)}</Accordion></div>
          <div className="section-container mt-16"><div className="border-t border-border pt-10"><h3 className="font-display text-3xl mb-4">{t("Looking for Complete Program Information?", "想了解完整課程資訊？")}</h3><p className="text-muted-foreground leading-relaxed max-w-3xl mb-5">{t("Find detailed curriculum, admission requirements, tuition and application information on our dedicated MBA website.", "完整課程內容、入學要求、學費及申請資訊，請參閱 MBA 專屬網站。")}</p>{textLink(MBA_LINKS.website, "Explore Complete MBA Information", "探索完整 MBA 課程資訊")}
          <Accordion type="single" collapsible className="mt-8"><AccordionItem value="references"><AccordionTrigger className="text-sm text-left">{t("Previous program documents · Reference archive", "過往課程文件 · 參考資料")}</AccordionTrigger><AccordionContent><p className="text-muted-foreground leading-relaxed mb-5">{t("These existing documents are retained for reference only. The guides are dated 2025; fees, timelines and institution information have not been verified as current. Confirm all terms and request current application documents before applying.", "以下保留的文件僅供參考。課程指南為 2025 年版本；其中的費用、時間及教育機構資訊尚未確認為最新資料。申請前，請確認所有適用條款並索取最新申請文件。")}</p><div className="grid sm:grid-cols-2 gap-4">{MBA_REFERENCE_DOCUMENTS.map(d => <a key={d.file} href={d.file} download className="flex justify-between items-center gap-3 border border-border p-4 text-sm hover:bg-muted transition-colors">{t(d.en, d.zh)}<Download size={16} className="shrink-0" aria-hidden="true" /></a>)}</div></AccordionContent></AccordionItem></Accordion></div></div>
        </section>

        <section className="bg-primary text-primary-foreground py-20 md:py-24"><div className="section-container"><p className="cnc-eyebrow text-accent mb-5">{t("TAKE THE NEXT STEP", "踏出下一步")}</p><h2 className="cnc-heading font-display max-w-3xl">{t("Ready to Explore Your MBA Future?", "準備好探索你的 MBA 進修未來？")}</h2><p className="cnc-on-dark-muted text-base leading-relaxed max-w-2xl mt-6">{t("Discover program details, admission requirements, tuition information and personalized application guidance.", "了解課程詳情、入學要求、學費資訊，並獲得貼合自身背景的申請諮詢。")}</p><div className="flex flex-col sm:flex-row gap-3 mt-9">{action(MBA_LINKS.website, "Explore the MBA Website", "前往 MBA 專屬網站", false, true)}{action(MBA_LINKS.consultation, "Request a Free Consultation", "預約免費諮詢", true, true)}</div><div className="border-t border-primary-foreground/20 mt-12 pt-6 flex flex-wrap gap-5 justify-between text-sm cnc-on-dark-muted"><span>{t("Cloud Nine College · Presented by HSIN HSIN Education", "Cloud Nine College · 欣欣教育提供課程諮詢")}</span><Link to="/companies" className="inline-flex items-center gap-2 hover:underline">{t("Back to Our Portfolio", "返回企業組合")}<ArrowRight size={15} aria-hidden="true" /></Link></div></div></section>
      </div>
    </Layout>
  );
};

export default CloudNineCollege;
