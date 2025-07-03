import { DEFAULT_COLORS } from "@/common/constants/color";
import { ConfigProvider, type ThemeConfig, theme as antdTheme } from "antd";
import { type FC, createContext, useCallback, useContext, useMemo, useState } from "react";

// Base theme colors interface
interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  backgroundSecondary: string;
  text: string;
  textSecondary: string;
  border: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  hover: string;
  active: string;
  disabled: string;
  shadow: string;
}

// Component theme definition
interface ComponentTheme {
  dark: ThemeColors;
  light: ThemeColors;
}

// Supported component types
type ComponentType = "Sidebar" | "Page" | "Header" | "Footer";

// Theme configuration with better type safety
interface ThemeExtraToken {
  global?: {
    modes?: {
      dark?: Partial<ThemeColors>;
      light?: Partial<ThemeColors>;
    };
  };
  components?: {
    [K in ComponentType]?: Partial<ComponentTheme>;
  };
}

interface IThemeConfigContext {
  isDarkMode: boolean;
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void;
  getComponentTheme: (componentName?: ComponentType) => ThemeColors;
}

interface CustomThemeConfig extends Omit<ThemeConfig, "algorithm"> {
  extra?: ThemeExtraToken;
  algorithm?: ThemeConfig["algorithm"];
}

interface ThemeConfigProviderProps {
  children: React.ReactNode;
  themeConfig?: CustomThemeConfig;
  defaultDarkMode?: boolean;
}

// Default theme configuration
const DEFAULT_THEME_CONFIG: CustomThemeConfig = {
  extra: {
    global: {
      modes: {
        dark: {},
        light: {},
      },
    },
    components: {},
  },
};

// Component-specific defaults
const COMPONENT_DEFAULTS: Record<ComponentType, ComponentTheme> = {
  Sidebar: {
    dark: DEFAULT_COLORS.dark,
    light: DEFAULT_COLORS.light,
  },
  Page: {
    dark: DEFAULT_COLORS.dark,
    light: DEFAULT_COLORS.light,
  },
  Header: {
    dark: DEFAULT_COLORS.dark,
    light: DEFAULT_COLORS.light,
  },
  Footer: {
    dark: DEFAULT_COLORS.dark,
    light: DEFAULT_COLORS.light,
  },
};

// Utility function to merge theme colors
const mergeThemeColors = (base: ThemeColors, override?: Partial<ThemeColors>): ThemeColors => ({
  ...base,
  ...override,
});

// Deep merge function for theme configurations
const mergeThemeConfig = (
  defaultConfig: CustomThemeConfig,
  userConfig?: CustomThemeConfig,
): CustomThemeConfig => {
  if (!userConfig) return defaultConfig;

  return {
    ...defaultConfig,
    ...userConfig,
    extra: {
      global: {
        modes: {
          dark: {
            ...defaultConfig.extra?.global?.modes?.dark,
            ...userConfig.extra?.global?.modes?.dark,
          },
          light: {
            ...defaultConfig.extra?.global?.modes?.light,
            ...userConfig.extra?.global?.modes?.light,
          },
        },
      },
      components: {
        ...defaultConfig.extra?.components,
        ...userConfig.extra?.components,
      },
    },
  };
};

// Context with default value
export const ThemeContext = createContext<IThemeConfigContext | null>(null);

export const ThemeConfigProvider: FC<ThemeConfigProviderProps> = ({
  children,
  themeConfig,
  defaultDarkMode = false,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(defaultDarkMode);

  // Merge user config with defaults
  const mergedThemeConfig = useMemo(
    () => mergeThemeConfig(DEFAULT_THEME_CONFIG, themeConfig),
    [themeConfig],
  );

  // Memoized callbacks to prevent unnecessary re-renders
  const toggleTheme = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  const setTheme = useCallback((isDark: boolean) => {
    setIsDarkMode(isDark);
  }, []);

  // Memoized function to get component theme
  const getComponentTheme = useCallback(
    (componentName?: ComponentType): ThemeColors => {
      const mode = isDarkMode ? "dark" : "light";

      if (!componentName) {
        return mergeThemeColors(
          DEFAULT_COLORS[mode],
          mergedThemeConfig.extra?.global?.modes?.[mode],
        );
      }

      const componentConfig = mergedThemeConfig.extra?.components?.[componentName];
      const baseTheme = COMPONENT_DEFAULTS[componentName]?.[mode] || DEFAULT_COLORS[mode];

      return mergeThemeColors(baseTheme, componentConfig?.[mode]);
    },
    [isDarkMode, mergedThemeConfig.extra],
  );

  // Memoized context value
  const contextValue = useMemo(
    (): IThemeConfigContext => ({
      isDarkMode,
      toggleTheme,
      setTheme,
      getComponentTheme,
    }),
    [isDarkMode, toggleTheme, setTheme, getComponentTheme],
  );

  // Memoized Ant Design theme configuration
  const antdThemeConfig = useMemo(() => {
    const { darkAlgorithm, defaultAlgorithm } = antdTheme;
    const globalTheme = getComponentTheme();

    const algorithm =
      mergedThemeConfig.algorithm || (isDarkMode ? darkAlgorithm : defaultAlgorithm);

    const { extra, ...restConfig } = mergedThemeConfig;

    return {
      ...restConfig,
      algorithm,
      token: {
        ...restConfig.token,
        colorPrimary: globalTheme.primary,
        colorSuccess: globalTheme.success,
        colorWarning: globalTheme.warning,
        colorError: globalTheme.error,
        colorInfo: globalTheme.info,

        colorBgBase: globalTheme.background,
        colorBgContainer: globalTheme.backgroundSecondary,

        colorText: globalTheme.text,
        colorTextSecondary: globalTheme.textSecondary,
        colorTextDisabled: globalTheme.disabled,

        colorBorder: globalTheme.border,

        colorLinkHover: globalTheme.hover,
        colorLinkActive: globalTheme.active,

        boxShadow: globalTheme.shadow,
      },
    };
  }, [isDarkMode, mergedThemeConfig, getComponentTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <ConfigProvider theme={antdThemeConfig}>{children}</ConfigProvider>
    </ThemeContext.Provider>
  );
};

// Type exports for better developer experience
export type {
  ThemeColors,
  ComponentTheme,
  ComponentType,
  ThemeExtraToken,
  CustomThemeConfig,
  ThemeConfigProviderProps,
};
