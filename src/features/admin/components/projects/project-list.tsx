import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { ProjectValues } from "@/schemas/forms";

interface ProjectListProps {
  projects: ProjectValues[];
  onCreate: () => void;
  onSelect: (project: ProjectValues) => void;
}

export function ProjectList({ projects, onCreate, onSelect }: ProjectListProps) {
  return (
    <Card>
      <CardContent className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Projetos</p>
            <h2 className="mt-2 font-display text-4xl uppercase text-white">Colecao</h2>
          </div>
          <Button type="button" variant="secondary" onClick={onCreate}>
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
              onClick={() => onSelect(project)}
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
  );
}
