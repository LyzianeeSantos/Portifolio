import { cache } from "react";
import { prisma } from "@/lib/prisma";

export const getPortfolioData = cache(async () => {
  const profile = await prisma.profile.findFirst({
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

  const projects = await prisma.project.findMany({
    orderBy: [{ featured: "desc" }, { order: "asc" }, { createdAt: "desc" }],
  });

  const messages = await prisma.contactMessage.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return {
    profile,
    projects,
    messages,
  };
});
