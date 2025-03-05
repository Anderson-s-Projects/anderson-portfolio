
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  base: "/anderson-portfolio/", // Correct path for GitHub Pages
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      // This ensures the alias "@" maps to the "src" folder in the root of the project.
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
  }
}));
