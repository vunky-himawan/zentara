import { Form } from "antd";
import { Rule } from "antd/es/form";
import { FC } from "react";
import { FeaturesConfig, TextEditor } from "../text-editor";

interface FormFieldProps {
  label: string;
  name: string;
  element?: React.ReactNode;
  rules?: Rule[];
  required?: boolean;
}

export const FormField: FC<FormFieldProps> = ({ element, label, name, rules, required }) => {
  return (
    <Form.Item label={label} name={name} rules={rules} required={required} layout="vertical">
      {element}
    </Form.Item>
  );
};

type FormTextEditorProps = {
  featuresConfig?: FeaturesConfig;
} & Omit<FormFieldProps, "element">;

export const FormTextEditor = ({
  featuresConfig,
  label,
  name,
  required,
  rules,
}: FormTextEditorProps) => {
  return (
    <Form.Item name={name} label={label} layout="vertical" rules={rules} required={required}>
      <Form.Item noStyle shouldUpdate={(prev, next) => prev[name] !== next[name]}>
        {({ getFieldValue, setFieldsValue }) => (
          <TextEditor
            content={getFieldValue(name)}
            onChange={(val) => setFieldsValue({ [name]: val })}
            featuresConfig={featuresConfig}
          />
        )}
      </Form.Item>
    </Form.Item>
  );
};
