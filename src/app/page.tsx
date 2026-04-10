import { AboutSection } from "@/components/site/about-section";
import { ContactSection } from "@/components/site/contact-section";
import { CursorGlow } from "@/components/site/cursor-glow";
import { EducationSection } from "@/components/site/education-section";
import { HeroSection } from "@/components/site/hero-section";
import { ProjectsSection } from "@/components/site/projects-section";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { SkillsSection } from "@/components/site/skills-section";
import { getPortfolioData } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await getPortfolioData();

  if (!data.profile) {
    return <div className="p-10 text-white">Configure o banco e rode a seed inicial.</div>;
  }

  const skillGroups = data.profile.skillGroups.map((group) => ({
    id: group.id,
    title: group.title,
    items: group.items as string[],
  }));

  return (
    <main className="relative min-h-screen overflow-hidden">
      <CursorGlow />
      <SiteHeader />
      <HeroSection
        name={data.profile.name}
        headline={data.profile.headline}
        introTagline={data.profile.introTagline}
        heroImage={data.profile.heroImage}
        heroLabel={data.profile.heroLabel}
        accentQuote={data.profile.accentQuote}
      />
      <AboutSection
        name={data.profile.name}
        age={data.profile.age}
        degree={data.profile.degree}
        profession={data.profile.profession}
        about={data.profile.about}
        aboutImage={data.profile.aboutImage}
      />
      <SkillsSection skillGroups={skillGroups} />
      <EducationSection educationItems={data.profile.educationItems} />
      <ProjectsSection
        projects={data.projects.map((project) => ({
          ...project,
          stack: project.stack as string[],
        }))}
      />
      <ContactSection
        email={data.profile.email}
        phone={data.profile.phone}
        socialLinks={data.profile.socialLinks}
      />
      <SiteFooter />
    </main>
  );
}
