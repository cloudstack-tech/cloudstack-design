import { ButtonHTMLAttributes } from "react";
import { ButtonVariants } from "./variants/variants";

export type ButtonProps = {
  /**
   * 按钮尺寸
   */
  size?: ButtonVariants["size"];
  /**
   * 按钮变体
   */
  variant?: ButtonVariants["variant"];
  /**
   * 按钮颜色
   */
  color?: ButtonVariants["color"];
  /**
   * 按钮形状
   */
  shape?: "square" | "round";
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 是否加载中
   */
  loading?: boolean;
  /**
   * 点击事件
   */
  onClick?: (e: React.MouseEvent) => void;
  /**
   * 是否只显示图标
   */
  iconOnly?: boolean;
  /**
   * 图标
   */
  icon?: React.ReactNode;
  as?: React.ElementType;
  /**
   * 链接
   */
  href?: string;
  /**
   * 按钮类名
   */
  className?: string;
  /**
   * 按钮子元素
   */
  children?: React.ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">;
