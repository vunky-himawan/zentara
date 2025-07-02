import type { Editor } from "@tiptap/react";
import { TextQuote } from "lucide-react";
import { TextEditorButton } from "../text-editor-menubar";

export const renderQuote = (editor: Editor, key: string) => (
  <TextEditorButton
    key={key}
    icon={TextQuote}
    tooltip="Quote (Ctrl + Shift + Q)"
    onClick={() => editor.chain().focus().toggleBlockquote().run()}
    isActive={editor.isActive("blockquote")}
  />
);
