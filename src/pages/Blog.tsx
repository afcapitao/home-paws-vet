import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Syringe, Cat, Dumbbell, Scale, Heart as HeartIcon } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      icon: Home,
      title: "Vantagens de Consultas ao Domicílio",
      description: "Descubra os benefícios de cuidar do seu animal no conforto de casa",
      content: [
        "Menos riscos de contrair doenças infecto-contagiosas, especialmente na altura da primo-vacinação",
        "O animal não enjoa nem stessa com a deslocação ao sair do seu ambiente",
        "O tutor não perde tempo em deslocações nem em filas de atendimento - praticidade e comodidade",
        "A consulta é mais personalizada e individualizada, permitindo dedicar mais atenção a cada animal",
        "Atendimento a animais idosos, com mobilidade reduzida ou com medo de sair de casa",
        "Eutanásias humanizadas em casos terminais",
        "O veterinário pode avaliar de forma mais completa o comportamento e o ambiente do animal",
      ],
    },
    {
      icon: Syringe,
      title: "Vantagens de Vacinar",
      description: "A importância da vacinação para a saúde do seu animal",
      content: [
        "Protege o animal de várias doenças, as quais podem ser fatais",
        "Segurança para o animal e para a comunidade: além de proteger o seu animal, contribui para a segurança dele e de outros animais, e protege a saúde pública",
        "A vacinação de rotina contribui para a sua longevidade e qualidade de vida",
        "Prevenção é sempre melhor e mais económica do que tratar doenças graves",
      ],
    },
    {
      icon: Cat,
      title: "Como Ajudar o Gato a Perder o Medo do Veterinário",
      description: "Dicas para tornar as visitas veterinárias menos stressantes para felinos",
      content: [
        "Use transportadoras confortáveis e familiarize o gato com ela antes da consulta",
        "Mantenha a calma - os gatos sentem a ansiedade dos tutores",
        "Considere consultas ao domicílio para eliminar o stress da viagem",
        "Recompense o bom comportamento com petiscos e carinhos",
        "Evite jejum prolongado antes da consulta, a menos que seja necessário",
      ],
    },
    {
      icon: Dumbbell,
      title: "Exercícios com o Seu Melhor Amigo",
      description: "Dicas para manter o seu cão ativo e saudável",
      content: [
        "Caminhadas adaptadas são o exercício universal para todos os cães",
        "Estímulos mentais também cansam e educam - use brinquedos interativos",
        "Corrida é para cães atléticos e bem condicionados - sempre gradual",
        "Brincadeiras de puxar fortalecem confiança e musculatura (ensine os comandos 'solta' e 'espera')",
        "Sessões curtas de treino cansam (deitar, sentar, dar a pata durante 5-10 minutos com reforço positivo)",
        "A maior prova de amor é respeitar os limites do seu cão - observe sinais de cansaço",
      ],
    },
    {
      icon: Scale,
      title: "Obesidade em Animais de Estimação",
      description: "Como prevenir e combater o excesso de peso nos pets",
      content: [
        "Avaliação regular da condição corporal com um veterinário é essencial",
        "Controle o acesso à comida - evite alimentação à vontade",
        "Promova atividades físicas frequentes e adaptadas ao animal",
        "Tecnologias como coleiras inteligentes podem auxiliar no monitoramento",
        "Escolha petiscos saudáveis, como frutas e vegetais apropriados",
        "A obesidade pode levar a diabetes, problemas articulares e redução da expectativa de vida",
      ],
    },
    {
      icon: HeartIcon,
      title: "Como Lidar com o Luto Após Perda de um Animal",
      description: "Apoio emocional para tutores que perderam seus companheiros",
      content: [
        "O luto pela perda de um animal de estimação é real e deve ser respeitado",
        "Permita-se sentir todas as emoções - tristeza, raiva, culpa são normais",
        "Compartilhe memórias e fotos com familiares e amigos que entendam",
        "Considere criar uma homenagem - álbum de fotos, plantar uma árvore",
        "Não se apresse em ter outro animal - respeite o seu tempo de luto",
        "Procure apoio profissional se sentir dificuldade em lidar com a perda",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Conselhos e dicas</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dicas e informações para cuidar melhor do seu animal de estimação
            </p>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {articles.map((article, index) => (
                <Card key={index} className="hover:shadow-medium transition-all">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-hero p-3 rounded-lg flex-shrink-0">
                        <article.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-2">{article.title}</CardTitle>
                        <CardDescription className="text-base">{article.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {article.content.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <span className="text-primary mt-1 flex-shrink-0">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
