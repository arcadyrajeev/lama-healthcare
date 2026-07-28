import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        coverImage: true,
        category: true,
        published: true,
        publishedAt: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      blogs,
    });
  } catch (error) {
    console.error("GET BLOGS ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blogs",
      },
      {
        status: 500,
      },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      title,
      slug,
      excerpt,
      content,
      coverImage,
      category,
      seoTitle,
      seoDescription,
      canonicalUrl,
      published,
    } = body;

    if (!title || !slug || !content) {
      return NextResponse.json(
        {
          success: false,
          message: "Title, slug and content are required.",
        },
        {
          status: 400,
        },
      );
    }

    const existing = await prisma.blog.findUnique({
      where: {
        slug,
      },
      select: {
        id: true,
      },
    });

    if (existing) {
      return NextResponse.json(
        {
          success: false,
          message: "A blog with this slug already exists.",
        },
        {
          status: 409,
        },
      );
    }

    const blog = await prisma.blog.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        coverImage,
        category,
        seoTitle,
        seoDescription,
        canonicalUrl,
        published,
        publishedAt: published ? new Date() : null,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Blog created successfully.",
        blog,
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error("CREATE BLOG ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create blog.",
      },
      {
        status: 500,
      },
    );
  }
}
