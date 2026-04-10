import { mkdir, writeFile } from "fs/promises";
import path from "path";

const uploadDir = path.join(process.cwd(), "public", "uploads");

export async function saveUploadedFile(file: File) {
  const buffer = Buffer.from(await file.arrayBuffer());
  const extension = file.name.split(".").pop() ?? "png";
  const safeName = `${Date.now()}-${crypto.randomUUID()}.${extension}`;

  await mkdir(uploadDir, { recursive: true });
  await writeFile(path.join(uploadDir, safeName), buffer);

  return `/uploads/${safeName}`;
}
