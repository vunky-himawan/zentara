import { ThemeConfigProvider } from "@/context/theme-config.provider";
import type { Meta, StoryObj } from "@storybook/react/*";
import { TextEditor } from ".";

const meta: Meta<typeof TextEditor> = {
  title: "@zentara/TextEditor",
  component: TextEditor,
  argTypes: {
    editor: {
      control: { type: "object" },
      description:
        "Optional editor instance to use. If not provided, a new editor will be created.",
    },
    menubarItems: {
      control: { type: "select" },
      options: ["default", "none"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof TextEditor>;

export const Default: Story = {
  decorators: [
    (Story) => {
      const Wrapper = () => (
        <ThemeConfigProvider>
          <div style={{ height: "100vh" }}>
            <Story />
          </div>
        </ThemeConfigProvider>
      );
      return <Wrapper />;
    },
  ],
  args: {},
};
