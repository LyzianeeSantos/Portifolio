export interface PortfolioSkillGroup {
  id: string;
  title: string;
  items: string[];
}

export interface PortfolioEducationItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
}

export interface PortfolioSocialLink {
  id: string;
  platform: string;
  label: string;
  url: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  stack: string[];
  githubUrl: string;
  liveUrl: string | null;
  featured: boolean;
}

export interface PortfolioMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}

export interface PortfolioProfile {
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
  skillGroups: PortfolioSkillGroup[];
  educationItems: PortfolioEducationItem[];
  socialLinks: PortfolioSocialLink[];
}

export interface PortfolioData {
  profile: PortfolioProfile | null;
  projects: PortfolioProject[];
  messages: PortfolioMessage[];
}
