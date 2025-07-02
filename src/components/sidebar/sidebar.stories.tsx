import { DEFAULT_COLORS } from "@/common/constants/color";
import { ThemeConfigProvider } from "@/context/theme-config.provider";
import type { Meta, StoryObj } from "@storybook/react";
import type { MenuProps } from "antd";
import { Camera } from "lucide-react";
import { Sidebar } from ".";

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
		brandLogo: <div style={{ padding: 8 }}>My Brand</div>,
		footer: <div style={{ padding: 8 }}>© 2025</div>,
	},
};
