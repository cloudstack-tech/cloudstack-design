import React from "react";

// 间距大小类型
export type StackSize = "small" | "medium" | "large" | number;

// 对齐方式映射
export const alignItemsMap: Record<string, string> = {
  start: "items-start",
  end: "items-end",
  center: "items-center",
  stretch: "items-stretch",
  baseline: "items-baseline",
} as const;

// 主轴对齐方式映射
export const justifyContentMap: Record<string, string> = {
  start: "justify-start",
  end: "justify-end",
  center: "justify-center",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
} as const;

// 间距大小映射
export const stackSizeMap: Record<string, number> = {
  small: 2, // 8px
  medium: 4, // 16px
  large: 6, // 24px
} as const;

export interface StackProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "size"> {
  /**
   * 堆叠方向
   * @default "vertical"
   */
  direction?: "vertical" | "horizontal";

  /**
   * 间距大小
   * @default "medium"
   */
  spacing?: StackSize;

  /**
   * 交叉轴对齐方式
   * @default "stretch"
   */
  align?: keyof typeof alignItemsMap;

  /**
   * 主轴对齐方式
   * @default "start"
   */
  justify?: keyof typeof justifyContentMap;

  /**
   * 是否换行
   * @default false
   */
  wrap?: boolean;

  /**
   * 分隔符
   */
  divider?: React.ReactNode;

  /**
   * 自定义元素类型
   * @default "div"
   */
  as?: React.ElementType;
}

// HStack 专用属性
export interface HStackProps extends Omit<StackProps, "direction"> {
  /**
   * 垂直对齐方式 (交叉轴)
   * @default "stretch"
   */
  align?: keyof typeof alignItemsMap;
}

// VStack 专用属性
export interface VStackProps extends Omit<StackProps, "direction"> {
  /**
   * 水平对齐方式 (交叉轴)
   * @default "stretch"
   */
  align?: keyof typeof alignItemsMap;
}
