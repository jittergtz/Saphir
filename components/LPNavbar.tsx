import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

function LPNavbar() {
  return (
    <nav className='flex items-center p-4 w-full h-14 bg-neutral-950'>
        <span className='text-3xl
        bg-gradient-to-tr from-neutral-500 to-neutral-800  bg-clip-text text-transparent  '>
            Saphir
        </span>

    <Link href={"/dashboard"} className='ml-auto'>
        <Button variant={"secondary"}>
            Jetzt holen!
        </Button>
        </Link>

    </nav>
  )
}

export default LPNavbar