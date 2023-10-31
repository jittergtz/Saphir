"use client"
import React from 'react'
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { BookType, Search, StickyNote } from 'lucide-react';
import { Separator } from './ui/separator';
import { useState } from 'react'
import { CommandMenu } from './CommandMenu'




function SidebarNav() {


  const controlOpen = <CommandMenu open={true} setOpen={(open: boolean) => true} />
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {

    setOpen(true)
    controlOpen.props.setOpen(true)
  }



  return (

  <main className='w-64 text-neutral-300 text-lg p-4'>
    <div className='flex text-xl  border-neutral-700 mt-4 h-8  '>
      Übersicht
    </div>
    <Separator className='bg-neutral-700' />

    <div className='grid gap-5 mt-8'>
     

      <button
      onClick={handleClick}
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


    

    </div>

  </main>
  )
}



export default SidebarNav