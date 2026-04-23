import { cache } from "react";
import { database } from "@/services/database";
import type { PortfolioData, PortfolioProfile, PortfolioProject } from "@/types/portfolio";

function mapProject(project: {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  stack: unknown;
  githubUrl: string;
  liveUrl: string | null;
  featured: boolean;
}): PortfolioProject {
  return {
    id: project.id,
    title: project.title,
    description: project.description,
    longDescription: project.longDescription,
    imageUrl: project.imageUrl,
    stack: project.stack as string[],
    githubUrl: project.githubUrl,
    liveUrl: project.liveUrl,
    featured: project.featured,
  };
}

function mapProfile(profile: {
  id: string;
  name: string;
  age: number;
  degree: string;
  profession: string;
  headline: string;
  introTagline: string;
  about: string;
  heroImage: string;
  aboutImage: string;
  heroLabel: string;
  location: string;
  email: string;
  phone: string;
  accentQuote: string;
  skillGroups: Array<{ id: string; title: string; items: unknown }>;
  educationItems: Array<{
    id: string;
    title: string;
    subtitle: string;
    period: string;
    description: string;
  }>;
  socialLinks: Array<{ id: string; platform: string; label: string; url: string }>;
}): PortfolioProfile {
  return {
    id: profile.id,
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
    skillGroups: profile.skillGroups.map((group) => ({
      id: group.id,
      title: group.title,
      items: group.items as string[],
    })),
    educationItems: profile.educationItems.map((item) => ({
      id: item.id,
      title: item.title,
      subtitle: item.subtitle,
      period: item.period,
      description: item.description,
    })),
    socialLinks: profile.socialLinks.map((item) => ({
      id: item.id,
      platform: item.platform,
      label: item.label,
      url: item.url,
    })),
  };
}

export const getPortfolioData = cache(async (): Promise<PortfolioData> => {
  const profile = await database.profile.findFirst({
    include: {
      skillGroups: {
        orderBy: {
          order: "asc",
        },
      },
      educationItems: {
        orderBy: {
          order: "asc",
        },
      },
      socialLinks: {
        orderBy: {
          order: "asc",
        },
      },
    },
  });

  const projects = await database.project.findMany({
    orderBy: [{ featured: "desc" }, { order: "asc" }, { createdAt: "desc" }],
  });

  const messages = await database.contactMessage.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return {
    profile: profile ? mapProfile(profile) : null,
    projects: projects.map(mapProject),
    messages,
  };
});
