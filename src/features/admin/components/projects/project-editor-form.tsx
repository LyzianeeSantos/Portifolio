import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ImageUploadField } from "@/features/admin/components/shared/image-upload-field";
import type { ProjectValues } from "@/schemas/forms";
import { parseLines } from "@/utils/text";
import type { UseFormReturn } from "react-hook-form";

interface ProjectEditorFormProps {
  form: UseFormReturn<ProjectValues>;
  loadingState: "save" | string | null;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onRemove: (projectId?: string) => void;
}

export function ProjectEditorForm({
  form,
  loadingState,
  onSubmit,
  onRemove,
}: ProjectEditorFormProps) {
  const currentProjectId = form.watch("id");

  return (
    <Card>
      <CardContent className="p-6">
        <form className="grid gap-5" onSubmit={onSubmit}>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="grid gap-2">
              <Label>Titulo</Label>
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
            <Label>Descricao curta</Label>
            <Textarea className="min-h-24" {...form.register("description")} />
          </div>

          <div className="grid gap-2">
            <Label>Descricao completa</Label>
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
            <Button type="submit" size="lg" disabled={loadingState === "save"}>
              {loadingState === "save" ? "Salvando..." : "Salvar projeto"}
            </Button>

            {currentProjectId ? (
              <Button
                type="button"
                variant="destructive"
                onClick={() => onRemove(currentProjectId)}
                disabled={loadingState === currentProjectId}
              >
                <Trash2 className="h-4 w-4" />
                Excluir
              </Button>
            ) : null}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
