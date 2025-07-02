import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import tsConf from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsConf()],
  resolve: {
    alias: {
      react: path.resolve(__dirname, "node_modules/react"),
      "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
  build: {
    target: ["es2018"],
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "Zentara",
      fileName: "zentara",
      formats: ["es", "umd", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "antd"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          antd: "antd",
        },
      },
    },
  },
});
