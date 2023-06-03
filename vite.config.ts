import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcss from "rollup-plugin-postcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    postcss({
      extensions: [".css", ".scss"],
      inject: true,
      minimize: true,
    }),
  ],
});
