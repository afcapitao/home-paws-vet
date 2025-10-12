import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-vet.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Cuidados Veterinários na Comodidade da Sua Casa
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Atendimento médico-veterinário ao domicílio de cães e gatos na comodidade e segurança 
              da sua casa para consultas, quer de rotina quer de acompanhamento, vacinação e 
              desparasitação, exames laboratoriais.
            </p>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-2">
                <div className="mt-1 text-primary">✓</div>
                <span>Exame complementar de ecografia abdominal efetuados por colega especialista</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 text-primary">✓</div>
                <span>Serviço de cirurgia de tecidos moles e odontologia em clínica parceira</span>
              </li>
            </ul>

            <a
              href="https://wa.me/351SEUNUMERO?text=Olá, gostaria de agendar uma consulta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="xl" className="mt-4">
                Quero Agendar
              </Button>
            </a>

            <div className="pt-6 space-y-3 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">
                Para agendar basta contactar-me por mensagem via WhatsApp, enviar e-mail ou 
                telefonar no horário de atendimento
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Lisboa e arredores</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>10h às 18h de 2ªf a 6ªf</span>
                </div>
              </div>
              <p className="text-muted-foreground italic">Não atendo emergências</p>
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
