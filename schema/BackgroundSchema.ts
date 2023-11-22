import { BackgroundColor } from "@/lib/BackgroundColor"
import {z} from "zod"

export const BackgroundSchema = z.object({
    color: z.string().refine(color => Object.keys(BackgroundColor).includes(color))
})