This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# 🔍 Resource Viewer Web App

A modern, responsive web application built using **Next.js**, **React**, and **shadcn/ui**, with a powerful table implementation via **TanStack Table**. The app displays a list of resource entries stored in **Firestore**, allowing users to view key metadata at a glance and inspect detailed summaries on interaction.

---

## 📦 Tech Stack

- [Next.js](https://nextjs.org/) – React framework for SSR & API routing
- [React](https://react.dev/) – Component-based UI development
- [shadcn/ui](https://ui.shadcn.com/) – Modern and accessible UI components
- [TanStack Table](https://tanstack.com/table/v8) – Headless and highly customizable table logic
- [Firebase (Firestore)](https://firebase.google.com/docs/firestore) – Cloud-hosted NoSQL database for resource storage

---

## 📄 Description

This project renders a table UI displaying **ResourceWrapper** data. Each row presents key fields and supports expanding to show more detailed information.

Data is fetched directly from **Firestore**, and the table displays:

### 🧾 Table Fields (Collapsed View)
- `resourceType`
- `createdTime` (as a human-readable timestamp)
- `fetchTime` (relative to "now", e.g., "5 minutes ago")

### 🔍 Expanded Row Details
- `humanReadableStr`
- `aiSummary`
- Any other nested fields from the `ResourceWrapper`

> 📄 **Reference Schema:**  
> `ResourceWrapper` definition: [Pastebin Link](https://pastebin.com/vGpQz1va)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/resource-viewer.git
cd resource-viewer

## Getting Started

First, run the development server:

```bash
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
