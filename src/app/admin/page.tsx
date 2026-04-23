import { AdminDashboard } from "@/features/admin/components/dashboard/admin-dashboard";
import { mapProfileToFormValues, mapProjectsToFormValues } from "@/features/admin/services/admin-mappers";
import { getPortfolioData } from "@/features/portfolio/services/get-portfolio-data";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const data = await getPortfolioData();

  if (!data.profile) {
    return <div className="text-white">Configure o banco para acessar o painel.</div>;
  }

  return (
    <AdminDashboard
      profileValues={mapProfileToFormValues(data.profile)}
      projectValues={mapProjectsToFormValues(data.projects)}
      messages={data.messages}
    />
  );
}
