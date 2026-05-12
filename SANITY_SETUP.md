# Sanity CMS Setup Guide

This portfolio uses **Sanity** as a headless CMS. Follow these steps to connect it so you can manage projects from a visual dashboard.

---

## Step 1: Create a Sanity Project

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Sign up or log in (GitHub/Google login works)
3. Click **"Create new project"**
4. Name it anything (e.g., "Portfolio")
5. Choose the **Free** plan
6. Select dataset: `production` (default)
7. Once created, you'll see your **Project ID** on the project dashboard

---

## Step 2: Add Your Project ID

1. In your portfolio folder, copy the example env file:

```bash
cp .env.local.example .env.local
```

2. Open `.env.local` and fill in your project ID:

```
NEXT_PUBLIC_SANITY_PROJECT_ID="your-actual-project-id"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2024-01-01"
```

> You can find your project ID at [sanity.io/manage](https://www.sanity.io/manage) → your project → Settings → API.

---

## Step 3: Add CORS Origin

Sanity needs to allow your local dev server and deployed site:

1. Go to [sanity.io/manage](https://www.sanity.io/manage) → your project → **API** → **CORS origins**
2. Add these origins:
   - `http://localhost:3000` (for local dev)
   - `https://your-site.vercel.app` (your deployed URL)
3. Check **"Allow credentials"** for both

---

## Step 4: Run the Studio

Start your dev server:

```bash
npm run dev
```

Then go to: **http://localhost:3000/studio**

You'll see the Sanity Studio dashboard where you can add and edit projects.

---

## Step 5: Add Your First Project

In the Studio:

1. Click **"Project"** in the left sidebar
2. Click the **✏️ Create** button
3. Fill in the fields:
   - **Project Number** — e.g., "01"
   - **Title** — your project name
   - **Slug** — click "Generate" (auto-creates from title)
   - **Tagline** — one-liner summary
   - **Categories** — select from the dropdown
   - **Tech Stack** — add technologies one by one
   - **Year** — e.g., "2024"
   - **Featured** — toggle on to show on homepage
   - **Thumbnail** — upload an image (card preview)
   - **Hero Media** — upload a wider image (project detail page)
   - **Description / Challenge / Solution / Outcome** — your case study text
   - **Gallery** — upload multiple screenshots
   - **Live URL / Source URL** — optional links
4. Click **Publish**

Your project will now appear on the website!

---

## Step 6: Deploy to Vercel (with Sanity)

When deploying to Vercel, add your environment variables:

1. Go to your Vercel project → **Settings** → **Environment Variables**
2. Add:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = your project ID
   - `NEXT_PUBLIC_SANITY_DATASET` = `production`
   - `NEXT_PUBLIC_SANITY_API_VERSION` = `2024-01-01`
3. Redeploy

Also add your Vercel URL to CORS origins in Sanity (Step 3).

---

## How It Works

```
┌─────────────────┐        ┌──────────────────┐        ┌──────────────┐
│  Sanity Studio  │  ───►  │  Sanity Cloud    │  ───►  │  Your Site   │
│  (localhost/    │        │  (stores data,   │        │  (fetches &  │
│   studio)       │        │   images, etc.)  │        │   displays)  │
└─────────────────┘        └──────────────────┘        └──────────────┘
     You edit here              Hosted for free           Auto-updates
```

- **Studio** = where you write content (embedded at `/studio`)
- **Sanity Cloud** = stores your data & images (free tier: 500k API requests/month)
- **Your Site** = fetches content and displays it

---

## Fallback Behavior

If Sanity is NOT configured (no project ID), the site automatically shows the **sample projects** from `src/lib/projects.ts`. Once you connect Sanity and add projects there, it switches to CMS data.

---

## Useful Commands

```bash
# Run dev server (includes Studio at /studio)
npm run dev

# Deploy Sanity schema changes (if you modify schemas)
npx sanity deploy

# Export data from Sanity
npx sanity dataset export production ./backup.tar.gz

# Import data to Sanity
npx sanity dataset import ./backup.tar.gz production
```

---

## FAQ

**Q: Can I still edit code for the design?**
A: Yes! The CMS only manages content (projects, text, images). Design and layout are still in your code.

**Q: Is it free?**
A: Yes. Sanity free tier includes 500k API requests/month, 10GB bandwidth, 5GB assets. More than enough for a portfolio.

**Q: Can other people add content?**
A: Yes! Invite team members in Sanity → Settings → Members.

**Q: What if I want to add more content types (blog posts, testimonials, etc.)?**
A: Add a new schema file in `src/sanity/schemas/`, register it in `src/sanity/schemas/index.ts`, and create the corresponding pages.
