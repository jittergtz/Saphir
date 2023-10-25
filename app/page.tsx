import Navbar from '@/components/Navbar'
import Text from '@/components/MainTextarea'
import TypeAnimationLP from '@/components/ui/TypeAnimationLP'
import { Button } from '@/components/ui/button'
import { Pencil } from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    
  <main className='text-neutral-200 flex flex-col justify-center items-center h-screen bg-gradient-to-tl from-indigo-600 via-black to-gray-900'>
    
    <div className='text-7xl   text-center sm:w-[37rem] px-4 font-bold tracking-tight  '>
      <span>Saphir <span className='text-indigo-700'>Notizen</span> für <span className='text-indigo-700'>alle</span>,
        überall.

     
      </span>
     
      <div className='text-3xl mt-4 w-72 text-center h-28 text-neutral-500 mx-auto'>
    <TypeAnimationLP/>

    </div>
  

    </div>

    
   <div className='flex justify-center'>
      <Link href='/dashboard' >
      <Button variant={'secondary'} className='font-bold mt-10'>Loslegen <Pencil className='h-4' /> </Button>
      </Link>

   </div>
  
 
</main>
<footer className='flex justify-center  bg-black h-64 text-neutral-400'>
  <div className='grid grid-cols-2 w-96  mt-20 px-5 text-center '>
<span>Über </span>
<span>Lizenz</span>
<span>Datenschutz</span>

<span>Impressum</span>
<span>Saphir</span>
<span>Github</span>

  </div>
</footer>

</>
  )
}
