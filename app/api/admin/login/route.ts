import { NextRequest, NextResponse } from "next/server";

const ADMIN_PASSWORD = process.env.PASS!;
const ADMIN_SECRET = process.env.A_SECRET!;

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();

    if (!password) {
      return NextResponse.json(
        {
          success: false,
          message: "Password is required.",
        },
        {
          status: 400,
        },
      );
    }

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid password.",
        },
        {
          status: 401,
        },
      );
    }

    const response = NextResponse.json({
      success: true,
      message: "Login successful.",
    });

    response.cookies.set({
      name: "admin_session",
      value: ADMIN_SECRET,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error) {
    console.error("ADMIN LOGIN ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      },
    );
  }
}
