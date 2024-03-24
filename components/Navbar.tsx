import React from "react"
import { Button } from "./ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import {
  CreditCard,
  HeartHandshake,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"
import Link from "next/link"
import { Avatar } from "./ui/avatar"
import { UserButton } from "@clerk/nextjs"

function Navbar() {
  return (
    <nav
      className="
    p-4
    flex
    gap-5
    items-center
    bg-neutral-900
    border-neutral-700"
    >
      <Link href={"/dashboard"}>
        <span className="text-xl text-neutral-400">Saphir</span>
      </Link>

      <div className="ml-auto">
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  )
}

export default Navbar
