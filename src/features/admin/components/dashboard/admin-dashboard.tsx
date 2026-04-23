import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ProfileValues, ProjectValues } from "@/schemas/forms";
import type { PortfolioMessage } from "@/types/portfolio";
import { MessagesPanel } from "@/features/admin/components/messages/messages-panel";
import { ProfileForm } from "@/features/admin/components/profile/profile-form";
import { ProjectManager } from "@/features/admin/components/projects/project-manager";

interface AdminDashboardProps {
  profileValues: ProfileValues;
  projectValues: ProjectValues[];
  messages: PortfolioMessage[];
}

export function AdminDashboard({
  profileValues,
  projectValues,
  messages,
}: AdminDashboardProps) {
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
        <MessagesPanel messages={messages} />
      </TabsContent>
    </Tabs>
  );
}
