import type { MenubarItem } from "@/common/types/menubar";
import type { Editor } from "@tiptap/react";
import type { FeaturesConfig } from ".";
import { renderBold } from "./items/bold";
import { renderBulletList } from "./items/bullet-list";
import { renderChecklist } from "./items/checklist";
import { renderCode } from "./items/code";
import { renderHeading } from "./items/heading";
import { renderHighlight } from "./items/highlight";
import { renderImage } from "./items/image";
import { renderItalic } from "./items/italic";
import { renderLink } from "./items/link";
import { renderNumberedList } from "./items/numbered-list";
import { renderQuote } from "./items/quote";
import { renderStrikethrough } from "./items/strikethrough";
import { renderTable } from "./items/table";
import { renderTaskList } from "./items/task-list";
import { renderUnderline } from "./items/underline";
import { TextEditorDivider } from "./text-editor-menubar";

export const renderMenubarItem = (
  item: MenubarItem,
  editor: Editor,
  key: string,
  featuresConfig: FeaturesConfig,
): React.ReactNode => {
  switch (item) {
    case "heading":
      return renderHeading(editor, key);
    case "bold":
      return renderBold(editor, key);
    case "underline":
      return renderUnderline(editor, key);
    case "highlight":
      return renderHighlight(editor, key);
    case "italic":
      return renderItalic(editor, key);
    case "strikethrough":
      return renderStrikethrough(editor, key);
    case "quote":
      return renderQuote(editor, key);
    case "code":
      return renderCode(editor, key);
    case "link":
      return renderLink(editor, key);
    case "bulletList":
      return renderBulletList(editor, key);
    case "orderedList":
      return renderNumberedList(editor, key);
    case "taskList":
      return renderTaskList(editor, key);
    case "checkedList":
      return renderChecklist(editor, key);
    case "table":
      return renderTable({ editor, maxRows: 6, maxCols: 6 });
    case "image":
      return renderImage(editor, key, featuresConfig.image);
    case "divider":
      return <TextEditorDivider key={key} />;
    default:
      return null;
  }
};
