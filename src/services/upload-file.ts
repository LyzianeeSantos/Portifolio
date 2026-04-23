import { mkdir, writeFile } from "fs/promises";
import path from "path";

const uploadDirectory = path.join(process.cwd(), "public", "uploads");

export async function saveUploadedFile(file: File) {
  const buffer = Buffer.from(await file.arrayBuffer());
  const extension = file.name.split(".").pop() ?? "png";
  const safeName = `${Date.now()}-${crypto.randomUUID()}.${extension}`;

  await mkdir(uploadDirectory, { recursive: true });
  await writeFile(path.join(uploadDirectory, safeName), buffer);

  return `/uploads/${safeName}`;
}
