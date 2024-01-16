import { SearchCommand } from '@/components/CommandMenu'
import Navbar from '@/components/Navbar'
import SidebarFetchNotes from '@/components/SidebarFetchNotes'
import SidebarNav from '@/components/SidebarNav'
import { Metadata } from 'next'






// Main - Dashboard Layout with Navabr and Sidebar 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>

    <main className='text-neutral-200'>
<div>
    <div className='bg-neutral-900 rounded-b-lg'>
      <Navbar/>
   </div>
   <SearchCommand />


<div className='flex  mt-3 gap-2'>
      
 <nav className=' bg-neutral-900   rounded-lg '>
      <SidebarNav/>
      <SidebarFetchNotes/>
  </nav>

{/*Children is used to display the Dashboard home page */}
    {children}
    

       </div>
</div>
    </main>

</>
  )
}
