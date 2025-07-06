import { DEFAULT_MENUBAR_ITEMS } from "@/common/constants/menubar";
import type { MenubarItem } from "@/common/types/menubar";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import TextStyle from "@tiptap/extension-text-style";
import { type Content, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Card, Space, Spin, type UploadProps } from "antd";
import type { FC } from "react";
import { codeBlockLowlightConfig } from "./config/codeblock-lowlight";
import { linkConfig } from "./config/link";
import { ColoredUnderline } from "./extentions/underline-text-style";
import { renderMenubarItem } from "./menubar-item";
import styles from "./styles.module.scss";
import { TextEditorMenubar } from "./text-editor-menubar";

export type ImageFeatureConfig = UploadProps & {
  extractUrlFromResponse?: (response: unknown) => string;
};

export type FeaturesConfig = {
  image?: ImageFeatureConfig;
};

interface TextEditorProps {
  content?: Content;
  onChange?: (content: Content) => void;
  menubarItems?: MenubarItem[];
  placeholder?: string;
  featuresConfig?: FeaturesConfig;
}

export const TextEditor: FC<TextEditorProps> = ({
  content,
  onChange,
  placeholder,
  menubarItems = DEFAULT_MENUBAR_ITEMS,
  featuresConfig = {},
}) => {
  const editor = useEditor({
    autofocus: true,
    enableContentCheck: false,
    content: content || "",
    onUpdate: ({ editor }) => {
      if (onChange) {
        onChange(editor.getText());
      }
    },
    extensions: [
      ColoredUnderline,
      StarterKit,
      TextStyle.configure({ mergeNestedSpanStyles: true }),
      Placeholder.configure({
        placeholder: placeholder || "Start typing...",
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
      Image,
    ],
  });

  if (!editor) return <Spin size="large" />;

  const menubar = (
    <TextEditorMenubar>
      {menubarItems.map((item, index) =>
        renderMenubarItem(item, editor, `${item}-${index}`, featuresConfig),
      )}
    </TextEditorMenubar>
  );

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      {menubar}
      <Card>
        <EditorContent
          editor={editor}
          className={styles["text-editor-container"]}
          spellCheck={false}
        />
      </Card>
    </Space>
  );
};
