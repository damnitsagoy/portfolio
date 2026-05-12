import { client, urlFor, isSanityConfigured } from "@/sanity/client";
import {
  allProjectsQuery,
  featuredProjectsQuery,
  projectBySlugQuery,
  allCategoriesQuery,
} from "@/sanity/queries";

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string[];
  techStack: string[];
  thumbnail: string | any;
  year: string;
  featured: boolean;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  liveUrl?: string;
  sourceUrl?: string;
  heroMedia?: any;
  heroVideo?: string;
  body?: any[];
  gallery?: any[];
  images?: string[];
}

// Helper: get thumbnail URL from Sanity image or fallback string
export function getThumbnailUrl(thumbnail: any): string {
  if (!thumbnail) return "";
  if (typeof thumbnail === "string") return thumbnail;
  if (thumbnail.asset) return urlFor(thumbnail).width(800).url();
  return "";
}

// ─── Sanity-powered fetchers ─────────────────────────────────────────────

export async function getAllProjects(): Promise<Project[]> {
  if (isSanityConfigured && client) {
    try {
      const data = await client.fetch(allProjectsQuery);
      if (data && data.length > 0) return data;
    } catch (e) {
      // Sanity fetch failed, fall through to local data
    }
  }
  return localProjects;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  if (isSanityConfigured && client) {
    try {
      const data = await client.fetch(featuredProjectsQuery);
      if (data && data.length > 0) return data;
    } catch (e) {
      // Fall through
    }
  }
  return localProjects.filter((p) => p.featured);
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  if (isSanityConfigured && client) {
    try {
      const data = await client.fetch(projectBySlugQuery, { slug });
      if (data) return data;
    } catch (e) {
      // Fall through
    }
  }
  return localProjects.find((p) => p.slug === slug);
}

export async function getAllCategories(): Promise<string[]> {
  if (isSanityConfigured && client) {
    try {
      const data = await client.fetch(allCategoriesQuery);
      if (data && data.length > 0) return data.sort();
    } catch (e) {
      // Fall through
    }
  }
  const categories = new Set<string>();
  localProjects.forEach((p) => p.category.forEach((c) => categories.add(c)));
  return Array.from(categories).sort();
}

// ─── Local fallback data ─────────────────────────────────────────────────

