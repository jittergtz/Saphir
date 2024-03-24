import Navbar from "@/components/Navbar"
import Text from "@/components/NoteEditor"
import TypeAnimationLP from "@/components/ui/TypeAnimationLP"
import { Button } from "@/components/ui/button"

import Link from "next/link"
import { ArrowBigRight, PencilLine } from "lucide-react"
import LPNavbar from "@/components/LPNavbar"
import { Hero } from "@/components/ui/Hero"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MidSection from "@/components/MidSection"

export default function Home() {

  return (
    <div>
      <LPNavbar />

      <Hero />

      <MidSection/>


      <footer className="h-48 w-full p-5  mt-20 flex border-t border-neutral-700">
        <div className="flex flex-col gap-3  lg:text-md text-neutral-300">
          <p className="hover:text-neutral-400 transition-colors">Sandro Gantze</p>
          <p className="hover:text-neutral-400 transition-colors">Github</p> 
          <p className="hover:text-neutral-400 transition-colors">sandro.gantze@gmail.com</p> 

        </div>

      </footer>
    </div>
  )
}
