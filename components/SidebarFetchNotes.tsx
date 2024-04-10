"use client"
import { getUserNotes } from '@/app/api/getUserNotes';
import { db } from '@/lib/db';
import { $notes } from '@/lib/db/schema';
import { auth } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import { Book } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'



type Note = {
  id: string;
  title: string;
  createdAt: string;
  // Add other fields as needed
};

const SidebarFetchNotes = () => {
  const [notes, setNotes] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const userNotes = await getUserNotes();
      setNotes(userNotes);
    }
    fetchData()
  }, []);
 
  

  return (
    <>
      <div className=" 0 overflow-scroll h-80  mx-4">
        {notes.length === 0 && (
          <div className="p-2">
            <h2 className=" text-neutral-400 ">You dont have any notes yet</h2>
          </div>
        )}

        <div className="flex gap-4 w-full pt-4 flex-col">
          {notes.map((note) => {
            const pureTitle = note.title.replace(/<[^>]*>/g, "");
            return (
              <Link href={`/dashboard/notes/${note.id}`} key={note.id}>
                <div
                  className=" h-14  text-neutral-300 hover:bg-neutral-700 border shadow border-neutral-700
                 rounded-lg  overflow-hidden flex flex-col "
                >
                  <h3 className=" text-xl ml-2 mt-1 w-48 text-neutral-300 overflow-hidden  ">
                    {pureTitle}
                  </h3>
                  <h5 className="ml-2 text-sm  text-neutral-400">
                    {new Date(note.createdAt).toLocaleDateString()}
                  </h5>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SidebarFetchNotes;
