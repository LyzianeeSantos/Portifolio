"use client";

import type { ProjectValues } from "@/schemas/forms";
import { useProjectManager } from "@/features/admin/hooks/use-project-manager";
import { ProjectEditorForm } from "@/features/admin/components/projects/project-editor-form";
import { ProjectList } from "@/features/admin/components/projects/project-list";

interface ProjectManagerProps {
  initialProjects: ProjectValues[];
}

export function ProjectManager({ initialProjects }: ProjectManagerProps) {
  const {
    form,
    projects,
    loadingState,
    startNewProject,
    selectProject,
    saveProject,
    removeProject,
  } = useProjectManager(initialProjects);

  return (
    <div className="grid gap-6 xl:grid-cols-[0.7fr_1.3fr]">
      <ProjectList projects={projects} onCreate={startNewProject} onSelect={selectProject} />
      <ProjectEditorForm
        form={form}
        loadingState={loadingState}
        onSubmit={saveProject}
        onRemove={removeProject}
      />
    </div>
  );
}
