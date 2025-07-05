import { useSidebarConfig } from "@/context/sidebar-config.provider";
import { useThemeConfig } from "@/hooks/use-theme-styles";
import { Button, Col, Flex, Menu, Space, type MenuProps } from "antd";
import Sider, { SiderProps } from "antd/es/layout/Sider";
import { FC } from "react";
import { LucideIcon } from "../lucide-icon";
import { IndentDecrease, IndentIncrease } from "lucide-react";

type ExtraSidebarProps = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
};

export interface SidebarProps {
  style?: React.CSSProperties;
  extra?: Partial<ExtraSidebarProps>;
  brandLogo?: React.ReactNode;
  collapsible?: boolean;
  /**
   * - `undefined`: Sidebar will render default button.
   * - `false`: Sidebar will not render button.
   * - ReactNode: Sidebar will render this custom button.
   */
  collapsibleButton?: React.ReactNode | false;
  menuProps?: MenuProps;
}

export const Sidebar: FC<SidebarProps & Omit<SiderProps, "collapsible">> = ({
  extra = {},
  brandLogo,
  menuProps,
  collapsible = false,
  collapsibleButton,
  style,
  ...props
}) => {
  const { header, footer } = extra;

  const { theme } = useThemeConfig("Sidebar");
  const { background } = theme;

  const sidebarConfig = collapsible ? useSidebarConfig() : null;
  const collapsed = sidebarConfig?.collapsed || false;
  const setCollapsed = sidebarConfig?.setCollapsed || (() => {});

  // Determine what button to render
  const renderCollapsibleButton = () => {
    if (!collapsible) return null;
    if (collapsibleButton === false) return null;
    if (collapsibleButton) return collapsibleButton;
    return (
      <Button
        type="text"
        data-testid="sidebar-collapse-button"
        icon={<LucideIcon Icon={collapsed ? IndentIncrease : IndentDecrease} />}
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      />
    );
  };

  const transitionStyle = (collapsed: boolean): React.CSSProperties => ({
    transition: "all 0.3s ease",
    opacity: collapsed ? 0 : 1,
    maxHeight: collapsed ? 0 : 100,
    overflow: "hidden",
  });

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
      collapsible={false} // we handle manually
    >
      <Flex vertical justify="space-between" style={{ height: "100%", padding: 0 }}>
        {(brandLogo || collapsible) && (
          <Flex
            align="center"
            justify="space-between"
            style={{
              minHeight: 60,
              width: "100%",
              padding: "0 12px",
            }}
          >
            <Col
              flex={1}
              style={{
                ...transitionStyle(collapsed),
              }}
            >
              {!collapsed && brandLogo}
            </Col>
            <Col flex={collapsed ? 1 : "none"}>{renderCollapsibleButton()}</Col>
          </Flex>
        )}

        {header && (
          <Flex
            align="center"
            justify="center"
            style={{
              width: "100%",
              padding: "0 12px",
              ...transitionStyle(collapsed),
            }}
          >
            {header}
          </Flex>
        )}

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

        {footer && (
          <Flex
            align="center"
            justify="center"
            style={{
              width: "100%",
              padding: "0 12px",
              ...transitionStyle(collapsed),
            }}
          >
            {footer}
          </Flex>
        )}
      </Flex>
    </Sider>
  );
};
