import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isGitHubPages = process.env.GITHUB_PAGES === "true";
  
  return {
    base: isGitHubPages ? "/imts_hub/" : "./",
    define: {
      "import.meta.env.VITE_GITHUB_PAGES": JSON.stringify(isGitHubPages),
    },
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
