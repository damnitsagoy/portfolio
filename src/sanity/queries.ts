import { groq } from "next-sanity";

export const allProjectsQuery = groq`
  *[_type == "project"] | order(id asc) {
    id,
    title,
    "slug": slug.current,
    tagline,
    category,
    techStack,
    year,
    featured,
    thumbnail,
    description,
    challenge,
    solution,
    outcome,
    liveUrl,
    sourceUrl
  }
`;

export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true] | order(id asc) {
    id,
    title,
    "slug": slug.current,
    tagline,
    category,
    techStack,
    year,
    featured,
    thumbnail
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    id,
    title,
    "slug": slug.current,
    tagline,
    category,
    techStack,
    year,
    featured,
    thumbnail,
    heroMedia,
    heroVideo,
    description,
    challenge,
    solution,
    outcome,
    body,
    gallery,
    liveUrl,
    sourceUrl
  }
`;

export const allCategoriesQuery = groq`
  array::unique(*[_type == "project"].category[])
`;
