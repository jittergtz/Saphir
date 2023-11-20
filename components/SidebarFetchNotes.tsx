
import { db } from '@/lib/db';
import { $notes } from '@/lib/db/schema';
import { auth } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import { Book } from 'lucide-react';
import React from 'react'

type Props = {}

const SidebarFetchNotes = async (props: Props) => {
    const { userId } = auth();
    const notes = await db
      .select()
      .from($notes)
      .where(eq($notes.userId, userId!));
  
    return (
      <>
      <div className='hidden md:flex '>
          {notes.length === 0 && (
            <div className="text-center">
              <h2 className="text-xl  text-gray-300">Du hast noch keine Notizen</h2>
            </div>
          )}


          <div className="flex gap-4 w-full p-4 flex-col">
   
            {notes.map((note) => {
              return (
                <a href={`/dashboard/notes/${note.id}`} key={note.id}>
                  <div className=" h-14 gap-1 text-neutral-300 hover:text-white border border-stone-500 rounded-lg  overflow-hidden flex items-center ">
                     <Book className='h-5 ml-2' />
                      <h3 className=" text-xl  font-semibold ">
                        {note.id}
                      </h3>
                 
              
                
                  </div>
                </a>
              );
            })}
            </div>
     </div>


</>
  )
}

export default SidebarFetchNotes