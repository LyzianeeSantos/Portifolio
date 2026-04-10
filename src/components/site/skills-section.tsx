"use client";

import { motion } from "framer-motion";
import { Cpu, Layers3, Terminal, Wrench } from "lucide-react";
import { SectionShell } from "@/components/site/section-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const icons = [Cpu, Layers3, Terminal, Wrench];

interface SkillsSectionProps {
  skillGroups: {
    id: string;
    title: string;
    items: string[];
  }[];
}

export function SkillsSection({ skillGroups }: SkillsSectionProps) {
  return (
    <SectionShell
      id="skills"
      eyebrow="Stacks e habilidades"
      title="BUILDING WITH PRECISION"
      description="Uma stack que cruza desenvolvimento moderno, sistemas sólidos e sensibilidade para produto e imagem."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = icons[index] ?? Wrench;
          return (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="h-full">
                <CardContent className="space-y-6 p-8">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.26em] text-zinc-500">
                        Cluster {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-3 font-display text-4xl uppercase tracking-[0.06em] text-white">
                        {group.title}
                      </h3>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 p-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <Badge key={item} variant="muted" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
}
