
import TipTapEditor from '@/components/TipTapEditor'
import TipTapMenuBar from '@/components/TipTapMenuBar'
import { Button } from '@/components/ui/button'
import { db } from '@/lib/db'
import { $notes } from '@/lib/db/schema'
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
        <main className='  bg-gradient-to-tl from-purple-700 to-neutral-900 w-full   rounded-xl  ' >
        <div className='flex justify-center '>
         <div className='flex '>

          </div>

        
            <Button
            className='bg-neutral-800 m-2 ml-auto'
             >
                Löschen
            </Button>
     
        </div>
   
              
      

      <div className='flex justify-center p-4 text-white   rounded-lg '
      style={{ wordBreak: 'break-word' || "break-all" }}>
  
        <TipTapEditor note={note} />
        </div>
  
  
  
  

      </main>
  )
}

export default NotePage