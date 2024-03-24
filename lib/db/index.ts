import {neon, neonConfig} from "@neondatabase/serverless"
import { drizzle} from "drizzle-orm/neon-http"

neonConfig.fetchConnectionCache = true




const sql = neon("postgresql://jittergtz:bdDM9crvX6eK@ep-little-sky-13614750.eu-central-1.aws.neon.tech/saphir-prod?sslmode=require")

export const db = drizzle(sql)
