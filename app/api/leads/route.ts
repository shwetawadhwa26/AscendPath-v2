import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import nodemailer from "nodemailer";

export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, leads });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch leads" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Validation: Now making sure Phone is also provided
    if (!body.firstName || !body.lastName || !body.email || !body.phone) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 2. Save only the simple fields to AWS
    const newLead = await prisma.lead.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phone: body.phone,
        source: body.source || "UNKNOWN",
        status: "NEW",
      },
    });

    // 3. Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // 4. Send the Clean, Simple Email Alert
    const mailOptions = {
      from: `"AscendPath Alerts" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, 
      subject: `🚨 NEW LEAD: ${body.firstName} ${body.lastName} (${body.source})`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 10px;">
          <h2 style="color: #1e293b; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">New Application Received</h2>
          
          <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Phone:</strong> ${body.phone}</p>
          <p><strong>Funnel Source:</strong> ${body.source}</p>

          <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #e2e8f0; text-align: center;">
            <a href="https://www.theascendpath.com/admin/leads" style="background-color: #0f172a; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">View in CRM</a>
          </div>
        </div>
      `,
    };

    transporter.sendMail(mailOptions).catch(console.error);

    return NextResponse.json({ success: true, lead: newLead });
  } catch (error) {
    console.error("Failed to save lead:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
    try {
        const body = await req.json();
        const { id, status } = body;
        const updatedLead = await prisma.lead.update({ where: { id }, data: { status } });
        return NextResponse.json({ success: true, lead: updatedLead });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
    }
}

// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";

// // 1. GET: Fetch all leads for the dashboard
// export async function GET() {
//   try {
//     const leads = await prisma.lead.findMany({
//       orderBy: { createdAt: "desc" },
//     });
//     return NextResponse.json({ success: true, leads });
//   } catch (error) {
//     console.error("Failed to fetch leads:", error);
//     return NextResponse.json(
//       { success: false, error: "Failed to fetch leads" },
//       { status: 500 }
//     );
//   }
// }

// // 2. POST: Create a new lead (From your native form)
// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     if (!body.firstName || !body.lastName || !body.email) {
//       return NextResponse.json(
//         { success: false, error: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     const newLead = await prisma.lead.create({
//       data: {
//         firstName: body.firstName,
//         lastName: body.lastName,
//         email: body.email,
//         phone: body.phone || "",
//         source: body.source || "UNKNOWN",
//         status: "NEW",
//         whatsapp: body.whatsapp || "",
//         linkedin: body.linkedin || "",
//         highestMonth: body.highestMonth || "",
//         videoLink: body.videoLink || "",
//         liquidCapital: body.liquidCapital || "",
//       },
//     });

//     return NextResponse.json({ success: true, lead: newLead });
//   } catch (error) {
//     console.error("Failed to save lead:", error);
//     return NextResponse.json(
//       { success: false, error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }

// // 3. PATCH: Update a lead's status (New -> Pending -> Done)
// export async function PATCH(req: Request) {
//   try {
//     const body = await req.json();
//     const { id, status } = body;

//     if (!id || !status) {
//       return NextResponse.json(
//         { success: false, error: "Missing ID or Status" },
//         { status: 400 }
//       );
//     }

//     const updatedLead = await prisma.lead.update({
//       where: { id },
//       data: { status },
//     });

//     return NextResponse.json({ success: true, lead: updatedLead });
//   } catch (error) {
//     console.error("Failed to update lead status:", error);
//     return NextResponse.json(
//       { success: false, error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }