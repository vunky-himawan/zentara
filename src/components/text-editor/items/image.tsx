import type { Editor } from "@tiptap/react";
import { Upload } from "antd";
import { Image, Italic } from "lucide-react";
import type { ImageFeatureConfig } from "..";
import { TextEditorButton } from "../text-editor-menubar";

export const renderImage = (editor: Editor, key: string, uploadProps?: ImageFeatureConfig) => {
	const defaultExtractUrl = (response: unknown) => {
		if (typeof response === "object" && response !== null && "url" in response) {
			return (response as Record<string, string>).url;
		}
		return "";
	};

	const defaultOnChange = (info: Parameters<NonNullable<ImageFeatureConfig["onChange"]>>[0]) => {
		if (info.file.status === "done") {
			const extract = uploadProps?.extractUrlFromResponse || defaultExtractUrl;
			const uploadedUrl = extract(info.file.response);

			if (uploadedUrl) {
				editor.chain().focus().setImage({ src: uploadedUrl }).run();
			}
		}
	};

	return (
		<Upload
			onChange={(info) => {
				uploadProps?.onChange?.(info);
				defaultOnChange(info);
			}}
			showUploadList={false}
		>
			<TextEditorButton key={key} icon={Image} tooltip="Image (Ctrl + I)" />
		</Upload>
	);
};
