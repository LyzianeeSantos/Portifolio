import type { ProfileValues, ProjectValues } from "@/schemas/forms";
import type { PortfolioProfile, PortfolioProject } from "@/types/portfolio";

export function mapProfileToFormValues(profile: PortfolioProfile): ProfileValues {
  return {
    name: profile.name,
    age: profile.age,
    degree: profile.degree,
    profession: profile.profession,
    headline: profile.headline,
    introTagline: profile.introTagline,
    about: profile.about,
    heroImage: profile.heroImage,
    aboutImage: profile.aboutImage,
    heroLabel: profile.heroLabel,
    location: profile.location,
    email: profile.email,
    phone: profile.phone,
    accentQuote: profile.accentQuote,
    socialLinks: profile.socialLinks.map((item) => ({
      platform: item.platform,
      label: item.label,
      url: item.url,
    })),
    skillGroups: profile.skillGroups.map((item) => ({
      title: item.title,
      items: item.items,
    })),
    educationItems: profile.educationItems.map((item) => ({
      title: item.title,
      subtitle: item.subtitle,
      period: item.period,
      description: item.description,
    })),
  };
}

export function mapProjectsToFormValues(projects: PortfolioProject[]): ProjectValues[] {
  return projects.map((project) => ({
    id: project.id,
    title: project.title,
    description: project.description,
    longDescription: project.longDescription,
    imageUrl: project.imageUrl,
    githubUrl: project.githubUrl,
    liveUrl: project.liveUrl ?? "",
    stack: project.stack,
    featured: project.featured,
  }));
}
