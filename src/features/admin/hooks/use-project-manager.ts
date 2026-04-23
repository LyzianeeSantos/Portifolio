"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/sonner";
import { projectSchema, type ProjectValues } from "@/schemas/forms";
import {
  createProject,
  deleteProject,
  updateProject,
} from "@/features/admin/services/admin-api";
import { EMPTY_PROJECT_VALUES } from "@/features/admin/utils/project-defaults";

type LoadingState = "save" | string | null;

export function useProjectManager(initialProjects: ProjectValues[]) {
  const [projects, setProjects] = useState(initialProjects);
  const [editingProject, setEditingProject] = useState<ProjectValues>(EMPTY_PROJECT_VALUES);
  const [loadingState, setLoadingState] = useState<LoadingState>(null);

  const form = useForm<ProjectValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: editingProject,
  });

  useEffect(() => {
    form.reset(editingProject);
  }, [editingProject, form]);

  const startNewProject = () => {
    setEditingProject(EMPTY_PROJECT_VALUES);
  };

  const selectProject = (project: ProjectValues) => {
    setEditingProject(project);
  };

  const saveProject = form.handleSubmit(async (values) => {
    setLoadingState("save");

    try {
      const savedProject = values.id ? await updateProject(values) : await createProject(values);

      setProjects((currentProjects) => {
        const remainingProjects = currentProjects.filter(
          (currentProject) => currentProject.id !== savedProject.id,
        );

        return [...remainingProjects, savedProject];
      });

      setEditingProject(savedProject);
      toast.success("Projeto salvo.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Erro ao salvar projeto.");
    } finally {
      setLoadingState(null);
    }
  });

  const removeProject = async (projectId?: string) => {
    if (!projectId) {
      return;
    }

    setLoadingState(projectId);

    try {
      await deleteProject(projectId);
      setProjects((currentProjects) =>
        currentProjects.filter((project) => project.id !== projectId),
      );
      setEditingProject(EMPTY_PROJECT_VALUES);
      toast.success("Projeto removido.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Erro ao remover projeto.");
    } finally {
      setLoadingState(null);
    }
  };

  return {
    form,
    projects,
    editingProject,
    loadingState,
    startNewProject,
    selectProject,
    saveProject,
    removeProject,
  };
}
