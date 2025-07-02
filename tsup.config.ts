import { defineConfig } from "tsup";
import sassPlugin from "esbuild-plugin-sass";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  esbuildPlugins: [sassPlugin()],
});
