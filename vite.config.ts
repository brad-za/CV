import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { prismjsPlugin } from "vite-plugin-prismjs";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    prismjsPlugin({
      languages: ["json", "rust", "javascript", "typescript", "regex"],
      plugins: [
        "line-highlight",
        "line-numbers",
        "show-language",
        "highlight-keywords",
        "copy-to-clipboard",
        "previewers",
        "match-braces",
      ],
      theme: "twilight",
    }),
  ],
  server: {
    watch: {
      usePolling: true,
    },
  },
  assetsInclude: ["**/*.glb"],
  publicDir: "public",
});
