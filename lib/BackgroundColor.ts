import { BackgroundSchema } from "@/schema/BackgroundSchema";

export enum BackgroundColor {
forest = "bg-gradient-to-tl from-teal-300 to-neutral-900",
orange = "bg-gradient-to-tl from-orange-500 to-orange-950",
sky ="bg-gradient-to-tl from-sky-500 to-neutral-900",
blutOrange = "bg-gradient-to-tl from-red-800 to-neutral-800",
neon = "bg-gradient-to-bl from-purple-700 to-neutral-900",
    
}

export type BackgroundSchema = keyof typeof BackgroundColor
