import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/351SEUNUMERO?text=Olá, gostaria de mais informações";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      <Button
        size="lg"
        className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-all hover:scale-110 bg-[#25D366] hover:bg-[#20BA5A] text-white"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">Contactar via WhatsApp</span>
      </Button>
    </a>
  );
};

export default WhatsAppButton;
