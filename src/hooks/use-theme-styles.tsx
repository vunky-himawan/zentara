import { type ComponentType, useThemeConfig } from "@/context/theme-config.provider";
import { useMemo } from "react";

export const useThemeStyles = (componentName?: ComponentType) => {
	const { theme, isDarkMode } = useThemeConfig(componentName);

	return useMemo(
		() => ({
			colors: theme,
			isDark: isDarkMode,
			// Common CSS-in-JS styles
			styles: {
				container: {
					backgroundColor: theme.background,
					color: theme.text,
				},
				primary: {
					color: theme.primary,
				},
				secondary: {
					color: theme.secondary,
				},
				muted: {
					color: theme.textSecondary,
				},
			},
		}),
		[theme, isDarkMode],
	);
};
