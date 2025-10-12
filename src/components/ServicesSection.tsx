import ServiceCard from "./ServiceCard";
import { Stethoscope, Syringe, FileCheck, Scissors } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Consultas ao Domicílio",
      description:
        "Consultas de clínica geral, rotina e acompanhamento no conforto do seu lar, evitando stress e ansiedade para o seu animal.",
    },
    {
      icon: Syringe,
      title: "Vacinação e Desparasitação",
      description:
        "Plano vacinal adaptado à idade e estilo de vida do seu animal, com desparasitações regulares para manter a saúde em dia.",
    },
    {
      icon: FileCheck,
      title: "Atestados e Passaportes",
      description:
        "Emissão de passaportes e atestados de saúde para viagens, com toda a documentação necessária e orientação completa.",
    },
    {
      icon: Scissors,
      title: "Cirurgias",
      description:
        "Cirurgia de tecidos moles e odontologia em clínica parceira, com acompanhamento completo pré e pós-operatório.",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cuidados veterinários completos para o bem-estar do seu animal de estimação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
