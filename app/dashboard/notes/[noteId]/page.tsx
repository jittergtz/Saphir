import NotePages from '@/components/NotePage'

import { db } from '@/lib/db'
import { $notes } from '@/lib/db/schema'
import { cn } from '@/lib/utils'
import { auth } from '@clerk/nextjs'
import { and, eq } from 'drizzle-orm'
import { redirect } from 'next/navigation'
import React, { useState } from 'react'

type Props = {
    params: {
        noteId: any
    }
}

const NotePage = async ({params: {noteId}}: Props) => {
   
  const {userId} = await auth()
  if(!userId) {
    return  redirect("/dashboard")
  }
  const notes = await db
  .select()
  .from($notes)
  .where(and(eq($notes.id, parseInt(noteId)),eq($notes.userId, userId)) )
  if(notes.length != 1) {
      return redirect("/dashboard")
  }
  const note = notes[0]
    
    return ( 
      <NotePages note={note} />
  )
}

export default NotePage