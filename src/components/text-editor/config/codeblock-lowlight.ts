import type { CodeBlockLowlightOptions } from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";

const lowlight = createLowlight(all);

export const codeBlockLowlightConfig: Partial<CodeBlockLowlightOptions> = {
	lowlight,
	languageClassPrefix: "language-",
};
