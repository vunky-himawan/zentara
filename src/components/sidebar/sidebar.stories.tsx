import { ThemeConfigProvider } from "@/context/theme-config.provider";
import type { Meta, StoryObj } from "@storybook/react";
import type { MenuProps } from "antd";
import { Camera } from "lucide-react";
import { Sidebar } from "./sidebar";

const meta: Meta<typeof Sidebar> = {
	title: "@zentara/Sidebar",
	component: Sidebar,
	argTypes: {
		menuProps: {
			control: { type: "object" },
		},
	},
};
export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
	decorators: [
		(Story) => (
			<ThemeConfigProvider
				themeConfig={{
					extra: {
						global: {
							modes: {
								light: {
									background: "#FFFFFF",
									primary: "#fff",
									secondary: "#E0D4F1",
									text: "#000000",
									textSecondary: "#E0D4F1",
								},
							},
						},
						components: {
							Sidebar: {
								light: {
									background: "#FFE1E0",
									primary: "#FFFFFF",
									secondary: "#E0D4F1",
									text: "#FFFFFF",
									textSecondary: "#E0D4F1",
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
		),
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
		brandLogo: <div style={{ padding: 8 }}>My Brand</div>,
		footer: <div style={{ padding: 8 }}>© 2025</div>,
	},
};
