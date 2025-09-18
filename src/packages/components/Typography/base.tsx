import { cn } from "@/packages/utils";
import React, { useState } from "react";
import { Button } from "../Button";

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

  const textColor = cn({
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

  // 处理省略号样式 - 修复单行省略
  const ellipsisStyle = cn({
    // 单行省略 - 确保不会撑大父容器
    "inline-block overflow-hidden whitespace-nowrap min-w-0": ellipsis === true,
    // 多行省略 - 只用于非展开功能
    "line-clamp overflow-hidden text-ellipsis":
      typeof ellipsis === "object" && ellipsis.rows && !isExpandable,
  });

  // 处理多行省略的内联样式 - 只用于非展开功能
  const inlineStyle = (() => {
    // 单行省略的内联样式
    if (ellipsis === true) {
      return {
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap" as const,
        maxWidth: "100%",
        minWidth: 0, // 关键：允许收缩
      };
    }

    // 多行省略的内联样式
    if (typeof ellipsis === "object" && ellipsis.rows && !isExpandable) {
      return {
        display: "-webkit-box",
        WebkitBoxOrient: "vertical" as const,
        WebkitLineClamp: ellipsis.rows,
        overflow: "hidden",
        textOverflow: "ellipsis",
      };
    }

    return undefined;
  })();

  const mergedClassName = cn(
    fontSize,
    fontWeight,
    fontStyle,
    ellipsisStyle,
    className
  );

  const baseClassName = `${mergedClassName} ${textColor}`.trim();

  // 当需要展开功能且未展开时，我们需要特殊处理
  if (isExpandable) {
    return (
      <Component className={baseClassName} onClick={onClick} ref={ref}>
        {isExpanded ? (
          // 展开状态：显示完整文本 + 收起按钮
          <>
            {children}
            <Button
              variant="text"
              color="primary"
              size="sm"
              className={`ml-1 ${fontSize}`}
              onClick={handleToggleExpand}
            >
              收起
            </Button>
          </>
        ) : (
          // 收起状态：将按钮内联到文本末尾
          <div className="relative">
            <div
              className="overflow-hidden"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical" as const,
                WebkitLineClamp: (ellipsis as { rows: number }).rows,
              }}
            >
              {children}
            </div>
            {/* 使用伪元素和绝对定位来放置展开按钮 */}
            <div
              className="absolute bottom-0 right-0 bg-white pl-2"
              style={{
                background: "linear-gradient(to right, transparent, white 20%)",
              }}
            >
              <span className={cn(textColor, "leading-none mr-0.5")}>...</span>
              <Button
                variant="text"
                color="primary"
                size="sm"
                className={`${fontSize} p-0 h-auto leading-none`}
                onClick={handleToggleExpand}
              >
                展开
              </Button>
            </div>
          </div>
        )}
      </Component>
    );
  }

  // 非展开功能的正常渲染
  return (
    <Component
      className={baseClassName}
      style={inlineStyle}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </Component>
  );
};

export default React.forwardRef(Base);
