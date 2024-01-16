"use client"
import React, { ElementRef, use, useEffect, useId, useRef, useState } from 'react'
import { BookType, ChevronsLeft, ChevronsRight, Home, Search, StickyNote, UndoIcon } from 'lucide-react';
import { Separator } from './ui/separator';

import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './ui/command';

import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useMutation } from '@tanstack/react-query';
import axios from "axios"

import Link from 'next/link';
import { db } from '@/lib/db';
import { $notes } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { auth } from '@clerk/nextjs';

import { useSearch } from '@/hooks/use-search';
import { SearchCommand } from './CommandMenu';






function SidebarNav() {

  const router = useRouter()



  const createNote = useMutation({
    mutationFn: async () => {
      const response = await axios.post("/api/createNote",)
      return response.data
   }
  })



const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
 
   e.preventDefault()
   createNote.mutate(undefined, {
    onSuccess:({note_id}) => {
      console.log("created Note")
      router.push(`/dashboard/notes/${note_id}`)
      router.refresh()
    
    },
    onError: (error) => {
      console.error("Mutation error:", error);
      console.log("something went wrong");
    }
   })}




 
  /*
  
  function CommandMenu() {
    React.useEffect(() => {
     const down = (e: KeyboardEvent) => {
        if (e.key === "k" && (e.metaKey || e.ctrlKey)){
          e.preventDefault()
          setOpen((open) => !open)
        }
      }
      document.addEventListener("keydown", down)
      return () => document.removeEventListener("keydown", down)
    }, [])

    
    function extractTextFromHTML(arg0: any) {
      throw new Error('Function not implemented.');
    }

    return (
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Suche eine Notiz" />
        <CommandList>
          <CommandEmpty>Kein Ergebniss gefunden.</CommandEmpty>
          <CommandGroup heading="Vorschläge">
        
      
                <CommandItem>
               hi
                </CommandItem>
         
      
          
          
          
          
          
          
          
          
          
          
          

     
          
           
  
  
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    )
  }

*/

  return (

  <aside
  className='hidden w-64 md:flex flex-col text-neutral-300 text-lg p-4 '
  >


    <div className='flex text-xl items-center border-neutral-700 mt-4 h-8'>
    Übersicht
    <span
      className='ml-auto mr-5'
      role='button'>
      <ChevronsRight className=' text-neutral-500 hover:text-white'/> 
    </span>  
  


    </div>
    <Separator className='bg-neutral-700' />

    <div className='grid gap-5 mt-8'>


    <button
      className='flex items-center gap-1 hover:text-white ' >

      <Home className='h-5' />
      <Link href={"/dashboard"}>
        Home
      </Link>

   </button>
     

      <button
      onClick={() => {}}
      className='flex items-center gap-1 hover:text-white ' >
      <Search className='h-5' />
        Suchen
        <span className='ml-auto mr-5 text-neutral-500'>⌘K</span>
        </button>
     

    <form onSubmit={handleSubmit} className='border rounded-lg  hover:text-white border-neutral-500'>
        <button 
        type='submit'
        className='flex items-center  h-14 gap-1' >
        <StickyNote className='h-5  ml-2' />
        Neue Notiz
        
        </button>
    </form>


        <Separator className='bg-neutral-700' />

        <span className='flex items-center gap-1' >
        Meine Notizen
        
      </span>
      
    
     

 


            
    


    
      <SearchCommand />
    </div>

  </aside>
  )
}



export default SidebarNav