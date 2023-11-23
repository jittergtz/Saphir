import { currentUser } from '@clerk/nextjs'
import React from 'react'


async function WelcomeMsg () {
     const user = await currentUser()
    
      
        if(!user) {
          return <div>error</div>
        }
      
      
        return (
         <h1 className="flex gap-3 items-center text-3xl text-neutral-300 font-bold">
          Willkommen, <br/> {user.firstName} 
        </h1>   
        )
      }
  

export default WelcomeMsg