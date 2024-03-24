"use client"
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from './button'

function HomeNewNoteButton() {
    const router = useRouter()
    const createNote = useMutation({
      mutationFn: async () => {
        const response = await axios.post("/api/createNote",)
        return response.data
     }
    })
  
  
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault()
     createNote.mutate(undefined, {
      onSuccess:({note_id}) => {
        console.log("created Note")
        router.push(`/dashboard/notes/${note_id}`)
        router.refresh()
      },
      onError: (error) => {
        console.error("Mutation error:", error);
        console.log("something went wrong");
      }
     })
   
   
  }
  return (
    <form onSubmit={handleSubmit}>
    <Button
    type='submit'
    className='"text-neutral-300 shadow p-2 w-40 rounded-lg 
    border border-neutral-700 hover:bg-gradient-to-r from-neutral-400 to-neutral-700 hover:text-black transition'>
      Create Note
    </Button>
 </form>
  )
}

export default HomeNewNoteButton