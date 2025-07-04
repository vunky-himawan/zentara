import { DEFAULT_COLORS } from "@/common/constants/color";
import { ThemeConfigProvider } from "@/context/theme-config.provider";
import type { Meta, StoryObj } from "@storybook/react";
import { Flex, type MenuProps, Typography } from "antd";
import { Camera, LayoutDashboard, Settings } from "lucide-react";
import { Sidebar } from ".";
import { LucideIcon } from "../lucide-icon";

const { Title } = Typography;

const meta: Meta<typeof Sidebar> = {
  title: "@zentara/Sidebar",
  component: Sidebar,
  argTypes: {
    menuProps: {
      control: { type: "object" },
    },
    header: {
      control: false,
      description: "Custom header content",
    },
    footer: {
      control: false,
      description: "Custom footer content",
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
      exclude: ["collapsible", "width", "header", "footer", "style"],
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
    header: (
      <Flex align="center" justify="center" style={{ width: "100%" }}>
        <Title level={3}>Your Brand Logo</Title>
      </Flex>
    ),
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
      exclude: ["footer"],
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
    footer: (
      <Flex align="center" justify="center" style={{ width: "100%" }}>
        <Title level={3}>Your Custom Footer</Title>
      </Flex>
    ),
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
      exclude: ["header"],
    },
  },
};