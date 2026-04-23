import { PortfolioPage } from "@/features/portfolio/components/portfolio-page";
import { getPortfolioData } from "@/features/portfolio/services/get-portfolio-data";

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await getPortfolioData();
  return <PortfolioPage data={data} />;
}
