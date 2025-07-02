import type { Editor } from "@tiptap/react";
import { Input, Modal } from "antd";
import { Link } from "lucide-react";
import { useCallback, useState } from "react";
import { TextEditorButton } from "../text-editor-menubar";

export const renderLink = (editor: Editor, key: string) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [url, setUrl] = useState<string>("");

  const openModal = useCallback(() => {
    const currentUrl = editor.getAttributes("link").href || "";
    setUrl(currentUrl);
    setModalVisible(true);
  }, [editor]);

  const handleOk = useCallback(() => {
    if (url.trim() === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
    } else {
      editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    }
    setModalVisible(false);
  }, [editor, url]);

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <>
      <TextEditorButton key={key} icon={Link} tooltip="Link (Ctrl + K)" onClick={openModal} />

      <Modal
        title="Insert Link"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ type: "primary" }}
      >
        <Input
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </Modal>
    </>
  );
};
