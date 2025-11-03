import { Heart, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary rounded-full p-2">
                <Heart className="h-5 w-5 text-primary-foreground" fill="currentColor" />
              </div>
              <span className="font-bold text-lg text-foreground">Pet Home Vet</span>
            </div>
            <p className="text-muted-foreground text-sm">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  to="/servicos" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link 
                  to="/quem-sou" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {t("nav.blog")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div id="contactos">
            <h3 className="font-semibold text-foreground mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{t("footer.locationValue")}</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground" id="horario">
                <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{t("hero.hours")}</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+351911135981" className="hover:text-primary transition-colors">
                  +351 911 135 981
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:contato@pethomevet.pt" className="hover:text-primary transition-colors">
                  contato@pethomevet.pt
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Pet Home Vet. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
