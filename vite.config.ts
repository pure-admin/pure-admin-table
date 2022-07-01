import * as path from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { terser } from "rollup-plugin-terser";
import { defineConfig, type UserConfig } from "vite";

const lifecycle = process.env.npm_lifecycle_event;

function getConfigs(): UserConfig {
  return lifecycle === "lib"
    ? {
        publicDir: false,
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
              },
              exports: "named"
            },
            plugins: [terser({ compress: { drop_console: true } })]
          }
        }
      }
    : {
        build: {
          sourcemap: false,
          brotliSize: false,
          chunkSizeWarningLimit: 4000
        }
      };
}

// https://cn.vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  plugins: [vue(), vueJsx()],
  ...getConfigs()
});
