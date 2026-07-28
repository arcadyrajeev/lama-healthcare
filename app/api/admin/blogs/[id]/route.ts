import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(_req: NextRequest, { params }: RouteContext) {
  try {
    const { id } = await params;

    const blog = await prisma.blog.findUnique({
      where: {
        id,
      },
    });

    if (!blog) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog not found",
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
        message: "Failed to fetch blog",
      },
      {
        status: 500,
      },
    );
  }
}

export async function PATCH(req: NextRequest, { params }: RouteContext) {
  try {
    const { id } = await params;

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

    const exists = await prisma.blog.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
      },
    });

    if (!exists) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog not found",
        },
        {
          status: 404,
        },
      );
    }

    const blog = await prisma.blog.update({
      where: {
        id,
      },
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

    return NextResponse.json({
      success: true,
      blog,
    });
  } catch (error) {
    console.error("UPDATE BLOG ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update blog",
      },
      {
        status: 500,
      },
    );
  }
}

export async function DELETE(_req: NextRequest, { params }: RouteContext) {
  try {
    const { id } = await params;

    const exists = await prisma.blog.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
      },
    });

    if (!exists) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog not found",
        },
        {
          status: 404,
        },
      );
    }

    await prisma.blog.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.error("DELETE BLOG ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete blog",
      },
      {
        status: 500,
      },
    );
  }
}
