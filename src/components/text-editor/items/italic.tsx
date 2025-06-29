import { Italic } from "lucide-react";
import { TextEditorButton } from "../text-editor-menubar";
import type { Editor } from "@tiptap/react";

export const renderItalic = (editor: Editor, key: string) => (
    <TextEditorButton
        key={key}
        icon={Italic}
        tooltip="Italic (Ctrl + I)"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        isActive={editor.isActive("italic")}
    />
);