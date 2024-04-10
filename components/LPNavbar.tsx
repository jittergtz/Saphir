"use client"
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'


function LPNavbar() {

  return (
    <nav className='fixed top-0 flex z-50 items-center p-4 w-full h-14 bg-black/10 backdrop-blur-3xl 
    border-b border-neutral-700'>
    <span className='text-3xl bg-gradient-to-tr from-neutral-50 to-neutral-700 
     bg-clip-text text-transparent  '>
            Saphir
        </span>

        <Link href={"/dashboard"} className='ml-auto'>
        <Button 
        className='shadow hover:scale-105 rounded-2xl
        bg-gradient-to-l from-blue-600 to-violet-900
         transition'>
          Login
        </Button>
        </Link>





    </nav>
  )
}

export default LPNavbar