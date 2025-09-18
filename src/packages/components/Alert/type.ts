import { AlertVariants } from "./variants";

export type AlertProps = {
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 子元素
   */
  children?: React.ReactNode;
  /**
   * 图标
   */
  icon?: React.ReactNode;
  /**
   * 是否内联
   */
  inline?: boolean;
  /**
   * 类型
   */
  type?: "success" | "error" | "warning" | "info" | "question";
  /**
   * 颜色
   */
  color?: AlertVariants["color"];
  /**
   * 变体
   */
  variant?: AlertVariants["variant"];
  classNames?: {
    icon?: string;
    content?: string;
  };
};
