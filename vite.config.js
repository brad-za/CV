import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { prismjsPlugin } from "vite-plugin-prismjs";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		prismjsPlugin({
			languages: ["json", "rust", "javascript", "regex"],
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
	publicDir: "/src/assets",
	assetsInclude: ["**/*.glb"],
});
