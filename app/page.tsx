import Navbar from '@/components/Navbar'
import Text from '@/components/MainTextarea'
import TypeAnimationLP from '@/components/ui/TypeAnimationLP'
import { Button } from '@/components/ui/button'



import Link from 'next/link'
import { ArrowBigRight, PencilLine } from 'lucide-react'
import LPNavbar from '@/components/LPNavbar'

export default function Home() {
  return (
    <>

    <LPNavbar/>


  <main className='text-neutral-200 flex flex-col justify-center items-center h-screen bg-gradient-to-tl from-black via-neutral-800 to-black '>
    
    <div className='text-6xl md:text-8xl  text-center sm:w-[47rem] px-4    '>
      <span>Saphir <span className='text-neutral-700 '>Notizen</span> für <span className='text-neutral-700'>alle</span>,
        überall.

     
      </span>
     
      <div className='text-3xl mt-4 w-72 text-center h-28 text-neutral-200 mx-auto'>
    <TypeAnimationLP/>

    </div>
  

    </div>

    
   <div className='flex justify-center'>
      <Link href='/dashboard' >
      <Button variant={'secondary'} className='font-bold mt-10'>Loslegen <PencilLine className='h-4' /> </Button>
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
