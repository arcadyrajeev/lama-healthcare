import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    console.log("========== CONTACT REQUEST ==========");

    console.log("RESEND KEY EXISTS:", !!process.env.RESEND_API_KEY);

    const body = await request.json();

    console.log("CONTACT BODY:", {
      topic: body.topic,
      fullName: body.fullName,
      email: body.email,
      phone: body.phone,
      message: body.message,
    });

    const { topic, fullName, email, phone, message } = body;

    // -----------------------------
    // Validation
    // -----------------------------

    if (!topic || !fullName || !email || !message) {
      console.log("VALIDATION FAILED");

      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
          received: {
            topic: !!topic,
            fullName: !!fullName,
            email: !!email,
            message: !!message,
          },
        },
        { status: 400 },
      );
    }

    console.log("Validation passed");

    // -----------------------------
    // Send internal email
    // -----------------------------

    console.log("Sending internal email...");

    const { data: inquiryData, error: inquiryError } = await resend.emails.send(
      {
        from: "Lama Healthcare <hello@info.lamahc.com>",

        // IMPORTANT
        to: ["admin@lamahc.com"],

        replyTo: email,

        subject: `New Contact Inquiry: ${topic}`,

        html: `
          <div
            style="
              font-family: Arial, sans-serif;
              max-width: 650px;
              margin: 0 auto;
              color: #2F2F2F;
            "
          >

            <h2>New Contact Inquiry</h2>

            <p>
              <strong>Topic:</strong>
              ${escapeHtml(topic)}
            </p>

            <p>
              <strong>Name:</strong>
              ${escapeHtml(fullName)}
            </p>

            <p>
              <strong>Email:</strong>
              ${escapeHtml(email)}
            </p>

            <p>
              <strong>Phone:</strong>
              ${escapeHtml(phone || "Not provided")}
            </p>

            <h3>Message</h3>

            <p>
              ${escapeHtml(message).replace(/\n/g, "<br />")}
            </p>

          </div>
        `,
      },
    );

    console.log("INTERNAL EMAIL RESPONSE:", {
      inquiryData,
      inquiryError,
    });

    if (inquiryError) {
      console.error("RESEND INTERNAL EMAIL FAILED:", inquiryError);

      return NextResponse.json(
        {
          success: false,
          message: inquiryError.message,
          error: inquiryError,
        },
        { status: 500 },
      );
    }

    console.log("INTERNAL EMAIL SENT:", inquiryData?.id);

    // -----------------------------
    // Send visitor confirmation
    // -----------------------------

    console.log("Sending confirmation email...");

    const { data: confirmationData, error: confirmationError } =
      await resend.emails.send({
        from: "Lama Healthcare <hello@info.lamahc.com>",

        to: [email],

        subject: "We received your inquiry",

        html: `
        <div
          style="
            font-family: Arial, sans-serif;
            max-width: 650px;
            margin: 0 auto;
            color: #2F2F2F;
          "
        >

          <h2>We received your inquiry</h2>

          <p>
            Hi ${escapeHtml(fullName)},
          </p>

          <p>
            Thank you for contacting Lama Healthcare.
            We've received your inquiry regarding
            <strong>${escapeHtml(topic)}</strong>.
          </p>

          <p>
            Our team will review your message and get back
            to you within one business day.
          </p>

        </div>
      `,
      });

    console.log("CONFIRMATION RESPONSE:", {
      confirmationData,
      confirmationError,
    });

    if (confirmationError) {
      console.error("CONFIRMATION EMAIL FAILED:", confirmationError);

      // Don't fail the whole request.
      // The internal lead email already succeeded.
    }

    // -----------------------------
    // Success
    // -----------------------------

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been sent successfully.",
      inquiryId: inquiryData?.id,
      confirmationId: confirmationData?.id,
    });
  } catch (error) {
    console.error("CONTACT ROUTE CRASHED:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Something went wrong.",
      },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
