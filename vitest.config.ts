import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";
import tsConf from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";

const dirname = typeof __dirname !== "undefined"
  ? __dirname
  : path.dirname(fileURLToPath(import.meta.url));

const isVitestUI = process.argv.includes("--ui");

export default defineConfig({
  plugins: [react(), tsConf()],
  resolve: {
    alias: {
      "@": path.resolve(dirname, "./src"),
      react: path.resolve(dirname, "node_modules/react"),
      "react-dom": path.resolve(dirname, "node_modules/react-dom"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitest.setup.ts",
    exclude: ["**/*.stories.*", "node_modules", "dist"],
	include: ["src/**/*.test.{ts,tsx}", "src/**/*.spec.{ts,tsx}"],
    ...(isVitestUI && {
      projects: [
        {
          plugins: [
            storybookTest({
              configDir: path.join(dirname, ".storybook"),
            }),
          ],
          test: {
            environment: "jsdom",
            setupFiles: [".storybook/vitest.setup.ts"],
            pool: "browser", // Penting: harus browser, bukan forks
            isolate: true,
            testTimeout: 30000,
            hookTimeout: 30000,
          },
        },
      ],
    }),
  },
});
