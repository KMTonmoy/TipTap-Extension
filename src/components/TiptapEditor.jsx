import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Bold } from "@tiptap/extension-bold";
import { Italic } from "@tiptap/extension-italic";
import { Underline } from "@tiptap/extension-underline";
import { BulletList } from "@tiptap/extension-bullet-list";
import { OrderedList } from "@tiptap/extension-ordered-list";
import { ListItem } from "@tiptap/extension-list-item";
import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableCell } from "@tiptap/extension-table-cell";
import { TableHeader } from "@tiptap/extension-table-header";
import { FaBold, FaItalic, FaUnderline, FaListUl, FaListOl, FaTable, FaAlignLeft, FaAlignCenter, FaAlignRight } from "react-icons/fa";
import { TextAlign } from '@tiptap/extension-text-align';

const TiptapEditor = () => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Bold,
            Italic,
            Underline,
            BulletList,
            OrderedList,
            ListItem,

            TextAlign.configure({
                types: ['paragraph', 'heading'],
            }),
        ],
        content: `<p>Start editing with rich text features like bold, italic, lists!</p>`,
    });

    return (
        <div className="editor-container">
            <div className="toolbar">
                <button className="toolbar-btn" onClick={() => editor.chain().focus().toggleBold().run()}>
                    <FaBold />
                </button>
                <button className="toolbar-btn" onClick={() => editor.chain().focus().toggleItalic().run()}>
                    <FaItalic />
                </button>
                <button className="toolbar-btn" onClick={() => editor.chain().focus().toggleUnderline().run()}>
                    <FaUnderline />
                </button>
                <button className="toolbar-btn" onClick={() => editor.chain().focus().toggleBulletList().run()}>
                    <FaListUl />
                </button>
                <button className="toolbar-btn" onClick={() => editor.chain().focus().toggleOrderedList().run()}>
                    <FaListOl />
                </button>


                <button className="toolbar-btn" onClick={() => editor.chain().focus().setTextAlign('left').run()}>
                    <FaAlignLeft />
                </button>
                <button className="toolbar-btn" onClick={() => editor.chain().focus().setTextAlign('center').run()}>
                    <FaAlignCenter />
                </button>
                <button className="toolbar-btn" onClick={() => editor.chain().focus().setTextAlign('right').run()}>
                    <FaAlignRight />
                </button>
            </div>

            <EditorContent editor={editor} />
        </div>
    );
};

export default TiptapEditor;
