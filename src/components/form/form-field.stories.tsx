import { Meta, StoryObj } from "@storybook/react/*";
import { FormField, FormTextEditor } from "./form-field";
import { Input } from "antd";
import { ThemeConfigProvider } from "@/context/theme-config.provider";

const meta: Meta<typeof FormField> = {
  title: "@zentara/FormField",
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <FormField
      element={<Input />}
      label="Form Field"
      name="formField"
      rules={[{ required: true, message: "This field is required" }]}
      required
    />
  ),
};

export const FormTextEditorDefault: Story = {
  render: () => (
    <ThemeConfigProvider>
      <FormTextEditor name="description" label="Description" required />
    </ThemeConfigProvider>
  ),
};
