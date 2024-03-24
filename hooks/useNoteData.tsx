// useNoteData.js
import { auth } from '@clerk/nextjs';
import { db } from '@/lib/db';
import { $notes } from '@/lib/db/schema';
import { and, eq } from 'drizzle-orm';
import { redirect } from 'next/navigation';

const getNoteData = async (noteId: any) => {
    const authResult = await auth();
    if (!authResult.userId) {
        return { error: "User not authenticated" };
    }

    const notes = await db
        .select()
        .from($notes)
        .where(and(eq($notes.id, parseInt(noteId)), eq($notes.userId, authResult.userId)));

    if (notes.length !== 1) {
        return { error: "Note not found" };
    }

    return { note: notes[0] };
};

export default getNoteData;
