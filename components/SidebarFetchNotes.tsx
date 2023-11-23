import { db } from '@/lib/db';
import { $notes } from '@/lib/db/schema';
import { auth } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import { Book } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

type Props = {}


function extractTextFromHTML(html: string): string {
  return html.replace(/<[^>]*>/g, ''); // Entfernt alle HTML-Tags
}

const SidebarFetchNotes = async (props: Props) => {
    const { userId } = auth();
    const notes = await db
      .select()
      .from($notes)
      .where(eq($notes.userId, userId!));
  
    return (
      <>
      <div className='hidden md:flex bg-neutral-900 overflow-scroll h-80 border-t  border-neutral-700 mx-4 '>
          {notes.length === 0 && (
            <div className="p-2">
              <h2 className=" text-neutral-400 ">Du hast noch keine Notizen</h2>
            </div>
          )}


          <div className="flex gap-4 w-full pt-4 flex-col">
   
            {notes.map((note) => {
              const pureTitle = extractTextFromHTML( note.title || "Unbenannt");
              return (
                <Link href={`/dashboard/notes/${note.id}`} key={note.id}>
                  <div className=" h-14 gap-1 text-neutral-300 hover:text-white border border-stone-500 rounded-lg  overflow-hidden flex flex-col ">
               
                      <h3 className=" text-xl ml-2 mt-1 w-48 overflow-hidden  font-semibold ">
                        {pureTitle }
                      </h3>
                      <h5 className='ml-2 text-sm  text-neutral-400'>
                      {new Date(note.createdAt).toLocaleDateString()}
                      </h5>
                 
              
                
                  </div>
                </Link>
              );
            })}
            </div>
     </div>


</>
  )
}

export default SidebarFetchNotes



