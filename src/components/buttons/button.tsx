import { Button } from "antd";

export type AntdButtonProps = {
  type?: "primary" | "default" | "dashed" | "link" | "text";
  danger?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

export const AntdButton: React.FC<AntdButtonProps> = ({
  type = "default",
  danger = false,
  disabled = false,
  children,
  onClick,
}) => {
  return (
    <Button type={type} danger={danger} disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
};
