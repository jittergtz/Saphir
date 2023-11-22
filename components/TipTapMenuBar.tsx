import { Editor, useEditor } from '@tiptap/react';
import { Bold, Highlighter, Italic, Pen, PenBox } from 'lucide-react';
import React from 'react'
import Highlight from '@tiptap/extension-highlight'

type Props = {
    editor: Editor;
}

const TipTapMenuBar = ({editor}: Props) => {
  return (
    <div className='flex flex-wrap gap-2 text-neutral-500 rounded-lg p-2'>
         <button
        onClick={() => editor.chain().focus().toggleBold().run()} 
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}>
        <Highlighter className="h-5 " />
        </button>

        <button
        onClick={() => editor.chain().focus().toggleItalic().run()} 
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}>
         <Italic className='h-5 ' />
        </button>


     
    </div>
  )
}

export default TipTapMenuBar