import React from 'react'

function Text() {
  return (
    <main  >
      <div className='flex justify-center'>
        <input className='
      
        pt-2
        w-64
        flex
        text-center
        justify-center
        bg-transparent
        outline-none
        rounded-lg
        border-neutral-700
        text-neutral-500'
        placeholder='Notiz Titel hier...'
        
        />
      </div>
            
        
        
    <div className='
    mt-14
    p-4
    md:px-8
    xl:px-32
    '>



        <textarea placeholder='Schreibe etwas...' 
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