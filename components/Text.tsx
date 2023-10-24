import React from 'react'

function Text() {
  return (
    <main>
        <div className='
        flex
        justify-center
        text-neutral-500'>
            Tittle goes here...
        </div>
        
    <div className='
    mt-14
    p-4
    lg:px-64
    '>



        <textarea type="text" placeholder='Schreibe etwas...' 
        className='
        bg-transparent
        w-full 
        h-screen
        rounded-lg 
        outline-none
    
        ' />
    </div>
    </main>
  )
}

export default Text