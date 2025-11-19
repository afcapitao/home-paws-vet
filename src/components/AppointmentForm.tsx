import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  phone: z.string().trim().min(9, "Telefone inválido").max(20),
  petType: z.string().min(1, "Selecione a espécie"),
  birthDate: z.string().trim().min(1, "Data de nascimento obrigatória").max(10),
  message: z.string().trim().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(1000),
});

type FormData = z.infer<typeof formSchema>;

export function AppointmentForm({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      petType: "",
      birthDate: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    const whatsappMessage = `${t("appointment.whatsappMessage")}

*${t("appointment.name")}:* ${data.name}
*${t("appointment.email")}:* ${data.email}
*${t("appointment.phone")}:* ${data.phone}
*${t("appointment.petType")}:* ${data.petType}
*${t("appointment.birthDate")}:* ${data.birthDate}
*${t("appointment.message")}:* ${data.message}`;

    const whatsappUrl = `https://wa.me/351911135981?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
    setOpen(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[400px] max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t("appointment.title")}</DialogTitle>
          <DialogDescription>
            {t("appointment.description")}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("appointment.name")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("appointment.namePlaceholder")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("appointment.email")}</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder={t("appointment.emailPlaceholder")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("appointment.phone")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("appointment.phonePlaceholder")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="petType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("appointment.petType")}</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={t("appointment.petTypePlaceholder")} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value={t("appointment.dog")}>{t("appointment.dog")}</SelectItem>
                      <SelectItem value={t("appointment.cat")}>{t("appointment.cat")}</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="birthDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("appointment.birthDate")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("appointment.birthDatePlaceholder")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("appointment.message")}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t("appointment.messagePlaceholder")}
                      className="resize-none"
                      rows={3}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" variant="hero">
              {t("appointment.submit")}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
