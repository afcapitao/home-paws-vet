import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Heart, Baby, Users, Syringe, FileCheck, Sparkles, Scissors } from "lucide-react";

const Services = () => {
  const whatsappLink = "https://wa.me/351SEUNUMERO?text=Olá, gostaria de agendar uma consulta";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Serviços
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cuidados veterinários completos ao domicílio para o seu animal de estimação
            </p>
          </div>
        </section>

        {/* Consultas Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Stethoscope className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Consultas</h2>
              </div>
              
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Consultas de Clínica Geral</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Faço consultas de clínica geral, de rotina e de acompanhamento ao seu animal na 
                    comodidade e segurança do seu espaço, evitando ansiedade e desconfortos desnecessários 
                    associados à deslocação a uma clínica e evitando filas de espera e contacto com outros 
                    animais e respectivo risco de contrair doenças infecto-contagiosas.
                  </p>
                  <p>
                    Estas consultas consistem na obtenção do historial detalhado (anamnese), conversando 
                    com os tutores, avaliação cuidadosa dos sintomas apresentados, exame físico completo e 
                    alguns exames que possam ser necessários para complementar o diagnóstico e orientar o tratamento.
                  </p>
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <p className="text-foreground font-medium text-justify">
                      As consultas de rotina e de check-up são muito importantes porque algumas condições de 
                      saúde começam subtilmente. Ao fazer o exame clínico e análises laboratoriais com 
                      regularidade podemos obter pistas mais precocemente de alguma condição que se esteja 
                      a desenvolver e atuar na prevenção ou atrasando a progressão da doença.
                    </p>
                  </div>
                  <p className="font-medium text-foreground">
                    Não espere que os sintomas do seu animal piorem para entrar em contacto, envie uma 
                    mensagem e agende a sua consulta.
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <Card>
                  <CardHeader>
                    <Heart className="h-6 w-6 text-primary mb-2" />
                    <CardTitle className="text-lg">Acompanhamento</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Consultas fundamentais para observar a evolução da doença e avaliar a resposta ao tratamento.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Baby className="h-6 w-6 text-primary mb-2" />
                    <CardTitle className="text-lg">Pediátricas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Para animais jovens, reduzindo o risco de exposição a agentes infecto-contagiosos durante 
                      o protocolo vacinal inicial.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Users className="h-6 w-6 text-primary mb-2" />
                    <CardTitle className="text-lg">Geriátricas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Para animais idosos com dificuldades locomotoras ou mais sensíveis a mudanças no ambiente.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg">
                    Agendar Consulta
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Profilaxia */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Syringe className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Profilaxia</h2>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Vacinação e Desparasitação</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    A vacinação é fundamental para prevenir doenças infecto-contagiosas. Faço um plano vacinal 
                    adaptado à sua idade e ao seu estilo de vida. As desparasitações também são muito importantes 
                    para a manutenção da saúde.
                  </p>
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <p className="text-foreground font-medium mb-2">Vantagens de vacinar:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Protege o animal de várias doenças, as quais podem ser fatais</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Segurança para o animal e para a comunidade</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Contribui para a longevidade e qualidade de vida</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-sm">
                    <strong>Importante:</strong> A vacinação é feita apenas em animais saudáveis, que não 
                    apresentem sintomas de doença e que se encontrem corretamente desparasitados interna e 
                    externamente.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Outros Serviços */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <FileCheck className="h-6 w-6 text-primary" />
                    <CardTitle>Atestados de Saúde e Passaporte</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Vai viajar? É importante planear com meses de antecedência para garantir que tudo está em 
                    ordem, sobretudo se for viajar para fora do país.
                  </p>
                  <p>
                    Faço consulta com emissão de passaporte (necessário para viajar dentro da U.E.), exame 
                    físico completo, atualizo o estado vacinal, nomeadamente aplicação e registo da vacina da 
                    raiva, colheita de sangue para a análise da titulação dos anticorpos da raiva caso seja 
                    necessário, desparasitação e passo atestado que atesta o bem-estar e aptidão do animal 
                    para viajar.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="h-6 w-6 text-primary" />
                    <CardTitle>Microchip</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    A colocação de transponder ("microchip") em cães e gatos é uma obrigação legal no nosso 
                    País. Trata-se de uma cápsula do tamanho de um bago de arroz, que contém um número 
                    específico. Permite, caso o animal se perca e seja encontrado, a identificação e contacto 
                    com o tutor através da base de dados nacional.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Scissors className="h-6 w-6 text-primary" />
                    <CardTitle>Cirurgias</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Trabalho com uma clínica parceira para realização de procedimentos cirúrgicos de tecidos moles programados de rotina, não-emergenciais (castração, esterilização, lumpectomias/nodulectomias, mastectomias, enterectomias), e para realização de procedimentos de higienização oral sob anestesia geral (destartarizações).
                  </p>
                  <p>
                    Faço a consulta pré-operatória e as consultas de acompanhamento pós-operatório até recuperação completa.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
