import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { Mail, MapPin, ArrowRight, Loader2 } from "lucide-react";

const FORMSPREE_URL = "https://formspree.io/f/mwvrklpb";

const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", subject: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          _subject: "HSIN HSIN Website Inquiry",
          _source: "HSIN HSIN Contact Page",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = "w-full border border-border bg-transparent rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent/50 transition-colors";

  return (
    <Layout>
      <SEO
        title="Contact HSIN HSIN | Vancouver Family Enterprise"
        description="Get in touch with HSIN HSIN Family Enterprise in Vancouver, Canada. Reach out for general inquiries, partnership opportunities, or brand collaboration."
        path="/contact"
      />

      <PageHero title={t("Contact", "聯繫")} />

      <section className="py-24 md:py-36">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Info */}
            <div className="lg:col-span-5">
              <p className="label-accent mb-4">{t("Get in Touch", "與我們聯繫")}</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground leading-[1.15] mb-8">
                HSIN HSIN Family Enterprise
              </h2>
              <div className="divider-accent mb-8" />
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4 text-muted-foreground text-sm">
                  <MapPin size={16} className="text-accent/60 mt-0.5 flex-shrink-0" />
                  <span>Vancouver, BC, Canada</span>
                </div>
                <div className="flex items-start gap-4 text-muted-foreground text-sm">
                  <Mail size={16} className="text-accent/60 mt-0.5 flex-shrink-0" />
                  <a href="mailto:info@hsinhsin.ca" className="hover:text-accent transition-colors">info@hsinhsin.ca</a>
                </div>
              </div>
              <div className="space-y-2 text-muted-foreground/60 text-sm mb-10">
                <p>{t("General inquiries", "一般諮詢")}</p>
                <p>{t("Partnership inquiries", "合作諮詢")}</p>
                <p>{t("Brand collaboration inquiries", "品牌合作諮詢")}</p>
              </div>
              <div className="flex flex-col gap-3">
                <Link to="/about" className="inline-flex items-center gap-2 text-accent text-[12px] font-medium tracking-[0.1em] uppercase hover:gap-3 transition-all">
                  {t("About HSIN HSIN", "關於欣欣")} <ArrowRight size={13} />
                </Link>
                <Link to="/companies" className="inline-flex items-center gap-2 text-accent text-[12px] font-medium tracking-[0.1em] uppercase hover:gap-3 transition-all">
                  {t("Our Companies", "旗下企業")} <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              {status === "success" ? (
                <div className="bg-secondary p-12 text-center">
                  <h3 className="font-display text-2xl text-foreground mb-3">
                    {t("Thank you for your message.", "感謝您的來信。")}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t(
                      "Your inquiry has been sent successfully. We will get back to you soon.",
                      "您的訊息已成功送出，我們將盡快與您聯絡。"
                    )}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/60 font-medium block mb-2">{t("Name", "姓名")} *</label>
                      <input name="name" type="text" required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/60 font-medium block mb-2">{t("Email", "電子郵件")} *</label>
                      <input name="email" type="email" required maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/60 font-medium block mb-2">{t("Phone", "電話")}</label>
                      <input name="phone" type="tel" maxLength={30} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} />
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/60 font-medium block mb-2">{t("Company", "公司")}</label>
                      <input name="company" type="text" maxLength={150} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/60 font-medium block mb-2">{t("Subject", "主旨")}</label>
                    <input name="subject" type="text" maxLength={200} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/60 font-medium block mb-2">{t("Message", "訊息")} *</label>
                    <textarea name="message" required rows={6} maxLength={2000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} />
                  </div>

                  {status === "error" && (
                    <p className="text-destructive text-sm">
                      {t("Something went wrong. Please try again later.", "發生錯誤，請稍後再試。")}
                    </p>
                  )}

                  <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed">
                    {status === "sending" ? (
                      <span className="flex items-center gap-2"><Loader2 size={14} className="animate-spin" /> {t("Sending...", "發送中...")}</span>
                    ) : (
                      t("Send Message", "發送訊息")
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;