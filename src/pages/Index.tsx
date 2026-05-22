import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "pt";

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Pet Home Vet — Veterinário ao Domicílio em Lisboa | Consultas, Vacinação</title>
        <meta name="description" content={lang === "en"
          ? "Home veterinary care for dogs and cats in Eastern Lisbon, Loures and Vila Franca de Xira. Consultations, vaccination, microchip and European passport."
          : "Atendimento médico-veterinário ao domicílio de cães e gatos em Lisboa Oriental, Loures e Vila Franca de Xira. Consultas, vacinação, microchip e passaporte europeu."
        } />
        <link rel="canonical" href="https://pethomevet.pt/" />
        <meta property="og:url" content="https://pethomevet.pt/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <TestimonialsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
