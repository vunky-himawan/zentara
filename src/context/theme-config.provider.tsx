import { ConfigProvider, type ThemeConfig, theme as antdTheme } from "antd";
import {
  createContext,
  type FC,
  useContext,
  useMemo,
  useState,
  useCallback,
} from "react";

// Base theme colors interface
interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  textSecondary: string;
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
    modes: {
      dark?: Partial<ThemeColors>;
      light?: Partial<ThemeColors>;
    };
  };
  components?: {
    [K in ComponentType]?: Partial<ComponentTheme>;
  };
}

interface ThemeConfigContext {
  isDarkMode: boolean;
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void;
  getComponentTheme: (componentName?: ComponentType) => ThemeColors;
}

interface CustomThemeConfig extends Omit<ThemeConfig, "algorithm"> {
  extra: ThemeExtraToken;
  algorithm?: ThemeConfig["algorithm"];
}

interface ThemeConfigProviderProps {
  children: React.ReactNode;
  themeConfig: CustomThemeConfig;
  defaultDarkMode?: boolean;
}

// Default theme colors - moved outside component to prevent recreation
const DEFAULT_COLORS: Record<"dark" | "light", ThemeColors> = {
  dark: {
    primary: "#1890ff",
    secondary: "#f0f2f5",
    background: "#001529",
    text: "#ffffff",
    textSecondary: "#d9d9d9",
  },
  light: {
    primary: "#1890ff",
    secondary: "#e6f7ff",
    background: "#ffffff",
    text: "#000000",
    textSecondary: "#595959",
  },
};

// Component-specific defaults
const COMPONENT_DEFAULTS: Record<ComponentType, ComponentTheme> = {
  Sidebar: {
    dark: {
      primary: "#40c4ff",
      secondary: "#b3e5fc",
      background: "#000c17",
      text: "#ffffff",
      textSecondary: "#b0bec5",
    },
    light: {
      primary: "#1890ff",
      secondary: "#e6f7ff",
      background: "#fafafa",
      text: "#000000",
      textSecondary: "#595959",
    },
  },
  Page: {
    dark: {
      primary: "#0288d1",
      secondary: "#b3e5fc",
      background: "#000c17",
      text: "#ffffff",
      textSecondary: "#b0bec5",
    },
    light: {
      primary: "#0288d1",
      secondary: "#e1f5fe",
      background: "#f5f5f5",
      text: "#000000",
      textSecondary: "#616161",
    },
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
const mergeThemeColors = (
  base: ThemeColors,
  override?: Partial<ThemeColors>
): ThemeColors => ({
  ...base,
  ...override,
});

// Context with default value
const ThemeConfigContext = createContext<ThemeConfigContext | null>(null);

export const ThemeConfigProvider: FC<ThemeConfigProviderProps> = ({
  children,
  themeConfig,
  defaultDarkMode = false,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(defaultDarkMode);

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
          themeConfig.extra.global?.modes[mode]
        );
      }

      const componentConfig = themeConfig.extra.components?.[componentName];
      const baseTheme =
        COMPONENT_DEFAULTS[componentName]?.[mode] || DEFAULT_COLORS[mode];

      return mergeThemeColors(baseTheme, componentConfig?.[mode]);
    },
    [isDarkMode, themeConfig.extra]
  );

  // Memoized context value
  const contextValue = useMemo(
    (): ThemeConfigContext => ({
      isDarkMode,
      toggleTheme,
      setTheme,
      getComponentTheme,
    }),
    [isDarkMode, toggleTheme, setTheme, getComponentTheme]
  );

  // Memoized Ant Design theme configuration
  const antdThemeConfig = useMemo(() => {
    const { darkAlgorithm, defaultAlgorithm } = antdTheme;
    const globalTheme = getComponentTheme();

    const algorithm =
      themeConfig.algorithm || (isDarkMode ? darkAlgorithm : defaultAlgorithm);

    const { extra, ...restConfig } = themeConfig;

    return {
      ...restConfig,
      algorithm,
      token: {
        ...restConfig.token,
        colorPrimary: globalTheme.primary,
        colorBgBase: globalTheme.secondary,
        colorBgContainer: globalTheme.background,
        colorText: globalTheme.text,
        colorTextDisabled: globalTheme.textSecondary,
        colorBorder: globalTheme.textSecondary,
      },
    };
  }, [isDarkMode, themeConfig, getComponentTheme]);

  return (
    <ThemeConfigContext.Provider value={contextValue}>
      <ConfigProvider theme={antdThemeConfig}>{children}</ConfigProvider>
    </ThemeConfigContext.Provider>
  );
};

// Custom hook with better error handling and performance
export const useThemeConfig = (componentName?: ComponentType) => {
  const context = useContext(ThemeConfigContext);

  if (!context) {
    throw new Error("useThemeConfig must be used within ThemeConfigProvider");
  }

  // Memoize the theme to prevent unnecessary recalculations
  const theme = useMemo(
    () => context.getComponentTheme(componentName),
    [context, componentName]
  );

  return {
    isDarkMode: context.isDarkMode,
    toggleTheme: context.toggleTheme,
    setTheme: context.setTheme,
    theme,
  };
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
