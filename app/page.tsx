import Navbar from '@/components/Navbar'
import Text from '@/components/Text'
import TypeAnimationLP from '@/components/ui/TypeAnimationLP'
import { Button } from '@/components/ui/button'

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    
  <main className='text-neutral-200 flex flex-col justify-center items-center h-screen'>
    
    <div className='text-7xl   text-center sm:w-[37rem] px-4 font-bold tracking-tight  '>
      <span>Saphir <span className='text-indigo-600'>Notizen</span> für <span className='text-indigo-600'>alle</span>,
        überall.
      </span>
     
      <div className='text-3xl mt-4 w-72 text-center h-28 text-neutral-500 mx-auto'>
    <TypeAnimationLP/>

    </div>
  

    </div>

    
   <div className='flex justify-center'>
      <Link href='/dashboard' >
      <Button variant={'secondary'} className='font-bold mt-10 '>Loslegen</Button>
      </Link>

   </div>
  
 
</main>

</>
  )
}
