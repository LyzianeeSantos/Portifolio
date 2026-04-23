"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type LoginValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const router = useRouter();
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "admin@lyziane.dev",
      password: "Lyziane@2026",
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    const result = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
    });

    if (result?.error) {
      toast.error("Credenciais invalidas.");
      return;
    }

    toast.success("Login realizado.");
    router.push("/admin");
    router.refresh();
  });

  return (
    <Card className="w-full max-w-md">
      <CardContent className="space-y-6 p-8">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Admin access</p>
          <h1 className="mt-3 font-display text-5xl uppercase tracking-[0.06em] text-white">
            Login
          </h1>
          <p className="mt-3 text-sm leading-6 text-zinc-300">
            Entre para atualizar textos, stacks, projetos, imagens e mensagens do portfolio.
          </p>
        </div>

        <form className="grid gap-4" onSubmit={onSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" {...form.register("email")} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" {...form.register("password")} />
          </div>
          <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Entrando..." : "Entrar no painel"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
