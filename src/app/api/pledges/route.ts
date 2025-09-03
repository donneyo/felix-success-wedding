// src/app/api/pledges/route.ts
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import sgMail from "@sendgrid/mail";

const uri = process.env.MONGODB_URI!;
const dbName = process.env.MONGODB_DB || "FelixAndSuccessWedding";

// Setup SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
const emailFrom = process.env.EMAIL_FROM || "donneyo63@gmail.com"; // must be verified in SendGrid
const emailToCouple = [
  process.env.EMAIL_TO_COUPLE_1 || "donneyo63@gmail.com",
  process.env.EMAIL_TO_COUPLE_2 || "",
].filter(Boolean);

// --- Reuse Mongo client across invocations
let client: MongoClient | null = null;
async function getClient() {
  if (client && (client as any).topology?.isConnected()) return client;
  client = new MongoClient(uri);
  await client.connect();
  return client;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      giftId,
      giftName,
      amount,
      donorName,
      donorEmail,
      message,
      method,
    } = body;

    if (!giftName || !donorName || !donorEmail) {
      return NextResponse.json(
        { error: "Missing required fields: giftName, donorName, donorEmail" },
        { status: 400 }
      );
    }

    const now = new Date();
    const pledge = {
      giftId: giftId ?? null,
      giftName,
      amount: amount ?? null,
      method: method ?? "cash",
      donorName,
      donorEmail,
      message: message ?? "",
      createdAt: now,
      status: "pledged",
    };

    // --- Save to MongoDB ---
    const mongo = await getClient();
    const db = mongo.db(dbName);
    const pledges = db.collection("pledges");
    const { insertedId } = await pledges.insertOne(pledge);

    // --- Send Thank-you Email to Donor ---
    try {
      console.log("📨 Sending thank-you email to donor:", donorEmail);

      const donorEmailResponse = await sgMail.send({
        from: emailFrom, // must be verified sender
        to: donorEmail,
        subject: `Thank you for your gift pledge: ${giftName}`,
        replyTo: emailToCouple[0],
       html: `
         <div style="font-family: Arial, sans-serif; line-height:1.6; background:#f9fafb; padding:20px; border-radius:10px; color:#333;">
           <div style="text-align:center; padding:15px; background:#4caf50; color:white; border-radius:10px 10px 0 0;">
             <h2 style="margin:0;">🎉 Thank you, ${donorName}! 🎉</h2>
           </div>

           <div style="padding:20px;">
             <p>We truly appreciate your generous pledge.</p>
             <ul style="list-style:none; padding:0;">
               <li>💝 <strong>Gift:</strong> ${giftName}</li>
               ${amount ? `<li>💵 <strong>Amount:</strong> ₦${Number(amount).toLocaleString()}</li>` : ""}
               <li>📦 <strong>Method:</strong> ${method || "cash"}</li>
             </ul>

             ${message ? `<p style="background:#fff3cd; padding:10px; border-radius:8px;"><em>💌 Your message:</em> ${message}</p>` : ""}

             <p>If you’re sending a bank transfer, here are the details:</p>
             <pre style="background:#eef6ff; padding:12px; border-radius:8px; font-family: monospace;">
       Bank: Fcmb
       Account Number: 5478830019
       Account Name: Felix Eshenake Tega
             </pre>

             <p>Kindly email your transfer confirmation (screenshot) by replying to this email.</p>
             <p style="margin-top:20px; text-align:center;">🙏 With love and gratitude,<br/><strong>Success & Felix</strong></p>
           </div>
         </div>
       `
      });

      console.log("✅ Donor email sent successfully:", donorEmailResponse);
    } catch (err) {
      console.error("❌ Failed to send donor thank-you email:", err);
    }

    // --- Send Notification Email to Couple ---
    try {
      const coupleEmailResponse = await sgMail.send({
        from: emailFrom,
        to: emailToCouple, // supports multiple recipients
        subject: `New Pledge: ${giftName} from ${donorName}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height:1.6">
            <h2>New Gift Pledge</h2>
            <ul>
              <li><strong>Gift:</strong> ${giftName}</li>
              ${amount ? `<li><strong>Amount:</strong> ₦${Number(amount).toLocaleString()}</li>` : ""}
              <li><strong>Method:</strong> ${method || "cash"}</li>
              <li><strong>Donor:</strong> ${donorName} &lt;${donorEmail}&gt;</li>
              ${message ? `<li><strong>Message:</strong> ${message}</li>` : ""}
              <li><strong>Pledge ID:</strong> ${insertedId.toString()}</li>
              <li><strong>When:</strong> ${now.toISOString()}</li>
            </ul>
          </div>
        `,
      });

      console.log("✅ Couple notification sent successfully:", coupleEmailResponse);
    } catch (err) {
      console.error("❌ Failed to send couple notification:", err);
    }

    return NextResponse.json({
      ok: true,
      id: insertedId.toString(),
      message: "Pledge saved and emails sent.",
    });
  } catch (err: any) {
    console.error("Pledge error:", err);
    return NextResponse.json(
      { error: "Failed to save pledge or send email", details: err?.message },
      { status: 500 }
    );
  }
}
