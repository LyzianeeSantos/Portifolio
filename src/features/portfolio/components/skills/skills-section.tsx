import type { PortfolioSkillGroup } from "@/types/portfolio";
import { SectionShell } from "@/features/portfolio/components/layout/section-shell";
import { SkillGroupRow } from "@/features/portfolio/components/skills/skill-group-row";

interface SkillsSectionProps {
  groups: PortfolioSkillGroup[];
}

export function SkillsSection({ groups }: SkillsSectionProps) {
  return (
    <SectionShell
      id="skills"
      eyebrow="Stacks e habilidades"
      title="CAPABILITIES"
      description="Uma estrutura de trabalho que cruza front-end, back-end, sistemas e ferramentas com a mesma linguagem visual da home."
    >
      <div className="divide-y divide-white/10 border-y border-white/10">
        {groups.map((group, index) => (
          <SkillGroupRow key={group.id} group={group} index={index} />
        ))}
      </div>
    </SectionShell>
  );
}
