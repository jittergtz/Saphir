
import {pgTable, serial, text, timestamp} from "drizzle-orm/pg-core"

export const $notes = pgTable("notes", {
    id: serial("id").primaryKey(),
    title: text("Titel"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    userId: text("user_id").notNull(),
    editorState: text("editor_state"),
})

export type NoteType = typeof $notes.$inferInsert

//dirzzle schmea for our neon db 