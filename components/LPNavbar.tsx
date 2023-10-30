import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

function LPNavbar() {
  return (
    <main className='flex items-center p-4 w-full h-14 bg-neutral-950'>
        <span className='text-neutral-200 text-3xl '>
            Saphir
        </span>

    <Link href={"/dashboard"} className='ml-auto'>
        <Button variant={"secondary"}>
            Jetzt holen!
        </Button>
        </Link>

    </main>
  )
}

export default LPNavbar