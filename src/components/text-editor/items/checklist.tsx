import { ListChecks } from "lucide-react";
import { TextEditorButton } from "../text-editor-menubar";
import type { Editor } from "@tiptap/react";

export const renderChecklist = (editor: Editor, key: string) => (
    <TextEditorButton
        key={key}
        icon={ListChecks}
        tooltip="Checklist (Ctrl + Shift + 9)"
    // onClick={() => editor.chain().focus().toggleChecklist().run()}
    />
);