// api/createNote

import { db } from "@/lib/db";
import { $notes } from "@/lib/db/schema";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: Request) {
  const { userId } = auth();

  if (!userId) {
    return new NextResponse("unauthorized", { status: 401 });
  }

  try {
    // You may not need to process the request body in this case
    // If you don't need any properties from the body, you can skip this step

    // Insert data into the database with the required properties
    const note_ids = await db
      .insert($notes)
      .values({
        userId,
        // Include any other necessary properties in the database schema
        // (even if it's just the userId in this case)
      })
      .returning({
        insertedId: $notes.id,
      });

    return NextResponse.json({
      note_id: note_ids[0].insertedId,
    });
  } catch (error) {
    console.error("Error processing request:", error);

    // Return an appropriate error response to the client
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
