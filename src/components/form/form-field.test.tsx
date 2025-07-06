import React, { forwardRef, useImperativeHandle } from "react";
import { act, fireEvent, render, screen, waitFor } from "@/common/utils/testing";
import { Form } from "antd";
import { FormField } from "./form-field";

// Mock TextEditor (misalnya kamu pakai di tempat lain)
vi.mock("../text-editor", () => ({
  TextEditor: ({ content, onChange }: any) => (
    <div data-testid="text-editor">
      <button onClick={() => onChange("updated content")}>Change Content</button>
      <div>{content}</div>
    </div>
  ),
}));

// Wrapper komponen untuk test yang menggunakan useForm
const FormWrapper = forwardRef((props: any, ref) => {
  const [form] = Form.useForm();

  useImperativeHandle(ref, () => ({ form }));

  return (
    <Form form={form}>
      <FormField
        label="Username"
        name="username"
        required
        rules={[{ required: true, message: "Username is required" }]}
        element={<input data-testid="username-input" />}
      />
    </Form>
  );
});

describe("FormField", () => {
  it("renders label and input", () => {
    render(
      <Form>
        <FormField
          label="Email"
          name="email"
          required
          rules={[{ required: true, message: "Email is required" }]}
          element={<input data-testid="email-input" />}
        />
      </Form>,
    );

    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByTestId("email-input")).toBeInTheDocument();
  });

  it("shows validation error if required field is empty", async () => {
    const formRef = React.createRef<{ form: any }>();

    render(<FormWrapper ref={formRef} />);

    // Trigger validate
    await act(async () => {
      try {
        await formRef.current?.form.validateFields();
      } catch (_) {
        // expected
      }
    });

    await waitFor(() => {
      expect(screen.getByText("Username is required")).toBeInTheDocument();
    });
  });

  it("clears validation error after input is filled", async () => {
    const formRef = React.createRef<{ form: any }>();

    render(<FormWrapper ref={formRef} />);

    // Trigger initial validation error
    await act(async () => {
      try {
        await formRef.current?.form.validateFields();
      } catch (_) {}
    });

    await waitFor(() => {
      expect(screen.getByText("Username is required")).toBeInTheDocument();
    });

    // Isi input
    fireEvent.change(screen.getByTestId("username-input"), {
      target: { value: "John" },
    });

    // Re-validate
    await act(async () => {
      try {
        await formRef.current?.form.validateFields();
      } catch (_) {}
    });

    await waitFor(() => {
      expect(screen.queryByText("Username is required")).not.toBeInTheDocument();
    });
  });
});
