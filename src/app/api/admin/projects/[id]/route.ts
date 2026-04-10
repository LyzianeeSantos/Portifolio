import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/utils";
import { projectSchema } from "@/lib/validators";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export async function PUT(request: Request, { params }: Params) {
  const session = await getAuthSession();

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();
  const parsed = projectSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const project = await prisma.project.update({
    where: {
      id,
    },
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

export async function DELETE(_request: Request, { params }: Params) {
  const session = await getAuthSession();

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  await prisma.project.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");
  revalidatePath("/admin");

  return NextResponse.json({ ok: true });
}
