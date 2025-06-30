import type { Editor } from "@tiptap/react";
import { ListOrdered } from "lucide-react";
import { TextEditorButton } from "../text-editor-menubar";

export const renderNumberedList = (editor: Editor, key: string) => (
	<TextEditorButton
		key={key}
		icon={ListOrdered}
		tooltip="Numbered List (Ctrl + Shift + 7)"
		onClick={() => editor.chain().focus().toggleOrderedList().run()}
	/>
);
