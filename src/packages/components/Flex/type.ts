// CSS 属性值到 Tailwind 类的映射
export const justifyContentMap: Record<string, string> = {
  "flex-start": "justify-start",
  start: "justify-start",
  "flex-end": "justify-end",
  end: "justify-end",
  "justify-center": "justify-center",
  center: "justify-center",
  "space-between": "justify-between",
  between: "justify-between",
  "space-around": "justify-around",
  around: "justify-around",
  "space-evenly": "justify-evenly",
  evenly: "justify-evenly",
} as const;

export const alignItemsMap: Record<string, string> = {
  "flex-start": "items-start",
  start: "items-start",
  "flex-end": "items-end",
  end: "items-end",
  "justify-center": "items-center",
  center: "items-center",
  "justify-between": "items-between",
  between: "items-between",
  "justify-around": "items-around",
  around: "items-around",
  "justify-evenly": "items-evenly",
  evenly: "items-evenly",
  "items-stretch": "items-stretch",
  stretch: "items-stretch",
  "items-baseline": "items-baseline",
  baseline: "items-baseline",
} as const;

export type FlexProps = Omit<React.HTMLAttributes<HTMLDivElement>, "as"> & {
  /**
   * flex 主轴的方向是否垂直，使用 flex-direction: column
   * @default false
   */
  vertical?: boolean;
  /**
   * 主轴对齐方式
   * @default "flex-start"
   */
  // justify?: React.CSSProperties["justifyContent"];
  justify?: (typeof justifyContentMap)[keyof typeof justifyContentMap];
  /**
   * 交叉轴对齐方式
   * @default "flex-start"
   */
  // align?: React.CSSProperties["alignItems"];
  align?: (typeof alignItemsMap)[keyof typeof alignItemsMap];
  /**
   * 弹性布局
   * @default "0 0 auto"
   */
  flex?: React.CSSProperties["flex"];
  /**
   * 间距，支持数字（px）或字符串
   * @default "0"
   */
  gap?: number;
  /**
   * 是否换行
   * @default false
   */
  wrap?: boolean;
  /**
   * 自定义元素类型
   */
  as?: React.ElementType;
};
