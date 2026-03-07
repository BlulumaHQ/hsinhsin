import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <PageHero
        title={t("Contact Us", "聯繫我們")}
      />
      <section className="py-16 md:py-24">
        <div className="section-container max-w-2xl text-center">
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">
            HSIN HSIN Family Enterprise
          </h2>
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <MapPin size={18} className="text-accent" />
              <span>Vancouver, Canada</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Mail size={18} className="text-accent" />
              <a href="mailto:info@hsinhsin.ca" className="hover:text-accent transition-colors">info@hsinhsin.ca</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
