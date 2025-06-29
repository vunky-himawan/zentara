import { DEFAULT_MENUBAR_ITEMS } from "@/common/constants/menubar";
import type { MenubarItem } from "@/common/types/menubar";
import Placeholder from "@tiptap/extension-placeholder";
import { type Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import styles from "./styles.module.scss";
import Link from "@tiptap/extension-link";
import { linkConfig } from "./config/link";
import { Card, Space, Spin, type UploadProps } from "antd";
import { TextEditorMenubar } from "./text-editor-menubar";
import { renderMenubarItem } from "./menubar-item";
import type { FC } from "react";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { codeBlockLowlightConfig } from "./config/codeblock-lowlight";
import { ColoredUnderline } from "./extentions/underline-text-style";
import TextStyle from "@tiptap/extension-text-style";
import Highlight from "@tiptap/extension-highlight";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableHeader from "@tiptap/extension-table-header";
import TableCell from "@tiptap/extension-table-cell";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Image from "@tiptap/extension-image";

export type ImageFeatureConfig = UploadProps & {
	extractUrlFromResponse?: (response: unknown) => string;
};


export type FeaturesConfig = {
	image?: ImageFeatureConfig;
};

interface TextEditorProps {
	editor?: Editor;
	menubarItems?: MenubarItem[];
	featuresConfig?: FeaturesConfig;
}

export const TextEditor: FC<TextEditorProps> = ({
	editor, menubarItems = DEFAULT_MENUBAR_ITEMS, featuresConfig = {},
}) => {
	const innerEditor = useEditor({
		autofocus: true,
		enableContentCheck: false,
		extensions: [
			ColoredUnderline,
			StarterKit,
			TextStyle.configure({ mergeNestedSpanStyles: true }),
			Placeholder.configure({
				placeholder: "Type something...",
				emptyEditorClass: styles["is-editor-empty"],
			}),
			Link.configure(linkConfig),
			CodeBlockLowlight.configure(codeBlockLowlightConfig),
			Highlight.configure({
				multicolor: true,
			}),
			Table.configure({
				resizable: true,
			}),
			TableRow,
			TableHeader,
			TableCell,
			TaskList.configure({
				itemTypeName: "taskItem",
			}),
			TaskItem.configure({
				nested: true,
			}),
			Image
		],
	});

	const activeEditor = editor || innerEditor;

	if (!activeEditor) return <Spin size="large" />;

	const menubar = (
		<TextEditorMenubar>
			{menubarItems.map((item, index) =>
				renderMenubarItem(item, activeEditor, `${item}-${index}`, featuresConfig)
			)}
		</TextEditorMenubar>
	);


	return (
		<Space direction="vertical" style={{ width: "100%" }}>
			{menubar}
			<Card>
				<EditorContent editor={activeEditor} className={styles["text-editor-container"]} spellCheck={false} />
			</Card>
		</Space>
	);
};
