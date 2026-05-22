import { Button } from "@/components/ui/button";
import { Clock, MapPin, CheckCircle2, Stethoscope } from "lucide-react";
import heroImage from "@/assets/hero-vet.png";
import { AppointmentForm } from "@/components/AppointmentForm";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-hero">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-8 lg:items-center">

          {/* Title — first on mobile and desktop */}
          <h1 className="order-1 lg:col-start-1 lg:row-start-1 text-4xl md:text-5xl font-bold text-foreground leading-tight">
            {t("hero.title")}
          </h1>

          {/* Image — second on mobile, right column on desktop */}
          <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 relative">
            {/* Soft brand-colored glow behind the image */}
            <div
              className="absolute -inset-4 rounded-[2.5rem] bg-gradient-primary opacity-[0.12] blur-3xl"
              aria-hidden="true"
            />
            <div className="relative rounded-2xl overflow-hidden shadow-medium ring-1 ring-foreground/5">
              <img
                src={heroImage}
                alt="Veterinária ao domicílio a atender cão em casa em Lisboa"
                className="w-full h-auto object-cover saturate-[.92] contrast-[1.03]"
              />
              {/* Brand tint to unify the photo with the site palette */}
              <div
                className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/10 mix-blend-soft-light"
                aria-hidden="true"
              />
              {/* Floating credential badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2.5 rounded-xl bg-background/95 backdrop-blur-sm px-4 py-2.5 shadow-soft">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-hero">
                  <Stethoscope className="h-5 w-5 text-primary" />
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-foreground">{t("hero.badgeTitle")}</p>
                  <p className="text-xs text-muted-foreground">{t("hero.badgeSubtitle")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Rest of content — after image on mobile, left column on desktop */}
          <div className="order-3 lg:col-start-1 lg:row-start-2 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("hero.description")}
            </p>

            <ul className="space-y-2.5">
              {(t("hero.servicesList", { returnObjects: true }) as string[]).map((service, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <AppointmentForm>
                <Button variant="hero" size="xl">
                  {t("hero.bookButton")}
                </Button>
              </AppointmentForm>
              <p className="mt-3 text-sm text-muted-foreground">
                {t("hero.bookingInfo")}{" "}
                <a
                  href="tel:+351911135981"
                  className="font-medium text-foreground hover:text-primary transition-colors"
                >
                  911 135 981
                </a>
              </p>
            </div>

            <div id="area" className="pt-4 border-t border-border space-y-3 scroll-mt-20">
              <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">{t("hero.locationLabel")}</span>{" "}
                  {t("hero.location")}
                </div>
              </div>
              <div id="horario" className="flex items-start gap-2.5 text-sm text-muted-foreground scroll-mt-20">
                <Clock className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">{t("hero.hoursLabel")}</span>{" "}
                  {t("hero.hours")}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
