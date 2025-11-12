import ServiceCard from "./ServiceCard";
import { Stethoscope, Syringe, Radio, FileText, Microscope, ScanLine, Scissors } from "lucide-react";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: Stethoscope,
      title: t("services.consultations.title"),
      description: t("services.consultations.description"),
    },
    {
      icon: Radio,
      title: t("services.microchip.title"),
      description: t("services.microchip.description"),
    },
    {
      icon: Syringe,
      title: t("services.prophylaxis.title"),
      description: t("services.prophylaxis.description"),
    },
    {
      icon: FileText,
      title: t("services.healthCertificate.title"),
      description: t("services.healthCertificate.description"),
    },
    {
      icon: ScanLine,
      title: t("services.imaging.title"),
      description: t("services.imaging.description"),
    },
    {
      icon: Microscope,
      title: t("services.exams.title"),
      description: t("services.exams.description"),
    },
    {
      icon: Scissors,
      title: t("services.surgery.title"),
      description: t("services.surgery.description"),
    },
  ];

  return (
    <section id="servicos" className="py-16 bg-background scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("services.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
