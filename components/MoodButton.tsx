import React from 'react'
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
  return (

    <>
    <Select>
        <SelectTrigger className="w-[180px]  ">
        <SelectValue placeholder="standart" />
        </SelectTrigger>
        <SelectContent>
        <SelectItem value="Forest">Forest</SelectItem>
        <SelectItem value="Orange">Orange</SelectItem>
        <SelectItem value="Sky">Sky</SelectItem>
        <SelectItem value="Neon">Neon</SelectItem>
        <SelectItem value="Light">Light house</SelectItem>
        <SelectItem value="Stone">Stone</SelectItem>
        <SelectItem value="Coffee">Coffee</SelectItem>
        <SelectItem value="Galaxy">Galaxy</SelectItem>
        <SelectItem value="Rich">Rich</SelectItem>
       <SelectItem value="standart">standart</SelectItem>
        </SelectContent>
    </Select>

   
     


   </>


  )
}

export default MoodButton