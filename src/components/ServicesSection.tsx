import ServiceCard from "./ServiceCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Syringe, Radio, FileText, MoreHorizontal } from "lucide-react";
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
      icon: Radio,
      title: t("services.microchip.title"),
      description: t("services.microchip.description"),
    },
    {
      icon: FileText,
      title: t("services.healthCertificate.title"),
      description: t("services.healthCertificate.description"),
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
          
          {/* Other Services Card */}
          <Card className="hover:shadow-medium transition-all hover:-translate-y-1 border-border">
            <CardHeader>
              <div className="mb-4 inline-flex p-3 bg-gradient-hero rounded-lg">
                <MoreHorizontal className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">{t("services.otherServices.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground text-base leading-relaxed">
                <li className="flex items-start gap-2">
                  <span>–</span>
                  <span>
                    {t("services.otherServices.labTests")}
                    <span className="text-sm"> {t("services.otherServices.labTestsNote")}</span>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>–</span>
                  <span>{t("services.otherServices.imaging")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>–</span>
                  <span>{t("services.otherServices.surgery")}</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground italic">
                {t("services.otherServices.footnote")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
