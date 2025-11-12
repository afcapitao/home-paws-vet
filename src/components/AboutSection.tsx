import { Card } from "@/components/ui/card";
import { User } from "lucide-react";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            {t("nav.about")}
          </h2>
          
          <Card className="overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 p-8">
              {/* Photo placeholder - passport style */}
              <div className="flex items-start justify-center md:justify-start">
                <div className="w-48 h-60 bg-gradient-hero rounded-lg flex items-center justify-center shrink-0">
                  <User className="w-20 h-20 text-primary opacity-30" />
                </div>
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
