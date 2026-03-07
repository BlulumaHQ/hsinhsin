import skylineImg from "@/assets/vancouver-skyline.jpg";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  isHome?: boolean;
}

const PageHero = ({ title, subtitle, isHome }: PageHeroProps) => {
  return (
    <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
      <img
        src={skylineImg}
        alt="Vancouver skyline"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className={`absolute inset-0 ${isHome ? "hero-overlay" : "page-overlay"}`} />
      <div className="relative z-10 text-center px-4 py-20 md:py-28">
        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-primary-foreground/70 text-base md:text-lg max-w-2xl mx-auto font-light">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
