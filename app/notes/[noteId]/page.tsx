import { db } from '@/lib/db'
import { $notes } from '@/lib/db/schema'
import { auth } from '@clerk/nextjs'
import { and, eq } from 'drizzle-orm'
import Link from 'next/link'
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
        <main className='bg-neutral-900 text-white' >
        <div className='flex justify-center'>
          <input className='
        
          pt-2
          w-64
          flex
          text-center
          justify-center
          bg-transparent
          outline-none
          rounded-lg
          border-neutral-700
          text-neutral-500'
          placeholder='Titel hier...'
          
          />
        </div>
              
          
          
      <div className='
      mt-14
      p-4
      md:px-8
      xl:px-32
      '>
  
  
  
          <textarea placeholder='Schreibe etwas...' 
          className='
       
          bg-transparent
          w-full 
          h-screen
          rounded-lg 
          outline-none
      
          ' />
      </div>
      </main>
  )
}

export default NotePage