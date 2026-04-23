import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { PortfolioProject } from "@/types/portfolio";

interface FeaturedProjectCardProps {
  project: PortfolioProject;
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <Card className="group cursor-pointer overflow-hidden">
      <CardContent className="grid gap-0 p-0 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="relative min-h-[22rem] overflow-hidden lg:min-h-[31rem]">
          <div className="absolute left-5 top-5 z-10 flex gap-3 sm:left-7 sm:top-7">
            <Badge>Featured</Badge>
            <Badge variant="muted">01</Badge>
          </div>
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.08)_56%,rgba(0,0,0,0.58)_100%)]" />
        </div>

        <div className="flex flex-col justify-between gap-8 p-7 md:p-9 lg:p-10">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-zinc-500 sm:text-xs">
              Projeto em destaque
            </p>
            <h3 className="mt-4 font-hero uppercase leading-[0.88] tracking-[-0.04em] text-white [font-size:clamp(2.8rem,6vw,5.6rem)]">
              {project.title}
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-300 md:text-base">
              {project.description}
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex flex-wrap gap-3">
              {project.stack.map((item) => (
                <Badge key={item} variant="muted">
                  {item}
                </Badge>
              ))}
            </div>

            <div className="inline-flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.34em] text-white">
              Abrir projeto
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
