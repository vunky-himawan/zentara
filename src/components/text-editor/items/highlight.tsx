import { useThemeStyles } from "@/hooks/use-theme-styles";
import type { Editor } from "@tiptap/react";
import { Highlighter, Paperclip } from "lucide-react";
import { TextEditorButton } from "../text-editor-menubar";

export const renderHighlight = (editor: Editor, key: string) => {
  const { colors } = useThemeStyles();
  const { primary } = colors;

  return (
    <TextEditorButton
      key={key}
      icon={Highlighter}
      tooltip="Highlight text"
      onClick={() => {
        editor.chain().focus().toggleHighlight({ color: primary }).run();
      }}
      isActive={editor.isActive("highlight")}
    />
  );
};
