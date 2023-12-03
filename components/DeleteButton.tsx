"use client"
import { Butterfly_Kids } from 'next/font/google'
import React from 'react'
import { Button } from './ui/button'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'


type Props = {
    noteId: number
}

function DeleteButton({noteId}: Props) {
    const router = useRouter()
    const deleteNote = useMutation({
        mutationFn: async () => {
          const response = await  axios.post("/api/deleteNote", {
            noteId
          })
          router.refresh()
          return response.data
         
        }
})

  return (
    <Button
    onClick={() => {
        deleteNote.mutate(undefined, {
            onSuccess: () => {
                router.push("/dashboard")
            },
            onError: (err) => {
                console.error(err)
            },
        })
    }}
    
    className='mr-1 bg-neutral-800 bg-opacity-50' >
     Löschen
    </Button>
  )
}

export default DeleteButton