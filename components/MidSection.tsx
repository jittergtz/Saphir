"use client"
import React from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { register } from "module"

function MidSection() {
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.from("#cer", {
      scrollTrigger: {
        trigger: "cer",
        start: "center bottom",
      },
      y: 60,
      duration: 1,
    })
  }, [])
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div id="cer">
        <h1
          id="cer"
          className="text-5xl  pointer-events-none  text-transparent 
    bg-clip-text bg-gradient-to-r from-white  to-neutral-600"
        >
          Start writing Now
        </h1>
      </div>

      <div className="mt-20 flex justify-center ">
        <div className=" max-w-4xl gap-y-4 gap-x-10  grid grid-cols-1 lg:grid-cols-2 justify-center">
          <img
            className="w-80 md:w-[30rem] lg:w-[37rem] rounded-2xl
    border-2 border-neutral-800 shadow"
            src={"/img/saphirtest.png"}
            alt="cover"
          />
          <img
            className="w-80 md:w-[30rem] lg:w-[37rem] rounded-2xl
    border-2 border-neutral-800 shadow"
            src={"/img/saphirtest.png"}
            alt="cover"
          />
          <img
            className="w-80 md:w-[30rem] lg:w-[37rem] rounded-2xl
    border-2 border-neutral-800 shadow"
            src={"/img/saphirtest.png"}
            alt="cover"
          />
          <img
            className="w-80 md:w-[30rem] lg:w-[37rem] rounded-2xl
    border-2 border-neutral-800 shadow"
            src={"/img/saphirtest.png"}
            alt="cover"
          />
        </div>
      </div>
    </div>
  )
}

export default MidSection
