"use client";
import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import TipTapMenuBar from "./TipTapMenuBar";
import { Button } from "./ui/button";
import { useDebounce } from "@/lib/UseDebounce";
import { useMutation } from "@tanstack/react-query";
import Text from "@tiptap/extension-text";
import axios from "axios";
import { NoteType } from "@/lib/db/schema";

import Document from '@tiptap/extension-document'
import Placeholder from '@tiptap/extension-placeholder'



type Props = { note: NoteType };

const TipTapEditor = ({ note }: Props) => {
  const [editorState, setEditorState] = React.useState(
    note.editorState || ""
  );
  const [title, setTitle] = React.useState(
    note.title
  )

  const saveNote = useMutation({
    mutationFn: async () => {
      const response = await axios.post("/api/saveNote", {
        noteId: note.id,
        editorState,
        title,
  
      });
      return response.data;
    },
  });

  const CustomDocument = Document.extend({
    content: 'heading block*',
    
   
  })


  const editor = useEditor({
    autofocus: true,
    extensions:
    [
        CustomDocument,
        StarterKit.configure({
          document: false,
          
        }),
        Placeholder.configure({
          placeholder: ({ node }) => {
            if (node.type.name === 'heading') {
            
             return 'Unbenannt'
           } 
            return 'weiteren Text hinzufügen'
          },
        }),
      ],
    
    
    editorProps: {
    attributes: 
    { class: 'prose text-white h-[80vh] overflow-auto ', },  },

    content: editorState,
    onUpdate: ({ editor }) => {
      const editorContent = editor.getHTML(); // Annahme: editor.getHTML() gibt den gesamten HTML-Inhalt des Editors zurück
      const firstLineBreakIndex = editorContent.indexOf('<p>'); // Finden des ersten Zeilenumbruchs im HTML-Inhalt
      const newTitle = firstLineBreakIndex !== -1 ? editorContent.slice(0, firstLineBreakIndex) : editorContent; // Extrahieren der ersten Zeile als Titel
  
      setTitle(newTitle); // Aktualisieren des Titels im State
  
      setEditorState(editor.getHTML()); 
  },
   
});


  const debouncedEditorState = useDebounce(editorState, 500);
  React.useEffect(() => {
    // save to db
    if (debouncedEditorState === "") return;
    saveNote.mutate(undefined, {
      onSuccess: (data) => {
        console.log("success update!", data);
      },
      onError: (err) => {
        console.error(err);
      },
    });
  }, [debouncedEditorState]);
  return (

<div className=" w-full text-white lg:w-[44rem]  ">
{editor && (
<TipTapMenuBar editor={editor}/>
)}
<div className="m-2">
 <EditorContent editor={editor}/>
 </div>



</div>
 
  );
};

export default TipTapEditor;




