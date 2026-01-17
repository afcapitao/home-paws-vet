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
            {/* Description and Services */}
            <div className="order-1 md:col-start-1 md:row-start-1 space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                {t("hero.description")}
              </p>
              <div>
                <p className="text-foreground font-medium mb-2">{t("hero.servicesLabel")}</p>
                <ul className="space-y-1 text-muted-foreground">
                  {(t("hero.servicesList", { returnObjects: true }) as string[]).map((service, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary">–</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

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
