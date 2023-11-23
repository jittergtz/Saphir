
import {  currentUser } from '@clerk/nextjs/server'
import { date } from 'drizzle-orm/mysql-core'
import React from 'react'
import DateHome from './ui/DateHome'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import WelcomeMsg from './ui/WelcomeMsg'
import HomeNewNoteButton from './ui/HomeNewNoteButton'


// get current User Name for Welcome Message on the Dashbaord Home Card 




// Dashboard Home Card

  function DashboardHome() {


  
  


  return (
    <main className='p-2 w-full ' >
        
    <div className={cn('flex flex-col gap-5 rounded-lg bg-opacity-60 p-3',
    "bg-gradient-to-tl  from-orange-400 to-orange-950"
    )}>
          <div><WelcomeMsg/> </div>
          <div><DateHome/></div>
   </div>





        <div className=' p-5 mt-20 rounded-lg  flex flex-col gap-10 justify-center items-center   '>
            <h1 className='text-4xl w-80 text-center tracking-tighter text-neutral-300'>Fange an und Erstelle deine erste Notiz.</h1>

            <HomeNewNoteButton/>

        </div>

      







      

    </main>
  )
}

export default DashboardHome