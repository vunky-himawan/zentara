import { UNDERLINE_COLOR } from "@/common/constants/color";
import { getRandomArrayItem } from "@/common/utils/array";
import type { Editor } from "@tiptap/react";
import { Bold, Underline } from "lucide-react";
import { TextEditorButton } from "../text-editor-menubar";

export const renderUnderline = (editor: Editor, key: string) => (
	<TextEditorButton
		key={key}
		icon={Underline}
		tooltip="Underline (Ctrl + U)"
		onClick={() => {
			if (editor.isActive("coloredUnderline")) {
				editor.chain().focus().unsetColoredUnderline().run();
			} else {
				const color = getRandomArrayItem(UNDERLINE_COLOR);
				editor.chain().focus().setColoredUnderline(color).run();
			}
		}}
		isActive={editor.isActive("coloredUnderline")}
	/>
);
