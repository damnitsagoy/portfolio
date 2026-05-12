import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { apiVersion, dataset, projectId } from "./env";

// Only create a real client if projectId is configured
export const isSanityConfigured = !!projectId;

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

// Chainable image URL helper — returns a builder that supports .width().height().url() etc.
export function urlFor(source: any) {
  if (!builder || !source) {
    // Return a dummy chainable object
    const dummy: any = {
      width: () => dummy,
      height: () => dummy,
      fit: () => dummy,
      auto: () => dummy,
      format: () => dummy,
      quality: () => dummy,
      url: () => "",
    };
    return dummy;
  }
  return builder.image(source);
}
