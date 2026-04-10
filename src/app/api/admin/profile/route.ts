import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { profileSchema } from "@/lib/validators";

export async function PUT(request: Request) {
  const session = await getAuthSession();

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = profileSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const profile = await prisma.profile.findFirst();

  if (!profile) {
    return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  }

  await prisma.profile.update({
    where: {
      id: profile.id,
    },
    data: {
      ...parsed.data,
      skillGroups: {
        deleteMany: {},
        create: parsed.data.skillGroups.map((group, index) => ({
          title: group.title,
          items: group.items,
          order: index,
        })),
      },
      educationItems: {
        deleteMany: {},
        create: parsed.data.educationItems.map((item, index) => ({
          title: item.title,
          subtitle: item.subtitle,
          period: item.period,
          description: item.description,
          order: index,
        })),
      },
      socialLinks: {
        deleteMany: {},
        create: parsed.data.socialLinks.map((item, index) => ({
          platform: item.platform,
          label: item.label,
          url: item.url,
          order: index,
        })),
      },
    },
  });

  revalidatePath("/");
  revalidatePath("/admin");

  return NextResponse.json({ ok: true });
}
