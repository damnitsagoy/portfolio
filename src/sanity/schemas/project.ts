import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "Project Number",
      type: "string",
      description: 'Display number e.g. "01", "02"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "One-liner summary of the project",
    }),
    defineField({
      name: "category",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Web App", value: "Web App" },
          { title: "Mobile", value: "Mobile" },
          { title: "Full-Stack", value: "Full-Stack" },
          { title: "Frontend", value: "Frontend" },
          { title: "Backend", value: "Backend" },
          { title: "Design", value: "Design" },
          { title: "API", value: "API" },
          { title: "Data", value: "Data" },
        ],
      },
    }),
    defineField({
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Show on homepage?",
      initialValue: false,
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroMedia",
      title: "Hero Media",
      type: "image",
      options: { hotspot: true },
      description: "Full-width hero image for the case study page",
    }),
    defineField({
      name: "heroVideo",
      title: "Hero Video URL",
      type: "url",
      description: "Optional video URL (YouTube/Vimeo) for hero section",
    }),
    defineField({
      name: "description",
      title: "Overview",
      type: "text",
      rows: 4,
      description: "Full project overview",
    }),
    defineField({
      name: "challenge",
      title: "Challenge",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "solution",
      title: "Solution",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "outcome",
      title: "Outcome",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "body",
      title: "Body Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
      ],
      description: "Rich text content with embedded images (optional, for longer case studies)",
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "liveUrl",
      title: "Live URL",
      type: "url",
    }),
    defineField({
      name: "sourceUrl",
      title: "Source Code URL",
      type: "url",
    }),
  ],
  orderings: [
    {
      title: "Project Number",
      name: "idAsc",
      by: [{ field: "id", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "tagline",
      media: "thumbnail",
    },
  },
});
