import { ThemeContext, type ComponentType } from "@/context/theme-config.provider";
import { useContext, useMemo } from "react";

// Custom hook with better error handling and performance
export const useThemeConfig = (componentName?: ComponentType) => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeConfig must be used within ThemeConfigProvider");
  }

  // Memoize the theme to prevent unnecessary recalculations
  const theme = useMemo(() => context.getComponentTheme(componentName), [context, componentName]);

  return {
    isDarkMode: context.isDarkMode,
    toggleTheme: context.toggleTheme,
    setTheme: context.setTheme,
    theme,
  };
};

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
