
import { readdir } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-static";

export async function GET() {
  const directory = path.join(
    process.cwd(),
    "public",
    "images",
    "gallery"
  );

  const files = await readdir(directory);

  const images = files
    .filter((file) =>
      /\.(jpg|jpeg|png|webp|avif)$/i.test(file)
    )
    .sort()
    .map((file) => `/images/gallery/${encodeURIComponent(file)}`);

  return NextResponse.json(images);
}
