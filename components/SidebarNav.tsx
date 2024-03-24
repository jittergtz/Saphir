"use client"
import React, {
  ElementRef,
  use,
  useEffect,
  useId,
  useRef,
  useState,
} from "react"
import {
  BookType,
  ChevronsLeft,
  ChevronsRight,
  Home,
  Search,
  StickyNote,
  UndoIcon,
} from "lucide-react"
import { Separator } from "./ui/separator"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command"

import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"

import Link from "next/link"
import { db } from "@/lib/db"
import { $notes } from "@/lib/db/schema"
import { eq } from "drizzle-orm"
import { auth } from "@clerk/nextjs"

import { useSearch } from "@/hooks/use-search"

function SidebarNav() {
  const router = useRouter()

  const createNote = useMutation({
    mutationFn: async () => {
      const response = await axios.post("/api/createNote")
      router.refresh()
      return response.data

    },
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createNote.mutate(undefined, {
      onSuccess: ({ note_id }) => {
        console.log("created Note")
        router.refresh()
        router.push(`/dashboard/notes/${note_id}`)
     
      },
      onError: (error) => {
        console.error("Mutation error:", error)
        console.log("something went wrong")
      },
    })
  }

  return (
    <aside className="hidden w-64 md:flex flex-col text-neutral-400 text-lg p-4 ">
      <div className="grid gap-3 ">
      <Link href={"/dashboard"} className="flex items-center gap-1 h-12 rounded-lg hover:bg-neutral-800">
          <Home className="h-5 ml-2" />
            Home
   
        </Link>

        <form
          onSubmit={handleSubmit}
          className=" rounded-lg bg-neutral-800 
    hover:bg-gradient-to-r from-neutral-700 to-neutral-600
    border border-neutral-700 transition"
        >
          <button type="submit" className="flex items-center  h-12 gap-1">
            <StickyNote className="h-5  ml-2" />
            New Note
          </button>
        </form>

        <Separator className="bg-neutral-700" />

        <span className="flex items-center gap-1">My Notes</span>
      </div>
    </aside>
  )
}

export default SidebarNav
