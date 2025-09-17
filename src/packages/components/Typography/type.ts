import { ReactNode } from "react";

export type ellipsis = {
  /**
   * 最多显示的行数
   */
  rows: number;
  /**
   * 是否可展开
   */
  expandable: boolean | "collapsible";
  /**
   * 自定义省略内容后缀
   */
  suffix: string;
  /**
   * 自定义展开描述文案
   */
  symbol: ReactNode | ((expanded: boolean) => ReactNode);
  /**
   * 省略时，展示提示信息
   */
  tooltip: ReactNode;
  /**
   * 默认是否展开
   */
  defaultExpanded: boolean;
  /**
   * 是否展开
   */
  expanded: boolean;
  /**
   * 展开时触发
   */
  onExpand: (event: MouseEvent, info: { expanded: boolean }) => void;
  /**
   * 省略时触发
   */
  onEllipsis: (ellipsis: boolean) => void;
};

export type TypographyProps = {
  /**
   * 是否省略
   */
  ellipsis:
    | boolean
    | Pick<ellipsis, "rows" | "expandable" | "suffix" | "symbol" | "onExpand">;
  /**
   * 子元素
   */
  children: ReactNode;
  /**
   * 类型
   */
  color: "primary" | "secondary" | "success" | "warning" | "danger" | "default";
  /**
   * 点击事件
   */
  onClick: (event: MouseEvent) => void;
  /**
   * HTML 元素类型
   */
  as?: React.ElementType;
  /**
   * 自定义类名
   */
  className?: string;

  /**
   * 文本大小
   */
  size?: "xs" | "sm" | "base" | "md" | "lg" | "xl";
  /**
   * 字体粗细
   */
  weight?: "normal" | "medium" | "semibold" | "bold";
  /**
   * 是否斜体
   */
  italic?: boolean;
  /**
   * 是否下划线
   */
  underline?: boolean;
  /**
   * 是否删除线
   */
  strikethrough?: boolean;
};
