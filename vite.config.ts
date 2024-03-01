import { resolve } from "node:path";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
import terser from "@rollup/plugin-terser";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { defineConfig, type UserConfig } from "vite";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

const lifecycle = process.env.npm_lifecycle_event;

function getConfigs(): UserConfig {
  return lifecycle === "lib"
    ? {
        publicDir: false,
        build: {
          lib: {
            entry: resolve(__dirname, "packages/index.ts"),
            name: "PureTable",
            fileName: format => `index.${format}.js`
          },
          // https://rollupjs.org/guide/en/#big-list-of-options
          rollupOptions: {
            treeshake: true,
            external: ["vue", "element-plus"],
            output: {
              globals: {
                vue: "Vue",
                "element-plus": "ElementPlus"
              },
              exports: "named"
            },
            plugins: [terser({ compress: { drop_console: true } })]
          }
        }
      }
    : ({
        base: "/pure-admin-table/",
        build: {
          sourcemap: false,
          chunkSizeWarningLimit: 4000
        }
      } as any);
}

// https://cn.vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    svgLoader(),
    VueI18nPlugin({
      runtimeOnly: true,
      compositionOnly: true,
      include: [resolve(__dirname, "locales/**")]
    })
  ],
  // https://cn.vitejs.dev/guide/build.html#library-mode 环境变量
  define: {
    "process.env.NODE_ENV": '"production"',
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
  },
  server: {
    host: "0.0.0.0"
  },
  ...getConfigs()
});
