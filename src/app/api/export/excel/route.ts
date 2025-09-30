import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import ExcelJS from "exceljs";

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

    const workbook = new ExcelJS.Workbook();

    // RSVPs Sheet
    const rsvpSheet = workbook.addWorksheet("RSVPs");
    rsvpSheet.columns = [
      { header: "Name", key: "name" },
      { header: "Email", key: "email" },
      { header: "Guests", key: "guests" },
      { header: "Message", key: "message" },
      { header: "Created At", key: "createdAt" },
    ];
    rsvps.forEach((r) =>
      rsvpSheet.addRow({
        ...r,
        createdAt: new Date(r.createdAt).toLocaleString(),
      })
    );

    // Pledges Sheet
    const pledgeSheet = workbook.addWorksheet("Pledges");
    pledgeSheet.columns = [
      { header: "Donor Name", key: "donorName" },
      { header: "Donor Email", key: "donorEmail" },
      { header: "Gift", key: "giftName" },
      { header: "Amount", key: "amount" },
      { header: "Method", key: "method" },
      { header: "Created At", key: "createdAt" },
    ];
    pledges.forEach((p) =>
      pledgeSheet.addRow({
        ...p,
        createdAt: new Date(p.createdAt).toLocaleString(),
      })
    );

    const buffer = await workbook.xlsx.writeBuffer();

    return new NextResponse(buffer, {
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": "attachment; filename=report.xlsx",
      },
    });
  } catch (error) {
    console.error("Excel export error:", error);
    return NextResponse.json({ error: "Failed to generate Excel" }, { status: 500 });
  }
}
