import Navbar from '@/components/Navbar'
import Text from '@/components/NoteEditor'
import TypeAnimationLP from '@/components/ui/TypeAnimationLP'
import { Button } from '@/components/ui/button'



import Link from 'next/link'
import { ArrowBigRight, PencilLine } from 'lucide-react'
import LPNavbar from '@/components/LPNavbar'

export default function Home() {
  return (
    <>

    <LPNavbar/>


  <main className='flex flex-col justify-center items-center h-screen bg-gradient-to-tl from-black via-neutral-950 to-zinc-800 '>
    
    <div className='text-6xl md:text-8xl  text-center sm:w-[47rem] px-4 text-neutral-200 '>
      <h1>Saphir <span className='bg-gradient-to-t from-zinc-500 to-neutral-800  bg-clip-text text-transparent  '>Notizen</span> für <span className='bg-gradient-to-t from-zinc-500 to-neutral-800  bg-clip-text text-transparent '>alle, </span>
        überall.

     
      </h1>
     
      <div className='text-3xl mt-4 w-72 text-center h-28 text-neutral-600 mx-auto'>
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
