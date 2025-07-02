import { useThemeConfig } from "@/context/theme-config.provider";
import { Menu, type MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";

interface TSidebarProps {
  brandLogo?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  menuProps?: MenuProps;
  width?: number | string;
}

export const Sidebar: React.FC<TSidebarProps> = ({ brandLogo, header, footer, menuProps }) => {
  const { theme } = useThemeConfig("Sidebar");
  const { background } = theme;

  return (
    <Sider
      style={{
        backgroundColor: background,
        padding: "10px",
        color: theme.text,
      }}
    >
      {menuProps && (
        <Menu {...menuProps} style={{ backgroundColor: "transparent", border: "none" }} />
      )}
    </Sider>
  );
};
