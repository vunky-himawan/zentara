import type { Editor } from "@tiptap/react";
import { Strikethrough } from "lucide-react";
import { TextEditorButton } from "../text-editor-menubar";

export const renderStrikethrough = (editor: Editor, key: string) => (
  <TextEditorButton
    key={key}
    icon={Strikethrough}
    tooltip="Strikethrough (Ctrl + Shift + S)"
    onClick={() => editor.chain().focus().toggleStrike().run()}
    isActive={editor.isActive("strike")}
  />
);
