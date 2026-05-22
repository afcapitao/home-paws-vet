import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "João Silva",
    location: "Cascais",
    text: "A Dra. Sofia é a médica da Java há já 10 anos, desde que ela veio para nós com 12 semanas, e sempre esteve disponível e pronta para nos ajudar a ultrapassar todas as dificuldades que surgiram, assim como toda a rotina!",
    rating: 5,
  },
  {
    name: "Filipe Marques",
    location: "Póvoa de Santa Iria",
    text: "A Dra. Sofia é uma excelente profissional. Sempre muito atenciosa, cuidadosa e disponível. O acompanhamento do Killua tem sido excelente, com explicações muito claras e grande dedicação. Sou grato por saber que o Killua é tão bem acompanhado por alguém que ama aquilo que faz.",
    rating: 5,
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-warning text-warning" />
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            O que dizem os meus clientes
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, index) => (
            <Card key={index} className="border-border">
              <CardContent className="pt-6 space-y-4">
                <Stars count={t.rating} />
                <p className="text-muted-foreground leading-relaxed text-sm">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
