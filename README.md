# Student Conscious Club

An integrated digital ecosystem for student development, academic exploration, creative expression, and long-term archival intelligence. Built specifically to be 100% free-tier optimized.

## 🚀 Tech Stack

- **Frontend:** Next.js 14+ (App Router), React, Tailwind CSS, Framer Motion
- **Backend & Auth:** Supabase (PostgreSQL, Supabase Auth)
- **Deployment:** Vercel

## ⚙️ Features

- **RBAC (Role-Based Access Control):** Granular permissions for Guests, Students, Core Team, and Founders.
- **Academic & Creative Hubs:** Categories covering everything from Mathematics and Chemistry to Short Films and Poetry.
- **Event Management:** RSVP and track events seamlessly.
- **File Management UI:** Pre-built interfaces mapped for integration with Supabase Storage.
- **Minimal SaaS Design:** A clean, engaging dark/light themed interface built with Tailwind.

## 💻 Running Locally

First, ensure you have set up your `.env.local` with the following variables from your Supabase project:
```env
NEXT_PUBLIC_SUPABASE_URL="YOUR_SUPABASE_URL"
NEXT_PUBLIC_SUPABASE_ANON_KEY="YOUR_ANON_KEY"
```

Next, install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🗄️ Database Setup

To initialize the database locally or on a new Supabase project, execute the SQL found in `supabase/schema.sql` directly into your Supabase SQL editor. This creates:
1. The `profiles` table (linked to `auth.users`)
2. The `events` table
3. The `academic_resources` table
4. Safe Row Level Security (RLS) Triggers

## 🤝 Contribution
Commits should be modular. Please test responsive behaviors using the global Tailwind variables prior to submitting PRs.
