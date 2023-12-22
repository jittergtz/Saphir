
import DeleteButton from '@/components/DeleteButton'
import MoodButton from '@/components/MoodButton'
import TipTapEditor from '@/components/TipTapEditor'
import TipTapMenuBar from '@/components/TipTapMenuBar'
import { Button } from '@/components/ui/button'
import { db } from '@/lib/db'
import { $notes } from '@/lib/db/schema'
import { cn } from '@/lib/utils'
import { auth } from '@clerk/nextjs'
import { and, eq } from 'drizzle-orm'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
    params: {
        noteId: string
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
        <main className={cn(' w-full rounded-xl',
        " bg-gradient-to-tl from-teal-300 to-neutral-900")}>
       
      <div className='flex justify-end '>
       
          <div className='m-2 flex gap-2'>
          <MoodButton />
          <DeleteButton  noteId={note.id} />
          </div>
     </div>
   
              
      

      <div className='flex justify-center p-4 text-white   rounded-lg '
      style={{ wordBreak: 'break-word' || "break-all" }}>
  
        <TipTapEditor note={note} />
        </div>
  
  
  
  

      </main>
  )
}

export default NotePage