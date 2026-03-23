import pageTitleBg from "@/assets/page-title-bg.webp";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => {
  return (
    <section className="relative min-h-[32vh] md:min-h-[36vh] flex items-end overflow-hidden">
      <img
        src={pageTitleBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 page-overlay" />
      <div className="relative z-10 section-container w-full pb-12 md:pb-16 pt-20">
        <h1 className="font-display text-3xl md:text-5xl lg:text-[3.5rem] text-primary-foreground font-medium tracking-tight leading-[1.1]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-primary-foreground/50 text-sm md:text-base max-w-xl font-light tracking-wide">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;