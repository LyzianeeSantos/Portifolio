"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/sonner";
import { contactFormSchema, type ContactFormValues } from "@/schemas/forms";
import { submitContactMessage } from "@/features/portfolio/services/contact-api";

export function useContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      await submitContactMessage(values);
      form.reset();
      toast.success("Mensagem enviada com sucesso.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Erro ao enviar mensagem.");
    }
  });

  return {
    form,
    onSubmit,
  };
}
