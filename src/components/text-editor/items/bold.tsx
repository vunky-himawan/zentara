import type { Editor } from "@tiptap/react";
import { Bold } from "lucide-react";
import { TextEditorButton } from "../text-editor-menubar";

export const renderBold = (editor: Editor, key: string) => (
	<TextEditorButton
		key={key}
		icon={Bold}
		tooltip="Bold (Ctrl + B)"
		onClick={() => editor.chain().focus().toggleBold().run()}
		isActive={editor.isActive("bold")}
	/>
);
