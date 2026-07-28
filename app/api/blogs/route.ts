import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      where: {
        published: true,
      },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        coverImage: true,
        category: true,
        publishedAt: true,
      },
      orderBy: {
        publishedAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      blogs,
    });
  } catch (error) {
    console.error("GET PUBLIC BLOGS ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blogs.",
      },
      {
        status: 500,
      },
    );
  }
}
