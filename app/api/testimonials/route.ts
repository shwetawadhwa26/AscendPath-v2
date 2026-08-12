import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Using your global connection!

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    const testimonials = await prisma.testimonial.findMany({
      where: category ? { category } : undefined,
      // Orders them by Category first, then newest first
      orderBy: [
        { category: "asc" },
        { createdAt: "desc" }
      ], 
    });

    return NextResponse.json({ success: true, testimonials });
  } catch (error) {
    console.error("Failed to fetch testimonials:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Check if the incoming data is an array (Bulk Upload)
    if (Array.isArray(body)) {
      const newTestimonials = await prisma.testimonial.createMany({
        data: body.map((t) => ({
          name: t.name,
          title: t.title,
          quote: t.quote,
          videoUrl: t.videoUrl,
          imageUrl: t.imageUrl,
          type: t.type || "TEXT",
          category: t.category,  
          tier: t.tier,      
          isFeatured: t.isFeatured || false,
        })),
        skipDuplicates: true, 
      });

      return NextResponse.json({ success: true, count: newTestimonials.count });
    } 

    // Fallback for single uploads
    const newTestimonial = await prisma.testimonial.create({ data: body });
    return NextResponse.json({ success: true, testimonial: newTestimonial });

  } catch (error) {
    console.error("Failed to save testimonials:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create testimonials" },
      { status: 500 }
    );
  }
}

// ----------------------------------------------------------------------
// NEW: DELETE a Testimonial 
// ----------------------------------------------------------------------
export async function DELETE(req: Request) {
  try {
    // Grab the ID from the URL (e.g., /api/testimonials?id=123)
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Testimonial ID is required" },
        { status: 400 }
      );
    }

    // Delete directly from AWS PostgreSQL
    await prisma.testimonial.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete testimonial:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete testimonial" },
      { status: 500 }
    );
  }
}

// import { NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";
// import { Pool } from "pg";
// import { PrismaPg } from "@prisma/adapter-pg";

// // 1. Create a database connection pool WITH strict SSL settings for AWS
// const pool = new Pool({ 
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false, // Forces the pg driver to accept the secure AWS RDS connection
//   }
// });

// // 2. Wrap it in the Prisma adapter
// const adapter = new PrismaPg(pool);
// // 3. Pass the adapter to the Prisma Client
// const prisma = new PrismaClient({ adapter });

// // ----------------------------------------------------------------------
// // GET: Fetch Testimonials (Used by the frontend to display the cards)
// // ----------------------------------------------------------------------
// export async function GET(req: Request) {
//   try {
//     // Allows us to filter by category (e.g., ?category=REPS)
//     const { searchParams } = new URL(req.url);
//     const category = searchParams.get("category");

//     const testimonials = await prisma.testimonial.findMany({
//       where: category ? { category } : undefined,
//       orderBy: { createdAt: "desc" }, // Newest first
//     });

//     return NextResponse.json({ success: true, testimonials });
//   } catch (error) {
//     console.error("Failed to fetch testimonials:", error);
//     return NextResponse.json(
//       { success: false, error: "Failed to fetch testimonials" },
//       { status: 500 }
//     );
//   }
// }

// // ----------------------------------------------------------------------
// // POST: Create a Testimonial (Used by the Admin Dashboard)
// // ----------------------------------------------------------------------
// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { name, title, quote, videoUrl, imageUrl, type, category, tier, isFeatured } = body;

//     // Save the new testimonial to AWS PostgreSQL
//     const newTestimonial = await prisma.testimonial.create({
//       data: {
//         name,
//         title,
//         quote,
//         videoUrl,
//         imageUrl,
//         type: type || "TEXT",
//         category,  // "REPS" or "OWNERS"
//         tier,      // This is the Highlight Tag! (e.g., "$68K YTD")
//         isFeatured: isFeatured || false,
//       },
//     });

//     return NextResponse.json({ success: true, testimonial: newTestimonial });
//   } catch (error) {
//     console.error("Failed to save testimonial:", error);
//     return NextResponse.json(
//       { success: false, error: "Failed to create testimonial" },
//       { status: 500 }
//     );
//   }
// }