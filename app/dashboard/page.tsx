import Navbar from '@/components/Navbar'
import SidebarNav from '@/components/SidebarNav'
import Text from '@/components/NoteEditor'
import { CommandMenu } from '@/components/CommandMenu'
import DashboardHome from '@/components/DashboardHome'
import DateHome from '@/components/ui/DateHome'





// Main - Dashboard Site Parent with all Componentes

export default function Home() {
  return (
    <>

    <main className='text-neutral-200'>
    <div>
    <div className='bg-neutral-900 rounded-b-lg'>
      <Navbar/>
      </div>

    <div className='flex h-screen mt-3 gap-2'>
      
 <div className=' bg-neutral-900 rounded-lg '>
      <SidebarNav/>
      </div>

      <div className='w-full bg-neutral-900 rounded-lg'>
        <DashboardHome/>
      </div>
  
    
 
      
    

   




    </div>
  
    </div>

    

  

    </main>

</>
  )
}
