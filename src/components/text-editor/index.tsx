import {
  BubbleMenu,
  EditorContent,
  EditorProvider,
  FloatingMenu,
  useEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Card, Input } from "antd";
import styles from "./text-editor.module.scss";
import Placeholder from "@tiptap/extension-placeholder";

interface TextEditorProps {
  autoFocus?: boolean;
  placeholder?: string;
}

export const TextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Type something...",
        emptyEditorClass: styles["is-editor-empty"],
      }),
    ],
  });

  return (
    <Card>
      <Card>
        <EditorContent
          editor={editor}
          className={styles["text-editor-container"]}
        />
      </Card>
    </Card>
  );
};
