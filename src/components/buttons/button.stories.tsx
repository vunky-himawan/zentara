// src/components/AntdButton.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { AntdButton } from "./button";

const meta: Meta<typeof AntdButton> = {
  title: "Example/AntdButton",
  component: AntdButton,
  argTypes: {
    type: {
      control: "select",
      options: ["primary", "default", "dashed", "link", "text"],
    },
    danger: { control: "boolean" },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
};
export default meta;

type Story = StoryObj<typeof AntdButton>;

export const Default: Story = {
  args: {
    type: "default",
    children: "Default Button",
  },
};

export const Primary: Story = {
  args: {
    type: "primary",
    children: "Primary Button",
  },
};

export const Danger: Story = {
  args: {
    type: "primary",
    danger: true,
    children: "Danger Button",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};
