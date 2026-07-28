// app/[CODE]/admin/page.tsx

import { prisma } from "@/lib/prisma";

import AdminDashboard from "./components/AdminDashboard";

export default async function AdminPage() {
  const blogs = await prisma.blog.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  });

  return <AdminDashboard blogs={blogs} adminCode={process.env.A_PATH!} />;
}
