import type { MenubarItem } from "@/common/types/menubar";
import type { Editor } from "@tiptap/react";
import { renderBold } from "./items/bold";
import { renderHeading } from "./items/heading";
import { renderItalic } from "./items/italic";
import { renderStrikethrough } from "./items/strikethrough";
import { renderQuote } from "./items/quote";
import { renderCode } from "./items/code";
import { renderLink } from "./items/link";
import { renderBulletList } from "./items/bullet-list";
import { renderNumberedList } from "./items/numbered-list";
import { renderChecklist } from "./items/checklist";
import { renderTable } from "./items/table";
import { TextEditorDivider } from "./text-editor-menubar";
import { renderUnderline } from "./items/underline";
import { renderHighlight } from "./items/highlight";
import { renderTaskList } from "./items/task-list";
import { renderImage } from "./items/image";
import type { FeaturesConfig } from ".";

export const renderMenubarItem = (item: MenubarItem, editor: Editor, key: string, featuresConfig: FeaturesConfig): React.ReactNode => {
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