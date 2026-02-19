import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, service, message } = await req.json();

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Business Volunteers <contact@businessvolunteers.online>",
      to: ["contact@businessvolunteers.online"],
      replyTo: email,
      subject: `New Contact: ${name} — ${service}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; border-radius: 16px; overflow: hidden; border: 1px solid #1a1a1a;">
          <div style="background: linear-gradient(135deg, #00e05a 0%, #00b347 100%); padding: 32px 24px; text-align: center;">
            <h1 style="margin: 0; color: #000; font-size: 22px; font-weight: 700;">New Contact Form Submission</h1>
          </div>
          <div style="padding: 32px 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; width: 100px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #fff; font-size: 15px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #fff; font-size: 15px;">
                  <a href="mailto:${email}" style="color: #00e05a; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Service</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #fff; font-size: 15px;">${service}</td>
              </tr>
            </table>
            <div style="margin-top: 24px;">
              <p style="color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Message</p>
              <div style="background: #111; border-radius: 12px; padding: 20px; color: #ddd; font-size: 14px; line-height: 1.6; border: 1px solid #1a1a1a;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
          </div>
          <div style="padding: 16px 24px; text-align: center; border-top: 1px solid #1a1a1a;">
            <p style="margin: 0; color: #555; font-size: 12px;">Sent from businessvolunteers.online contact form</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 },
    );
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
