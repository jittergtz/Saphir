import React from "react"
import DateHome from "./ui/DateHome"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import WelcomeMsg from "./ui/WelcomeMsg"
import HomeNewNoteButton from "./ui/HomeNewNoteButton"
import SidebarFetchNotes from "./SidebarFetchNotes"

// get current User Name for Welcome Message on the Dashbaord Home Card

// Dashboard Home Card

function DashboardHome() {
  return (
    <main className="p-2 h-full  w-full bg-neutral-900">
      <div
        className={cn(
          "flex flex-col gap-5 rounded-lg bg-opacity-60 p-3",
          ""
        )}
      >
        <div>
          <WelcomeMsg />{" "}
        </div>
        <div>
          <DateHome />
        </div>
      </div>

      <div className=" p-5 mt-20 rounded-lg  flex flex-col gap-10 justify-center items-center   ">
        <h1 className="text-4xl w-80 text-center tracking-tighter text-neutral-300">
          Create a new Note
        </h1>

        <HomeNewNoteButton />

        <div className="flex flex-col md:hidden">
          <h1 className="text-center text-neutral-400 "
          >My Notes
          </h1>
      <SidebarFetchNotes/>
      </div>
      </div>


    </main>
  )
}

export default DashboardHome
