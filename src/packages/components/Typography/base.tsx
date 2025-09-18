import { cn } from "@/packages/utils";
import React, { useState } from "react";

export type EllipsisProps =
  | boolean
  | {
      rows: number;
      expandable: boolean;
    };

export type BaseTypographyProps = {
  /**
   * 组件类型
   */
  as?: React.ElementType;
  /**
   * 子元素
   */
  children?: React.ReactNode;
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 颜色
   */
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "default";
  /**
   * 文本大小
   */
  size?: "xs" | "sm" | "base" | "md" | "lg" | "xl";
  /**
   * 是否省略
   */
  ellipsis?: EllipsisProps;
  /**
   * 点击事件
   */
  onClick?: (event: React.MouseEvent) => void;
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

const Base: React.ForwardRefRenderFunction<HTMLElement, BaseTypographyProps> = (
  props,
  ref
) => {
  const {
    as: Component = "span",
    children,
    className,
    color,
    ellipsis,
    onClick,
    size = "base",
    weight = "normal",
    italic = false,
    underline = false,
    strikethrough = false,
  } = props;

  // 展开/收起状态管理
  const [isExpanded, setIsExpanded] = useState(false);

  // 检查是否需要展开功能
  const isExpandable =
    typeof ellipsis === "object" && ellipsis.expandable && ellipsis.rows;

  // 处理展开/收起切换
  const handleToggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const fontSize = cn({
    "text-xxs": size === "xs",
    "text-xs": size === "sm",
    "text-sm": size === "base",
    "text-base": size === "md",
    "text-md": size === "lg",
  });

  const colors = cn({
    "text-primary-color": color === "primary",
    "text-secondary-color": color === "secondary",
    "text-success-color": color === "success",
    "text-warning-color": color === "warning",
    "text-danger-color": color === "danger",
    "text-default-color": color === "default",
  });

  const fontWeight = cn({
    "font-normal": weight === "normal",
    "font-medium": weight === "medium",
    "font-semibold": weight === "semibold",
    "font-bold": weight === "bold",
  });

  const fontStyle = cn({
    italic: italic,
    underline,
    "line-through": strikethrough,
  });

  // 处理省略号样式 - 考虑展开状态
  const shouldShowEllipsis =
    ellipsis === true ||
    (typeof ellipsis === "object" &&
      ellipsis.rows &&
      (!isExpandable || !isExpanded));

  const ellipsisStyle = cn({
    // 单行省略
    truncate: ellipsis === true,
    // 多行省略 - 只有在未展开时才应用
    "line-clamp overflow-hidden text-ellipsis":
      typeof ellipsis === "object" &&
      ellipsis.rows &&
      (!isExpandable || !isExpanded),
  });

  // 处理多行省略的内联样式 - 只有在未展开时才应用
  const inlineStyle =
    typeof ellipsis === "object" &&
    ellipsis.rows &&
    (!isExpandable || !isExpanded)
      ? {
          display: "-webkit-box",
          WebkitBoxOrient: "vertical" as const,
          WebkitLineClamp: ellipsis.rows,
          overflow: "hidden",
          textOverflow: "ellipsis",
        }
      : undefined;

  const mergedClassName = cn(
    fontSize,
    fontWeight,
    fontStyle,
    ellipsisStyle,
    className
  );

  const baseClassName = `${mergedClassName} ${colors}`.trim();

  // 渲染展开/收起按钮
  const renderExpandButton = () => {
    if (!isExpandable) return null;

    return (
      <span
        className="ml-1 text-primary-color cursor-pointer hover:underline select-none"
        onClick={handleToggleExpand}
      >
        {isExpanded ? "收起" : "展开"}
      </span>
    );
  };

  return (
    <Component
      className={baseClassName}
      style={inlineStyle}
      onClick={onClick}
      ref={ref}
    >
      {children}
      {renderExpandButton()}
    </Component>
  );
};

export default React.forwardRef(Base);
