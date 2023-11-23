import { db } from "@/lib/db";
import { $notes } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    let { noteId, editorState, title } = body; // Updated to receive 'title' from the request
    if (!editorState || !noteId || !title) {
      return new NextResponse("Missing editorState, noteId, or title", { status: 400 });
    }

    noteId = parseInt(noteId);
    const notes = await db.select().from($notes).where(eq($notes.id, noteId));
    if (notes.length !== 1) {
      return new NextResponse("Failed to update", { status: 500 });
    }

    const note = notes[0];
    if (note.editorState !== editorState || note.title !== title) {
      await db
        .update($notes)
        .set({
          editorState,
          title, // Update the 'title' field in the database
        })
        .where(eq($notes.id, noteId));
    }
    return NextResponse.json(
      {
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }
}