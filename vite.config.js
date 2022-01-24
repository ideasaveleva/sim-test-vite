import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  rollupOptions: {
    input: "src/main.js",
    format: "system",
    preserveEntrySignatures: true,
  },
  server: {
    host: true,
    port: "8085",
    hot: true,
  },
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          base: "/src",
        },
      },
    }),
  ],
});
