import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { Mail, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", type: "general", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <SEO
        title="Contact HSIN HSIN | Vancouver Family Enterprise"
        description="Get in touch with HSIN HSIN Family Enterprise in Vancouver, Canada. Reach out for general inquiries, partnership opportunities, or brand collaboration."
        path="/contact"
      />

      <PageHero title={t("Contact HSIN HSIN", "聯繫欣欣")} />
      <section className="py-16 md:py-24">
        <div className="section-container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="font-display text-2xl text-foreground mb-6">
                HSIN HSIN Family Enterprise
              </h2>
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin size={18} className="text-accent mt-0.5" />
                  <span>Vancouver, BC, Canada</span>
                </div>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Mail size={18} className="text-accent mt-0.5" />
                  <a href="mailto:info@hsinhsin.ca" className="hover:text-accent transition-colors">info@hsinhsin.ca</a>
                </div>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground mb-8">
                <p>{t("General inquiries", "一般諮詢")}</p>
                <p>{t("Partnership inquiries", "合作諮詢")}</p>
                <p>{t("Brand collaboration inquiries", "品牌合作諮詢")}</p>
              </div>
              <div className="flex flex-col gap-2">
                <Link to="/about" className="inline-flex items-center gap-1 text-accent text-sm font-medium hover:gap-2 transition-all">
                  {t("About HSIN HSIN", "關於欣欣")} <ArrowRight size={14} />
                </Link>
                <Link to="/companies" className="inline-flex items-center gap-1 text-accent text-sm font-medium hover:gap-2 transition-all">
                  {t("Our Companies", "旗下企業")} <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="bg-secondary rounded-lg p-8 text-center">
                  <h3 className="font-display text-xl text-foreground mb-2">
                    {t("Thank you for reaching out.", "感謝您的來信。")}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t("We will be in touch shortly.", "我們會盡快與您聯繫。")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="contact-name" className="text-xs uppercase tracking-widest text-accent font-medium block mb-1.5">
                      {t("Name", "姓名")}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-border rounded px-4 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="text-xs uppercase tracking-widest text-accent font-medium block mb-1.5">
                      {t("Email", "電子郵件")}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-border rounded px-4 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-type" className="text-xs uppercase tracking-widest text-accent font-medium block mb-1.5">
                      {t("Inquiry Type", "諮詢類型")}
                    </label>
                    <select
                      id="contact-type"
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className="w-full border border-border rounded px-4 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                    >
                      <option value="general">{t("General Inquiry", "一般諮詢")}</option>
                      <option value="partnership">{t("Partnership Inquiry", "合作諮詢")}</option>
                      <option value="brand">{t("Brand Collaboration", "品牌合作")}</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="text-xs uppercase tracking-widest text-accent font-medium block mb-1.5">
                      {t("Message", "訊息")}
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      maxLength={1000}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-border rounded px-4 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full text-center">
                    {t("Send Message", "發送訊息")}
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
