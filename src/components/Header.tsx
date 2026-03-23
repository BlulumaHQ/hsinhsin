import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo-hsinhsin-new.png";

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { path: "/", labelEn: "Home", labelZh: "首頁" },
    { path: "/about", labelEn: "About", labelZh: "關於" },
    { path: "/companies", labelEn: "Companies", labelZh: "企業" },
    { path: "/founder", labelEn: "Our Story", labelZh: "故事" },
    { path: "/community", labelEn: "Community", labelZh: "社區" },
    { path: "/insights", labelEn: "Insights", labelZh: "觀點" },
    { path: "/contact", labelEn: "Contact", labelZh: "聯繫" },
  ];

  const handleNavClick = (path: string) => {
    setMenuOpen(false);
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#2e2c2a] backdrop-blur-md shadow-lg"
          : "bg-primary/90 backdrop-blur-sm"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <button onClick={() => handleNavClick("/")} className="flex items-center">
          <img src={logoImg} alt="HSIN HSIN" className="h-[42px] md:h-[56px] w-auto" />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              className={`relative px-4 py-2 text-[13px] font-medium tracking-[0.08em] uppercase transition-all duration-300 ${
                location.pathname === item.path
                  ? "text-accent"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {t(item.labelEn, item.labelZh)}
              {location.pathname === item.path && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[1.5px] bg-accent" />
              )}
            </button>
          ))}
          <button
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            className="text-primary-foreground/50 hover:text-primary-foreground text-[12px] font-medium ml-3 border border-primary-foreground/15 px-3 py-1.5 rounded-sm tracking-wider transition-all"
          >
            {lang === "en" ? "中文" : "EN"}
          </button>
        </nav>

        {/* Mobile */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            className="text-primary-foreground/50 text-[11px] font-medium border border-primary-foreground/15 px-2.5 py-1 rounded-sm"
          >
            {lang === "en" ? "中文" : "EN"}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-primary-foreground/80">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="lg:hidden bg-primary/98 backdrop-blur-md border-t border-primary-foreground/5 pb-6">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              className={`block w-full text-left px-8 py-3 text-[13px] tracking-[0.08em] uppercase transition-colors ${
                location.pathname === item.path
                  ? "text-accent"
                  : "text-primary-foreground/60 hover:text-primary-foreground"
              }`}
            >
              {t(item.labelEn, item.labelZh)}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;