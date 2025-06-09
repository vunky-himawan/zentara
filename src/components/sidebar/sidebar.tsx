import { useThemeConfig } from "@/context/theme-config.provider";
import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";

interface TSidebarProps {
  brandLogo?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  menuProps?: MenuProps;
  width?: number | string;
}

export const Sidebar: React.FC<TSidebarProps> = ({
  brandLogo,
  header,
  footer,
  menuProps,
}) => {
  const { theme } = useThemeConfig("Sidebar");

  return (
    <Sider
      style={{
        backgroundColor: theme.background,
        padding: "10px",
        color: theme.text,
      }}
    >
      {menuProps && (
        <Menu
          {...menuProps}
          style={{ backgroundColor: "transparent", border: "none" }}
        />
      )}
    </Sider>
  );
};
