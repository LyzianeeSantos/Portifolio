"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, GitFork } from "lucide-react";
import { SectionShell } from "@/components/site/section-shell";
import { ProjectModal } from "@/components/site/project-modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectsSectionProps {
  projects: {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    imageUrl: string;
    stack: string[];
    githubUrl: string;
    liveUrl: string | null;
    featured: boolean;
  }[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <SectionShell
      id="projetos"
      eyebrow="Projetos"
      title="SELECTED WORK"
      description="Uma curadoria de produtos, interfaces e experiências que traduzem performance, design e presença digital."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectModal
            key={project.id}
            project={project}
            trigger={
              <Card className="group cursor-pointer overflow-hidden">
                <CardContent className="space-y-5 p-0">
                  <div className="relative overflow-hidden">
                    <div className="absolute left-6 top-6 z-10 flex gap-3">
                      {project.featured ? <Badge>Featured</Badge> : <Badge variant="muted">Project</Badge>}
                      <Badge variant="muted">0{index + 1}</Badge>
                    </div>
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={1400}
                      height={900}
                      className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent" />
                  </div>
                  <div className="space-y-4 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-4xl uppercase tracking-[0.05em] text-white">
                          {project.title}
                        </h3>
                        <p className="mt-3 max-w-xl text-base leading-7 text-zinc-300">
                          {project.description}
                        </p>
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/5 p-3">
                        <ArrowUpRight className="h-5 w-5 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {project.stack.map((item) => (
                        <Badge key={item} variant="muted">
                          {item}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Button asChild variant="secondary">
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          onClick={(event) => event.stopPropagation()}
                        >
                          <GitFork className="h-4 w-4" />
                          GitHub
                        </Link>
                      </Button>
                      {project.liveUrl ? (
                        <Button asChild onClick={(event) => event.stopPropagation()}>
                          <Link href={project.liveUrl} target="_blank">
                            Live preview
                            <ArrowUpRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      ) : null}
                    </div>
                  </div>
                </CardContent>
              </Card>
            }
          />
        ))}
      </div>
    </SectionShell>
  );
}
