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
     variant={"secondary"} >
      Notiz Erstellen
    </Button>
 </form>
  )
}

export default HomeNewNoteButton