import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">
          <header className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t("blog.title")}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t("blog.subtitle")}
            </p>
          </header>

          <div className="max-w-3xl mx-auto prose prose-lg text-muted-foreground">
            <p>{t("blog.comingSoon")}</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
