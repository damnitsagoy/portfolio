import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { apiVersion, dataset, projectId } from "./env";

// Only create a real client if projectId is configured
const isSanityConfigured = !!projectId;

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;

const builder = isSanityConfigured
  ? imageUrlBuilder({ projectId, dataset })
  : null;

export function urlFor(source: any) {
  if (!builder) return { width: () => ({ url: () => "" }), url: () => "" };
  return builder.image(source);
}

export { isSanityConfigured };
