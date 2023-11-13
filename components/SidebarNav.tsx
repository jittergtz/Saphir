"use client"
import React from 'react'
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { BookType, FunctionSquare, Search, StickyNote } from 'lucide-react';
import { Separator } from './ui/separator';
import { useState } from 'react'
import { CommandMenu } from './CommandMenu'
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './ui/command';




function SidebarNav() {
  const [open, setOpen] = React.useState(false)

 function handelClick(){


    setOpen((open) => !open)
  }

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
  
  
      
    
  
    return (
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
            <CommandItem>Calculdffor</CommandItem>
            <CommandItem>Calerelator</CommandItem>
            <CommandItem>Calbbblator</CommandItem>
            <CommandItem>Calculator</CommandItem>
            <CommandItem>Cggegerglculator</CommandItem>
            <CommandItem>ulator</CommandItem>
  
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    )
  }



  return (

  <main className='w-64 text-neutral-300 text-lg p-4'>
    <div className='flex text-xl  border-neutral-700 mt-4 h-8  '>
      Übersicht
    </div>
    <Separator className='bg-neutral-700' />

    <div className='grid gap-5 mt-8'>
     

      <button
      onClick={handelClick}
      className='flex items-center gap-1 hover:text-white ' >
      <Search className='h-5' />
        Suchen 
        </button>
     

    
        <span className='flex items-center border rounded-lg  border-neutral-500 hover:text-white  h-14 gap-1' >
        <StickyNote className='h-5 ml-2' />
        Neue Notiz
        </span>

        <Separator className='bg-neutral-700' />

        <span className='flex items-center gap-1' >
        Meine Notizen
        
        </span>

        <span className='bg-neutral-800 border border-neutral-500 h-14 rounded-lg flex items-center'>
        <BookType className='ml-2 h-6' />
        <span className='ml-3 w-full h-7 overflow-hidden'>Javascript basics </span>
        </span>
        
        <span className='bg-neutral-900 border border-neutral-500 h-14 rounded-lg flex items-center'>
        <BookType className='ml-2 h-6' />
        <span className='ml-3 w-full h-7 overflow-hidden'>Algorithmem und son kramm </span>
        </span>

            
        <span className='bg-neutral-900 border border-neutral-500 h-14 rounded-lg flex items-center'>
        <BookType className='ml-2 h-6' />
        <span className='ml-3 w-full h-7 overflow-hidden'>Startup idea's</span>
        </span>


    
      <CommandMenu/>
    </div>

  </main>
  )
}



export default SidebarNav