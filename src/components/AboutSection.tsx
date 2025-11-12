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
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Photo placeholder */}
              <div className="flex items-center justify-center">
                <div className="w-full aspect-square max-w-sm bg-gradient-hero rounded-lg flex items-center justify-center">
                  <User className="w-32 h-32 text-primary opacity-30" />
                </div>
              </div>
              
              {/* Description */}
              <div className="flex flex-col justify-center space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed text-justify">
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
