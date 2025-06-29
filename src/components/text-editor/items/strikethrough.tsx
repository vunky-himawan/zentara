import { Strikethrough } from "lucide-react";
import { TextEditorButton } from "../text-editor-menubar";
import type { Editor } from "@tiptap/react";

export const renderStrikethrough = (editor: Editor, key: string) => (
    <TextEditorButton
        key={key}
        icon={Strikethrough}
        tooltip="Strikethrough (Ctrl + Shift + S)"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        isActive={editor.isActive("strike")}
    />
);