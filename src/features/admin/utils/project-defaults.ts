import type { ProjectValues } from "@/schemas/forms";

export const EMPTY_PROJECT_VALUES: ProjectValues = {
  title: "",
  description: "",
  longDescription: "",
  imageUrl: "/images/project-editorial.svg",
  githubUrl: "https://github.com/lyzianesantos",
  liveUrl: "",
  stack: ["Next.js"],
  featured: false,
};
