// src/Tiptap.jsx
import {
  useEditor,
  EditorContent,
  FloatingMenu,
  BubbleMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import "./Editor.modules.scss";

import { initialContent } from "./initialContentet";

export default function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: initialContent,
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
  });

  return (
    <>
      <EditorContent className="text-area-div" editor={editor}></EditorContent>

      {editor && (
        <BubbleMenu editor={editor}>
          <button>Bold</button>
        </BubbleMenu>
      )}
    </>
  );
}
