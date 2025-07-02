import { useThemeStyles } from "@/hooks/use-theme-styles";
import type { Editor } from "@tiptap/react";
import { Button, Typography } from "antd";
import { ChevronDown } from "lucide-react";
import { TextEditorDropdown } from "../text-editor-menubar";

const { Title, Text } = Typography;

export const renderHeading = (editor: Editor, key: string) => {
  const { colors } = useThemeStyles();
  const { secondary } = colors;

  const getSelectedKey = () => {
    if (editor.isActive("heading", { level: 1 })) return "h1";
    if (editor.isActive("heading", { level: 2 })) return "h2";
    if (editor.isActive("heading", { level: 3 })) return "h3";
    return "paragraph";
  };

  const getLabel = (key: string) => {
    switch (key) {
      case "h1":
        return "Heading 1";
      case "h2":
        return "Heading 2";
      case "h3":
        return "Heading 3";
      default:
        return "Paragraph";
    }
  };

  const selectedKey = getSelectedKey();

  const onSelect = (key: string) => {
    if (key === "h1") {
      if (editor.isActive("heading", { level: 1 })) {
        editor.chain().focus().setParagraph().run();
      } else {
        editor.chain().focus().toggleHeading({ level: 1 }).run();
      }
    } else if (key === "h2") {
      if (editor.isActive("heading", { level: 2 })) {
        editor.chain().focus().setParagraph().run();
      } else {
        editor.chain().focus().toggleHeading({ level: 2 }).run();
      }
    } else if (key === "h3") {
      if (editor.isActive("heading", { level: 3 })) {
        editor.chain().focus().setParagraph().run();
      } else {
        editor.chain().focus().toggleHeading({ level: 3 }).run();
      }
    } else {
      editor.chain().focus().setParagraph().run();
    }
  };

  return (
    <TextEditorDropdown
      key={key}
      tooltip="Text formatting"
      trigger={["click"]}
      menu={{
        selectable: true,
        selectedKeys: [selectedKey],
        items: [
          {
            key: "h1",
            label: (
              <Text style={{ fontSize: 24 }} strong>
                Heading 1
              </Text>
            ),
            onClick: () => onSelect("h1"),
          },
          {
            key: "h2",
            label: (
              <Text style={{ fontSize: 20 }} strong>
                Heading 2
              </Text>
            ),
            onClick: () => onSelect("h2"),
          },
          {
            key: "h3",
            label: (
              <Text style={{ fontSize: 16 }} strong>
                Heading 3
              </Text>
            ),
            onClick: () => onSelect("h3"),
          },
          {
            key: "paragraph",
            label: <Text>Paragraph</Text>,
            onClick: () => onSelect("paragraph"),
          },
        ],
      }}
    >
      <Button type="text" style={{ border: `1px solid ${secondary}` }}>
        {getLabel(selectedKey)}
        <ChevronDown />
      </Button>
    </TextEditorDropdown>
  );
};
