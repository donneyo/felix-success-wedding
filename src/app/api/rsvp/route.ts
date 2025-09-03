// app/api/rsvp/route.ts
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb"; // <-- your existing connection file
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, guests, message } = await req.json();

    // connect to db
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "FelixAndSuccessWedding"); // fallback db name
    const collection = db.collection("rsvps");

    // save RSVP
    const result = await collection.insertOne({
      name,
      email,
      guests,
      message,
      createdAt: new Date(),
    });

    // send confirmation email to guest
    await resend.emails.send({
      from: process.env.EMAIL_FROM || "Acme <onboarding@resend.dev>",
      to: email,
      subject: "RSVP Confirmation 🎉",
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for confirming your attendance. We are excited to have you at our wedding!</p>
        <p><strong>Guests:</strong> ${guests}</p>
        <p><strong>Message:</strong> ${message || "N/A"}</p>
        <p>See you on the big day 💍</p>
      `,
    });

    // send email to couple (multiple recipients)
    await resend.emails.send({
      from: process.env.EMAIL_FROM || "Acme <onboarding@resend.dev>",
      to: [
        process.env.EMAIL_TO_COUPLE_1 as string
      ],
      subject: `New RSVP from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Guests:</strong> ${guests}</p>
        <p><strong>Message:</strong> ${message || "N/A"}</p>
      `,
    });

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
