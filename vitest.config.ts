/// <reference types="vitest" />

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [vue(), vueJsx()],
  test: {
    clearMocks: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    transformMode: {
      web: [/\.[jt]sx$/]
    },
    include: ["__tests__/*.test.{js,ts,tsx}"]
  }
});
