import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-vet.jpg";
import { AppointmentForm } from "@/components/AppointmentForm";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {t("hero.title")}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("hero.description")}
            </p>
            <ul className="space-y-3 text-foreground">
              {t("hero.feature1") && (
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-primary">✓</div>
                  <span>{t("hero.feature1")}</span>
                </li>
              )}
              {t("hero.feature2", { defaultValue: "" }) && (
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-primary">✓</div>
                  <span>{t("hero.feature2")}</span>
                </li>
              )}
              {t("hero.feature3", { defaultValue: "" }) && (
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-primary">✓</div>
                  <span>{t("hero.feature3")}</span>
                </li>
              )}
              {t("hero.feature4", { defaultValue: "" }) && (
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-primary">✓</div>
                  <span>{t("hero.feature4")}</span>
                </li>
              )}
            </ul>

            <AppointmentForm>
              <Button variant="hero" size="xl" className="mt-4">
                {t("hero.bookButton")}
              </Button>
            </AppointmentForm>

            <div className="pt-6 space-y-3 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">
                {t("hero.bookingInfo")}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{t("hero.location")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{t("hero.hours")}</span>
                </div>
              </div>
              <p className="text-muted-foreground italic">{t("hero.noEmergency")}</p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-medium">
              <img
                src={heroImage}
                alt="Veterinária atendendo cachorro em casa"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