export const localProjects: Project[] = [
  {
    id: "01",
    slug: "brand-film-noir",
    title: "Brand Film — Noir Collection",
    tagline: "Cinematic brand film for a luxury fashion label",
    category: ["Video & Film", "Art Direction"],
    techStack: ["Premiere Pro", "DaVinci Resolve", "RED Camera", "After Effects"],
    thumbnail: "",
    year: "2024",
    featured: true,
    description:
      "Directed and edited a 3-minute brand film for a luxury fashion label's seasonal collection. Shot on RED in natural light with minimal crew.",
    challenge:
      "The brand needed a visual narrative that communicated exclusivity and craftsmanship without feeling overly commercial or staged.",
    solution:
      "Developed a moody, intimate visual language — slow dolly movements, shallow depth of field, and a desaturated grade that lets the garments speak for themselves.",
    outcome:
      "1.2M organic views across platforms. Selected for a fashion film festival. Led to ongoing creative partnership.",
    liveUrl: "https://example.com",
  },
  {
    id: "02",
    slug: "3d-product-visualisation",
    title: "3D Product Visualisation",
    tagline: "Photorealistic 3D renders for a tech hardware launch",
    category: ["3D & Animation", "Art Direction"],
    techStack: ["Blender", "Substance Painter", "After Effects", "Octane Render"],
    thumbnail: "",
    year: "2024",
    featured: true,
    description:
      "Created a series of photorealistic 3D product renders and animations for a hardware startup's product launch campaign.",
    challenge:
      "The physical product wasn't manufactured yet — the team needed marketing-ready visuals that looked indistinguishable from photography.",
    solution:
      "Modelled the product from CAD files, developed realistic materials in Substance Painter, and lit scenes to match the brand's minimal aesthetic.",
    outcome:
      "Visuals used across web, social, and print. Campaign contributed to a fully-funded crowdfunding launch within 48 hours.",
  },
  {
    id: "03",
    slug: "album-artwork-and-production",
    title: "Album Art & Production",
    tagline: "Full album production and visual identity for an indie artist",
    category: ["Music & Audio", "Brand Identity"],
    techStack: ["Ableton Live", "Logic Pro", "Illustrator", "Photoshop"],
    thumbnail: "",
    year: "2023",
    featured: true,
    description:
      "Produced a 10-track album from scratch — composition, arrangement, mixing, and mastering — plus the complete visual identity including artwork, merch, and social assets.",
    challenge:
      "The artist wanted a cohesive world across sound and visuals, but had no clear direction beyond a mood and a few reference tracks.",
    solution:
      "Developed the sonic palette and visual language in tandem — brutalist typography with organic textures for the art, matched by raw analog-digital production techniques in the music.",
    outcome:
      "200k+ streams in first month. Featured on editorial playlists. Visual identity praised by design publications.",
    liveUrl: "https://example.com",
  },
  {
    id: "04",
    slug: "motion-graphics-reel",
    title: "Motion Graphics Showreel",
    tagline: "Kinetic typography and abstract motion design",
    category: ["Motion Graphics", "3D & Animation"],
    techStack: ["After Effects", "Cinema 4D", "Blender", "Illustrator"],
    thumbnail: "",
    year: "2023",
    featured: false,
    description:
      "Created a personal motion graphics showreel combining kinetic typography, abstract 3D forms, and rhythmic editing to showcase range and style.",
    challenge:
      "Needed a piece that demonstrated both technical skill and creative voice within a tight 60-second format.",
    solution:
      "Structured around a single music track, with each section showcasing a different technique — type animation, particle systems, fluid simulations, and cel-shaded 3D.",
    outcome:
      "Led to 3 new client enquiries within a week of posting. Featured on motion design community pages.",
  },
  {
    id: "05",
    slug: "restaurant-brand-identity",
    title: "Restaurant Brand Identity",
    tagline: "Complete visual identity for an upscale dining concept",
    category: ["Brand Identity", "Photography"],
    techStack: ["Illustrator", "Photoshop", "Lightroom", "InDesign"],
    thumbnail: "",
    year: "2023",
    featured: false,
    description:
      "Developed a full brand identity for a new restaurant concept — logo, typography system, colour palette, menu design, signage, and food photography.",
    challenge:
      "The owners wanted something that felt elevated and modern but also warm and approachable — not cold or intimidating.",
    solution:
      "Combined a refined serif wordmark with warm earth tones and textural elements. Shot all food photography in natural light with an editorial, lifestyle approach.",
    outcome:
      "Brand launched to full bookings for opening month. Identity featured in a local design awards shortlist.",
    liveUrl: "https://example.com",
  },
  {
    id: "06",
    slug: "documentary-short",
    title: "Documentary Short — Makers",
    tagline: "10-minute documentary following local artisans at work",
    category: ["Video & Film", "Photography"],
    techStack: ["Premiere Pro", "DaVinci Resolve", "Sony FX3", "Lightroom"],
    thumbnail: "",
    year: "2022",
    featured: false,
    description:
      "Shot and edited a short documentary profiling three local artisans — a ceramicist, a letterpress printer, and a woodworker — exploring craft and patience.",
    challenge:
      "Capturing the meditative quality of handcraft work without the film becoming slow or losing viewer engagement.",
    solution:
      "Used tight macro detail shots intercut with wide workshop atmospherics. Minimal narration — letting ambient sound and the subjects' brief reflections carry the story.",
    outcome:
      "Selected for two local film festivals. Commissioned by a craft collective for their website. 50k views on YouTube.",
    liveUrl: "https://example.com",
  },
];
