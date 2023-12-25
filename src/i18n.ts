import { App } from "vue";
import { type I18n, createI18n } from "vue-i18n"; // element-plus国际化
import enLocale from "element-plus/dist/locale/en.mjs";
import zhLocale from "element-plus/dist/locale/zh-cn.mjs";

function siphonI18n(prefix = "zh-CN") {
  return Object.fromEntries(
    Object.entries(
      import.meta.glob("../locales/*.y(a)?ml", { eager: true })
    ).map(([key, value]: any) => {
      const matched = key.match(/([A-Za-z0-9-_]+)\./i)[1];
      return [matched, value.default];
    })
  )[prefix];
}

export const localesConfigs = {
  zh: {
    ...siphonI18n("zh-CN"),
    ...zhLocale
  },
  en: {
    ...siphonI18n("en"),
    ...enLocale
  }
};

export const i18n: I18n = createI18n({
  legacy: false,
  locale: "zh",
  fallbackLocale: "en",
  messages: localesConfigs
});

export function useI18n(app: App) {
  app.use(i18n);
}
