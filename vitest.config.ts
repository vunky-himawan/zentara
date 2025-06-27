import path from "node:path";
import { fileURLToPath } from "node:url";
import tsConf from "vite-tsconfig-paths";

import { defineConfig } from "vitest/config";

import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";

const dirname =
	typeof __dirname !== "undefined" ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
	plugins: [tsConf()],
	resolve: {
		alias: {
			react: path.resolve(dirname, "node_modules/react"),
			"react-dom": path.resolve(dirname, "node_modules/react-dom"),
		},
	},
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: "./vitest.setup.ts",
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
		workspace: [
			{
				extends: true,
				plugins: [
					// The plugin will run tests for the stories defined in your Storybook config
					// See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
					storybookTest({ configDir: path.join(dirname, ".storybook") }),
				],
				test: {
					name: "storybook",
					browser: {
						enabled: true,
						headless: true,
						provider: "playwright",
						instances: [{ browser: "chromium" }],
					},
					setupFiles: [".storybook/vitest.setup.ts"],
				},
			},
		],
	},
});
