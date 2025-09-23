import React from "react";

// 间距大小类型
export type SpaceSize = "small" | "middle" | "large" | number;

// 对齐方式映射
export const alignItemsMap: Record<string, string> = {
  start: "items-start",
  end: "items-end",
  center: "items-center",
  baseline: "items-baseline",
} as const;

// 间距大小映射
export const spaceSizeMap: Record<string, number> = {
  small: 2, // 8px
  middle: 4, // 16px
  large: 6, // 24px
} as const;

export interface SpaceProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "size"> {
  /**
   * 对齐方式
   * @default "center"
   */
  align?: keyof typeof alignItemsMap;

  /**
   * 间距方向
   * @default "horizontal"
   */
  direction?: "vertical" | "horizontal";

  /**
   * 间距大小
   * @default "small"
   */
  size?: SpaceSize | [SpaceSize, SpaceSize];

  /**
   * 环绕类型的间距，用于折行的场景
   * @default false
   */
  wrap?: boolean;

  /**
   * 分隔符
   */
  split?: React.ReactNode;

  /**
   * 语义化子元素类名
   */
  classNames?: {
    item?: string;
  };

  /**
   * 自定义元素类型
   * @default "div"
   */
  as?: React.ElementType;
}

export interface SpaceCompactProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "size"> {
  /**
   * 紧凑布局方向
   * @default "horizontal"
   */
  direction?: "vertical" | "horizontal";

  /**
   * 是否为块级元素
   * @default false
   */
  block?: boolean;

  /**
   * 间距大小，仅在非紧凑模式下生效
   * @default 0
   */
  size?: SpaceSize;
}
