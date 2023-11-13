"use client"

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import React from "react"




export function CommandMenu() {
  const [open, setOpen] = React.useState(false)




  React.useEffect(() => {
   const down = (e: KeyboardEvent) => {
      if (e.key === "u" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
     
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])



    
  

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
          <CommandItem>Calculdffor</CommandItem>
          <CommandItem>Calerelator</CommandItem>
          <CommandItem>Calbbblator</CommandItem>
          <CommandItem>Calculator</CommandItem>
          <CommandItem>Cggegerglculator</CommandItem>
          <CommandItem>ulator</CommandItem>

        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
