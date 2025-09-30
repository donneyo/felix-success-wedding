import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import PDFDocument from "pdfkit";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("FelixAndSuccessWedding");

    const pledges = await db.collection("pledges").find({}, {
      projection: {
        giftName: 1,
        amount: 1,
        donorName: 1,
        method: 1,
        donorEmail: 1,
        createdAt: 1,
      },
    }).toArray();

    const rsvps = await db.collection("rsvps").find({}, {
      projection: {
        name: 1,
        email: 1,
        guests: 1,
        createdAt: 1,
        message: 1,
      },
    }).toArray();

    // Build PDF
    const doc = new PDFDocument();
    const chunks: Buffer[] = [];

    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => {});

    doc.fontSize(18).text("Felix & Success Wedding Report", { align: "center" });
    doc.moveDown();

    // RSVPs
    doc.fontSize(14).text("RSVPs", { underline: true });
    doc.moveDown(0.5);
    rsvps.forEach((rsvp, i) => {
      doc.fontSize(12).text(
        `${i + 1}. ${rsvp.name} | ${rsvp.email} | Guests: ${rsvp.guests} | Message: ${rsvp.message || ""} | Date: ${new Date(rsvp.createdAt).toLocaleString()}`
      );
      doc.moveDown(0.3);
    });

    doc.addPage();

    // Pledges
    doc.fontSize(14).text("Pledges", { underline: true });
    doc.moveDown(0.5);
    pledges.forEach((pledge, i) => {
      doc.fontSize(12).text(
        `${i + 1}. ${pledge.donorName} | ${pledge.donorEmail} | Gift: ${pledge.giftName} | Amount: ₦${pledge.amount} | Method: ${pledge.method} | Date: ${new Date(pledge.createdAt).toLocaleString()}`
      );
      doc.moveDown(0.3);
    });

    doc.end();

    const pdfBuffer = await new Promise<Buffer>((resolve, reject) => {
      const bufs: Buffer[] = [];
      doc.on("data", (d) => bufs.push(d));
      doc.on("end", () => resolve(Buffer.concat(bufs)));
      doc.on("error", reject);
    });

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=report.pdf",
      },
    });
  } catch (error) {
    console.error("PDF export error:", error);
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 });
  }
}
