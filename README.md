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
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
