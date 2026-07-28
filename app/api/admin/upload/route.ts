import { NextRequest, NextResponse } from "next/server";
import { adminSupabase } from "@/lib/admin";

const ADMIN_SECRET = process.env.A_SECRET!;

export async function POST(req: NextRequest) {
  try {
    // Verify admin session
    const session = req.cookies.get("admin_session")?.value;

    if (session !== ADMIN_SECRET) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        {
          status: 401,
        },
      );
    }

    const formData = await req.formData();

    const file = formData.get("file") as File | null;

    const bucket = formData.get("bucket") as
      | "blog-covers"
      | "blog-content"
      | null;

    if (!file || !bucket) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing file or bucket.",
        },
        {
          status: 400,
        },
      );
    }

    const extension = file.name.split(".").pop()?.toLowerCase() ?? "jpg";

    const now = new Date();

    const path = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(
      2,
      "0",
    )}/${crypto.randomUUID()}.${extension}`;

    const { error } = await adminSupabase.storage
      .from(bucket)
      .upload(path, file);

    if (error) {
      throw error;
    }

    const {
      data: { publicUrl },
    } = adminSupabase.storage.from(bucket).getPublicUrl(path);

    return NextResponse.json({
      success: true,
      url: publicUrl,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Upload failed.",
      },
      {
        status: 500,
      },
    );
  }
}
