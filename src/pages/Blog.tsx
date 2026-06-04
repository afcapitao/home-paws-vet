import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";
import { Helmet } from "react-helmet-async";

type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

type Subsection = {
  heading: string;
  content: ContentBlock[];
};

type Section = {
  heading: string;
  content?: ContentBlock[];
  subsections?: Subsection[];
};

type Article = {
  intro: string[];
  sections: Section[];
};

const renderBlocks = (blocks: ContentBlock[]) =>
  blocks.map((block, i) => {
    if (block.type === "paragraph") {
      return (
        <p key={i} className="text-foreground leading-relaxed mb-3">
          {block.text}
        </p>
      );
    }
    return (
      <ul key={i} className="space-y-2 mb-4">
        {block.items.map((item, j) => (
          <li key={j} className="flex items-start gap-2 text-foreground">
            <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  });

const Blog = () => {
  const { t, i18n } = useTranslation();
  const article = t("blog.article", { returnObjects: true }) as Article;
  const pageTitle = `${t("blog.title")} | Pet Home Vet`;
  const metaDescription = t("blog.metaDescription");
  const lang = i18n.language === "en" ? "en" : "pt";
  const canonicalUrl = "https://pethomevet.pt/veterinario-ao-domicilio/";
  const canonicalUrlEn = "https://pethomevet.pt/veterinario-ao-domicilio/?lang=en";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t("blog.title"),
    "description": metaDescription,
    "url": lang === "en" ? canonicalUrlEn : canonicalUrl,
    "inLanguage": lang === "en" ? "en-GB" : "pt-PT",
    "datePublished": "2026-05-17",
    "dateModified": "2026-05-17",
    "author": {
      "@type": "Person",
      "name": "Dra. Sofia Correia",
      "jobTitle": "Médica Veterinária"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Pet Home Vet",
      "url": "https://pethomevet.pt"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={lang === "en" ? canonicalUrlEn : canonicalUrl} />
        <link rel="alternate" hrefLang="pt" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href={canonicalUrlEn} />
        <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={lang === "en" ? canonicalUrlEn : canonicalUrl} />
        <meta property="og:locale" content={lang === "en" ? "en_GB" : "pt_PT"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>
      <Navbar />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">
          <header className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              {t("blog.title")}
            </h1>
          </header>

          <article className="max-w-3xl mx-auto">
            <div className="mb-10 space-y-4">
              {article.intro.map((para, i) => (
                <p key={i} className="text-lg text-foreground leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {article.sections.map((section, i) => (
              <div key={i} className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4 border-b border-border pb-2">
                  {section.heading}
                </h2>

                {section.content && renderBlocks(section.content)}

                {section.subsections?.map((sub, j) => (
                  <div key={j} className="mb-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {sub.heading}
                    </h3>
                    {renderBlocks(sub.content)}
                  </div>
                ))}
              </div>
            ))}
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
