type BadgeColor = "default" | "primary" | "success" | "warning" | "danger";
type BadgeSize = "sm" | "base" | "lg";
type BadgeVariant = "solid" | "outline" | "light" | "flat";

export type BadgeProps = {
  /**
   * 徽标位置
   */
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";

  /**
   * 徽标内容
   */
  children?: React.ReactNode;

  /**
   * 徽标颜色
   */
  color?: BadgeColor;

  /**
   * 徽标尺寸
   */
  size?: BadgeSize;

  /**
   * 徽标变体
   */
  variant?: BadgeVariant;

  /**
   * 是否为点状徽标（无内容）
   */
  dot?: boolean;

  /**
   * 计数数值，超过 overflowCount 时显示为 {overflowCount}+
   */
  count?: number;

  /**
   * 超出计数显示的阈值
   */
  overflowCount?: number;

  /**
   * 是否显示为零时也显示
   */
  showZero?: boolean;

  /**
   * 自定义样式类名
   */
  className?: string;

  /**
   * 包装模式下的偏移量
   */
  offset?: [number, number];
};
