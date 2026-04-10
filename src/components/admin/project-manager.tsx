"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ImageUploadField } from "@/components/admin/image-upload-field";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { parseLines } from "@/lib/utils";
import { projectSchema, type ProjectValues } from "@/lib/validators";

interface ProjectManagerProps {
  initialProjects: ProjectValues[];
}

const emptyProject: ProjectValues = {
  title: "",
  description: "",
  longDescription: "",
  imageUrl: "/images/project-editorial.svg",
  githubUrl: "https://github.com/lyzianesantos",
  liveUrl: "",
  stack: ["Next.js"],
  featured: false,
};

export function ProjectManager({ initialProjects }: ProjectManagerProps) {
  const [projects, setProjects] = useState(initialProjects);
  const [loading, setLoading] = useState<string | null>(null);
  const [editing, setEditing] = useState<ProjectValues>(emptyProject);
  const form = useForm<ProjectValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: editing,
  });

  useEffect(() => {
    form.reset(editing);
  }, [editing, form]);

  const submit = form.handleSubmit(async (values) => {
    setLoading("save");

    try {
      const isEditing = Boolean(values.id);
      const response = await fetch(
        isEditing ? `/api/admin/projects/${values.id}` : "/api/admin/projects",
        {
          method: isEditing ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        },
      );

      if (!response.ok) {
        throw new Error("Não foi possível salvar o projeto.");
      }

      const saved = (await response.json()) as ProjectValues;
      setProjects((current) => {
        const others = current.filter((project) => project.id !== saved.id);
        return [...others, saved];
      });
      setEditing(saved);
      toast.success("Projeto salvo.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Erro ao salvar projeto.");
    } finally {
      setLoading(null);
    }
  });

  const removeProject = async (id?: string) => {
    if (!id) return;
    setLoading(id);

    try {
      const response = await fetch(`/api/admin/projects/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Não foi possível remover o projeto.");
      }

      setProjects((current) => current.filter((project) => project.id !== id));
      setEditing(emptyProject);
      toast.success("Projeto removido.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Erro ao remover projeto.");
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[0.7fr_1.3fr]">
      <Card>
        <CardContent className="space-y-4 p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Projetos</p>
              <h2 className="mt-2 font-display text-4xl uppercase text-white">Coleção</h2>
            </div>
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                setEditing(emptyProject);
              }}
            >
              <Plus className="h-4 w-4" />
              Novo
            </Button>
          </div>
          <div className="grid gap-3">
            {projects.map((project) => (
              <button
                key={project.id ?? project.title}
                type="button"
                className="rounded-[1.4rem] border border-white/10 bg-white/5 px-4 py-4 text-left hover:border-primary/40"
                onClick={() => setEditing(project)}
              >
                <p className="font-display text-2xl uppercase tracking-[0.06em] text-white">
                  {project.title}
                </p>
                <p className="mt-2 text-sm text-zinc-400">{project.description}</p>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <form className="grid gap-5" onSubmit={submit}>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="grid gap-2">
                <Label>Título</Label>
                <Input {...form.register("title")} />
              </div>
              <div className="grid gap-2">
                <Label>GitHub</Label>
                <Input {...form.register("githubUrl")} />
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="grid gap-2">
                <Label>Link do projeto</Label>
                <Input {...form.register("liveUrl")} />
              </div>
              <div className="flex items-end">
                <label className="flex items-center gap-3 text-sm text-zinc-200">
                  <input
                    type="checkbox"
                    checked={form.watch("featured")}
                    onChange={(event) => form.setValue("featured", event.target.checked)}
                  />
                  Projeto em destaque
                </label>
              </div>
            </div>
            <div className="grid gap-2">
              <Label>Descrição curta</Label>
              <Textarea className="min-h-24" {...form.register("description")} />
            </div>
            <div className="grid gap-2">
              <Label>Descrição completa</Label>
              <Textarea className="min-h-36" {...form.register("longDescription")} />
            </div>
            <div className="grid gap-2">
              <Label>Stacks</Label>
              <Textarea
                className="min-h-24"
                value={form.watch("stack").join("\n")}
                onChange={(event) =>
                  form.setValue("stack", parseLines(event.target.value), { shouldDirty: true })
                }
              />
            </div>
            <ImageUploadField
              label="Capa do projeto"
              value={form.watch("imageUrl")}
              onChange={(value) => form.setValue("imageUrl", value, { shouldDirty: true })}
            />
            <div className="flex flex-wrap justify-between gap-3">
              <Button type="submit" size="lg" disabled={loading === "save"}>
                {loading === "save" ? "Salvando..." : "Salvar projeto"}
              </Button>
              {form.watch("id") ? (
                <Button
                  type="button"
                  variant="destructive"
                  onClick={() => removeProject(form.watch("id"))}
                  disabled={loading === form.watch("id")}
                >
                  <Trash2 className="h-4 w-4" />
                  Excluir
                </Button>
              ) : null}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
