import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <section className="py-32 md:py-48">
        <div className="section-container text-center">
          <p className="text-accent text-[11px] uppercase tracking-[0.3em] font-sans font-semibold mb-4">404</p>
          <h1 className="font-display text-4xl md:text-6xl text-foreground mb-6">Page Not Found</h1>
          <p className="text-muted-foreground text-sm mb-10">The page you're looking for doesn't exist.</p>
          <Link to="/" className="btn-primary">Return Home</Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;