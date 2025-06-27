import type { Meta, StoryObj } from "@storybook/react/*";
import { TextEditor } from ".";

const meta: Meta<typeof TextEditor> = {
	title: "@zentara/TextEditor",
	component: TextEditor,
	argTypes: {
		menuProps: {
			control: { type: "object" },
		},
	},
};
export default meta;

type Story = StoryObj<typeof TextEditor>;

export const Default: Story = {
	args: {},
};
