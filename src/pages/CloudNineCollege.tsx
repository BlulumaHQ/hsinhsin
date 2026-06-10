import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import {
  ArrowRight,
  ChevronDown,
  Clock,
  Globe,
  GraduationCap,
  Award,
  Briefcase,
  CalendarClock,
  Laptop,
  FileCheck,
  Download,
  FileText,
  Mail,
  MapPin,
  ExternalLink,
  Loader2,
  X,
  CheckCircle2,
} from "lucide-react";
import heroImg from "@/assets/cnc-hero.jpg";
import logoCloudNine from "@/assets/logo-cloud-nine.png";

const FORMSPREE_URL = "https://formspree.io/f/mwvrklpb";

const CloudNineCollege = () => {
  const { t } = useLanguage();
  const [showPathways, setShowPathways] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    educationLevel: "",
    program: "",
    message: "",
    consent: false,
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) return;
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          _subject: "Cloud Nine College — Program Inquiry",
          _source: "Cloud Nine College Landing Page",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({
          firstName: "", lastName: "", email: "", phone: "", country: "",
          educationLevel: "", program: "", message: "", consent: false,
        });
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const inputCls =
    "w-full border border-[#cfd8e5] bg-white rounded-sm px-4 py-3 text-sm text-[#0b2545] placeholder:text-[#7a8aa1] focus:outline-none focus:border-[#1d4ed8] transition-colors";

  const features = [
    { icon: Laptop, en: "100% Online Learning", zh: "100% 線上學習" },
    { icon: GraduationCap, en: "Live Lectures", zh: "即時直播課程" },
    { icon: CalendarClock, en: "Flexible Schedule", zh: "彈性時間安排" },
    { icon: Globe, en: "UK Public University Pathways", zh: "英國公立大學銜接" },
    { icon: Award, en: "Internationally Recognized Degree", zh: "國際認可學位" },
    { icon: Briefcase, en: "Suitable for Working Professionals", zh: "適合在職專業人士" },
    { icon: FileCheck, en: "Assignment-Based Learning", zh: "以作業為基礎的學習" },
    { icon: CheckCircle2, en: "WES Friendly Qualification Pathway", zh: "WES 認證友好途徑" },
  ];

  const courses = [
    {
      en: "Entrepreneurship & Innovation",
      zh: "創業與創新",
      descEn: "Develop the strategic and analytical mindset required to lead new ventures.",
      descZh: "建立領導新事業所需的策略思維與分析能力。",
    },
    {
      en: "Strategic Management",
      zh: "策略管理",
      descEn: "Frameworks for long-term organizational direction and competitive positioning.",
      descZh: "建立長期組織方向與競爭定位的核心框架。",
    },
    {
      en: "Strategic Human Resource Management",
      zh: "策略性人力資源管理",
      descEn: "Build people-centred strategies that align talent with business objectives.",
      descZh: "建立以人為本的策略，使人才與企業目標一致。",
    },
    {
      en: "Marketing Strategy",
      zh: "行銷策略",
      descEn: "Contemporary approaches to brand, customer insight and market development.",
      descZh: "當代品牌、顧客洞察與市場拓展的策略方法。",
    },
    {
      en: "Financial Management",
      zh: "財務管理",
      descEn: "Principles of corporate finance, performance and value creation.",
      descZh: "企業財務、績效與價值創造的核心原則。",
    },
    {
      en: "Business Research Project",
      zh: "商業研究專題",
      descEn: "An applied dissertation supervised by experienced UK academic staff.",
      descZh: "由經驗豐富的英國學者指導的應用型論文研究。",
    },
  ];

  const downloads = [
    {
      en: "UK MBA Program Guide (English)",
      zh: "英國 MBA 課程指南（英文）",
      descEn: "Complete program structure, modules and admission details.",
      descZh: "完整課程架構、模組與入學細節。",
      file: "/downloads/uk-mba-program-guide-en.pdf",
    },
    {
      en: "UK MBA Program Guide (Traditional Chinese)",
      zh: "英國 MBA 課程指南（繁體中文）",
      descEn: "中文版本，方便繁體中文讀者參考。",
      descZh: "繁體中文版完整課程資訊。",
      file: "/downloads/uk-mba-program-guide-zh.pdf",
    },
    {
      en: "MBA Brochure",
      zh: "MBA 課程簡介",
      descEn: "Three-fold visual overview of the Online MBA program.",
      descZh: "線上 MBA 課程的視覺三摺頁概覽。",
      file: "/downloads/mba-brochure.pdf",
    },
    {
      en: "Cloud Nine College Program Overview",
      zh: "九霄學院課程總覽",
      descEn: "An overview of all programs offered by Cloud Nine College.",
      descZh: "九霄學院提供的所有課程綜合介紹。",
      file: "/downloads/cnc-program-overview.pdf",
    },
    {
      en: "Application Form",
      zh: "申請表格",
      descEn: "Official application and agreement documentation.",
      descZh: "正式申請與協議文件。",
      file: "/downloads/application-form.pdf",
    },
  ];

  const pathways = [
    "University of Chichester",
    "Canterbury Christ Church University",
    "University of Gloucestershire",
    "Other Selected UK Public University Partners",
  ];

  return (
    <Layout>
      <SEO
        title="UK Online MBA | Cloud Nine College | HSINHSIN Family Office"
        description="Explore flexible UK University Pathway and Online MBA programs through Cloud Nine College. Internationally recognized education designed for working professionals."
        path="/cloud-nine-college"
      />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0b2545]">
        <img
          src={heroImg}
          alt="Historic UK university campus with gothic spires"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(11,37,69,0.85) 0%, rgba(11,37,69,0.55) 50%, rgba(11,37,69,0.35) 100%)",
          }}
        />
        <div className="relative z-10 section-container w-full pt-32 pb-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-10 bg-white/60" />
              <p className="text-white/80 text-[11px] uppercase tracking-[0.3em] font-sans font-semibold">
                {t("Cloud Nine College", "九霄學院")}
              </p>
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white font-medium leading-[1.05] tracking-tight">
              {t("UK University Pathway & Online MBA", "英國大學銜接與線上 MBA")}
            </h1>
            <p className="text-white/75 mt-8 text-base md:text-lg leading-relaxed max-w-2xl font-light">
              {t(
                "Flexible international education pathways designed for working professionals and students seeking globally recognized qualifications.",
                "為在職專業人士與追求國際認可學歷的學生，打造彈性的國際教育銜接途徑。"
              )}
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <a
                href="#inquiry"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#0b2545] font-sans font-medium text-[13px] tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#e6edf7]"
              >
                {t("Apply Now", "立即申請")}
              </a>
              <a
                href="#downloads"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-white/40 text-white font-sans font-medium text-[13px] tracking-[0.15em] uppercase transition-all duration-300 hover:border-white"
              >
                {t("Download Program Guide", "下載課程指南")}
              </a>
            </div>
          </div>
        </div>
        <a
          href="#about-program"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={26} className="animate-bounce" />
        </a>
      </section>

      {/* ═══════════ WHY CHOOSE ═══════════ */}
      <section id="about-program" className="py-24 md:py-32 bg-white">
        <div className="section-container">
          <div className="max-w-2xl mb-16">
            <p className="text-[#1d4ed8] text-[11px] uppercase tracking-[0.3em] font-sans font-semibold mb-4">
              {t("Program Highlights", "課程特色")}
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-[#0b2545] leading-[1.1] mb-6">
              {t("Why Choose This Program", "為何選擇此課程")}
            </h2>
            <div className="w-12 h-[1.5px] bg-[#1d4ed8]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e6edf7]">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-8 md:p-9 hover:bg-[#f5f8fc] transition-colors duration-300"
                >
                  <Icon size={28} className="text-[#1d4ed8] mb-5" strokeWidth={1.4} />
                  <p className="font-display text-lg md:text-xl text-[#0b2545] leading-snug">
                    {t(f.en, f.zh)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ ONLINE MBA (FEATURED) ═══════════ */}
      <section className="py-24 md:py-36 bg-[#0b2545] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }} />
        <div className="section-container relative">
          <div className="max-w-3xl mb-16">
            <p className="text-[#9bb5e3] text-[11px] uppercase tracking-[0.3em] font-sans font-semibold mb-4">
              {t("Flagship Program", "旗艦課程")}
            </p>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white leading-[1.05] mb-6">
              {t("UK Online MBA", "英國線上 MBA")}
            </h2>
            <p className="font-display text-xl md:text-2xl text-[#cfdcf0] italic leading-snug">
              {t(
                "Designed for ambitious professionals who want to accelerate their careers.",
                "為追求事業突破的專業人士量身打造。"
              )}
            </p>
            <div className="w-12 h-[1.5px] bg-white/50 mt-8" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Timeline */}
            <div className="lg:col-span-8 space-y-8">
              {[
                {
                  stage: t("Stage 1", "第一階段"),
                  title: t("Level 7 Postgraduate Diploma", "Level 7 研究生文憑"),
                  items: [
                    t("120 Credits", "120 學分"),
                    t("6 Courses", "6 門課程"),
                    t("Approximately 6 Months", "約 6 個月"),
                    t("Advanced Business Management", "高階商業管理"),
                  ],
                },
                {
                  stage: t("Stage 2", "第二階段"),
                  title: t("MBA Top-up Dissertation", "MBA 學位論文階段"),
                  items: [
                    t("60 Credit Dissertation", "60 學分論文"),
                    t("Supervisor Guided", "由導師指導"),
                    t("Business Research Project", "商業研究專題"),
                    t("UK Public University MBA Degree", "英國公立大學 MBA 學位"),
                  ],
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="relative border-l border-white/15 pl-8 md:pl-10 pb-2"
                >
                  <span className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-white" />
                  <p className="text-[#9bb5e3] text-[11px] uppercase tracking-[0.3em] font-sans font-semibold mb-3">
                    {s.stage}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl text-white mb-5 leading-snug">
                    {s.title}
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-[#cfdcf0]">
                    {s.items.map((it, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-[15px]">
                        <span className="mt-2 w-1 h-1 rounded-full bg-[#9bb5e3] flex-shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="pt-6">
                <button
                  onClick={() => setShowPathways(true)}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#0b2545] font-sans font-medium text-[13px] tracking-[0.15em] uppercase hover:bg-[#e6edf7] transition-colors"
                >
                  {t("View University Pathways", "查看大學銜接夥伴")} <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Side card */}
            <aside className="lg:col-span-4">
              <div className="bg-white text-[#0b2545] p-8 md:p-10">
                <p className="text-[#1d4ed8] text-[11px] uppercase tracking-[0.3em] font-sans font-semibold mb-4">
                  {t("Program Benefits", "課程優勢")}
                </p>
                <h3 className="font-display text-2xl md:text-3xl mb-6 leading-snug">
                  {t("Built for Professionals", "為職場專業人士而生")}
                </h3>
                <ul className="space-y-3 text-[15px] text-[#1f3a63]">
                  {[
                    [t("Flexible Learning", "彈性學習")],
                    [t("Complete within approximately 12 months", "約 12 個月內完成")],
                    [t("Optional accelerated completion", "可選擇加速完成")],
                    [t("International recognition", "國際學歷認可")],
                    [t("No traditional examinations", "無傳統考試")],
                    [t("Assignment-based evaluation", "以作業為基礎的評核")],
                    [t("Ideal for career advancement", "適合事業晉升者")],
                  ].map(([txt], i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#1d4ed8] mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                      <span>{txt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ═══════════ COURSE OVERVIEW ═══════════ */}
      <section className="py-24 md:py-32 bg-[#f5f8fc]">
        <div className="section-container">
          <div className="max-w-2xl mb-16">
            <p className="text-[#1d4ed8] text-[11px] uppercase tracking-[0.3em] font-sans font-semibold mb-4">
              {t("Curriculum", "課程內容")}
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-[#0b2545] leading-[1.1] mb-6">
              {t("Course Overview", "課程綜覽")}
            </h2>
            <div className="w-12 h-[1.5px] bg-[#1d4ed8]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((c, i) => (
              <article
                key={i}
                className="bg-white border border-[#e6edf7] p-8 hover:border-[#1d4ed8]/30 hover:shadow-[0_8px_30px_rgba(11,37,69,0.06)] transition-all duration-300"
              >
                <p className="font-display text-[#1d4ed8] text-3xl mb-4">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-xl md:text-2xl text-[#0b2545] mb-3 leading-snug">
                  {t(c.en, c.zh)}
                </h3>
                <p className="text-[#4f6c95] text-[14px] leading-relaxed">
                  {t(c.descEn, c.descZh)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ ADMISSION ═══════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-5">
              <p className="text-[#1d4ed8] text-[11px] uppercase tracking-[0.3em] font-sans font-semibold mb-4">
                {t("Admissions", "入學資訊")}
              </p>
              <h2 className="font-display text-3xl md:text-5xl text-[#0b2545] leading-[1.1] mb-6">
                {t("Admission Requirements", "入學要求")}
              </h2>
              <div className="w-12 h-[1.5px] bg-[#1d4ed8] mb-8" />
              <p className="text-[#4f6c95] leading-[1.8] text-[15px]">
                {t(
                  "Our admissions process is designed to evaluate both academic foundation and professional readiness.",
                  "我們的招生流程兼顧學術基礎與專業準備度。"
                )}
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-5">
                {[
                  [t("Bachelor Degree or equivalent qualification", "學士學位或同等學歷")],
                  [t("Relevant work experience may be required", "可能需要相關工作經驗")],
                  [t("English proficiency", "英語能力")],
                  [t("Suitable for domestic and international applicants", "適合本地及國際申請者")],
                ].map(([txt], i) => (
                  <li key={i} className="flex items-start gap-4 border-b border-[#e6edf7] pb-5">
                    <CheckCircle2 size={20} className="text-[#1d4ed8] mt-1 flex-shrink-0" strokeWidth={1.6} />
                    <span className="font-display text-lg md:text-xl text-[#0b2545]">{txt}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-[#7a8aa1] italic text-sm leading-relaxed">
                {t(
                  "Admission requirements may vary depending on the selected university pathway.",
                  "入學要求可能因所選大學銜接路徑而有所不同。"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ DOWNLOAD CENTER ═══════════ */}
      <section id="downloads" className="py-24 md:py-32 bg-[#0b2545] text-white">
        <div className="section-container">
          <div className="max-w-2xl mb-16">
            <p className="text-[#9bb5e3] text-[11px] uppercase tracking-[0.3em] font-sans font-semibold mb-4">
              {t("Program Resources", "課程資源")}
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-white leading-[1.1] mb-6">
              {t("Download Center", "下載中心")}
            </h2>
            <div className="w-12 h-[1.5px] bg-white/50 mb-6" />
            <p className="text-[#cfdcf0] leading-[1.8] text-[15px]">
              {t(
                "Download detailed brochures and application documents.",
                "下載詳細的課程簡介與申請文件。"
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloads.map((d, i) => (
              <a
                key={i}
                href={d.file}
                download
                className="group bg-white/[0.04] border border-white/10 p-8 hover:bg-white/[0.08] hover:border-white/30 transition-all duration-300 flex flex-col"
              >
                <FileText size={28} className="text-[#9bb5e3] mb-5" strokeWidth={1.4} />
                <h3 className="font-display text-xl text-white mb-3 leading-snug">
                  {t(d.en, d.zh)}
                </h3>
                <p className="text-[#cfdcf0]/80 text-[13px] leading-relaxed flex-1 mb-6">
                  {t(d.descEn, d.descZh)}
                </p>
                <span className="inline-flex items-center gap-2 text-[#9bb5e3] text-[12px] font-medium tracking-[0.1em] uppercase group-hover:text-white group-hover:gap-3 transition-all">
                  {t("Download PDF", "下載 PDF")} <Download size={13} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ INQUIRY FORM ═══════════ */}
      <section id="inquiry" className="py-24 md:py-32 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p className="text-[#1d4ed8] text-[11px] uppercase tracking-[0.3em] font-sans font-semibold mb-4">
                {t("Get Started", "開始諮詢")}
              </p>
              <h2 className="font-display text-3xl md:text-5xl text-[#0b2545] leading-[1.1] mb-6">
                {t("Request More Information", "索取更多資訊")}
              </h2>
              <div className="w-12 h-[1.5px] bg-[#1d4ed8] mb-8" />
              <p className="text-[#4f6c95] leading-[1.8] text-[15px]">
                {t(
                  "Our admissions advisors will follow up with detailed program information and the next steps tailored to your background.",
                  "我們的招生顧問將根據您的背景，提供詳細的課程資訊與後續步驟建議。"
                )}
              </p>
            </div>
            <div className="lg:col-span-8">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input className={inputCls} placeholder={t("First Name", "名字")} required
                  value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} maxLength={80} />
                <input className={inputCls} placeholder={t("Last Name", "姓氏")} required
                  value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} maxLength={80} />
                <input type="email" className={inputCls} placeholder={t("Email", "電子郵件")} required
                  value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={120} />
                <input className={inputCls} placeholder={t("Phone", "電話")}
                  value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={40} />
                <input className={inputCls} placeholder={t("Country", "國家 / 地區")}
                  value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} maxLength={80} />
                <input className={inputCls} placeholder={t("Current Education Level", "目前學歷")}
                  value={form.educationLevel} onChange={(e) => setForm({ ...form, educationLevel: e.target.value })} maxLength={120} />
                <select className={inputCls + " md:col-span-2"} required
                  value={form.program} onChange={(e) => setForm({ ...form, program: e.target.value })}>
                  <option value="">{t("Interested Program", "感興趣的課程")}</option>
                  <option value="UK Online MBA">{t("UK Online MBA", "英國線上 MBA")}</option>
                  <option value="UK University Pathway">{t("UK University Pathway", "英國大學銜接")}</option>
                  <option value="Level 7 Postgraduate Diploma">{t("Level 7 Postgraduate Diploma", "Level 7 研究生文憑")}</option>
                  <option value="Other">{t("Other", "其他")}</option>
                </select>
                <textarea className={inputCls + " md:col-span-2 min-h-[140px] resize-y"} placeholder={t("Message", "訊息")}
                  value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} />
                <label className="md:col-span-2 flex items-start gap-3 text-[#4f6c95] text-sm">
                  <input type="checkbox" className="mt-1 accent-[#1d4ed8]" required
                    checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} />
                  <span>{t("I agree to be contacted regarding this program.", "我同意接收與此課程相關的聯繫資訊。")}</span>
                </label>
                <div className="md:col-span-2 flex items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0b2545] text-white font-sans font-medium text-[13px] tracking-[0.15em] uppercase hover:bg-[#1d4ed8] transition-colors disabled:opacity-60"
                  >
                    {status === "sending" ? <Loader2 size={14} className="animate-spin" /> : null}
                    {t("Request Consultation", "預約諮詢")}
                  </button>
                  {status === "success" && (
                    <span className="text-[#1d4ed8] text-sm">{t("Thank you — we'll be in touch shortly.", "感謝您 — 我們將盡快與您聯繫。")}</span>
                  )}
                  {status === "error" && (
                    <span className="text-red-600 text-sm">{t("Something went wrong. Please try again.", "發生錯誤，請稍後再試。")}</span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CONTACT ═══════════ */}
      <section className="py-24 md:py-32 bg-[#f5f8fc] border-t border-[#e6edf7]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <img src={logoCloudNine} alt="Cloud Nine College logo" className="h-16 mb-8" />
              <h2 className="font-display text-3xl md:text-4xl text-[#0b2545] leading-[1.15] mb-6">
                {t("Cloud Nine College", "九霄學院")}
              </h2>
              <div className="space-y-3 text-[#4f6c95]">
                <p className="flex items-center gap-3 text-[15px]">
                  <MapPin size={16} className="text-[#1d4ed8]" />
                  {t("Vancouver, British Columbia, Canada", "加拿大卑詩省溫哥華")}
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 flex flex-wrap gap-3">
              <a
                href="https://cloudninecollege.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0b2545] text-white text-[13px] tracking-[0.15em] uppercase hover:bg-[#1d4ed8] transition-colors"
              >
                {t("Official Website", "官方網站")} <ExternalLink size={13} />
              </a>
              <a
                href="mailto:info@cloudninecollege.com"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#0b2545]/30 text-[#0b2545] text-[13px] tracking-[0.15em] uppercase hover:border-[#0b2545] transition-colors"
              >
                {t("Email Inquiry", "電郵諮詢")} <Mail size={13} />
              </a>
              <a
                href="/downloads/application-form.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#0b2545]/30 text-[#0b2545] text-[13px] tracking-[0.15em] uppercase hover:border-[#0b2545] transition-colors"
              >
                {t("Application Form", "申請表格")} <Download size={13} />
              </a>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-[#e6edf7] flex items-center justify-between flex-wrap gap-4">
            <p className="text-[#7a8aa1] text-sm">
              {t("Part of the HSIN HSIN Family Office ecosystem.", "隸屬於欣欣家族辦公室生態系統。")}
            </p>
            <Link to="/companies" className="text-[#1d4ed8] text-[13px] tracking-[0.1em] uppercase inline-flex items-center gap-2 hover:gap-3 transition-all">
              {t("Explore Our Ecosystem", "探索我們的生態系統")} <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ PATHWAYS MODAL ═══════════ */}
      {showPathways && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowPathways(false)}
        >
          <div
            className="bg-white max-w-xl w-full p-8 md:p-10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPathways(false)}
              className="absolute top-4 right-4 text-[#0b2545]/60 hover:text-[#0b2545]"
              aria-label="Close"
            >
              <X size={22} />
            </button>
            <p className="text-[#1d4ed8] text-[11px] uppercase tracking-[0.3em] font-sans font-semibold mb-3">
              {t("Partner Pathways", "合作銜接")}
            </p>
            <h3 className="font-display text-2xl md:text-3xl text-[#0b2545] mb-6 leading-snug">
              {t("UK University Pathways", "英國大學銜接夥伴")}
            </h3>
            <ul className="space-y-3 mb-6">
              {pathways.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-[#1f3a63] text-[15px]">
                  <GraduationCap size={18} className="text-[#1d4ed8] mt-0.5 flex-shrink-0" strokeWidth={1.6} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#7a8aa1] italic text-xs leading-relaxed">
              {t(
                "Partner universities are subject to change and confirmation at the time of application.",
                "合作大學以申請時確認的名單為準，內容可能有所變更。"
              )}
            </p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default CloudNineCollege;
