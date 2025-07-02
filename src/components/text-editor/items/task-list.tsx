import type { Editor } from "@tiptap/react";
import { ListChecks, ListOrdered } from "lucide-react";
import { TextEditorButton } from "../text-editor-menubar";

export const renderTaskList = (editor: Editor, key: string) => (
  <TextEditorButton
    key={key}
    icon={ListChecks}
    tooltip="Task List (Ctrl + Shift + 8)"
    onClick={() => editor.chain().focus().toggleTaskList().run()}
  />
);
