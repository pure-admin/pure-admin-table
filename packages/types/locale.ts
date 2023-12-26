/**
 * @description 国际化相关配置
 */
export type TranslatePair = {
  [key: string]: string | string[] | TranslatePair;
};

export type DefaultLanguage = "en" | "zhCn" | "zhTw";

export type Language = {
  name: string;
  el: TranslatePair;
};
