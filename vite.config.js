import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import prismjs from "vite-plugin-prismjs";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prismjs({
      languages: ["json", "rust"],
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
      // languages: 'all',
    }),
  ],
});
