
import { db } from "@/lib/db"
import { $notes } from "@/lib/db/schema"
import { auth } from "@clerk/nextjs";


import { eq } from "drizzle-orm"

// Define the type for a note
type Note = {
  id: string;
  title: string;
  createdAt: string;
  // Add other fields as needed
};

// Function to fetch user notes from the database
export async function getUserNotes() {
  try {
    const { userId } = auth(); // Get the authenticated user's ID

    // Fetch notes for the authenticated user from the database
    const notes = await db.select().from($notes).where(eq($notes.userId, userId!))

     return notes
  } catch (error) {
    console.error('Error fetching user notes:', error);
    throw error;
  }
}

