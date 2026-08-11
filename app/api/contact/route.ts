import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { topic, fullName, email, phone, message } = body;

    // -----------------------------------------
    // Validation
    // -----------------------------------------

    if (!topic || !fullName || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 },
      );
    }

    // -----------------------------------------
    // 1. Send inquiry to your team
    // -----------------------------------------

    const { data: inquiryData, error: inquiryError } = await resend.emails.send(
      {
        from: "Healthcare Team <hello@info.lamahc.com>",
        to: ["rajeev@arcadydesign.com"],
        replyTo: email,
        subject: `New Contact Inquiry: ${topic}`,

        html: `
          <div
            style="
              font-family: Arial, Helvetica, sans-serif;
              max-width: 650px;
              margin: 0 auto;
              color: #2F2F2F;
              background: #ffffff;
            "
          >

            <!-- Header -->
            <div
              style="
                padding: 28px 0;
                border-bottom: 1px solid #e5e5e5;
              "
            >
              <p
                style="
                  margin: 0 0 8px;
                  font-size: 11px;
                  font-weight: 600;
                  letter-spacing: 3px;
                  text-transform: uppercase;
                  color: #C6944A;
                "
              >
                New Inquiry
              </p>

              <h2
                style="
                  margin: 0;
                  font-size: 24px;
                  font-weight: 500;
                  color: #2F2F2F;
                "
              >
                New Contact Inquiry
              </h2>

              <p
                style="
                  margin: 10px 0 0;
                  font-size: 14px;
                  line-height: 1.6;
                  color: #777777;
                "
              >
                Someone submitted a contact form through your website.
              </p>
            </div>

            <!-- Contact Details -->
            <div style="padding: 28px 0;">

              <h3
                style="
                  margin: 0 0 20px;
                  font-size: 16px;
                  color: #2F2F2F;
                "
              >
                Contact Details
              </h3>

              <p style="margin: 0 0 18px;">
                <strong>Topic</strong><br />
                <span style="color: #555555;">
                  ${escapeHtml(topic)}
                </span>
              </p>

              <p style="margin: 0 0 18px;">
                <strong>Full Name</strong><br />
                <span style="color: #555555;">
                  ${escapeHtml(fullName)}
                </span>
              </p>

              <p style="margin: 0 0 18px;">
                <strong>Email</strong><br />
                <span style="color: #555555;">
                  ${escapeHtml(email)}
                </span>
              </p>

              <p style="margin: 0 0 18px;">
                <strong>Phone</strong><br />
                <span style="color: #555555;">
                  ${escapeHtml(phone || "Not provided")}
                </span>
              </p>

              <!-- Message -->

              <h3
                style="
                  margin: 30px 0 12px;
                  font-size: 16px;
                  color: #2F2F2F;
                "
              >
                Message
              </h3>

              <div
                style="
                  background: #f7f7f7;
                  border-radius: 12px;
                  padding: 18px;
                  font-size: 14px;
                  line-height: 1.7;
                  color: #555555;
                "
              >
                ${escapeHtml(message).replace(/\n/g, "<br />")}
              </div>

            </div>

            <!-- Footer -->
            <div
              style="
                padding: 20px 0;
                border-top: 1px solid #e5e5e5;
                font-size: 12px;
                color: #888888;
              "
            >
              This inquiry was submitted through your website contact form.
            </div>

          </div>
        `,
      },
    );

    if (inquiryError) {
      console.error("Resend inquiry error:", inquiryError);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to send inquiry.",
        },
        { status: 500 },
      );
    }

    // -----------------------------------------
    // 2. Send confirmation email to visitor
    // -----------------------------------------

    const { error: confirmationError } = await resend.emails.send({
      from: "Healthcare Team <hello@info.lamahc.com>",
      to: [email],
      subject: "We received your inquiry",

      html: `
          <div
            style="
              font-family: Arial, Helvetica, sans-serif;
              max-width: 650px;
              margin: 0 auto;
              color: #2F2F2F;
              background: #ffffff;
            "
          >

            <!-- Header -->
            <div
              style="
                padding: 32px 0;
                border-bottom: 1px solid #e5e5e5;
              "
            >
              <p
                style="
                  margin: 0 0 10px;
                  font-size: 11px;
                  font-weight: 600;
                  letter-spacing: 3px;
                  text-transform: uppercase;
                  color: #C6944A;
                "
              >
                Thank You
              </p>

              <h2
                style="
                  margin: 0;
                  font-size: 26px;
                  font-weight: 500;
                  color: #2F2F2F;
                "
              >
                We received your inquiry
              </h2>
            </div>

            <!-- Content -->
            <div style="padding: 30px 0;">

              <p
                style="
                  margin: 0 0 18px;
                  font-size: 15px;
                  line-height: 1.7;
                "
              >
                Hi ${escapeHtml(fullName)},
              </p>

              <p
                style="
                  margin: 0 0 18px;
                  font-size: 15px;
                  line-height: 1.7;
                  color: #555555;
                "
              >
                Thank you for contacting us. We've received your inquiry
                regarding
                <strong>${escapeHtml(topic)}</strong>.
              </p>

              <p
                style="
                  margin: 0 0 24px;
                  font-size: 15px;
                  line-height: 1.7;
                  color: #555555;
                "
              >
                Our team will review your message and get back to you
                within one business day.
              </p>

              <!-- Inquiry Summary -->
              <div
                style="
                  background: #f7f7f7;
                  border-radius: 14px;
                  padding: 20px;
                  margin-top: 25px;
                "
              >

                <p
                  style="
                    margin: 0 0 8px;
                    font-size: 11px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: #888888;
                  "
                >
                  Your inquiry
                </p>

                <p
                  style="
                    margin: 0;
                    font-size: 14px;
                    line-height: 1.7;
                    color: #555555;
                  "
                >
                  ${escapeHtml(message).replace(/\n/g, "<br />")}
                </p>

              </div>

            </div>

            <!-- Footer -->
            <div
              style="
                padding: 24px 0;
                border-top: 1px solid #e5e5e5;
              "
            >
              <p
                style="
                  margin: 0;
                  font-size: 13px;
                  line-height: 1.6;
                  color: #888888;
                "
              >
                Best,<br />
                <strong style="color: #2F2F2F;">
                  Healthcare Team
                </strong>
              </p>
            </div>

          </div>
        `,
    });

    if (confirmationError) {
      // The main inquiry was already sent successfully.
      // Don't tell the visitor that the entire submission failed.
      console.error("Resend confirmation email error:", confirmationError);
    }

    // -----------------------------------------
    // Success
    // -----------------------------------------

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been sent successfully.",
      id: inquiryData?.id,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 },
    );
  }
}

// -----------------------------------------
// HTML escaping
// -----------------------------------------

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
