import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";

const Blog = () => {
  const { t } = useTranslation();
  const posts = t("blog.posts", { returnObjects: true }) as Array<{
    title: string;
    subtitle: string;
    items: string[];
  }>;

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

          <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
            {posts.map((post, i) => (
              <article
                key={i}
                className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  {post.subtitle}
                </p>
                <ul className="space-y-2">
                  {post.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
