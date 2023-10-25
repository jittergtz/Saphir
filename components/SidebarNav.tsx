"use client"
import React from 'react'
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { BookType, Search, StickyNote } from 'lucide-react';


function SidebarNav() {
  return (

  <main className='w-64 text-neutral-500 text-lg p-4'>
    <div className='flex border-b text-xl border-neutral-700 mt-4 h-8  '>
      Übersicht
    </div>

    <div className='grid gap-5 mt-5'>
      
      <button className='flex items-center gap-1 ' >
      <Search className='h-5' />
        Suchen
        </button>

        <span className='flex items-center gap-1' >
        <StickyNote className='h-5' />
        Neue Notiz
        </span>

        <span className='flex items-center gap-1' >
        Meine Notizen
        
        </span>

        <span className='bg-neutral-800 h-14 rounded-lg flex items-center'>
        <BookType className='ml-2 h-6' />
        <span className='ml-3 w-full h-7 overflow-hidden'>Javascript basics </span>
        </span>
        
        <span className='bg-neutral-800 h-14 rounded-lg flex items-center'>
        <BookType className='ml-2 h-6' />
        <span className='ml-3 w-full h-7 overflow-hidden'>Algorithmem und son kramm </span>
        </span>

            
        <span className='bg-neutral-800 h-14 rounded-lg flex items-center'>
        <BookType className='ml-2 h-6' />
        <span className='ml-3 w-full h-7 overflow-hidden'>Starup idee</span>
        </span>


    

    </div>

  </main>
  )
}



export default SidebarNav