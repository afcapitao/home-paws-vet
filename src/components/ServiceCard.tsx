import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="hover:shadow-medium transition-all hover:-translate-y-1 border-border">
      <CardHeader>
        <div className="mb-4 inline-flex p-3 bg-gradient-hero rounded-lg">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground text-base leading-relaxed text-justify">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
