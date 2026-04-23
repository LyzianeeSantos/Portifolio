import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Informe seu nome."),
  email: z.string().email("Informe um e-mail valido."),
  subject: z.string().min(3, "Informe o assunto."),
  message: z.string().min(10, "Escreva uma mensagem com mais detalhes."),
});

export const profileSchema = z.object({
  name: z.string().min(2),
  age: z.number().min(18).max(99),
  degree: z.string().min(3),
  profession: z.string().min(3),
  headline: z.string().min(12),
  introTagline: z.string().min(12),
  about: z.string().min(60),
  heroImage: z.string().min(1),
  aboutImage: z.string().min(1),
  heroLabel: z.string().min(3),
  location: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  accentQuote: z.string().min(12),
  socialLinks: z.array(
    z.object({
      platform: z.string().min(2),
      label: z.string().min(2),
      url: z.string().url(),
    }),
  ),
  skillGroups: z.array(
    z.object({
      title: z.string().min(2),
      items: z.array(z.string().min(1)).min(1),
    }),
  ),
  educationItems: z.array(
    z.object({
      title: z.string().min(2),
      subtitle: z.string().min(2),
      period: z.string().min(2),
      description: z.string().min(8),
    }),
  ),
});

export const projectSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(3),
  description: z.string().min(20),
  longDescription: z.string().min(40),
  imageUrl: z.string().min(1),
  githubUrl: z.string().url(),
  liveUrl: z.string().url().optional().or(z.literal("")),
  stack: z.array(z.string().min(1)).min(1),
  featured: z.boolean(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type ProfileValues = z.infer<typeof profileSchema>;
export type ProjectValues = z.infer<typeof projectSchema>;
