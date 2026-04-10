import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessagesPanel } from "@/components/admin/messages-panel";
import { ProfileForm } from "@/components/admin/profile-form";
import { ProjectManager } from "@/components/admin/project-manager";
import { getPortfolioData } from "@/lib/queries";
import type { ProfileValues, ProjectValues } from "@/lib/validators";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const data = await getPortfolioData();

  if (!data.profile) {
    return <div className="text-white">Configure o banco para acessar o painel.</div>;
  }

  const profileValues: ProfileValues = {
    name: data.profile.name,
    age: data.profile.age,
    degree: data.profile.degree,
    profession: data.profile.profession,
    headline: data.profile.headline,
    introTagline: data.profile.introTagline,
    about: data.profile.about,
    heroImage: data.profile.heroImage,
    aboutImage: data.profile.aboutImage,
    heroLabel: data.profile.heroLabel,
    location: data.profile.location,
    email: data.profile.email,
    phone: data.profile.phone,
    accentQuote: data.profile.accentQuote,
    socialLinks: data.profile.socialLinks.map((item) => ({
      platform: item.platform,
      label: item.label,
      url: item.url,
    })),
    skillGroups: data.profile.skillGroups.map((item) => ({
      title: item.title,
      items: item.items as string[],
    })),
    educationItems: data.profile.educationItems.map((item) => ({
      title: item.title,
      subtitle: item.subtitle,
      period: item.period,
      description: item.description,
    })),
  };

  const projectValues: ProjectValues[] = data.projects.map((project) => ({
    id: project.id,
    title: project.title,
    description: project.description,
    longDescription: project.longDescription,
    imageUrl: project.imageUrl,
    githubUrl: project.githubUrl,
    liveUrl: project.liveUrl ?? "",
    stack: project.stack as string[],
    featured: project.featured,
  }));

  return (
    <Tabs defaultValue="profile">
      <TabsList>
        <TabsTrigger value="profile">Perfil</TabsTrigger>
        <TabsTrigger value="projects">Projetos</TabsTrigger>
        <TabsTrigger value="messages">Mensagens</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <ProfileForm defaultValues={profileValues} />
      </TabsContent>
      <TabsContent value="projects">
        <ProjectManager initialProjects={projectValues} />
      </TabsContent>
      <TabsContent value="messages">
        <MessagesPanel messages={data.messages} />
      </TabsContent>
    </Tabs>
  );
}
