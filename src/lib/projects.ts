export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string[];
  techStack: string[];
  thumbnail: string;
  year: string;
  featured: boolean;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  liveUrl?: string;
  sourceUrl?: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    id: "01",
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    tagline: "A full-stack marketplace with real-time inventory management",
    category: ["Web App", "Full-Stack"],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    thumbnail: "/projects/ecommerce-thumb.jpg",
    year: "2024",
    featured: true,
    description:
      "Built a complete e-commerce platform handling 10k+ daily transactions with real-time inventory tracking, multi-vendor support, and an admin dashboard.",
    challenge:
      "The client needed a scalable marketplace that could handle flash sales with thousands of concurrent users without overselling inventory.",
    solution:
      "Implemented optimistic locking with Redis for real-time inventory, WebSocket connections for live stock updates, and a queue-based order processing system.",
    outcome:
      "99.9% uptime during peak sales. Zero overselling incidents. 40% faster checkout compared to previous platform.",
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com",
  },
  {
    id: "02",
    slug: "design-system",
    title: "Component Design System",
    tagline: "Scalable design system serving 12 product teams",
    category: ["Design", "Frontend"],
    techStack: ["React", "TypeScript", "Storybook", "Figma", "CSS Variables"],
    thumbnail: "/projects/design-system-thumb.jpg",
    year: "2024",
    featured: true,
    description:
      "Created a comprehensive design system with 80+ components, documentation, and Figma integration serving multiple product teams.",
    challenge:
      "12 product teams were building inconsistent UIs with duplicated components, leading to maintenance nightmares and brand inconsistency.",
    solution:
      "Built a token-based design system with automated Figma-to-code sync, accessibility baked in, and comprehensive Storybook documentation.",
    outcome:
      "60% reduction in UI development time. Consistent brand across all products. Adopted by all 12 teams within 3 months.",
    liveUrl: "https://example.com",
  },
  {
    id: "03",
    slug: "ai-dashboard",
    title: "AI Analytics Dashboard",
    tagline: "Real-time ML model monitoring and data visualization",
    category: ["Web App", "Data"],
    techStack: ["React", "D3.js", "Python", "FastAPI", "TensorFlow"],
    thumbnail: "/projects/ai-dashboard-thumb.jpg",
    year: "2023",
    featured: true,
    description:
      "Developed an analytics dashboard for monitoring ML model performance, visualizing predictions, and managing training pipelines.",
    challenge:
      "Data scientists needed a way to monitor model drift, compare experiments, and visualize large datasets without context-switching between tools.",
    solution:
      "Built a unified dashboard with real-time WebSocket feeds, interactive D3.js visualizations, and direct Jupyter notebook integration.",
    outcome:
      "Reduced model debugging time by 70%. Became the primary tool for 25+ data scientists. Featured in internal tech talks.",
    sourceUrl: "https://github.com",
  },
  {
    id: "04",
    slug: "mobile-fitness-app",
    title: "Fitness Tracking App",
    tagline: "Cross-platform mobile app with social fitness features",
    category: ["Mobile", "Full-Stack"],
    techStack: ["React Native", "Node.js", "MongoDB", "Firebase", "GraphQL"],
    thumbnail: "/projects/fitness-thumb.jpg",
    year: "2023",
    featured: false,
    description:
      "Built a cross-platform fitness app with workout tracking, social challenges, and personalized AI coaching.",
    challenge:
      "Users wanted a fitness app that combined detailed workout tracking with social accountability, without being overwhelming.",
    solution:
      "Designed a progressive disclosure UI that starts simple and reveals complexity as users advance. Social features drive engagement through friendly competition.",
    outcome:
      "50k+ downloads in first month. 4.7 star rating. 65% weekly active user retention.",
    liveUrl: "https://example.com",
  },
  {
    id: "05",
    slug: "api-gateway",
    title: "Microservices API Gateway",
    tagline: "High-performance gateway handling 1M+ requests/day",
    category: ["Backend", "API"],
    techStack: ["Go", "gRPC", "Docker", "Kubernetes", "Prometheus"],
    thumbnail: "/projects/api-gateway-thumb.jpg",
    year: "2023",
    featured: false,
    description:
      "Architected a centralized API gateway for a microservices ecosystem with rate limiting, authentication, and observability.",
    challenge:
      "The growing microservices architecture needed centralized auth, rate limiting, and request routing without becoming a bottleneck.",
    solution:
      "Built a lightweight Go gateway with connection pooling, circuit breakers, and Prometheus metrics. Deployed on K8s with auto-scaling.",
    outcome:
      "Sub-5ms latency overhead. Handles 1M+ daily requests. Zero downtime deployments.",
    sourceUrl: "https://github.com",
  },
  {
    id: "06",
    slug: "creative-portfolio-cms",
    title: "Headless CMS Platform",
    tagline: "Custom CMS for creative agencies with visual editing",
    category: ["Web App", "Full-Stack"],
    techStack: ["Next.js", "Sanity", "TypeScript", "Vercel", "Tailwind"],
    thumbnail: "/projects/cms-thumb.jpg",
    year: "2022",
    featured: false,
    description:
      "Developed a headless CMS solution tailored for creative agencies with drag-and-drop page building and real-time previews.",
    challenge:
      "Creative agencies needed a CMS that gave designers full control over layout without requiring developer intervention for every page.",
    solution:
      "Built a modular block-based system with Sanity Studio customizations, live preview, and one-click deployments via Vercel.",
    outcome:
      "Adopted by 8 agencies. Reduced page creation time from days to hours. Featured on Sanity.io showcase.",
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com",
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllCategories(): string[] {
  const categories = new Set<string>();
  projects.forEach((p) => p.category.forEach((c) => categories.add(c)));
  return Array.from(categories).sort();
}
