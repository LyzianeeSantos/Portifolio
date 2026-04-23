"use client";

import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useContactForm } from "@/features/portfolio/hooks/use-contact-form";

export function ContactFormCard() {
  const { form, onSubmit } = useContactForm();

  return (
    <Card>
      <CardContent className="p-8">
        <form className="grid gap-5" onSubmit={onSubmit}>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="Seu nome" {...form.register("name")} />
              {form.formState.errors.name ? (
                <p className="text-sm text-red-400">{form.formState.errors.name.message}</p>
              ) : null}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" placeholder="voce@email.com" {...form.register("email")} />
              {form.formState.errors.email ? (
                <p className="text-sm text-red-400">{form.formState.errors.email.message}</p>
              ) : null}
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="subject">Assunto</Label>
            <Input id="subject" placeholder="Assunto da sua mensagem" {...form.register("subject")} />
            {form.formState.errors.subject ? (
              <p className="text-sm text-red-400">{form.formState.errors.subject.message}</p>
            ) : null}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="message">Mensagem</Label>
            <Textarea
              id="message"
              placeholder="Conte um pouco sobre o projeto ou oportunidade."
              {...form.register("message")}
            />
            {form.formState.errors.message ? (
              <p className="text-sm text-red-400">{form.formState.errors.message.message}</p>
            ) : null}
          </div>

          <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Enviando..." : "Enviar mensagem"}
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
