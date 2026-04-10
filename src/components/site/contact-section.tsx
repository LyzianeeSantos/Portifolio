"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SectionShell } from "@/components/site/section-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { contactFormSchema, type ContactFormValues } from "@/lib/validators";

interface ContactSectionProps {
  email: string;
  phone: string;
  socialLinks: {
    id: string;
    platform: string;
    label: string;
    url: string;
  }[];
}

export function ContactSection({ email, phone, socialLinks }: ContactSectionProps) {
  const [loading, setLoading] = useState(false);
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
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar a mensagem.");
      }

      form.reset();
      toast.success("Mensagem enviada com sucesso.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Erro ao enviar mensagem.");
    } finally {
      setLoading(false);
    }
  });

  return (
    <SectionShell
      id="contato"
      eyebrow="Contato"
      title="LET'S BUILD SOMETHING REMARKABLE"
      description="Aberta para projetos, collabs, oportunidades e conversas que conectem tecnologia, marca e presença digital."
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <Card>
          <CardContent className="space-y-8 p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">Direct line</p>
              <p className="mt-4 font-accent text-4xl italic text-white">
                Projetos com visão, estética e propósito merecem uma conversa à altura.
              </p>
            </div>
            <div className="space-y-4">
              <Link
                href={`mailto:${email}`}
                className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-zinc-200 hover:border-primary/30 hover:bg-white/7"
              >
                <span className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  {email}
                </span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href={`tel:${phone}`}
                className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-zinc-200 hover:border-primary/30 hover:bg-white/7"
              >
                <span className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary" />
                  {phone}
                </span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  className="flex items-center justify-between rounded-[1.25rem] border border-white/10 px-4 py-3 text-sm text-zinc-300 hover:border-primary/30 hover:bg-white/5"
                >
                  <span>{social.platform}</span>
                  <span className="text-zinc-500">{social.label}</span>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

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
                <Textarea id="message" placeholder="Conte um pouco sobre o projeto ou oportunidade." {...form.register("message")} />
                {form.formState.errors.message ? (
                  <p className="text-sm text-red-400">{form.formState.errors.message.message}</p>
                ) : null}
              </div>
              <Button type="submit" size="lg" disabled={loading}>
                {loading ? "Enviando..." : "Enviar mensagem"}
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </SectionShell>
  );
}
