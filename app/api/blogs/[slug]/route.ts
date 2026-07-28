import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type RouteContext = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(_req: NextRequest, { params }: RouteContext) {
  try {
    const { slug } = await params;

    const blog = await prisma.blog.findFirst({
      where: {
        slug,
        published: true,
      },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        coverImage: true,
        category: true,
        content: true,
        seoTitle: true,
        seoDescription: true,
        canonicalUrl: true,
        publishedAt: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!blog) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog not found.",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json({
      success: true,
      blog,
    });
  } catch (error) {
    console.error("GET BLOG ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blog.",
      },
      {
        status: 500,
      },
    );
  }
}
