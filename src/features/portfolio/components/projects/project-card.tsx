import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { PortfolioProject } from "@/types/portfolio";

interface ProjectCardProps {
  project: PortfolioProject;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Card className="group h-full cursor-pointer">
      <CardContent className="flex h-full flex-col justify-between gap-8 p-7">
        <div className="flex items-start justify-between gap-4">
          <span className="font-display text-5xl leading-none text-zinc-600">
            {String(index + 2).padStart(2, "0")}
          </span>
          <ArrowUpRight className="h-5 w-5 text-primary transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>

        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.3em] text-zinc-500 sm:text-xs">
            Projeto
          </p>
          <h3 className="mt-4 font-hero uppercase leading-[0.88] tracking-[-0.04em] text-white [font-size:clamp(2.2rem,5vw,4.2rem)]">
            {project.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-zinc-300 md:text-base">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {project.stack.map((item) => (
            <Badge key={item} variant="muted">
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
