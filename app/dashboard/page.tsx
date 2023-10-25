import Navbar from '@/components/Navbar'
import SidebarNav from '@/components/SidebarNav'
import Text from '@/components/MainTextarea'
import Image from 'next/image'

export default function Home() {
  return (
    <>
<main className='text-neutral-200'>

<div className=' bg-neutral-900 rounded-b-lg'>
  <Navbar/>
  </div>

<div className='flex mt-3 gap-2'>
  
   <div className='bg-neutral-900 rounded-lg hidden md:flex '>
   <SidebarNav/>
   </div>
  
  <div className='
   w-full
 bg-neutral-900
   rounded-lg'>
    
     <Text/>
  </div>



  </div>

</main>

</>
  )
}
