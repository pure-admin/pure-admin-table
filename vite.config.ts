import * as path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { terser } from "rollup-plugin-terser";

// https://cn.vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  plugins: [vue(), vueJsx()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "packages/index.ts"),
      name: "@pureadmin/table",
      fileName: format => `index.${format}.js`
    },
    // https://rollupjs.org/guide/en/#big-list-of-options
    rollupOptions: {
      treeshake: true,
      external: ["vue", "element-plus"],
      output: {
        globals: {
          vue: "vue",
          "element-plus": "elementPlus"
        }
      },
      plugins: [terser({ compress: { drop_console: true } })]
    }
  }
});
