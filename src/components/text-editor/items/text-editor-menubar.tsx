import { Button, Divider, Dropdown, Flex, Space, Tooltip } from "antd";
import { LucideIcon, type LucideIconProps } from "../lucide-icon";
import type { FC, PropsWithChildren } from "react";
import { useThemeStyles } from "@/hooks/use-theme-styles";

export const TextEditorMenubar: FC<PropsWithChildren> = ({ children }) => {
    return <Space direction="horizontal" size={2} wrap>
        {children}
    </Space>;
};

export const TextEditorButton: FC<{ icon: LucideIconProps["Icon"]; tooltip?: string; onClick?: () => void, isActive?: boolean }> =
    ({ icon, tooltip, onClick, isActive }) => {
        const { colors } = useThemeStyles();

        return (
            <Tooltip title={tooltip}>
                <Button type="text" icon={<LucideIcon Icon={icon} />} onClick={onClick} style={{ background: isActive ? colors.textSecondary : undefined }} />
            </Tooltip>
        );
    }

export const TextEditorDropdown: FC<{
    icon?: LucideIconProps["Icon"];
    tooltip?: string;
    children?: React.ReactNode;
} & React.ComponentProps<typeof Dropdown>> = ({ icon, tooltip, children, ...dropdownProps }) => (
    <Tooltip title={tooltip}>
        <Dropdown {...dropdownProps}>
            {children}
        </Dropdown>
    </Tooltip>
);


export const TextEditorDivider: FC = () => <Divider type="vertical" />;
