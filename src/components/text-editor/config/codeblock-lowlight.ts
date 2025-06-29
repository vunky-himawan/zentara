import type { CodeBlockLowlightOptions } from "@tiptap/extension-code-block-lowlight";
import { createLowlight, all } from "lowlight";

const lowlight = createLowlight(all);

export const codeBlockLowlightConfig: Partial<CodeBlockLowlightOptions> = {
	lowlight,
	languageClassPrefix: 'language-',
};
