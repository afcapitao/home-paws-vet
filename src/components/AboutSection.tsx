import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import draSofiaPhoto from "@/assets/dra-sofia-correia.jpg";

const AboutSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="quem-sou" className="py-16 bg-muted/30 scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            {t("nav.about")}
          </h2>
          
          <Card className="overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 p-8">
              {/* Photo and name */}
              <div className="flex flex-col items-center md:items-start gap-3">
                <div className="w-48 h-60 rounded-lg overflow-hidden shrink-0">
                  <img 
                    src={draSofiaPhoto} 
                    alt="Dra. Sofia Correia - Médica Veterinária"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-foreground">Dra. Sofia Correia</p>
              </div>
              
              {/* Description */}
              <div className="flex flex-col justify-center space-y-4 flex-1">
                <p className="text-base text-muted-foreground leading-relaxed text-justify">
                  {t("about.description")}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
