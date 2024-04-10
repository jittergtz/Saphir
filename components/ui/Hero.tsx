"use client"
import React from "react"
import { cn } from "@/utils/cn"
import { Spotlight } from "./Spotlight"
import TypeAnimationLP from "./TypeAnimationLP"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { register } from "module"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function Hero() {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
        gsap.to("#hero-text", {
         opacity: 1,
         delay: 0.5,
         duration: 4,
        })
   
      },[])
      useGSAP(() => {
        gsap.from("#cor", {
         y: 400,
         duration: 2,
        })
   
      },[])
       
  return (
    <div className=" gap-10 md:pt-28 lg:pt-36   w-full rounded-md flex flex-col items-center md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-20 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div id="hero-text" className="opacity-0 p-4 max-w-7xl  mx-auto relative z-10  w-full pt-48 md:pt-0">
        <h1 className="text-5xl md:text-7xl  text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Write Notes <br />
          the easy way.
        </h1>
        <p className="mt-4 text-base text-neutral-300 max-w-lg text-center mx-auto">
        Designed with aesthetics and functionality in mind. Streamline your note taking experience with our intuitive interface and focus on what matters most your ideas.
        </p>
        <div  className="flex   justify-center mt-5">
          <button 
        className="text-neutral-300 shadow p-2 w-40 rounded-lg 
        border border-neutral-700 hover:bg-gradient-to-r from-neutral-400 to-neutral-700 hover:text-black transition" >
            <Link href="/dashboard" className="flex justify-center">
            Getting started 
            <ChevronRight h-26 />
            </Link>
          </button>
        </div>
      </div>
      <img id="cor"
        className="w-80 md:w-[30rem] lg:w-[37rem] rounded-2xl
        border-2 border-neutral-800 shadow"
        src={"/img/saphir-one.png"}
        alt="cover"
      />
    </div>
  )
}
