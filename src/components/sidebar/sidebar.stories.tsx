import { DEFAULT_COLORS } from "@/common/constants/color";
import { ThemeConfigProvider } from "@/context/theme-config.provider";
import type { Meta, StoryObj } from "@storybook/react";
import { Flex, type MenuProps, Typography } from "antd";
import { Camera, LayoutDashboard, Settings } from "lucide-react";
import { Sidebar } from ".";
import { LucideIcon } from "../lucide-icon";
import { SidebarConfigProvider } from "@/context/sidebar-config.provider";

const { Title } = Typography;

const meta: Meta<typeof Sidebar> = {
  title: "@zentara/Sidebar",
  component: Sidebar,
  argTypes: {
    menuProps: {
      control: { type: "object" },
    },
    extra: {
      control: { type: "object" },
      description: "Extra content for the sidebar, such as header or footer",
    },
    width: {
      control: { type: "number" },
      description: "Width of the sidebar",
    },
    collapsible: {
      control: { type: "boolean" },
      description: "Whether the sidebar is collapsible",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  decorators: [
    (Story) => {
      const Wrapper = () => (
        <ThemeConfigProvider
          themeConfig={{
            extra: {
              components: {
                Sidebar: {
                  light: {
                    ...DEFAULT_COLORS.light,
                    background: "#85dcb8",
                  },
                },
              },
            },
          }}
        >
          <div style={{ height: "100vh" }}>
            <Story />
          </div>
        </ThemeConfigProvider>
      );
      return <Wrapper />;
    },
  ],
  args: {
    menuProps: {
      items: [
        {
          key: "1",
          icon: <Camera size={16} />,
          label: "Option 1",
        },
        {
          key: "2",
          icon: <Camera size={16} />,
          label: "Option 2",
        },
      ],
      defaultSelectedKeys: ["1"],
    } satisfies MenuProps,
  },
  parameters: {
    controls: {
      exclude: ["collapsible"],
    },
  },
};

export const WithHeader: Story = {
  decorators: [
    (Story) => {
      const Wrapper = () => (
        <ThemeConfigProvider
          themeConfig={{
            extra: {
              components: {
                Sidebar: {
                  light: {
                    ...DEFAULT_COLORS.light,
                    background: "#85dcb8",
                  },
                },
              },
            },
          }}
        >
          <div style={{ height: "100vh" }}>
            <Story />
          </div>
        </ThemeConfigProvider>
      );
      return <Wrapper />;
    },
  ],
  args: {
    extra: {
      header: (
        <Flex align="center" justify="center" style={{ width: "100%" }}>
          <Title level={3}>Custom Header</Title>
        </Flex>
      ),
    },
    menuProps: {
      items: [
        {
          key: "1",
          icon: <LucideIcon Icon={LayoutDashboard} />,
          label: "Dashboard",
        },
        {
          key: "2",
          icon: <LucideIcon Icon={Settings} />,
          label: "Settings",
        },
      ],
      defaultSelectedKeys: ["1"],
    } satisfies MenuProps,
  },
  parameters: {
    controls: {
      exclude: ["collapsible"],
    },
  },
};

export const WithFooter: Story = {
  decorators: [
    (Story) => {
      const Wrapper = () => (
        <ThemeConfigProvider
          themeConfig={{
            extra: {
              components: {
                Sidebar: {
                  light: {
                    ...DEFAULT_COLORS.light,
                    background: "#85dcb8",
                  },
                },
              },
            },
          }}
        >
          <div style={{ height: "100vh" }}>
            <Story />
          </div>
        </ThemeConfigProvider>
      );
      return <Wrapper />;
    },
  ],
  args: {
    extra: {
      footer: (
        <Flex align="center" justify="center" style={{ width: "100%" }}>
          <Title level={3}>Your Custom Footer</Title>
        </Flex>
      ),
    },
    menuProps: {
      items: [
        {
          key: "1",
          icon: <LucideIcon Icon={LayoutDashboard} />,
          label: "Dashboard",
        },
        {
          key: "2",
          icon: <LucideIcon Icon={Settings} />,
          label: "Settings",
        },
      ],
      defaultSelectedKeys: ["1"],
    } satisfies MenuProps,
  },
  parameters: {
    controls: {
      exclude: ["collapsible"],
    },
  },
};

export const WithCollapsible: Story = {
  decorators: [
    (Story) => {
      const Wrapper = () => (
        <ThemeConfigProvider
          themeConfig={{
            extra: {
              components: {
                Sidebar: {
                  light: {
                    ...DEFAULT_COLORS.light,
                    background: "#85dcb8",
                  },
                },
              },
            },
          }}
        >
          <SidebarConfigProvider>
            <div style={{ height: "100vh" }}>
              <Story />
            </div>
          </SidebarConfigProvider>
        </ThemeConfigProvider>
      );
      return <Wrapper />;
    },
  ],
  args: {
    collapsible: true,
    brandLogo: (
      <Flex align="center" justify="space-between" style={{ width: "100%", padding: "0 12px" }}>
        <Title level={3}>Brand Logo</Title>
      </Flex>
    ),
    extra: {
      header: (
        <Flex align="center" justify="center" style={{ width: "100%" }}>
          <Title level={4}>Collapsible Header</Title>
        </Flex>
      ),
      footer: (
        <Flex align="center" justify="center" style={{ width: "100%" }}>
          <Title level={4}>Collapsible Footer</Title>
        </Flex>
      ),
    },
    menuProps: {
      items: [
        {
          key: "1",
          icon: <LucideIcon Icon={LayoutDashboard} />,
          label: "Dashboard",
        },
        {
          key: "2",
          icon: <LucideIcon Icon={Settings} />,
          label: "Settings",
        },
      ],
      defaultSelectedKeys: ["1"],
    } satisfies MenuProps,
  },
};

export const WithGroupedMenu: Story = {
  decorators: [
    (Story) => {
      const Wrapper = () => (
        <ThemeConfigProvider
          themeConfig={{
            extra: {
              components: {
                Sidebar: {
                  light: {
                    ...DEFAULT_COLORS.light,
                    background: "#85dcb8",
                  },
                },
              },
            },
          }}
        >
          <SidebarConfigProvider>
            <div style={{ height: "100vh" }}>
              <Story />
            </div>
          </SidebarConfigProvider>
        </ThemeConfigProvider>
      );
      return <Wrapper />;
    },
  ],
  args: {
    collapsible: true,
    brandLogo: (
      <Flex align="center" justify="space-between" style={{ width: "100%", padding: "0 12px" }}>
        <Title level={3}>Brand Logo</Title>
      </Flex>
    ),
    extra: {
      header: (
        <Flex align="center" justify="center" style={{ width: "100%" }}>
          <Title level={4}>Collapsible Header</Title>
        </Flex>
      ),
      footer: (
        <Flex align="center" justify="center" style={{ width: "100%" }}>
          <Title level={4}>Collapsible Footer</Title>
        </Flex>
      ),
    },
    menuProps: {
      items: [
        {
          key: "1",
          icon: <LucideIcon Icon={LayoutDashboard} />,
          label: "Dashboard",
        },
        {
          key: "2",
          icon: <LucideIcon Icon={Settings} />,
          label: "Settings",
          children: [
            {
              key: "2-1",
              icon: <LucideIcon Icon={Settings} />,
              label: "Sub Option 1",
            },
            {
              key: "2-2",
              icon: <LucideIcon Icon={Settings} />,
              label: "Sub Option 2",
            },
          ],
        },
      ],
      defaultSelectedKeys: ["1"],
    } satisfies MenuProps,
  },
};
