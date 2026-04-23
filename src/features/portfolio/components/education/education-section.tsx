import type { PortfolioEducationItem } from "@/types/portfolio";
import { SectionShell } from "@/features/portfolio/components/layout/section-shell";
import { EducationIntro } from "@/features/portfolio/components/education/education-intro";
import { EducationTimeline } from "@/features/portfolio/components/education/education-timeline";

interface EducationSectionProps {
  items: PortfolioEducationItem[];
}

export function EducationSection({ items }: EducationSectionProps) {
  return (
    <SectionShell
      id="educacao"
      eyebrow="Educacao e formacao"
      title="FORMATION"
      description="Trajetoria academica e tecnica organizada de forma mais leve, com leitura limpa e ritmo visual consistente."
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
        <EducationIntro />
        <EducationTimeline items={items} />
      </div>
    </SectionShell>
  );
}
