import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://jefdavgar.github.io/project-rick-and-morty/",
  plugins: [react(), eslint()],
});
