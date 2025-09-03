// app/api/rsvp/route.ts
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import sgMail from "@sendgrid/mail";

// Setup SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
const emailFrom = process.env.EMAIL_FROM || "donneyo63@gmail.com"; // must be verified in SendGrid
const emailToCouple = [
  process.env.EMAIL_TO_COUPLE_1 || "donneyo63@gmail.com",
  process.env.EMAIL_TO_COUPLE_2 || "",
].filter(Boolean);

export async function POST(req: Request) {
  try {
    const { name, email, guests, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Missing required fields: name, email" },
        { status: 400 }
      );
    }

    // connect to db
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "FelixAndSuccessWedding");
    const collection = db.collection("rsvps");

    // save RSVP
    const result = await collection.insertOne({
      name,
      email,
      guests,
      message,
      createdAt: new Date(),
    });

    // --- Send confirmation email to guest ---
    try {
      console.log("📨 Sending RSVP confirmation to guest:", email);

      await sgMail.send({
        from: emailFrom,
        to: email,
        subject: "RSVP Confirmation 🎉",
        replyTo: emailToCouple[0],
        html: `
          <div style="font-family: Arial, sans-serif; line-height:1.6; background:#f9fafb; padding:20px; border-radius:10px; color:#333;">
            <div style="text-align:center; padding:15px; background:#4caf50; color:white; border-radius:10px 10px 0 0;">
              <h2 style="margin:0;">🎉 Thank you, ${name}! 🎉</h2>
            </div>

            <div style="padding:20px;">
              <p>We are excited to have you at our wedding!</p>
              <ul style="list-style:none; padding:0;">
                <li>👥 <strong>Guests:</strong> ${guests || 1}</li>
                ${message ? `<li>💌 <strong>Message:</strong> ${message}</li>` : ""}
              </ul>
              <p style="margin-top:20px; text-align:center;">💍 See you on the big day!</p>
            </div>
          </div>
        `,
      });

      console.log("✅ Guest confirmation sent successfully");
    } catch (err) {
      console.error("❌ Failed to send guest RSVP confirmation:", err);
    }

    // --- Send notification email to couple ---
    try {
      await sgMail.send({
        from: emailFrom,
        to: emailToCouple,
        subject: `New RSVP from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height:1.6">
            <h2>New RSVP Received</h2>
            <ul>
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Guests:</strong> ${guests || 1}</li>
              ${message ? `<li><strong>Message:</strong> ${message}</li>` : ""}
              <li><strong>When:</strong> ${new Date().toISOString()}</li>
            </ul>
          </div>
        `,
      });

      console.log("✅ Couple notification sent successfully");
    } catch (err) {
      console.error("❌ Failed to send couple notification:", err);
    }

    return NextResponse.json(
      { success: true, data: result },
      { status: 201 }
    );
  } catch (error) {
    console.error("RSVP API Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process RSVP" },
      { status: 500 }
    );
  }
}
