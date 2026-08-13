import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      email,
      phone,
      practiceCount,
      specialty,
      billingSetup,
      monthlyCollections,
      problem,
      additionalDetails,
      timeline,
    } = body;

    console.log("========== AUDIT REQUEST ==========");

    console.log({
      fullName,
      email,
      phone,
      practiceCount,
      specialty,
      billingSetup,
      monthlyCollections,
      problem,
      additionalDetails,
      timeline,
    });

    // --------------------------------
    // Validation
    // --------------------------------

    if (
      !fullName ||
      !email ||
      !phone ||
      !practiceCount ||
      !specialty ||
      !billingSetup ||
      !monthlyCollections ||
      !problem ||
      !timeline
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 },
      );
    }

    // --------------------------------
    // Internal notification
    // --------------------------------

    const { data: auditData, error: auditError } = await resend.emails.send({
      from: "Lama Healthcare <hello@info.lamahc.com>",

      // Change this if your internal lead email is different
      to: ["rajeev@arcadydesign.com"],

      replyTo: email,

      subject: `🔥 New Free Audit Request: ${fullName}`,

      html: `
          <div
            style="
              font-family: Arial, Helvetica, sans-serif;
              max-width: 700px;
              margin: 0 auto;
              color: #2F2F2F;
              line-height: 1.6;
            "
          >

            <div
              style="
                background: #456B7C;
                padding: 28px;
                border-radius: 16px 16px 0 0;
                color: white;
              "
            >
              <p
                style="
                  margin: 0 0 8px;
                  font-size: 12px;
                  letter-spacing: 2px;
                  text-transform: uppercase;
                "
              >
                Lama Healthcare
              </p>

              <h1
                style="
                  margin: 0;
                  font-size: 28px;
                "
              >
                New Free Audit Request
              </h1>
            </div>

            <div
              style="
                padding: 28px;
                border: 1px solid #e5e7eb;
                border-top: none;
                border-radius: 0 0 16px 16px;
              "
            >

              <h2 style="font-size: 18px;">
                Contact Information
              </h2>

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
                ${escapeHtml(phone)}
              </p>


              <h2 style="font-size: 18px; margin-top: 30px;">
                Practice Information
              </h2>

              <p>
                <strong>Number of Practices:</strong>
                ${escapeHtml(practiceCount)}
              </p>

              <p>
                <strong>Specialty:</strong>
                ${escapeHtml(specialty)}
              </p>

              <p>
                <strong>Current Billing Setup:</strong>
                ${escapeHtml(billingSetup)}
              </p>

              <p>
                <strong>Monthly Collections:</strong>
                ${escapeHtml(monthlyCollections)}
              </p>


              <h2 style="font-size: 18px; margin-top: 30px;">
                Business Problem
              </h2>

              <div
                style="
                  background: #f8fafb;
                  padding: 18px;
                  border-radius: 12px;
                  white-space: normal;
                "
              >
                ${escapeHtml(problem).replace(/\n/g, "<br />")}
              </div>


              ${
                additionalDetails
                  ? `
                    <h2 style="font-size: 18px; margin-top: 30px;">
                      Additional Details
                    </h2>

                    <div
                      style="
                        background: #f8fafb;
                        padding: 18px;
                        border-radius: 12px;
                      "
                    >
                      ${escapeHtml(additionalDetails).replace(/\n/g, "<br />")}
                    </div>
                  `
                  : ""
              }


              <h2 style="font-size: 18px; margin-top: 30px;">
                Timeline
              </h2>

              <p>
                <strong>When are they looking to improve?</strong>
                ${escapeHtml(timeline)}
              </p>


              <div
                style="
                  margin-top: 32px;
                  padding: 18px;
                  background: #f5f1e9;
                  border-radius: 12px;
                "
              >
                <strong>Recommended next step:</strong>

                <p style="margin-bottom: 0;">
                  Review the practice details and contact the prospect
                  for an audit/discovery conversation.
                </p>
              </div>

            </div>
          </div>
        `,
    });

    console.log("AUDIT EMAIL RESPONSE:", {
      auditData,
      auditError,
    });

    if (auditError) {
      console.error("RESEND AUDIT ERROR:", auditError);

      return NextResponse.json(
        {
          success: false,
          message: auditError.message,
          error: auditError,
        },
        { status: 500 },
      );
    }

    // --------------------------------
    // Prospect confirmation email
    // --------------------------------

    const { data: confirmationData, error: confirmationError } =
      await resend.emails.send({
        from: "Lama Healthcare <hello@info.lamahc.com>",

        to: [email],

        subject: "Your Lama Healthcare Audit Request",

        html: `
        <div
          style="
            font-family: Arial, Helvetica, sans-serif;
            max-width: 650px;
            margin: 0 auto;
            color: #2F2F2F;
            line-height: 1.6;
          "
        >

          <div
            style="
              background: #456B7C;
              padding: 28px;
              border-radius: 16px 16px 0 0;
              color: white;
            "
          >

            <p
              style="
                margin: 0 0 8px;
                font-size: 12px;
                letter-spacing: 2px;
                text-transform: uppercase;
              "
            >
              Lama Healthcare
            </p>

            <h1
              style="
                margin: 0;
                font-size: 26px;
              "
            >
              Your audit request is in.
            </h1>

          </div>

          <div
            style="
              padding: 28px;
              border: 1px solid #e5e7eb;
              border-top: none;
              border-radius: 0 0 16px 16px;
            "
          >

            <p>
              Hi ${escapeHtml(fullName)},
            </p>

            <p>
              Thank you for requesting a free practice audit
              from Lama Healthcare.
            </p>

            <p>
              We've received the information you provided and
              our team will review your practice details.
            </p>

            <div
              style="
                margin: 24px 0;
                padding: 18px;
                background: #f8fafb;
                border-radius: 12px;
              "
            >

              <p style="margin-top: 0;">
                <strong>Practice specialty:</strong>
                ${escapeHtml(specialty)}
              </p>

              <p>
                <strong>Number of practices:</strong>
                ${escapeHtml(practiceCount)}
              </p>

              <p style="margin-bottom: 0;">
                <strong>Timeline:</strong>
                ${escapeHtml(timeline)}
              </p>

            </div>

            <p>
              A member of our team will review your information
              and follow up with you regarding the next step.
            </p>

            <p>
              We look forward to learning more about your practice.
            </p>

            <p style="margin-bottom: 0;">
              <strong>Lama Healthcare Team</strong>
            </p>

          </div>

        </div>
      `,
      });

    console.log("CONFIRMATION RESPONSE:", {
      confirmationData,
      confirmationError,
    });

    // The internal lead email succeeded, so don't fail the
    // whole request just because the confirmation failed.
    if (confirmationError) {
      console.error("RESEND CONFIRMATION ERROR:", confirmationError);
    }

    // --------------------------------
    // Success
    // --------------------------------

    return NextResponse.json({
      success: true,
      message: "Your audit request has been submitted successfully.",
      auditId: auditData?.id,
      confirmationId: confirmationData?.id,
    });
  } catch (error) {
    console.error("AUDIT ROUTE ERROR:", error);

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
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
