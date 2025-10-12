import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import petsImage from "@/assets/pets-together.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Quem Sou</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Médica veterinária dedicada ao bem-estar dos animais
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                <div>
                  <img
                    src={petsImage}
                    alt="Cães e gatos"
                    className="rounded-2xl shadow-medium w-full h-auto"
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">
                    Cuidados Veterinários com Dedicação
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Sou médica veterinária apaixonada pelo bem-estar animal. Acredito que os cuidados 
                    veterinários devem ser prestados com empatia, respeito e dedicação, sempre priorizando 
                    o conforto e a segurança dos animais e a tranquilidade dos seus tutores.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    O atendimento ao domicílio permite-me oferecer uma experiência mais personalizada, 
                    observando o animal no seu ambiente natural e reduzindo o stress associado às 
                    deslocações e à exposição a outros animais em clínicas.
                  </p>
                </div>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Minha Missão</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Proporcionar cuidados veterinários de excelência ao domicílio, focando na prevenção 
                    e no diagnóstico precoce de doenças, sempre com uma abordagem humanizada e 
                    individualizada para cada animal e família.
                  </p>
                  <div className="bg-gradient-hero p-6 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-3">Valores que guiam meu trabalho:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-foreground">
                        <span className="text-primary mt-1">✓</span>
                        <span>Respeito pelo bem-estar animal</span>
                      </li>
                      <li className="flex items-start gap-2 text-foreground">
                        <span className="text-primary mt-1">✓</span>
                        <span>Medicina preventiva e cuidados personalizados</span>
                      </li>
                      <li className="flex items-start gap-2 text-foreground">
                        <span className="text-primary mt-1">✓</span>
                        <span>Transparência e comunicação clara com os tutores</span>
                      </li>
                      <li className="flex items-start gap-2 text-foreground">
                        <span className="text-primary mt-1">✓</span>
                        <span>Atualização contínua e trabalho em parceria com especialistas</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 text-center" id="area">
                <h3 className="text-2xl font-bold text-foreground mb-4">Área de Atuação</h3>
                <p className="text-muted-foreground mb-2">
                  Atendo em Lisboa e arredores, sempre no horário das 10h às 18h, de segunda a sexta-feira.
                </p>
                <p className="text-muted-foreground italic text-sm">
                  Nota: Não atendo emergências. Em caso de urgência, procure um hospital veterinário.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
