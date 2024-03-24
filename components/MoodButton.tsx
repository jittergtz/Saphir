"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'


import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { cn } from '@/lib/utils'
import { BackgroundColor, BackgroundSchema } from '@/lib/BackgroundColor'



function MoodButton() {
  const [isTheme, setIsTheme] = useState("")
    
  if(!isTheme){
    return;
  }

 
  return (

    <>
    <Select >
        <SelectTrigger className="w-[180px] outline-none  ">
        <SelectValue placeholder="Mood" />
        </SelectTrigger>
        <SelectContent>
        <SelectItem onClick={() => setIsTheme("forest")} value="Forest">Forest</SelectItem>
        <SelectItem onClick={() => setIsTheme("orange")} value="Orange">Orange</SelectItem>
        <SelectItem onClick={() => setIsTheme("sky")} value="Sky">Sky</SelectItem>
        <SelectItem onClick={() => setIsTheme("neon")} value="Neon">Neon</SelectItem>
        <SelectItem onClick={() => setIsTheme("lightHouse")} value="Light">Light house</SelectItem>
        <SelectItem onClick={() => setIsTheme("stone")} value="Stone">Stone</SelectItem>
        <SelectItem onClick={() => setIsTheme("coffee")} value="Coffee">Coffee</SelectItem>
        <SelectItem onClick={() => setIsTheme("galaxy")} value="Galaxy">Galaxy</SelectItem>
        <SelectItem onClick={() => setIsTheme("rich")} value="Rich">Rich</SelectItem>
       <SelectItem onClick={() => setIsTheme("standart") }value="standart">Standart</SelectItem>
        </SelectContent>
    </Select>

   
     


   </>


  )
}

export default MoodButton