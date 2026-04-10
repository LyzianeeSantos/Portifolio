import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/utils";
import { projectSchema } from "@/lib/validators";

export async function POST(request: Request) {
  const session = await getAuthSession();

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = projectSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const count = await prisma.project.count();
  const project = await prisma.project.create({
    data: {
      title: parsed.data.title,
      slug: slugify(parsed.data.title),
      description: parsed.data.description,
      longDescription: parsed.data.longDescription,
      imageUrl: parsed.data.imageUrl,
      githubUrl: parsed.data.githubUrl,
      liveUrl: parsed.data.liveUrl || null,
      stack: parsed.data.stack,
      featured: parsed.data.featured,
      order: count,
    },
  });

  revalidatePath("/");
  revalidatePath("/admin");

  return NextResponse.json({
    ...project,
    stack: project.stack as string[],
    liveUrl: project.liveUrl ?? "",
  });
}
