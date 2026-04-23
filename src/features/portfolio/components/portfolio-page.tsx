import type { PortfolioData } from "@/types/portfolio";
import { AboutSection } from "@/features/portfolio/components/about/about-section";
import { ContactSection } from "@/features/portfolio/components/contact/contact-section";
import { EducationSection } from "@/features/portfolio/components/education/education-section";
import { HeroSection } from "@/features/portfolio/components/hero/hero-section";
import { CursorGlow } from "@/features/portfolio/components/layout/cursor-glow";
import { SiteFooter } from "@/features/portfolio/components/layout/site-footer";
import { ProjectsSection } from "@/features/portfolio/components/projects/projects-section";
import { SkillsSection } from "@/features/portfolio/components/skills/skills-section";

interface PortfolioPageProps {
  data: PortfolioData;
}

export function PortfolioPage({ data }: PortfolioPageProps) {
  if (!data.profile) {
    return <div className="p-10 text-white">Configure o banco e rode a seed inicial.</div>;
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <CursorGlow />
      <HeroSection name={data.profile.name} heroLabel={data.profile.heroLabel} />
      <AboutSection profile={data.profile} />
      <SkillsSection groups={data.profile.skillGroups} />
      <EducationSection items={data.profile.educationItems} />
      <ProjectsSection projects={data.projects} />
      <ContactSection profile={data.profile} />
      <SiteFooter />
    </main>
  );
}
