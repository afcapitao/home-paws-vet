import { Button } from "@/components/ui/button";
import { Clock, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-vet.jpg";
import { AppointmentForm } from "@/components/AppointmentForm";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="space-y-8">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            {t("hero.title")}
          </h1>

          {/* Description with Image */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-start">
            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed text-justify order-1 md:col-start-1 md:row-start-1">
              {t("hero.description")}
            </p>

            {/* Image */}
            <div className="relative order-2 md:col-start-2 md:row-start-1 lg:row-span-2">
              <div className="relative rounded-2xl overflow-hidden shadow-medium">
                <img
                  src={heroImage}
                  alt="Veterinária atendendo cachorro em casa"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-3 text-foreground order-3 md:col-span-2 md:row-start-2 lg:col-span-1 lg:col-start-1 lg:row-start-2">
              {t("hero.feature1") && (
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-primary">✓</div>
                  <span>{t("hero.feature1")}</span>
                </li>
              )}
              {t("hero.feature2", { defaultValue: "" }) && (
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-primary">✓</div>
                  <span className="text-justify">{t("hero.feature2")}</span>
                </li>
              )}
              {t("hero.feature3", { defaultValue: "" }) && (
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-primary">✓</div>
                  <span className="text-justify">{t("hero.feature3")}</span>
                </li>
              )}
              {t("hero.feature4", { defaultValue: "" }) && (
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-primary">✓</div>
                  <span>{t("hero.feature4")}</span>
                </li>
              )}
            </ul>
          </div>

          {/* Rest of Content */}
          <div className="space-y-6">

            <div className="flex justify-center">
              <AppointmentForm>
                <Button variant="hero" size="xl" className="mt-4">
                  {t("hero.bookButton")}
                </Button>
              </AppointmentForm>
            </div>

            <div className="pt-6 space-y-4 text-sm text-muted-foreground">
              <p className="font-medium text-foreground text-justify">
                {t("hero.bookingInfo")}
              </p>
              
              <div id="area" className="space-y-2 scroll-mt-20">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-primary mt-0.5" />
                  <h3 className="font-semibold text-foreground">{t("hero.locationLabel")}</h3>
                </div>
                <div className="text-sm space-y-1 text-justify">
                  <p><span className="font-medium">Lisboa Oriental e Norte:</span> Ameixoeira e Charneca, Alvalade, Areeiro, Alta de Lisboa, Benfica, Carnide, Lumiar, Marvila, Olivais, Parque das Nações;</p>
                  <p><span className="font-medium">Loures:</span> Moscavide e Portela, Sacavém e Prior Velho, Sª Iria de Azóia, São João da Talha e Bobadela, Camarate, Unhos e Apelação.</p>
                  <p><span className="font-medium">Vila Franca de Xira:</span> Póvoa de Santa Iria, Forte da Casa, Vialonga, Alverca do Ribatejo</p>
                </div>
              </div>

              <div id="horario" className="space-y-2 scroll-mt-20">
                <div className="flex items-start gap-2">
                  <Clock className="h-4 w-4 text-primary mt-0.5" />
                  <h3 className="font-semibold text-foreground">{t("hero.hoursLabel")}</h3>
                </div>
                <div className="text-sm">
                  <p>{t("hero.hours")}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground italic">{t("hero.noEmergency")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
