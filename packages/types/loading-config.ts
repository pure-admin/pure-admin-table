/**
 * @description 加载动画相关配置
 * @see {@link https://element-plus.org/zh-CN/component/loading.html#%E6%8C%87%E4%BB%A4}
 */
export type LoadingConfig = {
  /** 显示在加载图标下方的加载文案 */
  text?: string;
  /** 自定义加载图标 */
  spinner?: string;
  /** 自定义 `svg` 加载图标 (与 `spinner` 相同) */
  svg?: string;
  /** 自定义 `svg` 加载图标的大小 */
  viewBox?: string;
  /** 背景遮罩的颜色，默认值：暗黑模式下为`rgba(0, 0, 0, 0.45)`，正常模式下为`rgba(255, 255, 255, 0.45)` */
  background?: string;
};
