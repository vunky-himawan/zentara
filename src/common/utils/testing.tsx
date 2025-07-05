import { render, RenderOptions } from "@testing-library/react";
import { ThemeConfigProvider } from "@/context/theme-config.provider";

// Wrapper component
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeConfigProvider>{children}</ThemeConfigProvider>;
};

// Explicit type
const customRender: (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => ReturnType<typeof render> = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything
export * from "@testing-library/react";
export { customRender as render };
