/// <reference types="vitest" />

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [vue(), vueJsx()],
  optimizeDeps: {
    disabled: true
  },
  test: {
    server: {
      deps: { inline: ["element-plus"] }
    },
    clearMocks: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["__tests__/*.test.{js,ts,tsx}"]
  }
});
