import { useSidebarConfig } from "@/context/sidebar-config.provider";
import { useThemeConfig } from "@/hooks/use-theme-styles";
import { Button, Col, Flex, Menu, Space, type MenuProps } from "antd";
import Sider, { SiderProps } from "antd/es/layout/Sider";
import { FC } from "react";
import { LucideIcon } from "../lucide-icon";
import { IndentDecrease, IndentIncrease } from "lucide-react";

interface TSidebarProps {
  style?: React.CSSProperties;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  collapsible?: boolean;
  menuProps?: MenuProps;
}

export const Sidebar: FC<TSidebarProps & Omit<SiderProps, "collapsible">> = ({
  header,
  footer,
  menuProps,
  collapsible = false,
  style,
  ...props
}) => {
  // Get theme configuration for the sidebar
  // This will provide the background color and other theme-related styles
  const { theme } = useThemeConfig("Sidebar");
  const { background } = theme;

  // Use sidebar config only if collapsible is true
  const sidebarConfig = collapsible ? useSidebarConfig() : null;
  const collapsed = sidebarConfig?.collapsed ?? false;
  const setCollapsed = sidebarConfig?.setCollapsed ?? (() => {});

  return (
    <Sider
      style={{
        backgroundColor: background,
        color: theme.text,
        padding: 0,
        height: "100%",
        ...style,
      }}
      width={props.width || 280}
      collapsed={collapsed}
      {...props}
      collapsible={false} // Ant Design Sider's collapsible prop is not used here, we handle it manually
    >
      <Flex vertical align="center" justify="space-between" style={{ height: "100%", padding: 0 }}>
        <Col
          style={{
            height:  !header ? 60 : "auto",
            minHeight: 60,
            width: "100%",
            position: "relative",
            display: !collapsible && !header ? "none" : "flex",
          }}
        >
          {header && !collapsed && <>{header}</>}
          {collapsible && (
            <Button
              type="text"
              data-testid="sidebar-collapse-button"
              icon={<LucideIcon Icon={collapsed ? IndentIncrease : IndentDecrease} />}
              onClick={() => {
                setCollapsed(!collapsed);
              }}
              style={{
                position: "absolute",
                top: 10,
                right: -18,
                background: "rgba(243, 244, 246, 0.70)",
                borderRadius: "100%",
              }}
            />
          )}
        </Col>
        <Space
          direction="vertical"
          size={20}
          style={{ width: "100%", height: "100%", padding: "12px 10px" }}
        >
          <Col style={{ flex: 1, overflowY: "auto", height: "100%" }}>
            {menuProps && (
              <Menu {...menuProps} style={{ backgroundColor: "transparent", border: "none" }} />
            )}
          </Col>
        </Space>
        {footer && <>{footer}</>}
      </Flex>
    </Sider>
  );
};
