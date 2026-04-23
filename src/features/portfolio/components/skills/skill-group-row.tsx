"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import type { PortfolioSkillGroup } from "@/types/portfolio";

interface SkillGroupRowProps {
  group: PortfolioSkillGroup;
  index: number;
}

export function SkillGroupRow({ group, index }: SkillGroupRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.48, delay: index * 0.06 }}
      className="grid gap-5 py-6 lg:grid-cols-[96px_minmax(0,0.55fr)_minmax(0,1fr)] lg:items-start"
    >
      <div className="font-display text-5xl leading-none text-zinc-600">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div>
        <p className="text-[0.68rem] uppercase tracking-[0.3em] text-zinc-500 sm:text-xs">
          Cluster
        </p>
        <h3 className="mt-3 font-hero uppercase leading-[0.88] tracking-[-0.04em] text-white [font-size:clamp(2.2rem,5vw,4.4rem)]">
          {group.title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-3 lg:justify-end">
        {group.items.map((item) => (
          <Badge key={item} variant="muted" className="text-xs">
            {item}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}
