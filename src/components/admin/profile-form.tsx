"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Save } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ImageUploadField } from "@/components/admin/image-upload-field";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { parseLines } from "@/lib/utils";
import { profileSchema, type ProfileValues } from "@/lib/validators";

interface ProfileFormProps {
  defaultValues: ProfileValues;
}

export function ProfileForm({ defaultValues }: ProfileFormProps) {
  const [loading, setLoading] = useState(false);
  const form = useForm<ProfileValues>({
    resolver: zodResolver(profileSchema),
    defaultValues,
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setLoading(true);

    try {
      const response = await fetch("/api/admin/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Não foi possível salvar o perfil.");
      }

      toast.success("Perfil atualizado.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Erro ao salvar perfil.");
    } finally {
      setLoading(false);
    }
  });

  return (
    <form className="grid gap-6" onSubmit={onSubmit}>
      <div className="grid gap-6 xl:grid-cols-2">
        <Card>
          <CardContent className="grid gap-5 p-6">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="grid gap-2">
                <Label>Nome</Label>
                <Input {...form.register("name")} />
              </div>
              <div className="grid gap-2">
                <Label>Idade</Label>
                <Input type="number" {...form.register("age", { valueAsNumber: true })} />
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="grid gap-2">
                <Label>Profissão</Label>
                <Input {...form.register("profession")} />
              </div>
              <div className="grid gap-2">
                <Label>Formação</Label>
                <Input {...form.register("degree")} />
              </div>
            </div>
            <div className="grid gap-2">
              <Label>Headline principal</Label>
              <Textarea className="min-h-28" {...form.register("headline")} />
            </div>
            <div className="grid gap-2">
              <Label>Tagline introdutória</Label>
              <Textarea className="min-h-24" {...form.register("introTagline")} />
            </div>
            <div className="grid gap-2">
              <Label>Sobre mim</Label>
              <Textarea className="min-h-44" {...form.register("about")} />
            </div>
            <div className="grid gap-2">
              <Label>Citação de destaque</Label>
              <Textarea className="min-h-24" {...form.register("accentQuote")} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="grid gap-5 p-6">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="grid gap-2">
                <Label>Localização</Label>
                <Input {...form.register("location")} />
              </div>
              <div className="grid gap-2">
                <Label>Hero label</Label>
                <Input {...form.register("heroLabel")} />
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="grid gap-2">
                <Label>E-mail</Label>
                <Input {...form.register("email")} />
              </div>
              <div className="grid gap-2">
                <Label>Telefone</Label>
                <Input {...form.register("phone")} />
              </div>
            </div>
            <ImageUploadField
              label="Imagem do hero"
              value={form.watch("heroImage")}
              onChange={(value) => form.setValue("heroImage", value, { shouldDirty: true })}
            />
            <ImageUploadField
              label="Imagem do sobre"
              value={form.watch("aboutImage")}
              onChange={(value) => form.setValue("aboutImage", value, { shouldDirty: true })}
            />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <Card>
          <CardContent className="grid gap-4 p-6">
            <Label>Stacks por categoria</Label>
            {form.watch("skillGroups").map((group, index) => (
              <div key={`${group.title}-${index}`} className="rounded-[1.5rem] border border-white/10 p-4">
                <Input
                  className="mb-3"
                  value={group.title}
                  onChange={(event) =>
                    form.setValue(`skillGroups.${index}.title`, event.target.value, { shouldDirty: true })
                  }
                />
                <Textarea
                  className="min-h-24"
                  value={group.items.join("\n")}
                  onChange={(event) =>
                    form.setValue(`skillGroups.${index}.items`, parseLines(event.target.value), { shouldDirty: true })
                  }
                />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="grid gap-4 p-6">
            <Label>Educação</Label>
            {form.watch("educationItems").map((item, index) => (
              <div key={`${item.title}-${index}`} className="rounded-[1.5rem] border border-white/10 p-4">
                <Input
                  className="mb-3"
                  value={item.title}
                  onChange={(event) =>
                    form.setValue(`educationItems.${index}.title`, event.target.value, { shouldDirty: true })
                  }
                />
                <Input
                  className="mb-3"
                  value={item.subtitle}
                  onChange={(event) =>
                    form.setValue(`educationItems.${index}.subtitle`, event.target.value, { shouldDirty: true })
                  }
                />
                <Input
                  className="mb-3"
                  value={item.period}
                  onChange={(event) =>
                    form.setValue(`educationItems.${index}.period`, event.target.value, { shouldDirty: true })
                  }
                />
                <Textarea
                  className="min-h-24"
                  value={item.description}
                  onChange={(event) =>
                    form.setValue(`educationItems.${index}.description`, event.target.value, { shouldDirty: true })
                  }
                />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="grid gap-4 p-6">
            <Label>Redes sociais</Label>
            {form.watch("socialLinks").map((social, index) => (
              <div key={`${social.platform}-${index}`} className="rounded-[1.5rem] border border-white/10 p-4">
                <Input
                  className="mb-3"
                  value={social.platform}
                  onChange={(event) =>
                    form.setValue(`socialLinks.${index}.platform`, event.target.value, { shouldDirty: true })
                  }
                />
                <Input
                  className="mb-3"
                  value={social.label}
                  onChange={(event) =>
                    form.setValue(`socialLinks.${index}.label`, event.target.value, { shouldDirty: true })
                  }
                />
                <Input
                  value={social.url}
                  onChange={(event) =>
                    form.setValue(`socialLinks.${index}.url`, event.target.value, { shouldDirty: true })
                  }
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end">
        <Button type="submit" size="lg" disabled={loading}>
          <Save className="h-4 w-4" />
          {loading ? "Salvando..." : "Salvar alterações"}
        </Button>
      </div>
    </form>
  );
}
