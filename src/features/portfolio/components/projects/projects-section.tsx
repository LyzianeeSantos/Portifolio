"use client";

import type { PortfolioProject } from "@/types/portfolio";
import { SectionShell } from "@/features/portfolio/components/layout/section-shell";
import { FeaturedProjectCard } from "@/features/portfolio/components/projects/featured-project-card";
import { ProjectCard } from "@/features/portfolio/components/projects/project-card";
import { ProjectModal } from "@/features/portfolio/components/projects/project-modal";

interface ProjectsSectionProps {
  projects: PortfolioProject[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const featuredProject = projects.find((project) => project.featured) ?? projects[0];
  const otherProjects = projects.filter((project) => project.id !== featuredProject?.id);

  return (
    <SectionShell
      id="projetos"
      eyebrow="Projetos"
      title="SELECTED WORK"
      description="Uma curadoria mais limpa: um projeto em destaque para abrir a narrativa e os demais com leitura mais leve."
    >
      {featuredProject ? (
        <ProjectModal
          project={featuredProject}
          trigger={<FeaturedProjectCard project={featuredProject} />}
        />
      ) : null}

      {otherProjects.length ? (
        <div className="mt-4 grid gap-4 lg:mt-6 lg:grid-cols-2">
          {otherProjects.map((project, index) => (
            <ProjectModal
              key={project.id}
              project={project}
              trigger={<ProjectCard project={project} index={index} />}
            />
          ))}
        </div>
      ) : null}
    </SectionShell>
  );
}
