import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import logoImg from "@/assets/logo-hsinhsin-new.png";

const Footer = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Upper footer */}
      <div className="section-container pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0">
          {/* Logo column */}
          <div className="lg:col-span-4">
            <img src={logoImg} alt="HSIN HSIN" className="h-[52px] w-auto mb-6 opacity-90" />
            <p className="text-primary-foreground/40 text-sm leading-relaxed max-w-[300px] font-light">
              {t(
                "Professional · Innovative · Extraordinary Rooted in Value.",
                "專業・創新・非凡，為價值而生。"
              )}
            </p>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-3" />

          {/* Right columns */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-primary-foreground/30 mb-6">
                {t("Navigate", "導航")}
              </h4>
              <div className="flex flex-col gap-3">
                {[
                  { path: "/about", en: "About", zh: "關於" },
                  { path: "/companies", en: "Companies", zh: "企業" },
                  { path: "/founder", en: "Our Story", zh: "故事" },
                  { path: "/community", en: "Community", zh: "社區" },
                  { path: "/insights", en: "Insights", zh: "觀點" },
                  { path: "/contact", en: "Contact", zh: "聯繫" },
                ].map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className="text-left text-primary-foreground/45 hover:text-primary-foreground/80 text-sm transition-colors duration-300"
                  >
                    {t(item.en, item.zh)}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-primary-foreground/30 mb-6">
                {t("Contact", "聯繫")}
              </h4>
              <div className="space-y-3 text-primary-foreground/45 text-sm">
                <p>Vancouver, BC</p>
                <p>Canada</p>
                <a href="mailto:info@hsinhsin.ca" className="block hover:text-primary-foreground/80 transition-colors">
                  info@hsinhsin.ca
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/5">
        <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-primary-foreground/25 text-[11px] tracking-wider">
            © {new Date().getFullYear()} HSIN HSIN Family Enterprise Group. {t("All rights reserved.", "版權所有。")}
          </p>
          <p className="text-primary-foreground/25 text-[11px] tracking-wider">
            Web Design by{" "}
            <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="text-accent/70 hover:text-accent transition-colors">
              Bluluma
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;