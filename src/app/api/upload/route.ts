import { NextResponse } from "next/server";
import { getAuthSession } from "@/lib/auth";
import { saveUploadedFile } from "@/lib/upload";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const session = await getAuthSession();

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Arquivo inválido." }, { status: 400 });
  }

  const url = await saveUploadedFile(file);

  return NextResponse.json({ url });
}
