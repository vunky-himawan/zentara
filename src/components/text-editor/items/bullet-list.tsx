import type { Editor } from "@tiptap/react";
import { List } from "lucide-react";
import { TextEditorButton } from "../text-editor-menubar";

export const renderBulletList = (editor: Editor, key: string) => (
	<TextEditorButton
		key={key}
		icon={List}
		tooltip="Bullet List (Ctrl + Shift + 8)"
		onClick={() => editor.chain().focus().toggleBulletList().run()}
	/>
);
