import { Code } from "lucide-react";
import { TextEditorButton } from "../text-editor-menubar";
import type { Editor } from "@tiptap/react";

export const renderCode = (editor: Editor, key: string) => (
    <TextEditorButton
        key={key}
        icon={Code}
        tooltip="Code (Ctrl + Shift + C)"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        isActive={editor.isActive("codeBlock")}
    />
);