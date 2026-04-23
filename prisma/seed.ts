import "dotenv/config";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { slugify } from "../src/utils/text";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash(
    process.env.ADMIN_PASSWORD ?? "Lyziane@2026",
    10,
  );

  await prisma.user.upsert({
    where: {
      email: process.env.ADMIN_EMAIL ?? "admin@lyziane.dev",
    },
    update: {
      name: "Lyziane Santos",
      passwordHash: password,
      role: "ADMIN",
    },
    create: {
      name: "Lyziane Santos",
      email: process.env.ADMIN_EMAIL ?? "admin@lyziane.dev",
      passwordHash: password,
      role: "ADMIN",
    },
  });

  const profile = await prisma.profile.findFirst();

  const currentProfile =
    profile ??
    (await prisma.profile.create({
      data: {
        name: "Lyziane Santos",
        age: 22,
        degree: "Engenheira de Software",
        profession: "Desenvolvedora de Software e Influencer Digital",
        headline:
          "Software Engineer, criadora de experiências digitais e presença visual com assinatura própria.",
        introTagline:
          "Tecnologia, criatividade e presença digital em uma estética editorial contemporânea.",
        about:
          "Transformo tecnologia e comunicação digital em projetos com identidade, estratégia e sofisticação. Minha atuação une desenvolvimento de software, direção criativa e presença nas mídias sociais para construir experiências que equilibram inovação, estética e funcionalidade. Ao longo da minha trajetória, desenvolvi uma visão que conecta código, narrativa visual e posicionamento digital, criando soluções com propósito, consistência e impacto.",
        heroImage: "/images/hero-lyziane.svg",
        aboutImage: "/images/about-lyziane.svg",
        heroLabel: "Creative Software Portfolio",
        location: "Cuiabá, Brasil",
        email: "contato@lyziane.dev",
        phone: "+55 65 99999-9999",
        accentQuote:
          "Construo experiências digitais onde performance, estética e presença se encontram.",
      },
    }));

  await prisma.skillGroup.deleteMany({
    where: {
      profileId: currentProfile.id,
    },
  });

  await prisma.educationItem.deleteMany({
    where: {
      profileId: currentProfile.id,
    },
  });

  await prisma.socialLink.deleteMany({
    where: {
      profileId: currentProfile.id,
    },
  });

  await prisma.skillGroup.createMany({
    data: [
      {
        profileId: currentProfile.id,
        title: "Front-end",
        items: ["Vue", "Next.js", "HTML", "CSS", "JavaScript"],
        order: 0,
      },
      {
        profileId: currentProfile.id,
        title: "Frameworks e bibliotecas",
        items: ["Tailwind CSS", "shadcn/ui"],
        order: 1,
      },
      {
        profileId: currentProfile.id,
        title: "Back-end",
        items: ["Node.js", "PHP", "Laravel"],
        order: 2,
      },
      {
        profileId: currentProfile.id,
        title: "Ferramentas",
        items: [
          "VS Code",
          "GitHub",
          "Canva Pro",
          "Figma",
          "Postman",
          "PostgreSQL",
          "DBeaver",
          "PhpStorm",
        ],
        order: 3,
      },
    ],
  });

  await prisma.educationItem.createMany({
    data: [
      {
        profileId: currentProfile.id,
        title: "Bacharel em Engenharia de Software",
        subtitle: "Formação principal",
        period: "Em andamento",
        description:
          "Base sólida em arquitetura, lógica, boas práticas e construção de soluções escaláveis.",
        order: 0,
      },
      {
        profileId: currentProfile.id,
        title: "Inglês",
        subtitle: "Desenvolvimento contínuo",
        period: "Intermediário avançado",
        description:
          "Leitura técnica, aprendizado contínuo e comunicação em contextos digitais e profissionais.",
        order: 1,
      },
      {
        profileId: currentProfile.id,
        title: "Cursos especializados",
        subtitle: "Tecnologias que utilizo",
        period: "Atualização constante",
        description:
          "Aprofundamento prático nas linguagens, frameworks e ferramentas que fazem parte da minha stack.",
        order: 2,
      },
      {
        profileId: currentProfile.id,
        title: "Técnica em Automação Industrial",
        subtitle: "Base técnica multidisciplinar",
        period: "Conclusão",
        description:
          "Experiência formativa que ampliou meu olhar sistêmico, analítico e orientado a processos.",
        order: 3,
      },
    ],
  });

  await prisma.socialLink.createMany({
    data: [
      {
        profileId: currentProfile.id,
        platform: "Instagram",
        label: "@lyzianesantos",
        url: "https://instagram.com/lyzianesantos",
        order: 0,
      },
      {
        profileId: currentProfile.id,
        platform: "GitHub",
        label: "github.com/lyzianesantos",
        url: "https://github.com/lyzianesantos",
        order: 1,
      },
      {
        profileId: currentProfile.id,
        platform: "LinkedIn",
        label: "linkedin.com/in/lyzianesantos",
        url: "https://linkedin.com/in/lyzianesantos",
        order: 2,
      },
      {
        profileId: currentProfile.id,
        platform: "TikTok",
        label: "@lyzianesantos",
        url: "https://tiktok.com/@lyzianesantos",
        order: 3,
      },
    ],
  });

  const projects = [
    {
      title: "Editorial Commerce Experience",
      description:
        "Plataforma visual com identidade fashion-tech, combinando navegação fluida, storytelling e performance.",
      longDescription:
        "Projeto conceito criado para unir experiência editorial, design de campanha e arquitetura front-end moderna. A solução prioriza narrativa visual, responsividade e componentes escaláveis para posicionamento digital premium.",
      imageUrl: "/images/project-editorial.svg",
      githubUrl: "https://github.com/lyzianesantos/editorial-commerce",
      liveUrl: "https://editorial-commerce.vercel.app",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      featured: true,
      order: 0,
    },
    {
      title: "Creator Analytics Dashboard",
      description:
        "Dashboard para gestão de presença digital com métricas, campanhas e visão estratégica de conteúdo.",
      longDescription:
        "Painel projetado para creators e marcas acompanharem performance, campanhas e oportunidades. O foco visual combina clareza analítica com atmosfera contemporânea e sofisticada.",
      imageUrl: "/images/project-dashboard.svg",
      githubUrl: "https://github.com/lyzianesantos/creator-analytics",
      liveUrl: "https://creator-analytics.vercel.app",
      stack: ["Next.js", "Prisma", "PostgreSQL", "shadcn/ui"],
      featured: true,
      order: 1,
    },
    {
      title: "Social Brand Studio",
      description:
        "Sistema para organizar conteúdo, calendário editorial e identidade visual de campanhas digitais.",
      longDescription:
        "Estrutura pensada para profissionais que conectam branding, presença digital e entrega de conteúdo. Reúne organização, gestão visual e experiência refinada em uma interface responsiva.",
      imageUrl: "/images/project-brand.svg",
      githubUrl: "https://github.com/lyzianesantos/social-brand-studio",
      liveUrl: "https://social-brand-studio.vercel.app",
      stack: ["Vue", "Node.js", "PostgreSQL", "Figma"],
      featured: false,
      order: 2,
    },
  ];

  for (const project of projects) {
    await prisma.project.upsert({
      where: {
        slug: slugify(project.title),
      },
      update: project,
      create: {
        ...project,
        slug: slugify(project.title),
      },
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
