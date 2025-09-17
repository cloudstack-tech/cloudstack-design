"use client";

import React, { useState, useRef, useEffect } from "react";
import { TypographyProps, ellipsis } from "./type";
import { cn } from "@/packages/utils";

export type TextProps = {} & TypographyProps;

const InternalText = React.forwardRef<HTMLElement, TextProps>((props, ref) => {
  const {
    children,
    color = "default",
    size = "sm",
    weight = "normal",
    italic = false,
    underline = false,
    strikethrough = false,
    ellipsis = false,
    onClick,
    className,
    as: Component = "span",
    ...rest
  } = props;

  const [isExpanded, setIsExpanded] = useState(false);
  const [showEllipsis, setShowEllipsis] = useState(false);
  const textRef = useRef<HTMLElement>(null);

  // 处理省略功能
  useEffect(() => {
    if (ellipsis && textRef.current) {
      const element = textRef.current;
      const isOverflowing =
        element.scrollHeight > element.clientHeight ||
        element.scrollWidth > element.clientWidth;
      setShowEllipsis(isOverflowing);
    }
  }, [ellipsis, children]);

  const handleClick = (event: React.MouseEvent) => {
    if (onClick) {
      onClick(event as any);
    }

    // 如果有省略功能且可展开，处理展开/收起
    if (ellipsis && typeof ellipsis === "object" && ellipsis.expandable) {
      setIsExpanded(!isExpanded);
      if (ellipsis.onExpand) {
        ellipsis.onExpand(event as any, { expanded: !isExpanded });
      }
    }
  };

  // 构建样式类名
  const textClassName = cn(
    // 基础样式
    "inline-block transition-colors duration-200",

    // 颜色变体
    {
      "text-default": color === "default",
      "text-primary": color === "primary",
      "text-secondary": color === "secondary",
      "text-success": color === "success",
      "text-warning": color === "warning",
      "text-danger": color === "danger",
    },

    // 文本大小
    {
      "text-xxs": size === "xs",
      "text-xs": size === "sm",
      "text-sm": size === "base",
      "text-base": size === "md",
      "text-md": size === "lg",
      "text-lg": size === "xl",
    },

    // 字体粗细
    {
      "font-normal": weight === "normal",
      "font-medium": weight === "medium",
      "font-semibold": weight === "semibold",
      "font-bold": weight === "bold",
    },

    // 文本装饰
    {
      italic: italic,
      underline: underline,
      "line-through": strikethrough,
    },

    // 省略样式
    {
      truncate: ellipsis === true,
      "line-clamp-1": ellipsis === true,
    },

    // 可点击样式
    {
      "cursor-pointer hover:opacity-80":
        onClick ||
        (ellipsis && typeof ellipsis === "object" && ellipsis.expandable),
    },

    className
  );

  // 处理多行省略
  const ellipsisStyle = React.useMemo(() => {
    if (typeof ellipsis === "object" && ellipsis.rows && !isExpanded) {
      return {
        display: "-webkit-box",
        WebkitLineClamp: ellipsis.rows,
        WebkitBoxOrient: "vertical" as const,
        overflow: "hidden",
      };
    }
    return {};
  }, [ellipsis, isExpanded]);

  const renderContent = () => {
    let content = children;

    // 如果有省略功能且是对象配置
    if (typeof ellipsis === "object") {
      const shouldShowExpand = showEllipsis && ellipsis.expandable;

      if (shouldShowExpand) {
        const expandText =
          typeof ellipsis.symbol === "function"
            ? ellipsis.symbol(isExpanded)
            : ellipsis.symbol || (isExpanded ? "收起" : "展开");

        content = (
          <>
            {content}
            {ellipsis.suffix && <span>{ellipsis.suffix}</span>}
            <span className="cursor-pointer ml-1" onClick={handleClick}>
              {expandText}
            </span>
          </>
        );
      }
    }

    return content;
  };

  return (
    <Component
      ref={ref}
      className={textClassName}
      style={ellipsisStyle}
      onClick={handleClick}
      {...rest}
    >
      {renderContent()}
    </Component>
  );
});

InternalText.displayName = "Text";

export { InternalText as Text };
