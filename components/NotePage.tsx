"use client"
import React, { useEffect, useState } from "react"
import DeleteButton from "./DeleteButton"
import TipTapEditor from "./TipTapEditor"
import { cn } from "@/lib/utils"
import { DividerProps } from "@nextui-org/react"
import { ChevronRight } from "lucide-react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

type Props = {
  note: {
    id: number
    title: string | null
    createdAt: Date
    userId: string
    editorState: string | null
  }
}
 
const THEME_KEY = "selectedTheme";
const ACTIVE_BUTTON_KEY = "activeButton";


function NotePages({ note }: any) {
  const [isTheme, setIsTheme] = useState("bg-neutral-900")
  const [selectedFruit, setSelectedFruit] = useState("")
  const [onOpen, setOnOpen] = useState(false)
  const [activeButton, setActiveButton] = useState(0)


  const backgrounds = [
    { title: "Standart",
     theme: "bg-neutral-900" },
    { title: "Forest",
      theme: "bg-gradient-to-tl from-orange-500 to-orange-950",},
    { title: "Sky",
     theme: " bg-gradient-to-tl from-sky-500 to-neutral-900" },
    { title: "Teal",
     theme: " bg-gradient-to-tl from-teal-300 to-neutral-900" },
    { title: "Neon",
     theme: " bg-gradient-to-bl from-indigo-700 to-neutral-900" },
    { title: "Light",
     theme: " bg-gradient-to-tl from-red-800 to-neutral-800" },
    { title: "House",
     theme: " bg-gradient-to-bl from-purple-700 to-neutral-900" },
  ]

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
      setIsTheme(savedTheme);
    }

    const savedActiveButton = localStorage.getItem(ACTIVE_BUTTON_KEY);
    if (savedActiveButton) {
      setActiveButton(parseInt(savedActiveButton, 10));
    }
  }, []);

  const handleThemeChange = (theme: string, index: number) => {
    setActiveButton(index);
    setIsTheme(theme);
    localStorage.setItem(THEME_KEY, theme);
    localStorage.setItem(ACTIVE_BUTTON_KEY, index.toString());
  };

  return (
    <main className={cn(`w-full rounded-xl `, `${isTheme}`)}>
      <div className="flex justify-end gap-2 p-1">
        <div
          onClick={() => (onOpen ? setOnOpen(false) : setOnOpen(true))}
          className="transition  flex justify-start items-center border border-neutral-800/10 bg-neutral-800/50 hover:bg-neutral-800 pr-2 w-36 h-10 rounded-lg"
        >
          <h1 className="p-2 outline-none pointer-events-none marker:none">
            Mood
          </h1>
          <ChevronRight className="ml-auto" size={16} />
          {onOpen ? (
            <div className="absolute px-2 flex flex-col gap-2 top-32 z-50 py-2 border border-neutral-800/10 w-36 bg-neutral-800 backdrop-blur-lg rounded-lg">
              {backgrounds.map((item, index: number) => {
                return (
                  <span 
                    key={item.title} 
                    onClick={() => handleThemeChange(item.theme, index)}
                    className={cn("hover:bg-neutral-600 p-1 rounded-md cursor-pointer",
                    activeButton === index ? "bg-neutral-600" : "bg-transparent")}>
                    {item.title}
                  </span>
                )
              })}
            </div>
          ) : null}
        </div>
        <DeleteButton noteId={note.id} />
      </div>

      <div
        className="flex justify-center p-4 text-white rounded-lg"
        style={{ wordBreak: "break-word" || "break-all" }}
      >
        <TipTapEditor note={note} />
      </div>
    </main>
  )
}

export default NotePages
