import ServiceCard from "./ServiceCard";
import { Stethoscope, Syringe, Radio, FileText, TestTubes, Feather } from "lucide-react";
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
      icon: Syringe,
      title: t("services.prophylaxis.title"),
      description: t("services.prophylaxis.description"),
    },
    {
      icon: TestTubes,
      title: t("services.labTests.title"),
      description: t("services.labTests.description"),
    },
    {
      icon: Radio,
      title: t("services.microchip.title"),
      description: t("services.microchip.description"),
    },
    {
      icon: FileText,
      title: t("services.healthCertificate.title"),
      description: t("services.healthCertificate.description"),
    },
    {
      icon: Feather,
      title: t("services.euthanasia.title"),
      description: t("services.euthanasia.description"),
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

        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
