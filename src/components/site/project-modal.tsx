"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectModalProps {
  trigger: React.ReactNode;
  project: {
    title: string;
    description: string;
    longDescription: string;
    imageUrl: string;
    stack: string[];
    githubUrl: string;
    liveUrl: string | null;
  };
}

export function ProjectModal({ trigger, project }: ProjectModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        <div className="mt-6 space-y-6">
          <div className="overflow-hidden rounded-[1.75rem] border border-white/10">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={1400}
              height={900}
              className="h-72 w-full object-cover"
            />
          </div>
          <p className="text-base leading-7 text-zinc-300">{project.longDescription}</p>
          <div className="flex flex-wrap gap-3">
            {project.stack.map((item) => (
              <Badge key={item} variant="muted">
                {item}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href={project.githubUrl} target="_blank">
                GitHub
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            {project.liveUrl ? (
              <Button asChild variant="secondary">
                <Link href={project.liveUrl} target="_blank">
                  Projeto online
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            ) : null}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
