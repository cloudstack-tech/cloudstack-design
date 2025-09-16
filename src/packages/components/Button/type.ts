import { ButtonHTMLAttributes } from "react";

// 按钮尺寸映射
export type ButtonSize = "small" | "medium" | "large";

// 按钮变体映射
export type ButtonVariant = "solid" | "outline" | "text" | "flat";

// 按钮颜色映射
export type ButtonColor = "primary" | "default" | "danger";

export type ButtonProps = {
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  variant?: ButtonVariant;
  color?: ButtonColor;
  iconOnly?: boolean;
  icon?: React.ReactNode;
  as?: React.ElementType;
  shape?: "square" | "round";
  href?: string;
  className?: string;
  children?: React.ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">;
