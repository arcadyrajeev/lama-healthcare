import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    console.log("RESEND KEY EXISTS:", !!process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "Lama Healthcare <hello@info.lamahc.com>",
      to: ["frontend@lamahc.com"],
      subject: "Resend Test",
      html: `
        <h1>Resend is working</h1>
        <p>This email was sent from info.lamahc.com.</p>
      `,
    });

    if (error) {
      console.error("RESEND TEST ERROR:", error);

      return Response.json(
        {
          success: false,
          error,
        },
        { status: 500 },
      );
    }

    console.log("RESEND TEST SUCCESS:", data);

    return Response.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("TEST ERROR:", error);

    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
