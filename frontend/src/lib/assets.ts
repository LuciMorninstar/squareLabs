import type { StaticImageData } from "next/image";

export type ImageImport = string | StaticImageData;

export function assetSrc(src: ImageImport): string {
  return typeof src === "string" ? src : src.src;
}
