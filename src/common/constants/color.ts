import type { ThemeColors } from "@/context/theme-config.provider";

// Default configuration for light and dark themes
export const DEFAULT_COLORS: Record<"dark" | "light", ThemeColors> = {
  light: {
    primary: "#85dcb8", // pastel green
    secondary: "#f5f5f5", // light grey for secondary background
    background: "#ffffff", // main background
    backgroundSecondary: "#fafafa", // card bg
    text: "#333333", // main text
    textSecondary: "#777777", // secondary text
    border: "#e0e0e0", // soft border
    success: "#8bc34a", // light green
    warning: "#ffb74d", // light orange
    error: "#e57373", // light red
    info: "#64b5f6", // light blue
    hover: "#c8e6c9", // very light green hover
    active: "#aed581", // slightly stronger green
    disabled: "#dcdcdc", // disabled grey
    shadow: "rgba(0, 0, 0, 0.1)", // soft shadow
  },
  dark: {
    primary: "#85dcb8", // keep same for brand consistency
    secondary: "#2c2c2c", // dark secondary
    background: "#121212", // dark background
    backgroundSecondary: "#1e1e1e", // card bg
    text: "#eeeeee", // light text
    textSecondary: "#aaaaaa", // secondary light text
    border: "#333333", // dark border
    success: "#9ccc65", // softer green
    warning: "#ffa726", // orange
    error: "#ef5350", // red
    info: "#42a5f5", // blue
    hover: "#3a3a3a", // dark hover
    active: "#4f4f4f", // dark active
    disabled: "#555555", // dark disabled
    shadow: "rgba(0, 0, 0, 0.5)", // stronger shadow
  },
};

export const UNDERLINE_COLOR = ["#ad46ff", "#00bba7", "#f6339a", "#7ccf00", "#ff6900"];
